<script>
import logo from '~assets/images/logo.svg';

export default {
  metaInfo: {
    title: '{{ name }}',
  },
  render() {
    return (
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <div class="text-xs-center">
            <div class="display-1 pa-3 primary--text">{{ name }}</div>
            <img src={logo} alt="Logo" width="300" height="300" />
          </div>
        </v-layout>
      </v-container>
    );
  },
};
</script>

<style scoped>
</style>
