const { resolve } = require('path');
const { readdir } = require('fs').promises;
const { build } = require('esbuild');
const envify = require('process-envify');

const env = require('./env');

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const excludes = ['__tests__', '__mocks__'];

  const files = await Promise.all(
    dirents.map(dirent => {
      if (!excludes.includes(dirent.name)) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) return getFiles(res);
        return res;
      }
    }),
  );

  return Array.prototype.concat(...files).filter(Boolean);
}

async function compileFiles() {
  const files = await getFiles('./src');

  await build({
    entryPoints: [...files],
    outdir: './dist',
    platform: 'node',
    format: 'cjs',
    minify: true,
    define: envify(env),
  });
}

compileFiles();
