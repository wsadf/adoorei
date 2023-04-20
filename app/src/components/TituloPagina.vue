<template>
  <h2 class="text-center">
    {{ titulo }}<br>
    <a href="" class="pink--text">hospedar seu site</a>
  </h2>
</template>
  
<script>
export default {
  name: 'TituloPagina',

  props: {
    titulo: {
      type: String,
      required: true,
    },
  },
};
</script>
  