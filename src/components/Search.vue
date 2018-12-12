<template>
  <div id="main">
    <div class="hero">

    </div>
    <h1 v-for="i in elem">{{ i }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      prueba: "HOLA",
      elem: [
        1,
        2,
        3,
        4,
        4,
        3,
        1
        
      ]
    };
  },
  methods: {}
};
</script>

<style>
#main{
  margin-top: 80px;
}
div.hero{
    background-image: url(../assets/img/medicoBg.png);
    height: 100vh;
    height: 300px;
    background-position: top center;
    background-size: cover;
    margin-top: -30px;
}
</style>
