import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import light from "./vuetify/theme";

Vue.use(Vuetify);

const opts = {
  theme: {
    dark: true
  }
};

export default new Vuetify(opts);
