import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TaskView from "../views/TaskView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "task/:id",
        name: "task",
        component: TaskView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
