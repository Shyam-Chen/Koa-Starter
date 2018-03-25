<script>
import logo from '~assets/images/vue.png';

export default {
  metaInfo: {
    title: 'Vue by Example',
  },
  render() {
    return (
      <v-layout column>

        <v-layout justify-center>
          <div class="pa-3 text-center">
            <div class="display-1">Vue by Example</div>
            <img src={logo} alt="Logo" class="pa-3" />
          </div>
        </v-layout>

      </v-layout>
    );
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
