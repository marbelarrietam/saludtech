<template>
  <div id="servicios">
    <h1>Hola</h1>
    <div v-for="m in medicos" :key="m">
      <stmed :med="m"></stmed>
    </div>
  </div>
</template>

<script>
import stmed from './layout/Card.vue'
export default {
name: 'servicios',
components: { stmed },
data(){
  return{
  medicos: [{"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"}]
  }
}
}
</script>


<style scoped>

</style>
