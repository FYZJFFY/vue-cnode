<template>
  <div>
    <button @click="pageChange(1)">首页</button>
    <button @click="pageChange(nowPage-1)">上一页</button>
    <button
      :class="{active:nowPage == page?true:false}"
      @click="pageChange(page)"
      v-for="page in pageList"
    >{{page}}</button>
    <button @click="pageChange(nowPage+1)">下一页</button>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data() {
    return {
      pageList: [1, 2, 3, 4, 5, "..."],
      nowPage: 1
    };
  },
  methods: {
    pageChange(page) {
      console.log(page);
      this.$emit("change", page);
      if (page < 1) {
        this.nowPage = 1;
        page = 1;
      } else {
        this.nowPage = page;
      }
      if (page == this.pageList[4]) {
        this.pageList = this.pageList.slice(1, this.pageList.length);
        this.pageList.splice(4, 0, page + 1);
      } else if (page == this.pageList[0] && page != 1) {
        this.pageList.splice(4, 1);
        this.pageList.splice(0, 0, page - 1);
      } else if (page == 1) {
        this.pageList = [1, 2, 3, 4, 5, "..."];
      }
    }
  }
};
</script>
<style scoped>
button {
  padding: 4px 12px;
  background: #fff;
  outline: none;
  border: 1px solid #ddd;
  color: #778087;
  height: 2em;
}
button.active {
  color: #80bd01;
}
</style>


