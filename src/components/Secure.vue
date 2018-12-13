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
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 50px;
    }

    button{
        padding: 10px;
    }
    .cabecera{
        position:relative;
    }

    div.hero{
        background-image: url(../assets/img/medicos.jpg);
        height: 100vh;
        height: 430px;
        opacity:0.24;
        background-position: top center;
        background-size: cover;
    }
    div.bienvenida{
        text-align: center;
        color: #fff;
        width:90%;
        height:430px;
        position:absolute;
        top: 0;
        right:10px;
        padding-top: 120px;
    }
    div.bienvenida h1{
        font-size: 48px;
    }
    div.bienvenida p{
        font-size: 30px;
        color:var(--azul);
        padding-top: 10px;
    }
    div.bienvenida button{
        margin-top: 30px;
    }
    @media only screen and (max-width: 768px) {
        div.bienvenida h1{
            font-size: 38px;
        }
        div.bienvenida p{
            font-size: 24px;
            color:var(--azul);
            padding-top: 10px;
        }
    }
</style>
