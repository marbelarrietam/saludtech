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
          <li v-for="categoria in categorias"><a href="#">{{ categoria.descripcion }}</a></li>
      </nav>
    </div>
    <h1>Facil, rápido y amigable con tu bolsillo</h1>
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
      prueba: "HOLA",
      categorias:[]
    };
  },
  methods: { 
  },
  created(){
      this.$http.get('http://192.168.2.98:5000/categoria')
                .then(resp => this.categorias =resp.body)
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
    background-image: url(../assets/img/medicoBg.png);
    height: 100vh;
    height: 300px;
    opacity:0.24;
    background-position: top center;
    background-size: cover;
    margin-top: -30px;
    padding-top: 40px;
    background-size: 100%;
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
}
#busqueda{
  width: 500px;
  height: 35px;
  border: 2px solid #ccc;
  border-radius: 4px;
}
div.categoria{
  width: 100%;
  background-color:var(--azul);
  color:var(--piel);
  text-align: center;
  
}
nav.categoria li{
  list-style: none;
}

nav.categoria a {
  font-family: "Oswald", sans-serif;
  color: #ffffff;
  font-size: 0.8em;
  text-decoration: none;
  transition: all 0.6s ease;
  width: 100%;
  padding: 10px 10px;
  float: left;
  width: 150px;    
  text-align: center;
  margin: 0 10px 0 0;
}
nav.categoria a:hover {
  background-color: var(--piel);
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
