<template>
    <v-container
        :class="[this.$route.name == 'login' || this.$route.name == 'cadastro' ? '' : 'd-flex justify-space-between']">
        <router-link :to="'/'" data-cy="link_logo" class="d-flex">
            <v-img src="~@/assets/img/logo.svg" aspect-ratio="1" contain height="48" width="180" />
        </router-link>
        <v-btn :class="[this.$route.name == 'login' || this.$route.name == 'cadastro' ? 'd-none' : '']" class="mx-2" fab
            dark small color="#D9D9D9">
            <v-icon dark @click="logout()">
                mdi-close
            </v-icon>
        </v-btn>
    </v-container>
</template>

<script>

export default {
    name: 'TopoComponents',

    methods: {
        logout() {
           this.$router.push({ name: 'login' });
        }
    }
};
</script>