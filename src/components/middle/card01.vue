<template>
  <!-- 临时展览 -->
  <div class="exhibit">
    <div class="exhibit">
      <div class="top_logo">
        <img src="../../assets/main01/top01.png" />
      </div>
      <div class="co_labels">
        <img src="../../assets/main01/co_logo.png" />
      </div>
      <div class="leftxx">
        <img src="../../assets/main01/left01.png" />
      </div>
      <div class="rightxx">
        <img src="../../assets/main01/right01.png" />
      </div>
    </div>
  </div>
</template>
      
      
      
  <script>
export default {};
</script>
      
<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

body {
  height: auto;
}
.exhibit {
  position: absolute;
  background-image: url("../../assets/img/context.png");
  margin: 0 auto;
  left: 22px;
  right: 0;
  width: 93%;
  height: 650px;
}

/*临时展览*/
.exhibit_title {
  float: left;
  position: relative;
  left: 60px;
  top: 25px;
  font-size: 25px;
  color: #aa793f;
  border-radius: 30px;
  width: 100px;
  text-align: center;
}

/*内部背景*/
.exhibit_card {
  position: absolute;
  background: #cba56c;
  width: 1100px;
  height: 550px;
  margin: 100px 100px;
}

/*白色展示小卡片*/
.exhibit_little {
  position: absolute;
  width: 230px;
  height: 80px;
  top: 80px;
  background: rgba(217, 217, 217, 0.39);
  /*文字部分*/
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  font-size: 22px;
  color: #ffffff;
}

/*下方图片*/
.exhibit_img {
  position: absolute;
  bottom: 0px;
  height: 280px;
  width: 100%;
}
/*文字div*/
.exhibit_size {
  position: absolute;
  top: 20px;
  left: 400px;
  color: #ffffff;
  letter-spacing: 0.03em;
  line-height: 25px;
  text-indent: 30px;
}

/*标签符号*/
.leftxx {
  transform: scale(1);
  position: absolute;
  left: 20px;
  top: 17px;
}
.rightxx {
  transform: scale(1);
  position: absolute;
  left: 165px;
  top: 17px;
}
/*顶部花纹*/
.top_logo {
  position: absolute;
  transform: scale(0.2);
  left: 0;
  right: 0;
  top: -70px;
}

/*右下角logo*/
.co_labels {
  position: absolute;
  bottom: -5px;
  right: -37px;
}

/*临时展览结束*/
</style>