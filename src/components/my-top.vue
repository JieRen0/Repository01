<template>
  <div class="wrapper ">
    <div class="head">
      <div class="nav">
        <div class="logo1">
          <img src="../assets/404_images/导航栏logo1.png" alt="图片加载中..." />
        </div>
        <div class="logo2">
          <img src="../assets/404_images/导航栏logo2.png" alt="图片加载中..." />
        </div>
        <!-- 图片上方右边导航栏 -->
        <ul class="ullist">
          <li class="libt">
            <a href="" class="lib">本馆概况</a>
            <ul class="droplist">
              <li><a href="">本馆简介</a></li>
              <li><a href="">组织机构</a></li>
              <li><a href="">大事迹</a></li>
            </ul>
          </li>
          <li class="libt">
            <a href="" class="lib">资讯动态</a>
            <ul class="droplist">
              <li><a href="">新闻动态</a></li>
              <li><a href="">通知公告</a></li>
            </ul>
          </li>
          <li class="libt">
            <a href="" class="lib">教学科研</a>
            <ul class="droplist">
              <li><a href="">教学实践</a></li>
              <li><a href="">学术活动</a></li>
              <li><a href="">科研成果</a></li>
            </ul>
          </li>
          <li class="libt">
            <a href="" class="lib">科普教育</a>      
              <ul class="droplist">
              <li>
                <a href="">科普知识</a>
              </li>
              <li><a href="">科普活动</a></li>
              <li><a href="">志愿服务</a></li>
            </ul>
          </li>
          <li class="libt">
            <a href="" class="lib">陈列展览</a>
            <ul class="droplist">
              <li><a href="">常设展览</a></li>
              <li><a href="">临时展览</a></li>
              <li><a href="">馆藏文物</a></li>
              <li><a href="">数字展厅</a></li>
            </ul>
          </li>
          <li class="libt">
            <a href="" class="lib">服务指南</a>
            <ul class="droplist">
              <li><a href="">参观须知</a></li>
              <li><a href="">预约参观</a></li>
              <li><a href="">交通指南</a></li>
              <li><a href="">文创中心</a></li>
              <li><a href="">公众留言</a></li>
            </ul>
          </li>
          <li class="libt_service">
            <a href="" class="lib_service">服务指南</a>
          </li>
        </ul>
        <div class="search">
          <el-input
            type="text"
            prefix-icon="el-icon-search"
            v-model="input01"
          ></el-input>
          <el-button icon="el-icon-user-solid" type="text"></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  data(){
    return {
      input01: ''
    }
  },

  

  // props: {
  //   title: String,
  //   content: String
  // }
};
</script>

<style scoped>
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

.wrapper {
  width: 100%;
  height: auto;
}

.head {
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.nav {
  position: relative;
  background: rgba(19, 19, 13, 0.78);
  display: block;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  box-shadow: 0px 2px 2px 0px #ffffff3f;
  height: 100px;
  font-size: 20px;
}

.head .nav img {
  float: left;
}

.libt {
  float: left;
  width: 100px;
  height: 40px;
  text-align: center;
}

.lib {
  line-height: 100px;
  color: #ede9d0;
}

.other_lib {
  border: 1px solid #7777;
  height: 50px;
  width: 100px;
  border-radius: 40px;
}

.libt a {
  color: #ede9d0;
  display: block;
}

.libt a:hover {
  background: #594f36;
}

.libt .droplist a:hover {
  background: #594f36;
}

.droplist {
  background: rgb(239, 242, 246);
  box-shadow: 0px 1px 2px #666;
  display: none;
  text-align: center;
  z-index: 2;
  position: relative;
  padding-top: 20px;
  margin-top: -20px;
}

.droplist_inner {
  background: rgb(33, 127, 249);
  box-shadow: 0px 1px 2px #666;
  display: none;
  text-align: center;
  z-index: 2;
  position: relative;
  padding-top: 20px;
  margin-top: -20px;
}

.libt:hover .droplist {
  display: block;
  cursor: pointer;
}

.droplist li {
  border-top: none;
  line-height: 60px;
}

.ullist {
  position: absolute;
  left: 40%;
}

.other_lib {
  line-height: 100px;
  position: relative;
  right: -20px;
  color: #ede9d0;
}

a {
  list-style: none;
}

li {
  list-style: none;
}

.search {
  float: right;
  top: 35px;
  right: 65px;
  position: absolute;
}

.search button {
  position: absolute;
  top: -4px;
  right: -50px;
  width: 40px;
  font-size: 20px;
  color: #c3a275;
  height: 40px;
  border-style: none;
  background: #594f36;
  border-radius: 25px;
}

.lunbo {
  width: 100%;
  position: absolute;
  top: 80px;
  z-index: 1;
  display: flex;
}

.content {
  width: 100%;
  height: 300px;
  margin: 20px auto;
  position: relative;
}

.lunbo .content .item a img {
  width: 100%;
}

#item {
  width: 100%;
  height: 100%;
}

