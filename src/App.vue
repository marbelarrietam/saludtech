<template>
  <div id="app">
  <stheader></stheader>
  <stfooter></stfooter>
  </div>
</template>

<script>
import stheader from './components/layout/Header.vue'
import stfooter from './components/layout/Footer.vue'
export default {
  name: 'app',
 components: { stheader, stfooter },
   data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "marbel",
                    password: "mm"
                }
            }
        },
          methods: {
            setAuthenticated(status) {
                this.authenticated = status;
                this.$emit("authenticated", status);
                console.log(this.authenticated)
            }
  }

}

</script>

<style>
@import './assets/styles.css';
</style>
