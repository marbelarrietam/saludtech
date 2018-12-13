<template>
  <div id="app" class="clearfix">
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
              
            }
        }
  }



</script>

<style>
@import './assets/styles.css';
#app{
  display: block;
  position: relative;
  min-height: 100%;
}
</style>
