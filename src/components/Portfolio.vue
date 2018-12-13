<template>
  <div id="servicios">
    <h1>Listado de nuestros médicos</h1>
    <h2>Encuentra el indicado para ti</h2>
    <div class="contenedor" v-for="m in medicos" :key="m">
      <stmed class="tarjeta" :med="m"></stmed>
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
  medicos: [
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"},
      {"nombre":"marbel", "especialidad":"dermatologia", "imagen":"../assets/logo.png"}
      ]
  }
}
}
</script>


<style scoped>
#servicios{
    margin-top: 70px;
    width: 100%;
}

h1 h2 .contenedor{
    text-align: center;
}


</style>