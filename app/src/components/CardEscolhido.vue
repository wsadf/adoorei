<template>
    <div class="d-flex justify-space-between">
        <v-card class="mr-7 mt-10">
            <v-card-text class="d-flex justify-center flex-column flex-wrap">
                <v-chip label dark color="black" class="text-center" v-if="cardEscolhido.planoEscolhido">
                    Plano Escolhido
                </v-chip>
                <v-card-title class="text-center text-h5 font-weight-bold mt-5 pa-0 text-truncate d-block">
                    {{ cardEscolhido.hospedagem }}
                </v-card-title>
                <p v-if="cardEscolhido.gratuidade" class="text-center text-h4 pink--text my-3 mb-5 font-weight-bold">{{
                    cardEscolhido.gratuidade }}</p>
                <p v-if="cardEscolhido.preco" class="text-center text-h4 pink--text my-3 font-weight-bold"><small
                        class="symbol mr-1" v-if="!cardEscolhido.gratuidade">R$</small>{{ cardEscolhido.preco }}<small
                        class="symbol" v-if="!cardEscolhido.gratuidade">/mês</small></p>
                <p class="text-center">{{ cardEscolhido.mensalidade }}</p>
                <p class="text-center">{{ cardEscolhido.setup }}</p>
                <v-divider></v-divider>
                <p class="text-center text-subtitle-1 mt-2 ideal">{{ cardEscolhido.ideal }}</p>
                <v-btn dark class="py-8 px-6 d-flex justify-center" to="formulario" color="pink">Escolher esse plano</v-btn>
                <p class="text-subtitle-1 my-4 font-weight-bold mb-0">{{ cardEscolhido.tituloServidores }} <a href=""
                        class="grey--text text--darken-2">{{ cardEscolhido.pais }}</a></p>
                <v-list lines="itensServidores">
                    <v-list-item v-for="element in cardEscolhido.itensServidores" :key="element.title">&#10004; {{ element
                    }}</v-list-item>
                </v-list>
                <p class="text-subtitle-1 font-weight-bold ">{{ cardEscolhido.tituloSuporte }}</p>
                <p class="text-subtitle-1 font-weight-bold mb-0">{{ cardEscolhido.tituloAplicativos }}</p>
                <v-list lines="itensAplicativos">
                    <v-list-item v-for="element in cardEscolhido.itensAplicativos" :key="element.title">&#10004; {{ element
                    }}</v-list-item>
                </v-list>
                <p class="text-subtitle-1 font-weight-bold mb-0">{{ cardEscolhido.tituloMigracao }}</p>
                <v-list lines="tituloMigracao">
                    <v-list-item v-for="element in cardEscolhido.itensMigracao" :key="element.title">&#10004; {{ element
                    }}</v-list-item>
                </v-list>
                <p class="text-subtitle-1 font-weight-bold mb-0">{{ cardEscolhido.tituloVoce }}</p>
                <v-list lines="tituloVoce">
                    <v-list-item v-for="element in cardEscolhido.itensVoce" :key="element.title">&#10004; {{ element
                    }}</v-list-item>
                </v-list>
            </v-card-text>
            <v-btn elevation="2" outlined block flat>Trocar plano</v-btn>
        </v-card>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: 'CardEscolhidoComponents',
    data() {
        return {
            cardEscolhido: [],
        }
    },
    created() {
        this.carregarCard();
    },

    methods: {
        async carregarCard() {
            const urlCompleta = `https://run.mocky.io/v3/d0844f5a-3215-4159-b6b5-ed36a4610975`;
            await axios.get(urlCompleta)
                .then((response) => {
                    this.cardEscolhido = response.data;
                    console.log(this.cardEscolhido)
                })
                .catch(() => {
                    this.cardEscolhido = [];
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    }
}
</script>

<style scoped>
.v-chip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 139px;
    display: inline-block;
}

.symbol {
    font-weight: normal;
    font-size: 20px;
    ;
}

.ideal {
    width: 217px;
}

.v-card {
    max-width: 348px;
}
</style>