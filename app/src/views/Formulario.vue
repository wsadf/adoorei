<template>
    <Wrapper>
        <Topo class="mb-5" />
        <InternaMain>
            <titulo-pagina :titulo="tituloDaPagina" />
            <subTitulo-pagina :subtitulo="subtitulo" />
            <FormDadosPessoais />
        </InternaMain>
    </Wrapper>
</template>

<script>
import Wrapper from '../components/Wrapper.vue';
import Topo from '../components/Topo.vue';
import InternaMain from '../components/InternaMain.vue';
import TituloPagina from '../components/TituloPagina.vue';
import SubTituloPagina from '../components/SubTituloPagina.vue';
import FormDadosPessoais from '../components/FormDadosPessoais.vue';


export default {

    name: 'FormularioView',

    components: {
        Topo,
        Wrapper,
        InternaMain,
        FormDadosPessoais,
        'titulo-pagina': TituloPagina,
        'subTitulo-pagina': SubTituloPagina
    },

    data() {
        return {
            tituloDaPagina: 'Você está muito próximo de mudar a forma de',
            subtitulo: 'Escolha o seu plano',
        }
    },
}
</script>