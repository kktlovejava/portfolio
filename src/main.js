// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import vuetify from "@/plugins/vuetify";
import VueTyper from "vue-typer"; //npm install vue-typer
import VueAnime from "vue-animejs"; // npm install vue-animejs --save
import VueAnimate from "vue-animate-scroll"; // npm i --save vue-animate-scroll
import VueCharts from "vue-chartjs"; //npm install vue-chartjs chart.js --save
import ChartDataLabels from "chartjs-plugin-datalabels";
import PortfolioMinCss from "./assets/css/portfolio-min.css";
import "./stylus/main.styl";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueTyper);
Vue.use(VueAnime);
Vue.use(VueAnimate);
Vue.use(VueCharts);
Vue.use(ChartDataLabels);
Vue.use(PortfolioMinCss);
/* eslint-disable no-new */
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
