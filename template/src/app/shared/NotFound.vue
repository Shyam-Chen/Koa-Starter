<script>
export default {
  metaInfo: {
    title: 'Page Not Found | Vue by Example',
  },
  render() {
    return (
      <v-layout class="notfound">
        <h1 class="pa-3">404</h1>
      </v-layout>
    );
  },
};
</script>

<style scoped>
.notfound {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
