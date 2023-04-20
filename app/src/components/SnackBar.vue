<template>
  <v-snackbar
    v-model="setSnackBar"
    :bottom="$vuetify.breakpoint.smAndDown"
    :color="color"
    :right="$vuetify.breakpoint.mdAndUp"
    :top="$vuetify.breakpoint.mdAndUp"
    :timeout="timeout"
    :value="true"
    data-cy="snackbar"
    class="snackbar-height"
  >
    <span v-html="mensage" />
    <template v-slot:action="{ attrs }">
      <v-btn
        v-if="button"
        dark
        data-cy="button_snackbar"
        text
        v-bind="attrs"
        @click="setSnackBar = false"
      >
        {{ buttonMensage }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackBar',

  props: {
    snackbar: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'error',
    },
    timeout: {
      type: Number,
      default: 5000,
    },
    mensage: {
      type: String,
      required: true,
      default: '',
    },
    button: {
      type: Boolean,
      default: false,
    },
    buttonMensage: {
      type: String,
      default: 'Ok',
    },
  },

  computed: {
    setSnackBar: {
      get() {
        return this.snackbar;
      },
      set(v) {
        this.$emit('changeSnackBar', { visible: v, ...this });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.snackbar-height {
  height: auto !important;
}
</style>
