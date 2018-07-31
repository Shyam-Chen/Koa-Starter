<template lang="pug">
v-jumbotron(dark gradient="to bottom, #1867c0, #5CBBF6" height="auto")
  v-container(fill-height).ma-3
    v-layout(align-center justify-center wrap)
      img(src="/static/vuetify-logo-300.png" alt="Logo" height="256px" width="256px").mx-4
      v-flex(shrink).text-xs-center.text-md-left
        div.display-3.mb-4 {{ $t('jumbotron') }}
        v-btn(:to="{ name: 'About' }" class="primary--text" color="white" large style="min-width: 128px;") See More
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
</style>
