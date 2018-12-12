<template>
  <div>
      <div class="medico">
        <router-link to="aboutmed">Quienes somos</router-link>
          <img src="../../assets/logo.png" alt="Imagen invitado">
          <p>{{ med.nombre }}</p>
      </div>
  </div>
</template>
<script>
  export default{
      props: {
    med: { type: Object, required: true }
  },
  }
</script>
