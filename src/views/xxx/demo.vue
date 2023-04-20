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
      <div class="left01">
        <img src="../../assets/main01/left01.png" />
      </div>
      <div class="right01">
        <img src="../../assets/main01/right01.png" />
      </div>
    
      <!-- 
    <div class="exhibit_card">
      <div class="exhibit_little">红色文物展区</div>
      <div class="exhibit_size">
        <p style="margin-left: 480px">2022.05.01-2022.10.01</p>
        <p>
          为庆祝中国共产党成立100周年，本展区展示了建国初期时的红色革命文物，包括枕头和枕顶等。红色革命文物是历史、是记忆、是传统，是新中国的重要文化基因，也是中华民族文化自信的底色与底气，它印证着来路，昭示着未来。积极开展党史学习教育，通过参观革命文物，从中汲取红色力量。
        </p>
      </div>


      <div class="exhibit_img"></div>
    </div> -->
    </div>
  </div>
</template>
    
    
    
<script>
export default {};
</script>
    
    <style>

    

.exhibit {
  position: absolute;
  background-image: url("../../assets/img/context.png");
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 1200px;
  height: 650px;
}

/*临时展览*/
.exhibit_title {

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

/*顶部花纹*/
.top_logo {
  position: absolute;
transform: scale(0.2);
  left: 0;
  right: 0;
  top:-70px;
}

/*右下角logo*/
.co_labels {
  position: absolute;
  bottom: 0;
  right: 0;
}

/*临时展览结束*/
</style>