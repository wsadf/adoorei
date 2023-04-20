<template>
  <Wrapper class="login">
    <div>
      <Topo class="mb-5" />
      <v-form class="mb-7">
        <h2 class="text-left">{{ tituloPagina }}</h2>
        <p class="text-left">{{ subtituloPagina }}</p>
        <v-col class="text-left pb-0 pt-0">
          Nome
          <v-text-field required type="text" v-model="form.nome" label="Seu nome" outlined
            class="mt-1"></v-text-field>
            <div v-if="isSubmitted && !$v.form.nome.required" class="invalid-feedback">Nome é obrigatório.</div>
        </v-col>
        <v-col class="text-left pb-0 pt-0">
          Senha
          <v-text-field required type="password" v-model="form.senha" label="Sua senha" outlined
            class="mt-1" :class="{ 'is-invalid': isSubmitted && $v.form.senha.$error }"></v-text-field>
                <div v-if="isSubmitted && $v.form.senha.$error" class="invalid-feedback">
                    <span v-if="!$v.form.senha.required">Senha é obrigatório.</span>
                </div>
          <router-link to="/" class="d-flex justify-end">Esqueci minha senha</router-link>
        </v-col>
        <v-col>
          <v-btn dark block class="py-8" color="pink" @click.prevent="login()">
            Fazer login
          </v-btn>
        </v-col>
      </v-form>
      <p  class="text-center">Ainda não tem conta? <router-link to="cadastro" class="pink--text">Cadastre-se</router-link></p>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from '../components/Wrapper.vue';
import Topo from '../components/Topo.vue';
import api from '@/services/api'
import { required } from "vuelidate/lib/validators";


export default {
  name: 'LoginView',

  components: {
    Wrapper,
    Topo
  },

  data() {
    return {
      tituloPagina: "Entre na sua conta",
      subtituloPagina: "Para acessar sua conta informe seu e-mail e senha",
      form: {
        nome: '',
        senha: '',
        response: ''
      },
      isSubmitted: false
    }
  },
  validations: {
        form: {
            nome: {
                required
            },
            senha: {
                required,
            }
        }
    },
  methods: {
    login() {

      this.isSubmitted = true;

this.$v.$touch();
if (this.$v.$invalid) {
    return;
}

      api.post("/auth/login", {
        username: this.form.nome,
        password: this.form.senha
      })
      .then((response) => {
           this.response = response.data;
           this.$router.push({ name: 'home' });
          localStorage.setItem( 'token', JSON.stringify(response.data.token) );
          localStorage.setItem('username', this.form.nome);
         })
         .catch(() => {
           localStorage.removeItem('token');
           localStorage.removeItem('username');
         });
    },
  }
}
</script>

<style scoped>
.v-form {
  border: 1px solid #E6EAF2;
  border-radius: 5px;
  padding: 30px;
}

.v-application a {
  color: #515D74;
  text-decoration: none;
}

.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.v-input {
    height: 60px
}

.invalid-feedback {
    color: red
}
</style>