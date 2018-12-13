<template>
  <div>
      <div class="medico" >          
          <router-link to="aboutmed">
              {{ med.Medico }}
              <img src="../../assets/img/medicocard.jpg" alt="Imagen invitado">
              <p>{{ med.descripcion }}</p>
              <p>{{ formatNumber(med.Precio) }}</p>
          </router-link>
          
      </div>
  </div>
</template>
<script>
  export default{
    props: {
        med: { type: Object, required: true }
    },
    methods:{
        formatNumber(num) {
            num += '';
            var splitStr = num.split('.');
            var splitLeft = splitStr[0];
            var splitRight = splitStr.length > 1 ? '.' + splitStr[1] : '';
            var regx = /(\d+)(\d{3})/;
            while (regx.test(splitLeft)) {
                splitLeft = splitLeft.replace(regx, '$1' + '.' + '$2');
            }
            return '$' + splitLeft + splitRight;
        }
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
                -webkit-transform:scale(1.1);transform:scale(1.1);
                transition: all 0.6s ease;
    }
    .medico img{
        width: 100%;
        background-color: rgb(50,50,50);
        background-blend-mode: soft-light;

    }
    .medico p{
        margin: 0;
    }
    a{
        text-decoration: none;
    }
    @media only screen and (max-width: 768px) {
  .medico{
      width: 90%;
      font-size: 14px;
      
  }
}

</style>