<template>
    <div class="d-flex">
        <v-form>
            <v-col class="text-left pb-0 pt-0">
                Nome completo
                <v-text-field required type="text" v-model="form.nome" label="Informe seu nome completo" outlined
                    class="mt-1 mb-3"></v-text-field>
                <div v-if="isSubmitted && !$v.form.nome.required" class="invalid-feedback">Nome é obrigatório.</div>
            </v-col>
            <v-col class="text-left pb-0 pt-0 mt-5">
                Celular
                <v-text-field required type="text" v-model="form.celular" label="(99) 99999-0000" outlined
                    class="mt-1" :class="{ 'is-invalid': isSubmitted && $v.form.celular.$error }"></v-text-field>
                    <div v-if="isSubmitted && $v.form.celular.$error" class="invalid-feedback">
                    <span v-if="!$v.form.celular.required">Celular é obrigatório.</span>
                </div>
            </v-col>
            <v-col class="text-left pb-0 pt-0 mt-5">
                E-mail
                <v-text-field required type="email" v-model="form.email" label="Informe seu e-mail" outlined
                    class="mt-1"></v-text-field>
                <div v-if="isSubmitted && $v.form.email.$error" class="invalid-feedback">
                    <span v-if="!$v.form.email.required">Email é obrigatório.</span>
                    <span v-if="!$v.form.email.email">Por favor insira um emai válido</span>
                </div>
            </v-col>

            <v-col class="text-left pb-0 pt-0 mt-5">
                Senha
                <v-text-field required type="password" v-model="form.password" label="Sua senha" outlined class="mt-1"
                    :class="{ 'is-invalid': isSubmitted && $v.form.password.$error }"></v-text-field>
                <div v-if="isSubmitted && $v.form.password.$error" class="invalid-feedback">
                    <span v-if="!$v.form.password.required">Senha é obrigatório.</span>
                    <span v-if="!$v.form.password.minLength">A senha deve ter pelo menos 8 caracteres</span>
                </div>
            </v-col>

            <v-col class="text-left pb-0 pt-0 my-5">
                Confirme sua senha
                <v-text-field required type="password" v-model="form.confirmPassword" label="Sua senha" outlined
                    class="mt-1"></v-text-field>
                <div v-if="isSubmitted && $v.form.confirmPassword.$error" class="invalid-feedback">
                    <span v-if="!$v.form.confirmPassword.required">Confirmar Senha é obrigatório.</span>
                    <span v-else-if="!$v.form.confirmPassword.sameAsPassword">As senhas devem ser iguais</span>
                </div>
            </v-col>
            <v-divider></v-divider>
            <h2 class="text-left mt-4 mb-3">{{ tituloSite }}</h2>
            <v-col class="text-left pb-0 pt-0 mb-2">
                Nome do seu site
                <v-text-field required hint="Exatamente igual o título do seu site" persistent-hint type="text"
                    v-model="form.site" label="Seu site" outlined class="mt-1 mb-5"></v-text-field>
                <div v-if="isSubmitted && $v.form.site.$error" class="invalid-feedback">
                    <span v-if="!$v.form.site.required">Nome do site é obrigatório.</span>
                </div>
            </v-col>
            <div class="form-group form-check mt-5">
                <v-checkbox type="checkbox" v-model="form.accept" @change="$v.form.accept.$touch()" id="accept"
                    class="form-check-input"
                    label="Ao concluir com seu cadastro você concorda com nossos termos de uso e politicas de privacidade."
                    :class="{ 'is-invalid': isSubmitted && $v.form.accept.$error }" for="accept"></v-checkbox>
                <div v-if="isSubmitted && $v.form.accept.$error" class="invalid-feedback">
                    <span v-if="!$v.form.accept.required">Aceite os termos e condições.</span>
                </div>
            </div>
            <v-divider></v-divider>
            <v-btn dark block class="py-8 mt-5" color="pink" @click.prevent="criar()">
                Criar Conta
            </v-btn>
        </v-form>
        <CardEscolhido class="ml-5" />
        <SnackBar :mensage="snackBar.message" :snackbar="snackBar.show" :button="true" :color="snackBar.color"
            :timeout="9000" @changeSnackBar="snackbar => snackBar.show = snackbar.visible" />
    </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import api from '@/services/api'
import SnackBar from '../components/SnackBar.vue';
import CardEscolhido from '../components/CardEscolhido.vue';



export default {

    name: 'FormDadosPessoais',

    components: {
        SnackBar,
        CardEscolhido
    },

    data() {
        return {
            tituloDaPagina: 'Você está muito próximo de mudar a forma de',
            subtitulo: 'Escolha o seu plano',
            tituloSite: "Dados do seu site",
            snackBar: {
                message: 'Cadastrado com sucesso',
                show: false,
                color: 'success',
            },
            form: {
                nome: "",
                email: "",
                celular: "",
                password: "",
                confirmPassword: "",
                site: "",
                accept: ""
            },
            isSubmitted: false
        };
    },
    validations: {
        form: {
            nome: {
                required
            },
            email: {
                required,
                email
            },
            celular: {
                required
            },
            site: {
                required
            },
            password: {
                required,
                minLength: minLength(8)
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs('password')
            },
            accept: {
                required(val) {
                    return val
                }
            }
        }
    },
    methods: {
        criar() {
            this.isSubmitted = true;

            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            api.post("/users", this.form)
                .then(() => {
                    this.snackBar.show = true;
                })
                .catch(() => {
                });
        }
    }
};
</script>

<style scoped>
.v-input {
    height: 60px
}

.invalid-feedback {
    color: red
}
</style>