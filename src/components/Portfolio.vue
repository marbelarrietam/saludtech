<template>
  <div id="servicios">
       <h1>Listado de nuestros médicos y servicios</h1>
    <h2>Encuentra el indicado para ti</h2>
    <div class="clearfix contenedor">
      <div class="contenedor" v-for="m in this.tarifas" :key="m">
        <sttarifa class="tarjeta" :med="m"></sttarifa>
      </div>
    </div>
    
  </div>
  
</template>

<script>
import sttarifa from './layout/Card.vue'
export default {
name: 'servicios',
components: { sttarifa },
data(){
  return{
  tarifas: []
  }
},
created(){
  this.$http.get(this.$parent.servidor+'tarifa')
            .then(resp => {this.tarifas =resp.body
                            console.log(this.tarifas)})
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