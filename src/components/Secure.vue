<template>
    <div id="secure">
        <div id="cabecera">
            <div class="hero">
            </div>
            <div class="bienvenida">
                <h1>BIENVENIDO</h1>
                <p>
                    ¿Ya te enteraste de nuestros médicos, servicios y tarifas?
                </p>
                <button class="comentameMas" v-on:click="explora()">Conocer mas</button>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        },
        methods:{
            explora(){
                this.$router.replace({ name: "services" });
            }
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        padding: 20px;
        margin-top: 60px;
        margin-bottom: 100px;
    }

    button{
        padding: 10px;
    }

    .comentameMas{
        margin-bottom: 40px;
    }
    
</style>
