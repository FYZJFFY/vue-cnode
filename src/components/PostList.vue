<template>
  <div class="postLists">
    <div v-if="showLoading" class="loading">
      <img src="../assets/loading.gif" alt />
    </div>
    <div class="posts">
      <div class="postHeader">
        <span class="active">全部</span>
        <span>精华</span>
        <span>分享</span>
        <span>回答</span>
        <span>招聘</span>
        <span>客户端测试</span>
      </div>
      <ul>
        <li v-for="post in postList" class="clear-fix">
          <router-link :to="{name:'user_info',params:{name:post.author.loginname}}">
            <img :src="post.author.avatar_url" alt />
          </router-link>
          <span class="reply-count">
            <span class="reply-count1">{{post.reply_count}}</span>
            <span class="reply-count1">/</span>
            <span class="all-count">{{post.visit_count}}</span>
          </span>
          <span>
            <span :class="{'put_top':post.top,'topiclist-tab':!post.top}">{{post|getStatusStr}}</span>
          </span>
          <router-link
            class="title_wrapper"
            :to="{name:'topic',params:{id:post.id,name:post.author.loginname}}"
          >
            <span class="title">{{post.title}}</span>
          </router-link>
          <span class="time">{{post.create_at|timerFormatter}}</span>
        </li>
        <li :class="{'show':showPagination}">
          <Pagination @change="getPostList"></Pagination>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Pagination from "./Pagination";
export default {
  data() {
    return {
      showLoading: false,
      postList: [],
      showPagination: false
    };
  },
  components: {
    Pagination
  },
  name: "PostList",
  methods: {
    getPostList(page) {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            limit: 20,
            page: page
          }
        })
        .then(res => {
          this.postList = res.data.data;
          this.showPagination = true;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.getPostList(1);
  }
};
</script>
<style scoped>
body {
  background: #e1e1e1;
}
* {
  padding: 0;
  margin: 0;
}
.posts {
  margin-bottom: 30px;
}
.posts ul {
  border-radius: 5px;
}
.posts ul li {
  list-style: none;
  background: #fff;
  padding: 10px;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
}
.postHeader {
  padding: 10px;
  background: #f6f6f6;
  font-size: 14px;
}
.postHeader span {
  color: #80bd01;
  margin-right: 20px;
}
.postHeader span.active {
  padding: 3px 4px;
  background: #80bd01;
  color: #fff;
  border-radius: 3px;
}
.posts ul li:hover {
  background: #f5f5f5;
  cursor: pointer;
}
.posts ul li a > img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.posts ul li a {
  float: left;
}
.posts ul li > span {
  float: left;
  line-height: 2rem;
  color: #778087;
}
.posts ul li > .title_wrapper {
  line-height: 2rem;
  text-decoration: none;
  display: inline-block;
  max-width: 65%;
  line-height: 2rem;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.posts ul li > span:last-child {
  float: right;
}
.posts li .reply-count {
  width: 70px;
  text-align: center;
  font-size: 14px;
  /* font-size: 0; */
}
.posts li .reply-count > span {
  font-size: 12px;
}
.posts li .reply-count .all-count {
  font-size: 10px;
  color: #b4b4b4;
}
.posts .title {
  max-width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
}
.posts ul > li:last-child {
  display: none;
}
.clear-fix:after {
  display: block;
  clear: both;
  content: "";
}
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin: 0 4px;
}
.topiclist-tab {
  background: #e5e5e5;
  padding: 2px 4px;
  border-radius: 3px;
  color: #999;
  font-size: 12px;
  margin: 0 4px;
}
.time {
  font-size: 12px;
}
Pagination {
  display: none;
}
.posts ul > li:last-child.show {
  display: block;
}
@media screen and (max-width: 900px) {
  .posts ul li > .title_wrapper {
    width: 75%;
  }
}
</style>


