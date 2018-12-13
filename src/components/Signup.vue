<template>
<div id="register">
<div class="formulario">
    <h1>Crear cuenta</h1>
      <input type="text" name="username" v-model="input.username" placeholder="Usuario">
      <input type="email" name="email" v-model="input.email" placeholder="Email">
      <input type="password" name="password" v-model="input.password" placeholder="Contraseña">
      <!--input type="password" name="password" v-model="input.tipo" placeholder="Tipo" Esto no va, de eso se encarga el servicio-->
      <button v-on:click="signup()">Registrar</button>
</div>
</div>
</template>

<script>
    export default {
        name: 'register',
data() {
    return {
        input: {
            username: "",
            email: "",
            password: ""
        }
    }
},
methods: {
            signup() {
                if(this.input.username != "" && this.input.email != "" && this.input.password != "") {
                    var formData = new FormData();
                    formData.append('usuario', this.input.username);
                    formData.append('email', this.input.email);
                    formData.append('clave', this.input.password);
                    console.log(formData)
                    this.$http.post(this.$parent.servidor+'registro', formData)
                        .then(resp => {
                                        console.log(resp.body.respuesta);
                                        if(resp.body.respuesta === 'OK') {
                                            this.$router.replace({ name: "login" });
                                        } else {
                                            this.mensaje =resp.body.mensaje
                                        }
                                        
                                       })
                      
                } else {
                    this.mensaje ="A username and password must be present"
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
    input, button, .button{
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
   
}
</style>