.item {
  position: absolute;
  opacity: 0;
  transition: all 1s;
}

.item.active {
  opacity: 1;
}

img {
  width: 100%;
}

#btn-left {
  width: 30px;
  height: 69px;
  font-size: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  line-height: 69px;
  padding-left: 5px;
  z-index: 10;
  /*始终显示在图片的上层*/
  position: absolute;
  left: 0;
  top: 100%;
  transform: translateY(-60%);
  /*使按钮向上偏移居中对齐*/
  cursor: pointer;
  opacity: 0;
  /*平时隐藏*/
}

.lunbo:hover #btn-left {
  /*鼠标滑入，显示图标*/
  opacity: 1;
}

#btn-right {
  width: 26px;
  height: 69px;
  font-size: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  line-height: 69px;
  padding-left: 5px;
  z-index: 10;
  position: absolute;
  right: 0;
  top: 100%;
  cursor: pointer;
  opacity: 0;
  transform: translateY(-60%);
}

.lunbo:hover #btn-right {
  opacity: 1;
}

#circle {
  height: 20px;
  display: flex;
  position: absolute;
  bottom: -270px;
  right: 650px;
}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  margin: 5px;
}

.white {
  background-color: #ffffff;
}

.lunbo_text {
  z-index: 2;
  position: relative;
  top: 500px;
  left: 800px;
  font-size: 30px;
  word-break: normal;
}

/* 中间部分开始 */

.m_center {
  position: relative;

  width: 100%;
  background-image: url("../assets/main01/背景底纹图.png");
}

.m_center .m_left {
  float: left;
  border: 1px solid #ccc;
  height: 320px;
  width: 200px;
  margin-left: 100px;
  background: #eee;
}
.m_center .m_left li {
  font-size: 20px;
  width: 200px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}
.m_center .m_left li:hover {
  background-color: #ccc;
}
.m_center .m_left .m_co {
  background-color: #666;
}

.m_center .m_right_bottom {
  float: left;
  margin-left: 340px;
  margin-top: -150px;
  margin-right: 100px;
  background: #ccc;
}

.m_center .m_right_bottom img {
  float: left;
  width: 400px;
  height: 250px;
  padding-left: 50px;
  padding-bottom: 10px;
}

.m_center .m_right_bottom p {
  word-wrap: break-word;
  word-break: break-all;
}

.m_center .m_right_bottom .jianjie p {
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 15px;
}

.m_center .m_right .m_item h6 {
  float: left;
  padding-right: 400px;
  padding-left: 40px;
  margin-top: 120px;
}

.m_center .m_right .m_item hr {
  float: left;
  size: 1px;
  width: 1020px;
  margin-left: 40px;
}

/* 组织机构 */
.m_center .m_right_bottom2 {
  position: relative;
  float: left;
  left: 40px;
  width: 1020px;
  height: 400px;
  top: 20px;
  background: #ccc;
}

/* 大事迹 */
.m_center .m_right_bottom3 {
  position: relative;
  float: left;
  left: 40px;
  width: 1020px;
  height: 400px;
  top: 20px;
  background: #ccc;
}
.m_center .m_right_bottom3 p {
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  background-color: #666;
  height: 50px;
  font-size: 25px;
  text-align: center;
  line-height: 50px;
}
/* 中间部分结束 */

/* 最下面 */
.footer {
  position: relative;
  background-image: url("../assets/main01/底部的.png");
  top: 4000px;
  box-sizing: border-box;
  border-top: 1px solid #666;
  width: 100%;
  height: 500px;
}
.footer .f_top {
  box-sizing: border-box;
  border-bottom: 1px solid #666;
  width: 100%;
  height: 350px;
}

.footer .footer_left {
  position: absolute;
  float: left;
  left: 100px;
  top: 30px;
}
.footer .footer_mid .f_ullist {
  position: absolute;
  display: flex;
  left: 350px;
  height: 300px;
  width: 700px;
  top: 30px;
}
.footer .footer_mid .f_ullist .f_lib {
  font-size: 22px;
}
.footer .footer_mid .f_ullist li {
  position: relative;
  border: none;
  width: 130px;
  text-align: center;
  line-height: 30px;
  padding-top: 10px;
  padding-right: 25px;
  font-size: 18px;
}
.footer .footer_right {
  position: absolute;
  top: 30px;
  left: 1200px;
}
.footer .footer_right button {
  border: 1px solid #ccc;
  border-radius: 25%;
  line-height: 40px;
  text-align: center;
  font-size: 22px;
}
.footer .address {
  position: absolute;
  top: 400px;
  left: 400px;
  height: 100px;
  font-size: 20px;
}
.footer .f_line {
  position: relative;
  left: 270px;
  top: 20px;
  width: 15px;
  height: 280px;
  border-right: solid #000 1px;
}
.footer .f_line2 {
  position: relative;
  left: 1150px;
  top: -260px;
  width: 15px;
  height: 280px;
  border-right: solid #000 1px;
}

