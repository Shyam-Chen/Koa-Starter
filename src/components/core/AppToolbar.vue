<template lang="pug">
v-toolbar(app color="primary" dark fixed height="58px" :flat="isHome" :manual-scroll="isManualScrolled" ref="toolbar")
  v-toolbar-side-icon(@click="$store.commit('app/DRAWER_TOGGLE')" v-show="!stateless && $vuetify.breakpoint.mdAndDown")

  router-link(:to="{ name: 'Home' }").d-flex.ml-3
    img(src="/static/v-alt.svg" height="38px" width="38px")

  v-fade-transition(mode="out-in")
    v-btn(flat :to="backPath" v-if="$route.path.name === 'store/Index'")
      v-icon(left) mdi-arrow-left
    v-toolbar-title(v-else).pb-1.hidden-xs-only Brand

  v-spacer

  v-toolbar-items
    v-menu(bottom offset-y left attach)
      v-btn(slot="activator" flat style="min-width: 64px")
        img(:src="`https://countryflags.io/${currentLanguage.country}/flat/32.png`" width="32px")
      v-list(light)
        v-list-tile(avatar v-for="language in languages" :key="language.locale" @click="translateI18n(language.locale)")
          v-list-tile-avatar(size="24px").avatar--tile
            img(:src="`https://countryflags.io/${language.country}/flat/24.png`" width="24px")
          v-list-tile-title {{ language.title }}
</template>

<script>
import { mapState } from 'vuex'

import languages from '@/i18n/languages'

export default {
  data: () => ({
    languages
  }),

  computed: {
    ...mapState('app', [
      'isFullscreen',

      'stateless'
    ]),

    ...mapState(['currentVersion', 'route']),
    backPath () {
      return this.route.from.path === '/'
        ? { name: 'getting-started/QuickStart' }
        : this.route.from.path
    },
    currentLanguage () {
      return this.languages.find(l => l.locale === this.$i18n.locale)
    },
    isHome () {
      return this.route.name === 'Home'
    },
    isManualScrolled () {
      return !this.isHome &&
        this.isFullscreen
    }
  },

  methods: {
    translateI18n (lang) {
      this.$router.replace({ params: { lang } })
      document.cookie = `currentLanguage=${lang};path=/;max-age=${60 * 60 * 24 * 7}` // expires in 7 days
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
