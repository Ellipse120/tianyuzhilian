import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/index.vue";

import Home from "@/views/Home.vue";
import AIDesign from "@/views/AIDesign.vue";
import DynamicConsultation from "@/views/DynamicConsultation.vue";
import Detail from "@/views/Detail.vue";
import JoinUs from "@/views/JoinUs.vue";
import AboutUs from "@/views/AboutUs.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
    },
  },

  {
    path: "/ai-design",
    name: "AIDesign",
    component: AIDesign,
    meta: {
      title: "AI室分设计平台",
    },
  },

  {
    path: '/dynamic-consultation',
    meta: {
      title: "动态资讯",
    },
    children: [
      {
        path: '',
        name: 'DynamicConsultation',
        component: DynamicConsultation,
        meta: {
          title: "动态资讯",
        }
      },
  
      {
        path: "/dynamic-consultation/detail",
        name: "DynamicConsultationDetail",
        component: Detail,
        meta: {
          title: "动态资讯详情",
          hidden: true,
        },
      },
    ],
  },

  {
    path: "/join-us",
    component: Layout,
    name: "JoinUs",
    component: JoinUs,
    meta: {
      title: "招贤纳士",
    },
  },

  {
    path: "/about-us",
    component: Layout,
    name: "AboutUs",
    component: AboutUs,
    meta: {
      title: "关于我们",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
