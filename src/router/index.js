import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList'
import Article from '../components/Article'
import UserInfo from "../components/UserInfo"
import SideBar from "../components/SideBar"

Vue.use(Router)

export default new Router({
  routes: [{
      name: "root",
      path: "/",
      components: {
        main: PostList
      }
    },
    {
      name: "topic",
      path: "/topic/:id&:name",
      components: {
        main: Article,
        sidebar: SideBar
      }
    },
    {
      name: "user_info",
      path: "/userinfo/:name",
      components: {
        main: UserInfo,
        sidebar: SideBar
      }
    }
  ]
})
