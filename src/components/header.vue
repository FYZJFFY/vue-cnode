<template>
  <div class="header">
    <router-link :to="{name:'root'}">
      <img src="../assets/logo.svg" />
    </router-link>
    <ul class="nav">
      <li>
        <router-link :to="{name:'root'}">首页</router-link>
      </li>
      <li>
        <a href="#">新手入门</a>
      </li>
      <li>
        <a href="#">API</a>
      </li>
      <li>
        <a href="#">关于</a>
      </li>
      <li>
        <a href="#">注册</a>
      </li>
      <li>
        <a href="#">登录</a>
      </li>
    </ul>
    <div class="more_wrapper">
      <svg
        @click="toggleStyle"
        class="more"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="M3.5 5h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3zm0 6h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3zm0 6h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3z"
          fill-rule="evenodd"
        />
      </svg>
      <ul class="down-list" :style="disStyle">
        <li>
          <router-link :to="{name:'root'}">首页</router-link>
        </li>
        <li>
          <a href="#">新手入门</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">关于</a>
        </li>
        <li>
          <a href="#">注册</a>
        </li>
        <li>
          <a href="#">登录</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      disStyle: "display:none;"
    };
  },
  methods: {
    toggleStyle() {
      if (this.disStyle === "display:none;") {
        this.disStyle = "display:block;";
      } else {
        this.disStyle = "display:none;";
      }
    }
  }
};
</script>
<style scoped>
.header {
  height: 50px;
  background: #444;
}
.header img {
  width: 120px;
  height: 34px;
  margin-top: 8px;
  margin-left: 55px;
}
.nav {
  float: right;
  margin-right: 80px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.nav li {
  list-style: none;
  display: inline-block;
  padding-left: 30px;
  padding-top: 3px;
}
.nav li a {
  color: #ccc;
  font-size: 12px;
  text-decoration: none;
  vertical-align: top;
}
svg.more {
  width: 24;
  height: 24;
  fill: #fff;
}
.more_wrapper {
  display: none;
}
.down-list {
  display: none;
}
@media screen and (max-width: 900px) {
  .more_wrapper {
    float: right;
    margin-right: 19px;
    margin-top: 16px;
    display: block;
    position: relative;
  }
  .nav {
    display: none;
  }
  .header img {
    margin-left: 18px;
  }
  .down-list {
    display: block;
    position: absolute;
    right: 0;
    width: 90px;
    background: gray;
    text-align: center;
    padding-bottom: 7px;
    display: none;
  }
  .down-list li {
    padding-top: 7px;
  }
  .down-list a {
    list-style: none;
    color: #fff;
    text-decoration: none;
  }
}
</style>


