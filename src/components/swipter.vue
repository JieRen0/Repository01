<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item class="focus" v-for="(item, index) in img" :key="index">
      <img :src="item.path" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: "MyFocus",
  data() {
    return {
      img: [
        { path: require("@/assets/focus/focus1.png") },
        { path: require("@/assets/focus/focus2.png") },
        { path: require("@/assets/focus/focus3.png") },
        { path: require("@/assets/focus/focus4.png") },
        { path: require("@/assets/focus/focus5.png") },
        { path: require("@/assets/focus/focus6.png") },
        { path: require("@/assets/focus/focus7.png") },
        { path: require("@/assets/focus/focus8.png") },
        { path: require("@/assets/focus/focus9.png") },
        { path: require("@/assets/focus/focus10.png") },
      ],
    };
  },
};
</script>
  <style>
.el-carousel__container {
  background-color: rgba(0, 0, 0, 1) !important;
  position: relative;
  z-index: 1;
  height: 770px;
}
.el-carousel__container button {
  width: 60px;
  height: 60px;
  font-size: 35px;
}
.el-carousel__indicators li {
  height: 15px;
  position: relative;
  z-index: 99;
  transform: translateY(-100px);
}
.el-carousel__indicators li button {
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background-color: #d9d9d9;
}
.el-carousel__item img {
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  width: 100%;
}
</style>
