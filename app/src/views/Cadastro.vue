<template>
    <Wrapper>
        <Topo class="mb-5" />
        <InternaMain>
            <titulo-pagina :titulo="tituloDaPagina" />
            <subTitulo-pagina :subtitulo="subtitulo" />
            <Card />
        </InternaMain>
    </Wrapper>
</template>

<script>
import Wrapper from '../components/Wrapper.vue';
import Topo from '../components/Topo.vue';
import InternaMain from '../components/InternaMain.vue';
import Card from '../components/Card.vue';
import TituloPagina from '../components/TituloPagina.vue';
import SubTituloPagina from '../components/SubTituloPagina.vue';


export default {
    name: 'CadastroView',

    components: {
        Topo,
        Wrapper,
        InternaMain,
        Card,
        'titulo-pagina': TituloPagina,
        'subTitulo-pagina': SubTituloPagina

    },

    data() {
        return {
            tituloDaPagina: 'Você está muito próximo de mudar a forma de',
            subtitulo: 'Escolha o seu plano',
        }
    }

}

</script>