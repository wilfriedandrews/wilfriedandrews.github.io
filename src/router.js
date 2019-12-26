import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Galery from "./views/Galery.vue";
import Content from "./components/Content_All.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children:[
        {
          path:"/content",
          name: "content",
          component: Content
        }
      ]
    },
    {
      path: "/galery",
      name: "galery",
      component: Galery
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Galery.vue")
    }
  ]
});
