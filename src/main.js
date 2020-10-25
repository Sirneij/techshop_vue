// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
require("./assets/css/slick.css");
require("./assets/css/LineIcons.css");
require("./assets/css/materialdesignicons.min.css");
require("./assets/css/jquery-ui.min.css");
require("./assets/css/nice-select.css");
require("./assets/css/bootstrap.min.css");
require("./assets/css/default.css");
require("./assets/css/style.css");
import { store } from "./store/store";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
