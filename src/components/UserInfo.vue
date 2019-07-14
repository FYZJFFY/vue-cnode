<template>
  <div class="user">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" />
    </div>
    <div v-else>
      <div class="user_info">
        <div class="reply_header user_info_header">
          <router-link :to="{name:'root'}">主页</router-link>/
        </div>

        <div>
          <div class="avatar">
            <img :src="userInfo.avatar_url" alt />
          </div>
          <span class="user_name">{{userInfo.loginname}}</span>
          <div class="info_item">
            <ul>
              <li>4个话题收藏</li>
              <li>
                <i></i>www.baidu.com
              </li>
              <li>
                <i></i>浙江衢州
              </li>
              <li>
                <i></i>@sfsasg
              </li>
              <li>
                <i></i>www.baidu.com
              </li>
            </ul>
          </div>
          <p>注册了7年</p>
        </div>
      </div>
      <div class="posts" v-if="userInfo.recent_topics.length>0">
        <div class="reply_header">我最近创建的话题</div>
        <ul>
          <li v-for="post in userInfo.recent_topics" class="clear-fix">
            <img :src="post.author.avatar_url" alt />
            <!-- <span class="reply-count">
            <span class="reply-count1">{{post.reply_count}}</span>
            <span class="reply-count1">/</span>
            <span class="all-count">{{post.visit_count}}</span>
            </span>-->
            <span>
              <span :class="{'put_top':post.top,'topiclist-tab':!post.top}">{{post|getStatusStr}}</span>
            </span>
            <router-link :to="{name:'topic',params:{id:post.id}}">
              <span class="title">{{post.title}}</span>
            </router-link>
            <span class="time">{{post.last_reply_at|timerFormatter}}</span>
          </li>
        </ul>
      </div>
      <div class="posts posts_recent" v-if="userInfo.recent_replies.length>0">
        <div class="reply_header">最近参与的话题</div>
        <ul>
          <li v-for="post in userInfo.recent_replies" class="clear-fix">
            <img :src="post.author.avatar_url" alt />
            <!-- <span class="reply-count">
            <span class="reply-count1">{{post.reply_count}}</span>
            <span class="reply-count1">/</span>
            <span class="all-count">{{post.visit_count}}</span>
            </span>-->
            <span>
              <span :class="{'put_top':post.top,'topiclist-tab':!post.top}">{{post|getStatusStr}}</span>
            </span>
            <router-link :to="{name:'topic',params:{id:post.id}}">
              <span class="title">{{post.title}}</span>
            </router-link>
            <span class="time">{{post.last_reply_at|timerFormatter}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "userInfo",
  data() {
    return {
      userInfo: {},
      isLoading: true
    };
  },
  methods: {
    getUserInfo() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(msg => {
          this.isLoading = false;
          this.userInfo = msg.data.data;
        })
        .catch(err => {});
    }
  },
  beforeMount() {
    this.getUserInfo();
  }
};
</script>
<style scoped>
.user {
  margin-right: 305px;
}
.user_info .user_info_header {
  color: #80bd01;
}
.user_info_header a {
  color: #80bd01;
  text-decoration: none;
}
.user_info {
  background: #fff;
  font-size: 14px;
}
.user_info > div {
  padding: 10px;
}
.user_info .avatar {
  float: left;
  margin-right: 10px;
}
.user_info .avatar img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.user_info .info_item {
  clear: left;
  color: #778087;
}
.user_info .info_item li {
  line-height: 2rem;
}

.user_info p {
  color: #778087;
}
.user_info li {
  list-style: none;
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
.posts {
  margin-top: 10px;
}
.posts ul li:hover {
  background: #f5f5f5;
  cursor: pointer;
}
.posts ul li > img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.posts ul li > img {
  float: left;
}
.posts ul li > span {
  float: left;
  line-height: 2rem;
  color: #778087;
}
.posts ul li > a {
  line-height: 2rem;
  text-decoration: none;
  max-width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
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
.user_info .info_item li > a {
  max-width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.posts .title {
  color: #08c;
  font-size: 16px;
  max-width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
.reply_header {
  padding: 10px;
  background: #f6f6f6;
  font-size: 14px;
}
.posts_recent {
  margin-bottom: 20px;
}
@media screen and (max-width: 900px) {
  .user {
    margin-right: 0;
  }
  .sideBar {
    float: auto;
  }
  .main {
    display: flex;
    flex-direction: column;
  }
}
</style>


