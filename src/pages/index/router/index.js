import Vue from "vue";
import VueRouter from 'vue-router';
import home from "@/pages/index/view/home.vue"
import main from "@/pages/index/view/main.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",

    component: home,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/main",
    component: main,
    meta: {
      title: "第一页"
    },
  },
];

const router = new VueRouter({
  routes
});

export default router;
