import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home.vue";
import SearchIp from "@/pages/SearchIp.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },

    {
      path: "/search_ip",
      component: SearchIp
    }
  ]
});
