<template>
  <div>
    <div class="message_1">
      <div class="border_1">
      </div>
      <div class="content_1">
        <span>这是一个信息框</span>
      </div>
    </div>
    <div class="message_2">
      <div class="content_2">
        <span>这是一个信息框</span>
      </div>
      <div class="border_2">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.message_1{
  margin: 100px 0;
}
.border_1 {
  width: 0;
  height: 0;
  border: 50px solid #fff;
  border-bottom-color: green;
  border-top: none;
  margin: 0 auto;
}
.content_1 {
  width: 200px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: green;
  margin: 0 auto;
  color: #fff;
}
.message_2 {
  width: 300px;
  position: relative;
  margin: 0 auto;
  }
.border_2 {
  width: 0;
  height: 0;
  position: absolute;
  top: 25px;
  right: 0px;
  border: 50px solid #fff;
  border-left-color: green;
  border-right: none;
  border-top-width: 25px;
  border-bottom-width: 25px;
}
.content_2 {
  width: 200px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: green;
  margin: 0 auto;
  color: #fff;
}
</style>

