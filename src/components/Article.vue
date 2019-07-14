<template>
  <div class="post">
    <div class="topic_header">
      <div class="topic_title">
        <span>
          <span :class="{'put_top':post.top,'topiclist-tab':!post.top}">{{post|getStatusStr}}</span>
          {{post.title}}
        </span>
      </div>
      <ul class="post_info clear-fix">
        <li>发布于 {{post.create_at|timerFormatter}}</li>
        <li>作者 {{post.author.loginname}}</li>
        <li>{{post.visit_count}} 次浏览</li>
        <li>来自 {{post|getStatusStr}}</li>
      </ul>
      <div class="topic markdown_content" v-html="post.content"></div>
    </div>
    <div class="reply">
      <div class="reply_header">{{post.reply_count}}回复</div>
      <div class="reply_body">
        <div class="cell" v-for="(reply,index) in post.replies">
          <div class="reply_item">
            <router-link
              :to="{name:'user_info',params:{name:reply.author.loginname}}"
              class="user_avatar"
            >
              <img :src="reply.author.avatar_url" alt />
            </router-link>
            <div class="user_info">
              <a href="#" class="reply_author">{{reply.author.loginname}}</a>
              <a href="#">{{index+1}}楼•{{post.create_at|timerFormatter}}</a>
            </div>
            <div class="user_acction">
              <i class="up_btn"></i>
              <span>{{reply.ups.length}}</span>
            </div>
          </div>
          <div class="reply_content markdown_content" v-html="reply.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      post: {}
    };
  },
  methods: {
    getTopicDetail() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          this.post = res.data.data;
        })
        .catch(err => {});
    }
  },
  beforeMount() {
    this.getTopicDetail();
  },
  watch: {
    $route(to, from) {
      this.getTopicDetail();
    }
  }
};
</script>
<style>
@import url("../assets/markdown-github.css");
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
}
.topic_header {
  background: #fff;
}
.topiclist-tab {
  background: #e5e5e5;
  padding: 3px;
  border-radius: 2px 4px;
  color: #999;
  font-size: 12px;
  line-height: 12px;
  margin: 0 4px;
}
.post {
  margin-right: 305px;
  background: #e1e1e1;
  /* padding: 10px; */
}
.topic_title {
  font-size: 22px;
  font-weight: bold;
  line-height: 130%;
  margin-top: 8px;
  padding: 10px;
}
.post_info {
  padding-left: 10px;
  padding-bottom: 10px;
  height: 16px;
}
.post_info li {
  float: left;
  list-style: none;
  font-size: 12px;
  color: #838383;
  margin-right: 5px;
}
.post_info li::before {
  content: "•";
  margin-right: 5px;
}
.topic {
  padding: 10px;
  padding-left: 20px;
  border-top: 1px solid #e5e5e5;
}
.reply {
  margin-top: 20px;
  background: #fff;
  font-size: 14px;
}
.reply .reply_header {
  padding: 10px;
  background: #f6f6f6;
}
.reply .reply_item > div {
  display: inline-block;
}
.reply .reply_item .user_acction {
  float: right;
}
.reply .reply_item .user_avatar {
  float: left;
  color: #000;
}
.reply_item .user_info a {
  color: #000;
  text-decoration: none;
}
.reply_item .user_info a:nth-child(2) {
  color: #08c;
  font-size: 11px;
}
.reply_item .user_info {
  margin-left: 10px;
}
.reply .cell {
  border-bottom: 1px solid #f0f0f0;
  padding: 10px;
}
.reply_content {
  margin-left: 50px;
}
.reply_item .user_avatar img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.reply_item .reply_author {
  font-weight: 700;
  font-size: 12px;
}
.reply_item .up_btn:before {
  content: "\f087";
}
.clear-fix:after {
  display: block;
  clear: both;
  content: "";
}
@media screen and (max-width: 900px) {
  .post {
    margin-right: 0;
    width: 100%;
  }
  .sideBar {
    /* float: auto; */
    width: 100%;
  }
  .main {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>


