<template>
  <div id="Login">
    <div class="formulario">
      <h1>Inicio de sesión</h1>
      
        <input type="text" name="username" v-model="input.username" placeholder="Usuario" required>
        <input type="password" name="password" v-model="input.password" placeholder="Contraseña" required>
        <button v-on:click="login()">Login</button>
      
     
      <router-link to="signup">Crear cuenta</router-link>
      <br>
      <router-link to="signupmed">Si eres un médico y quieres prestar tus servicios regístrate aquí</router-link>
      <br>
      <br>
      <br>
      <div class="error-usuario">
          {{mensaje}}
      </div>
      </div>
      
  </div>
</template>

<script>
 export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                mensaje:""
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    var formData = new FormData();
                    formData.append('usuario', this.input.username);
                    formData.append('clave', this.input.password);
                    console.log(formData)
                    this.$http.post(this.$parent.servidor+'ingreso', formData)
                        .then(resp => {
                                        console.log(resp.body.respuesta);
                                        if(resp.body.respuesta === 'OK') {
                                            this.$emit("authenticated", true);
                                            //  localStorage.setItem('user',input.username)
                                            this.$router.replace({ name: "secure" });
                                        } else {
                                            this.mensaje =resp.body.mensaje
                                        }
                                        
                                       })
                      
                } else {
                    this.mensaje ="Debe llenar los campos"
                }
            }
        }
    }
</script>

<style scoped>
    .formulario {
        width: 90%;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 61px; /*asi lo hace ver mejor para que no quede pegado arriba (antes tenia 10%)*/
        padding: 20px;
        display: block;
        text-align: center;
        padding-bottom: 5%;
        border-radius: 3px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
    }
    input, button{
      width: 90%;
      height: 40%;
      margin: 5px;
      padding: 1%;
    }
    @media only screen and (min-width:768px) {
    .formulario {
        width: 30%;
        margin: 0 auto;
        margin-top: 10%;
    }
    /*input, button{
      width: 90%;
      height: 40%;
    } esto sobra*/

    button, .button{
        padding: 2%;
    }

    
}

</style>
