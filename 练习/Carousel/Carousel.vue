<template>
  <div>
    <div class="div" ref="div" @mousemove="mousemove" @mouseleave="mouseleave">
      <ul :style="ulStyle" ref="ul">
        <li><img src="../assets/shopping_mall/room_3.png" alt="" /></li>
        <li><img src="../assets/shopping_mall/room_1.png" alt="" /></li>
        <li><img src="../assets/shopping_mall/room_2.png" alt="" /></li>
        <li><img src="../assets/shopping_mall/room_3.png" alt="" /></li>
        <li><img src="../assets/shopping_mall/room_1.png" alt="" /></li>
      </ul>
      <div class="span" ref="current">
        <span :class="{current: item == currentIndex}" v-for="item in 3" :key="item">{{ item }}</span>
        <!-- <span>2</span>
        <span>3</span> -->
      </div>
      <div class="btn">
        <span class="left" @click="leftAndRight(202, 1)"><img src="../assets/shopping_mall/btn_left.png" alt=""></span>
        <span class="right" @click="leftAndRight(202, -1)"><img src="../assets/shopping_mall/btn_right.png" alt=""></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      distance: -202,  //  ul移动的距离
      currentIndex: 1  // 当前显示图片的index高亮
    }
  },
  computed: {
    ulStyle() {
      return {
        transform: `translateX(${this.distance}px)`
      }
    }
  },
  mounted() {
    this.carousel();
  },
  methods: {
    leftAndRight(offset, dis) {
      this.distance += offset*dis;
      dis == -1 ? this.currentIndex++ : this.currentIndex--;
      if (this.currentIndex > 3) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 3;

      let ul = this.$refs.ul;
      ul.style.transition = 'all .75s ease-in-out';
      //  当滑动到最后一张(也就是和第一张图片一样)后，马上切换到第一张
      if (this.distance == -808) {
        setTimeout(() => {
          ul.style.transition = 'none';
          this.distance = -202;
        }, 760);
      }
      if (this.distance == 0) {
        setTimeout(() => {
          ul.style.transition = 'none';
          this.distance = -606;
        }, 760);
      }
    },
    carousel() {
      let ul = this.$refs.ul;
      let timeOut = null;

      this.timer = window.setInterval(() => {
        ul.style.transition = 'all .75s ease-in-out';
        this.distance += -202;
        this.currentIndex ++;

        if (this.distance == -808) {

          clearTimeout(timeOut)

          this.currentIndex = 1;
          timeOut = setTimeout(() => {
            ul.style.transition = 'none';
            this.distance = -202;
          }, 760);

          // clearTimeout(timeOut)
          // timeOut = null
        }
      }, 2000);
    },
    mousemove() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
    mouseleave() {
      window.clearInterval(this.timer);
      this.carousel();
    }
  }
}
</script>

<style lang="less" scoped>

.div{
  width: 202px;
  height: 175px;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  // border: 1px solid #000;
}
ul{
  width: 1010px;
  position: absolute;
  overflow: hidden;
  // transform: translateX(-202);
  // transition: all .75s ease-in-out;
}
li{
  width: 202px;
  height: 144px;
  list-style: none;
  float: left;
  overflow: hidden;
  img{
    width: 202px;
    height: 144px;
  }
}
.span{
  width: 120px;
  // margin: 4px auto;
  position: absolute;
  right: 40px;
  bottom: 0;
  span{
    padding: 0 10px;
    margin: 0 5px;
    cursor: pointer;
    background: rgb(194, 192, 192);
  }
}
.btn{
  // display: none;
  span{
    position: absolute;
    top: 60px;
    cursor: pointer;
  }
  .left{
    left: 10px;
  }
  .right{
    right: 10px;
  }
}
.current{
  background: rgb(238, 61, 61);
  color: rgb(238, 61, 61);
}
</style>
