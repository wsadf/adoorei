<template>
    <div class="d-flex">
        <v-card v-for="item in card" :key="item.id" class="mr-7 mt-10">
            <v-card-text class="d-flex justify-center flex-column flex-wrap">
                <v-chip label color="success" class="text-center" v-if="item.maisUsado">
                    Mais usado
                </v-chip>
                <v-card-title class="text-center text-h5 font-weight-bold mt-5 pa-0 text-truncate d-block">
                    {{ item.hospedagem }}
                </v-card-title>
                <p v-if="item.gratuidade" class="text-center text-h4 pink--text my-3 mb-5 font-weight-bold">{{
                    item.gratuidade }}</p>
                <p v-if="item.preco" class="text-center text-h4 pink--text my-3 font-weight-bold"><small class="symbol mr-1"
                        v-if="!item.gratuidade">R$</small>{{ item.preco }}<small class="symbol"
                        v-if="!item.gratuidade">/mês</small></p>
                <p class="text-center">{{ item.mensalidade }}</p>
                <p class="text-center">{{ item.setup }}</p>
                <v-divider></v-divider>
                <p class="text-center text-subtitle-1 mt-2 ideal">{{ item.ideal }}</p>
                <v-btn dark class="py-8 px-6 d-flex justify-center" to="formulario" color="pink">Escolher esse plano</v-btn>
                <p class="text-subtitle-1 my-4 font-weight-bold mb-0">{{ item.tituloServidores }} <a href=""
                        class="grey--text text--darken-2">{{ item.pais }}</a></p>
                <v-list lines="itensServidores">
                    <v-list-item v-for="element in item.itensServidores" :key="element.title">&#10004; {{ element
                    }}</v-list-item>
                </v-list>
                <p class="text-subtitle-1 font-weight-bold ">{{ item.tituloSuporte }}</p>
                <p class="text-subtitle-1 font-weight-bold mb-0">{{ item.tituloAplicativos }}</p>
                <v-list lines="itensAplicativos">
                    <v-list-item v-for="element in item.itensAplicativos" :key="element.title">&#10004; {{ element
                    }}</v-list-item>
                </v-list>
                <p class="text-subtitle-1 font-weight-bold mb-0">{{ item.tituloMigracao }}</p>
                <v-list lines="tituloMigracao">
                    <v-list-item v-for="element in item.itensMigracao" :key="element.title">&#10004; {{ element
                    }}</v-list-item>
                </v-list>
                <p class="text-subtitle-1 font-weight-bold mb-0">{{ item.tituloVoce }}</p>
                <v-list lines="tituloVoce">
                    <v-list-item v-for="element in item.itensVoce" :key="element.title">&#10004; {{ element }}</v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: 'CardComponents',
    data() {
        return {
            card: [],
        }
    },
    created() {
        this.carregarCard();
    },

    methods: {
        async carregarCard() {
            const urlCompleta = `https://run.mocky.io/v3/77d7c580-4a2e-4a8a-ba1e-37012ad29b6f`;
            await axios.get(urlCompleta)
                .then((response) => {
                    this.card = response.data;
                })
                .catch(() => {
                    this.card = [];
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
}</style>