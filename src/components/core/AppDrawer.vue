<template lang="pug">
v-navigation-drawer(app, fixed, v-model="inputValue", :stateless="isFullscreen")#app-drawer
  v-list(dense expand)
    template(v-for="item in items")

      //- if children
      v-list-group(v-if="item.items", :group="item.group", :prepend-icon="item.icon", no-action)
        v-list-tile(slot="activator" ripple)
          v-list-tile-content
            v-list-tile-title {{ item.title }}
        template(v-for="(subItem, i) in item.items")

          //- if sub-children
          v-list-group(v-if="subItem.items", :group="subItem.group", sub-group)
            v-list-tile(slot="activator" ripple)
              v-list-tile-content
                v-list-tile-title {{ subItem.title }}
            v-list-tile(v-for="(grand, i) in subItem.items", :key="i", :to="genChildTarget(item, grand)", :href="grand.href" ripple)
              v-list-tile-content
                v-list-tile-title {{ grand.title }}

          //- else not sub-children
          v-list-tile(v-else, :key="i", :to="genChildTarget(item, subItem)", :href="subItem.href", :disabled="subItem.disabled", :target="subItem.target", ripple)
            v-list-tile-content
              v-list-tile-title
                span {{ subItem.title }}
            v-chip(v-if="subItem.badge", class="white--text pa-0 chip--x-small", color="primary", disabled) {{ subItem.badge }}
            v-list-tile-action(v-if="subItem.action")
              v-icon(:class="[subItem.actionClass || 'success--text']") {{ subItem.action }}

      v-subheader(v-else-if="item.header").grey--text {{ item.header }}
      v-divider(v-else-if="item.divider")

      //- else not children
      v-list-tile(v-else, :to="!item.href ? { name: item.name } : null", :href="item.href", ripple, :disabled="item.disabled", :target="item.target", rel="noopener")
        v-list-tile-action(v-if="item.icon")
          v-icon {{ item.icon }}
        v-list-tile-content
          v-list-tile-title {{ item.title }}
        v-chip(v-if="item.badge", class="white--text pa-0 chip--x-small", :color="item.color || 'primary'", disabled) {{ item.badge }}
        v-list-tile-action(v-if="item.subAction")
          v-icon(class="success--text") {{ item.subAction }}
        v-chip(v-else-if="item.chip", label, small, class="caption blue lighten-2 white--text mx-0") {{ item.chip }}
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import { camel } from '@/util/helpers'

export default {
  data: () => ({
    docSearch: {},
    isSearching: false,
    items: [
      { header: 'header 1' },
      {
        title: 'About',
        icon: 'mdi-format-paint',
        name: 'About'
      },
      {
        title: 'Foo',
        group: 'foo',
        icon: 'mdi-speedometer',
        items: [
          { name: 'bar', title: 'Bar' },
          { name: 'baz', title: 'Baz' }
        ]
      }
    ],
    search: ''
  }),
  computed: {
    ...mapState('app', ['isFullscreen', 'stateless', 'appDrawer']),
    inputValue: {
      get (state) {
        return this.appDrawer && !this.isFullscreen
      },
      set (val) {
        this.drawer(val)
      }
    }
  },
  watch: {
    $route () {
      if (this.stateless && this.inputValue && this.$vuetify.breakpoint.mdAndDown) {
        this.inputValue = false
      }
    }
  },
  methods: {
    ...mapMutations('app', {
      drawer: 'DRAWER'
    }),
    genChildTarget (item, subItem) {
      if (subItem.href) return

      if (item.component && subItem.name !== 'api-explorer') {
        return {
          name: item.component,
          params: {
            section: item.group,
            component: subItem.name
          }
        }
      }

      return { name: `${item.group}/${camel(subItem.name)}` }
    }
  }
}
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_elevations.styl'
</style>
