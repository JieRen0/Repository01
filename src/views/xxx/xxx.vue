<template>
  <div id="app">
	<f-cardone></f-cardone>
	<div class="aaa"><end-footer></end-footer></div>

  </div>
</template>

<script>
import Mycardone from "@/components/middle/card01";
import Footer from "@/components/my-footer";
import Focus from "@/components/swipter"
export default {
  name: "App",
  components: {
	"f-cardone":Mycardone,
    "end-footer": Footer,
	"f-focus":Focus,
  },

  data() {
    return {
      currentIndex: 0, //当前所在图片下标
      timer: null, //定时轮询
      imgArr: [
        { id: 0, url: "./img/banner01.jpg" },
        {
          id: 1,
          url: "./img/banner02.jpg",
        },
        {
          id: 2,
          url: "./img/banner03.jpg",
        },
        {
          id: 3,
          url: "./img/banner04.jpg",
        },
      ],
    };
  },
  methods: {
    //开启定时器
    startInterval() {
      // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex > this.imgArr.length - 1) {
          this.currentIndex = 0;
        }
      }, 3000);
    },
    // 点击左右箭头
    clickIcon(val) {
      if (val === "down") {
        this.currentIndex++;
        if (this.currentIndex === this.imgArr.length) {
          this.currentIndex = 0;
        }
      } else {
        /* 第一种写法
					this.currentIndex--;
					if(this.currentIndex < 0){
						this.currentIndex = this.imgArr.length-1;
					} */
        // 第二种写法
        if (this.currentIndex === 0) {
          this.currentIndex = this.imgArr.length;
        }
        this.currentIndex--;
      }
    },
    // 点击控制圆点
    changeImg(index) {
      this.currentIndex = index;
    },
    //鼠标移入移出控制
    changeInterval(val) {
      if (val) {
        clearInterval(this.timer);
      } else {
        this.startInterval();
      }
    },
  },
  //进入页面后启动定时轮询
  mounted() {
    this.startInterval();
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

.aaa{
	margin:0;
}
</style>