.logo1 {
  transform: scale(0.6);
  position: absolute;
  left: 40px;
}
.logo2 {
  transform: scale(0.6);
  position: absolute;
  left: 24px;
  top: -15px;
}

.p01 {
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 139px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #ffffff;

  background: rgba(255, 255, 255, 0.25);
  transform: rotate(0.16deg);
  position: absolute;
  width: 667.65px;
  height: 254.96px;
  left: 0px;
  top: 344px;
}
.p01 p {
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 96px;
  line-height: 139px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  margin-left: 50px;
  color: #ffffff;

  transform: rotate(0.16deg);
}

.longgraph {
  background-image: url("../assets/main01/背景底纹图.png");
  position: relative;

  width: 100%;
}
.end {
  height: 400px;
  top: 10000px;
  background-image: url("../assets/main01/底部的.png");
}
.xinwen {
  position: absolute;
  background-image: url("../assets/main01/新闻动态.png");
  width: 950px;
  height: 800px;
  left: 44px;
  top: 20px;
}
.xinwen h2 {
  position: absolute;
  top: 50px;
  left: 100px;
  color: #aa793f;
}
.xinwen span {
  position: absolute;
  padding: 10px;
  top: 50px;
  left: 800px;
  color: #aa793f;
  border: 2px solid #c3a275;
  width: 89px;
  height: 35px;

  font-family: "Source Han Sans SC";

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  /* 状态栏选中 */

  color: #aa793f;

  transform: matrix(1, 0, 0, 1, 0, 0);
}
.longpage {
  background-image: url("../assets/main01/背景底纹图.png");
  position: relative;
  margin-top: -5px;
  height: 4000px;
  width: 100%;
}
.left01 {
  transform: scale(0.04);
  position: relative;
  left: -410px;
  top: -580px;
}
.right01 {
  transform: scale(0.04);
  position: relative;
  left: -245px;
  top: -1860px;
}
.zongse_left {
  position: absolute;
  width: 399px;
  height: 380px;
  left: 19px;
  top: 115px;
  background: #cba56c;
}
.zongse_left img {
  width: 405px;
  position: absolute;
  left: -3px;
  top: 210px;
}
.zongse_left p {
  position: absolute;
  width: 383.5px;
  height: 88.71px;
  left: 0px;
  top: 100px;
  padding: 30px;

  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  text-indent: 28px;
  color: #ffffff;

  transform: rotate(0.16deg);
}
.zongse_left h6 {
  position: absolute;
  width: 355.2px;
  height: 30.57px;
  left: 0px;
  top: -20px;
  padding: 40px;

  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.02em;

  color: #ffffff;

  transform: rotate(0.16deg);
}

.zongse_right {
  position: absolute;
  width: 399px;
  height: 380px;
  left: 550px;
  top: 165px;
  background: #cba56c;
}
.zongse_right img {
  width: 405px;
  position: absolute;
  right: -3px;
  top: 210px;
}

.zongse_right p {
  position: absolute;
  width: 383.5px;
  height: 88.71px;
  left: 0px;
  top: 100px;
  padding: 30px;

  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-indent: 28px;
  align-items: center;
  display: flex;
  letter-spacing: 0.02em;

  color: #ffffff;

  transform: rotate(0.16deg);
}
.zongse_right h6 {
  position: absolute;
  width: 355.2px;
  height: 30.57px;
  left: 0px;
  top: -20px;
  padding: 40px;

  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.02em;

  color: #ffffff;

  transform: rotate(0.16deg);
}
.zongse_end {
  position: absolute;
  width: 300px;
  height: 380px;
  left: 980px;
  top: 12px;
  background: #cba56c;
}
.zongse_end h6 {
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 43px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #ffffff;

  transform: matrix(1, 0, 0, 1, 0, 0);

  position: absolute;
  left: 50px;
}

.zongse_end .one {
  position: absolute;
  width: 410px;
  height: 345px;
  left: 1294px;
  top: 1342px;

  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 157.8%;
  /* or 38px */
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #ffffff;
}
.search input {
  position: relative;
  box-sizing: border-box;
  width: 110px;
  height: 30px;
  font-size: 20px;
  float: left;
  color: #ede9d0;
  top: 3px;
  font-weight: 300;
  font-size: 15px;
  border-style: none;
  background: #594f36;
  border-radius: 25px;
}

.lib_service {
  position: absolute;
  top: 28px;
  width: 100px;
  padding-top: 10px;
  height: 40px;
  background: #594f36;
  box-shadow: 0px 4px 0px rgba(195, 162, 117, 0.7);
  border-radius: 25px;

  align-items: center;
  letter-spacing: 0.02em;
}

.lib_service:hover {
  position: absolute;
  top: 28px;
  width: 100px;
  padding-top: 10px;
  height: 40px;
  background: #5b4100;
  box-shadow: 0px 4px 0px #ede9d0;
}

.libt_service {
  float: left;
  color: #ede9d0;
  text-align: center;
}
</style>
