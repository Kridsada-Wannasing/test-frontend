export const setDialog = {
  computed: {
    dialog: {
      get() {
        return this.$store.state.dialog;
      },
      set(value) {
        this.$store.dispatch("setDialog", value);
      },
    },
  },
  methods: {
    cancel() {
      this.dialog = false;
    },
  },
};
