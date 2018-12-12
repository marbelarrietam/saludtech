<template>
  <div>
    <div class="barra fixed">
      <div class="logo">
        <router-link to="/">SaludTech</router-link>
      </div>
      <nav class="navegacion-principal">
        <router-link to="about">Quienes somos</router-link>
        <router-link v-if="authenticated" to="/" v-on:click.native="logout()" replace>Salir</router-link>
        <router-link v-if="!authenticated" to="login">Iniciar sesion</router-link>
        <button v-on:click="estado">probar</button>
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
                }
            }
        },

        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
                this.$emit("authenticated", status);
                console.log(this.authenticated)
            },
            logout() {

                  this.authenticated = false;
                 this.$router.replace({ name: "search" });
                 console.log(this.authenticated)

            },
            estado(){
              console.log("el estado es")
              console.log(this.authenticated)
            }
        }
    }
</script>
<style>
@import '../../assets/styles.css';
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

nav.navegacion-principal {
  display: none;
  width: 100%;
}

nav.navegacion-principal a {
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

nav.navegacion-principal a:hover {
  background-color: var(--piel);
}

nav.navegacion-principal a:last-child {
  font-weight: bold;
}

nav.navegacion-principal a:last-child:hover {
  color: #ffffff;
}

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
    display: inline-block;
    text-align: center;
    margin: 0 10px 0 0;
  }
}

div.menu-movil {
  width: 60px;
  display: block;
  float: right;
  text-align: right;
  margin-top: 12px;
}

div.menu-movil:hover {
  cursor: pointer;
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
</style>
