// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"

Vue.config.productionTip = false

Vue.prototype.$http = Axios;

Vue.filter("timerFormatter", (time) => {
  var createTime = new Date(time).getTime();
  var nowTime = new Date().getTime();
  var differ = nowTime - createTime;
  if (differ < 0) {
    return;
  } else if (differ / 1000 < 30) {
    return "刚刚";
  } else if (differ / 1000 < 60) {
    return parseInt(differ / 1000) + "秒前";
  } else if ((differ / 1000 / 60) < 60) {
    return parseInt((differ / 1000 / 60)) + "分钟前";
  } else if ((differ / 1000 / 60 / 60) < 24) {
    return parseInt((differ / 1000 / 60 / 60)) + "小时前";
  } else if ((differ / 1000 / 60 / 60 / 24) < 31) {
    return parseInt((differ / 1000 / 60 / 60 / 24)) + "天前";
  } else if ((differ / 1000 / 60 / 60 / 24 / 31) < 12) {
    return parseInt(differ / 1000 / 60 / 60 / 24 / 31) + "月前";
  } else {
    return parseInt(differ / 1000 / 60 / 60 / 24 / 31 / 12) + "年前"
  }
});

Vue.filter("getStatusStr", (post) => {
  if (post.top) {
    return "置顶";
  } else if (post.good) {
    return "精华";
  } else if (post.tab == "ask") {
    return "问答";
  } else if (post.tab == "share") {
    return "分享";
  } else {
    return "招聘";
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
