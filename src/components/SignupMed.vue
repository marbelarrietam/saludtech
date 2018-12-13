<template>
<div id="register">
<div class="formulario">
    <h1>Crear cuenta médica</h1>
      <input type="text" name="primerNombre" v-model="input.primerNombre" placeholder="Primer nombre">
      <input type="text" name="segundoNombre" v-model="input.segundoNombre" placeholder="Segundo nombre">
      <input type="text" name="primerApellido" v-model="input.primerApellido" placeholder="Primer apellido">
      <input type="text" name="segundoApellido" v-model="input.segundoApellido" placeholder="Segundo apellido">
      <input type="text" name="documento" v-model="input.documento" placeholder="Documento de identidad">
      <input type="text" name="especialidad" v-model="input.especialidad" placeholder="Especialidad">
      <input type="text" name="fechaNacimiento" v-model="input.fechaNacimiento" placeholder="Fecha de nacimiento">
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
            primerNombre: "",
            segundoNombre: "",
            primerApellido: "",
            segundoApellido: "",
            documento: "",
            especialidad: "",
            fechaNacimiento: ""
            
        }
    }
},
methods: {
            signup() {
                if(
                    this.input.primerNombre != "" 
                    && this.input.segundoNombre != "" 
                    && this.input.primerApellido != ""
                    && this.input.segundoApellido != ""
                    && this.input.documento != ""
                    && this.input.especialidad != ""
                    && this.input.fechaNacimiento != ""
                    ) {
                    var formData = new FormData();
                    formData.append('primerNombre', this.input.primerNombre);
                    formData.append('segundoNombre', this.input.segundoNombre);
                    formData.append('primerApellido', this.input.primerApellido);
                    formData.append('segundoApellido', this.input.segundoApellido);
                    formData.append('documento', this.input.documento);
                    formData.append('especialidad', this.input.especialidad);
                    formData.append('fechaNacimiento', this.input.fechaNacimiento);
                    console.log(formData)
                    this.$http.post('http://192.168.2.98:5000/registro/medico', formData)
                        .then(resp => {
                                        console.log(resp.body.respuesta);
                                        if(resp.body.respuesta === 'OK') {
                                            this.$router.replace({ name: "login" });
                                        } else {
                                            this.mensaje =resp.body.mensaje
                                        }
                                        
                                       })
                      
                } else {
                    this.mensaje ="Todos los campos son requeridos"
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