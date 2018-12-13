<template>
  <div>
    <div class="barra fixed">
      <div class="logo">
        <router-link to="/">SaludTech</router-link>
      </div>
      <nav class="navegacion-principal">
        <router-link to="about">Quienes somos</router-link>
        <router-link v-if="authenticated" to="/" v-on:click.native="logout()" replace>Salir</router-link>
        <router-link v-if="authenticated" to="reserve">Hacer reserva</router-link>
        <router-link v-if="!authenticated" to="login">Iniciar sesion</router-link>
      </nav>
      <div class="menu-movil"  v-on:click="hiddenMenu = !hiddenMenu">
        <img src="../../assets/img/menu.png" alt="" class="menu">
      </div>
      <nav class="navegacion-menu-movil" v-bind:class="{ 'esconder': hiddenMenu }" >
        <router-link to="about">Quienes somos</router-link>
        <router-link v-if="authenticated" to="/" v-on:click.native="logout()" replace>Salir</router-link>
        <router-link v-if="authenticated" to="reserve">Hacer reserva</router-link>
        <router-link v-if="!authenticated" to="login">Iniciar sesion</router-link>
      </nav>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>


<script>
   export default {
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "marbel",
                    password: "mm"
                },
                hiddenMenu: true,
                servidor: "http://localhost:5000/",
                categorias:[] 
            }
        },

        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
                this.$emit("authenticated", status);
            },
            logout() {

                  this.authenticated = false;
                 this.$router.replace({ name: "search" });

            }
        },
        created(){
            this.$http.get(this.servidor+'categoria')
                      .then(resp => this.categorias =resp.body)
          }
    }
</script>
<style>

div.barra {
  padding: 10px;
  background-color: var(--azul);
}
.brand{
  margin: 0;
}
.fixed {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}

div.logo {
  float: left;
  padding-left: 10px;
}

div.logo a{
  color: var(--claro);
  font-size: 1.5em;
  text-decoration: none;
}

div.logo img {
  width: 30px;
}


/** Nav principal **/

nav.navegacion-principal{
  display: none;
  width: 100%;
}
nav.navegacion-menu-movil {
  display: block;
  width: 100%;
  text-align: center;
}

nav.navegacion-principal a,nav.navegacion-menu-movil a {
  font-family: "Oswald", sans-serif;
  color: #ffffff;
  font-size: 0.8em;
  text-decoration: none;
  transition: all 0.6s ease;
  width: 100%;
  display: block;
  text-align: center;
  clear: both;
}

nav.navegacion-principal a:hover,nav.navegacion-menu-movil a:hover {
  background-color: var(--piel);
}

/*nav.navegacion-principal a:last-child {
  font-weight: bold;
}

nav.navegacion-principal a:last-child:hover {
  color: #ffffff;
}*/

@media only screen and (min-width: 768px) {
  nav.navegacion-principal {
    width: 67%;
    float: right;
    text-align: right;
    display: block;
  }
  nav.navegacion-principal a {
    padding: 10px 10px;
    display: inline-block;
    width: auto;    
    text-align: center;
    margin: 0 10px 0 0;
  }
  nav.navegacion-menu-movil {
    display: none;
  }
}

div.menu-movil {
  width: 35px;
  display: block;
  float: right;
  text-align: center;
  padding: 3px;
}

div.menu-movil img{
  width: 18px;
}

div.menu-movil:hover {
  cursor: pointer;
  background-color: var(--piel);
}

@media only screen and (min-width: 768px) {
  div.menu-movil {
    display: none;
  }
}

div.menu-movil span {
  height: 8px;
  margin-bottom: 6px;
  background-color: white;
  display: block;
}
.esconder{
  display: none!important;
}

.topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
</style>
