<template>
    <Wrapper>
        <Topo class="mb-5" />
        <InternaMain>
            <h2 class="text-center">Você está muito próximo de mudar a forma de<br> <a href="" class="pink--text">hospedar seu site</a></h2>
            <p class="text-center my-3">Escolha o seu plano</p>
            <Card />
        </InternaMain>
    </Wrapper>
</template>

<script>
import Wrapper from '../components/Wrapper.vue';
import Topo from '../components/Topo.vue';
import InternaMain from '../components/InternaMain.vue';
import Card from '../components/Card.vue';


export default {
    name: 'CadastroView',

    components: {
        Topo,
        Wrapper,
        InternaMain,
        Card
    },

    data() {
        return {

        }
    }

}

</script>