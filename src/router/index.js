import Vue from "vue";
import VueRouter from "vue-router";
import system from "./modules/system";
import exam from "./modules/exam";

Vue.use(VueRouter);

const routes = [
  system,
  ...exam,
  {
    path: '*',
    redirect: '/404',
  },
];

const router = new VueRouter({        
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
