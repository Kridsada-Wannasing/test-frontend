export const formValidateMixins = {
  data: () => ({
    firstNameRules: [(value) => !!value || "Firstname is requied."],
    lastNameRules: [(value) => !!value || "Lastname is required."],
    ageRules: [(value) => !!value || "Age is required."],
    sexRules: [(value) => !!value || "Sex is required."],
    emailRules: [(value) => !!value || "Email is required."],
    telRules: [(value) => !!value || "Tel is required."],
    statusRules: [(value) => !!value || "Status is required."],
    formValidity: false,
  }),
};
