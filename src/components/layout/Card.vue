<template>
  <div>
      <div class="medico">
          <img src="../../assets/img/medicocard.jpg" alt="Imagen invitado">
          <router-link to="aboutmed">{{ med.Medico }}</router-link>
          <p>{{ med.descripcion }}</p>
          <p>{{ med.Precio }}</p>
      </div>
  </div>
</template>
<script>
  export default{
    props: {
        med: { type: Object, required: true }
    }
  }
</script>

<style scoped>
    .medico{
        width: 20%;
        display:block;
        text-align: center;
        -webkit-box-shadow: 3px 3px 2px 0px rgba(159,188,207,1);
        -moz-box-shadow: 3px 3px 2px 0px rgba(159,188,207,1);
        box-shadow: 3px 63x 2px 0px rgba(159,188,207,1);
        margin: 10px;
        float: left;
        text-transform: uppercase;
    }

    .medico:hover{
                filter: grayscale(100%);
    }
    .medico img{
        width: 100%;
        background-color: rgb(50,50,50);
        background-blend-mode: soft-light;

    }
    @media only screen and (max-width: 768px) {
  .medico{
      width: 90%;
      font-size: 14px;
      
  }
}

</style>