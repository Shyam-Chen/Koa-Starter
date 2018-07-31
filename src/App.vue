<template lang="pug">
v-fade-transition(appear)
  v-app(v-cloak)
    app-drawer
    app-toolbar
    app-view
</template>

<script>
import AppDrawer from '@/components/core/AppDrawer'
import AppToolbar from '@/components/core/AppToolbar'
import AppView from '@/components/core/AppView'
import Meta from '@/mixins/meta'

export default {
  components: {
    AppDrawer,
    AppToolbar,
    AppView
  },
  mixins: [Meta]
}
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables.styl'

[v-cloak]
  display none
</style>
