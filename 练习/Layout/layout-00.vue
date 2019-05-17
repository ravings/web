<template>
  <div>
    <div class="main_2">
      <ul ref="ul">
        <li v-for="item in clssList">
          <div :class="item">{{ item }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clssList: ['div_1', 'div_2', 'div_3', 'div_4', 'div_5', 'div_6', 'div_7'],
      col: 3,  //  列数
      liWidth: 100  //  每个li的宽度
    }
  },
  mounted() {
    this.layout();
  },
  methods: {
    layout() {
      let ul = this.$refs.ul;
      // 存放一行中3个li的高度
      let liHeight = [];
      for(let i = 0; i < ul.children.length; i++) {
        if (i < this.col) {
          liHeight[i] = ul.children[i].scrollHeight;
          ul.children[i].style.left = `${i * this.liWidth}px`;
          ul.children[i].style.top = `0px`;
          // console.log(ul.children[i].style.left);
        }else {
          // 取出高度最低的值
          let minLi = Math.min.apply(Math, liHeight);
          // 取出高度最低的下标
          let index = liHeight.indexOf(minLi);
          // 将最新的li和高度最低的li放在同一列，当成一个li，更新3个li的高度
          liHeight[index] = ul.children[i].scrollHeight + minLi;
          ul.children[i].style.left = `${index * this.liWidth}px`;
          ul.children[i].style.top = `${minLi}px`;
          // console.log(index);
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
//  纯css实现
// .main_1{
//   width: 330px;
//   text-align: center;
//   column-count: 3; // 3列展示
//   column-gap: 0px; // 列间距
//   margin: 0 auto;
// }
// ul{
//   width: 330px;
//   list-style: none;
// }
// li {
//   width: 100px;
// }

//  和js结合实现
.main_2 {
  width: 330px;
  text-align: center;
  // position: relative;
  margin: 20px auto;
  // overflow: hidden;
  // border: 1px solid red;
}
ul {
  width: 330px;
  position: relative;
}
li {
  width: 100px;
  // overflow: hidden;
  list-style: none;
  position: absolute;
  color: #fff;
  float: left;
  // margin: 5px 5px;
}

.div_1 {
  width: 100px;
  height: 100px;
  line-height: 100px;
  background-color: rgb(233, 17, 17);
}
.div_2 {
  width: 100px;
  height: 60px;
  line-height: 60px;
  background-color: rgb(202, 245, 12);
}
.div_3 {
  width: 100px;
  height: 80px;
  line-height: 80px;
  background-color: rgb(67, 233, 17);
}
.div_4 {
  width: 100px;
  height: 120px;
  line-height: 120px;
  background-color: rgb(17, 233, 204);
}
.div_5 {
  width: 100px;
  height: 150px;
  line-height: 150px;
  background-color: rgb(90, 9, 221);
}
.div_6 {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: rgb(240, 9, 163);
}
.div_7 {
  width: 100px;
  height: 110px;
  line-height: 120px;
  background-color: rgb(6, 135, 240);
}
</style>
