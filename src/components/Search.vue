<template>
  <div id="main">
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
        1,
        2,
        2,
        1,
        3,
        3,
        3,
        2,
        2,
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        3,
        9
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
</style>
