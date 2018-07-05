import Vue from 'vue/dist/vue.js';
import VueRouter from "vue-router";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import Mock from "./mock/mock";

import BasicInformation from "./views/basicInformation/basicInformation";
import EventRegistration from "./views/eventRegistration/eventRegistration";
import InformationSubmitted from "./views/information-submitted/information-submitted";
import UpgradeRenew from "./views/upgrade-renew/upgrade-renew";
import DownloadDocument from "./views/download-document/download-document";
import Listmeun from "./views/listmeun/listmeun";
import Page from "./views/page/page";
import ResetPassword from "./views/reset-password/reset-password";
import OtherPages from "./views/otherPages/other";
import Database from "./views/database/database";
import Renew from "./views/database/renew";

// 其他页面(包含子页面)
import xuFei from "./views/xufei/xufei";
import Login from "./views/login/login";
import ChooseCompany from "./views/login/chooseCompany";
import ErrorPage from "./views/error-page/error-page";
import TestPage from "./views/test-page/test-page";

Mock.mockData();
Vue.use(VueRouter); // 安装路由功能
Vue.prototype.$http = axios;
Vue.use(ElementUI);

// 后端对比cookies判断是否登录，凡接口response的header带有x-auth-token的即未登录，跳转首页。
// Vue.http.interceptors.push((request, next) => {
//   request.credentials = true;
//   next((response) => {
//     let messageHeader;
//     /* global IS_PRODUCTION:true */
//     if (IS_PRODUCTION) {
//       messageHeader = "X-Auth-Token";
//     } else {
//       messageHeader = "x-auth-token";
//     }
//     if (messageHeader in response.headers.map) {
//       router.push({path: '/login'});
//     }
//     return response
//   });
// });

let routes = [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/basicInformation",
        component: BasicInformation,
        name: "基本信息",
        class: "fa-home"
      },
      {
        path: "/eventRegistration",
        component: EventRegistration,
        name: "活动报名",
        class: "fa-user-plus"
      },
      {
        path: "/information-submitted",
        component: InformationSubmitted,
        name: "资料提交",
        class: "fa-file-text"
      },
      {
        path: "/upgrade-renew",
        component: UpgradeRenew,
        name: "升级续费",
        class: "fa-arrow-circle-up"
      },
      {
        path: "/download-document",
        component: DownloadDocument,
        name: "文件下载",
        class: "fa-cloud-download"
      },
      {
        path: "/reset-password",
        component: ResetPassword,
        name: "重置密码",
        class: "fa-lock"
      },
      {
        path: "/database",
        component: Database,
        name: "数据管理",
        class: "fa-database"
      },
      {
        path: "/listmeun",
        component: Listmeun,
        name: "目录列表",
        class: "fa-list"
      },
      {
        path: "/page",
        component: Page,
        name: "分页",
        class: "fa-list"
      }
    ]
  },
  { path: "/login", component: Login, name: "登录" },
  { path: "/xufei", component: xuFei, name: "续费提醒" },
  { path: "/chooseCompany", component: ChooseCompany, name: "选择公司" },
  { path: "/error-page", component: ErrorPage, name: "错误页面" },
  { path: "/test-page", component: TestPage, name: "错误页面" },
  { path: "/database/renew/renew", component: Renew, name: "续费管理" },
];
let router = new VueRouter({
  linkActiveClass: "active",
  routes
});
let app = new Vue({
  router
}).$mount("#app");
export default app;
