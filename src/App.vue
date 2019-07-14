<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view name="sidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import PostList from "./components/PostList";
export default {
  name: "App",
  components: {
    Header,
    PostList
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  padding: 0;
  margin: 0;
  background: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif;
}
.main {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
}
ul li {
  list-style: none;
}
@media screen and (max-width: 900px) {
  .main {
    width: 100%;
    margin-top: 0;
  }
}
</style>
