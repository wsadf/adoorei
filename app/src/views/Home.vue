<template>
  <Wrapper>
    <Topo class="mb-5" />
    <InternaMain>
      <h2 class="text-left">{{ tituloPagina }} {{ user }}</h2>
      <p class="text-left">{{ subtituloPagina }}</p>
      <div id="container">
        <iframe width="976" height="654" src="https://www.youtube.com/embed/C2jhBL9xQzk">
        </iframe>
      </div>
      <p class="mt-2">Caso tenha alguma dúvida, <a href="https://ajuda.adoorei.com/pt-BR/" target="_blank">visite nossa central de ajuda.</a></p>
    </InternaMain>
  </Wrapper>
</template>

<script>
import Wrapper from '../components/Wrapper.vue';
import Topo from '../components/Topo.vue';
import InternaMain from '../components/InternaMain.vue';


export default {
  name: 'HomeView',

  components: {
    Topo,
    Wrapper,
    InternaMain
  },

  data() {
    return {
      tituloPagina: "Olá",
      subtituloPagina: "Para acessar sua conta informe seu e-mail e senha",
      user: '',
    }
  },
  created: function () {
    this.getUser();
  },
  methods: {
    getUser() {
      this.user = localStorage.getItem('username')
    },
  }

}
</script>

<style scoped>
#container {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  padding-top: 25px;
  height: 0;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>