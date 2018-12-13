<template>
  <div id="main">
    <div id="cabecera">
      <div class="hero">
      </div>
      <div class="informacion-principal">
            <h1 class="nombre-sitio">SALUDTECH</h1>
            <p class="slogan">Accede a los mejores servicios médicos con<span> un solo clic</span></p>
            <label for="busqueda">Busqueda:</label>  <input type="search" name="busqueda" id="busqueda" placeholder="Palabra clave">
      </div>      
    </div>
    <div class="categoria">
      <nav class="categoria clearfix">
          <li v-for="categoria in this.$parent.categorias" :key="categoria"><a href="#">{{ categoria.descripcion }}</a></li>
      </nav>
    </div>
    <h1>Fácil, rápido y amigable con tu bolsillo</h1>
    <div class="box-principal clearfix">
      <div class="box-hija">
        <img src="../assets/img/facil.png" alt="">
        <p>Encuentra lo que buscas de la manera mas facil por categorias, observa el historial de nuestro equipo de especialistas.  </p>
      </div>
      <div class="box-hija">
        <img src="../assets/img/rapido.png" alt="">
        <p>Selecciona nuestros servicios, realiza la reserva, realiza el pago de esta, y en menos de 2 minutos nos comunicaremos contigo. </p>
      </div>
       <div class="box-hija">
        <img src="../assets/img/barato.png" alt="">
        <p>Encuentra precios bajos sin afectar la calidad del servicio</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      prueba: "HOLA"
    };
  },
  methods: { 
  }
};
</script>

<style>
#main{
  margin-top: 80px;  
}
#main h1{
  padding: 10px;
  text-transform: uppercase;  
}
.cabecera{
  position:relative;
}



.box-hija{
  width:30%;
  border: 1px solid #ccc;
  padding: 20px 20px;
  margin: 20px;
  height: 250px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(159,188,207,1);
  -moz-box-shadow: 6px 6px 5px 0px rgba(159,188,207,1);
  box-shadow: 6px 6px 5px 0px rgba(159,188,207,1);
  float: left;
  text-align: center;
}


div.hero{
    background-image: url(../assets/img/medico.jpg);
    height: 100vh;
    height: 300px;
    opacity:0.24;
    background-position: top center;
    background-size: cover;
    margin-top: -30px;
    padding-top: 40px;
}
div.informacion-principal{
    text-align: right;
    color: #fff;
    width:90%;
    height:300px;
    position:absolute;
    top: 0;
    right:10px;
    padding-top: 80px;
}
div.informacion-principal {
  font-size: 48px;
}
div.informacion-principal label{
  font-size: 20px;
  color:var(--azul);
  padding-top: 10px;
}
p.slogan{
    color:var(--azul);
    font-size: 24px;
    margin-top: 28px;
}
#busqueda{
  width: 500px;
  height: 35px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.nombre-sitio{
  margin-bottom: 0px;
}
@media only screen and (max-width: 768px) {
  div.informacion-principal{
    font-size: 28px;
  }
  p.slogan{
    color:var(--azul);
     font-size: 20px;
  }
  #busqueda{
    width: 250px;
  }
  div.informacion-principal label{
    font-size: 14px;
  }
  .box-hija{
  width:90%;
  display: block;
}
}
</style>
