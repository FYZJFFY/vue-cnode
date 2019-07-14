<template>
  <div class="sideBar">
    <div class="user_info">
      <div class="reply_header">作者</div>
      <div class="info">
        <router-link :to="{name:'user_info',params:{name:userInfo.loginname}}">
          <!-- <a href="#"> -->
          <img class="avatar" :src="userInfo.avatar_url" alt />
          <span class="login_name">{{userInfo.loginname}}</span>
          <!-- </a> -->
        </router-link>
        <div class="integral">积分：15525</div>
      </div>
    </div>
    <div class="other_topic topics">
      <div class="reply_header">作者其他话题</div>
      <div class="inner">
        <ul>
          <li v-for="post in otherTopics">
            <router-link
              :to="{name:'topic',params:{id:post.id,name:userInfo.loginname}}"
            >{{post.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="no_apply_topic topics">
      <div class="reply_header">无人回复的话题</div>
      <div class="inner">
        <ul>
          <li v-for="post in replyTopics">
            <router-link
              :to="{name:'topic',params:{id:post.id,name:userInfo.loginname}}"
            >{{post.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sideBar",
  data() {
    return {
      userInfo: {}
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
  mounted() {
    this.getUserInfo();
  },
  computed: {
    otherTopics() {
      if (this.userInfo.recent_topics) {
        if (this.userInfo.recent_topics.length > 5) {
          return this.userInfo.recent_topics.slice(0, 5);
        } else {
          return this.userInfo.recent_topics;
        }
      }
    },
    replyTopics() {
      if (this.userInfo.recent_replies) {
        if (this.userInfo.recent_replies.length > 5) {
          return this.userInfo.recent_replies.slice(0, 5);
        } else {
          return this.userInfo.recent_replies;
        }
      }
    }
  }
};
</script>
<style scoped>
.sideBar {
  float: right;
  width: 290px;
}
.reply_header {
  padding: 10px;
  background: #f6f6f6;
  font-size: 14px;
}
.topics {
  margin-top: 13px;
}
.topics .inner {
  background: #fff;
  padding: 10px;
}
.topics .inner li {
  font-size: 14px;
  color: #778087;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 2em;
}
.user_info {
  background: #fff;
}
.user_info .info {
  padding: 10px;
  font-size: 14px;
}
.user_info .integral {
  margin-top: 20px;
}
.user_info .avatar {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  vertical-align: middle;
}
.user_info .login_name {
  vertical-align: middle;
  color: #000;
  text-decoration: none;
  margin-left: 10px;
}
@media screen and (max-width: 900px) {
  .sideBar {
    float: auto;
    width: 100%;
  }
}
</style>


