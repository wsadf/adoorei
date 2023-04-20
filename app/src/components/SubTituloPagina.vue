<template>
    <p class="text-center my-3">{{ subtitulo }}</p>
</template>
  
<script>
export default {
    name: 'TituloPagina',

    props: {
        subtitulo: {
            type: String,
            required: true,
        },
    },
};
</script>
  