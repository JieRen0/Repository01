<template>
    <div class="wrapper">
        <div class="footer">
            <div class="f_top">
                <div class="logo1">
                    <img src="../assets/img/logo1.png" alt="logo1">
                </div>
                <div class="logo2"><img src="../assets/img/logo2.png" alt="logo2"></div>
                <div class="f_line">

                </div>
                <div class="footer_mid">
                    <ul class="f_ullist">
                        <li class="f_libt">
                            <a href="" class="f_lib">本馆概况</a>
                            <ul class="f_droplist">
                                <li><a href="">本馆简介</a></li>
                                <li><a href="">组织机构</a></li>
                                <li><a href="">大事迹</a></li>
                            </ul>

                        </li>
                        <li class="f_libt">
                            <a href="" class="f_lib">资讯动态</a>
                            <ul class="f_droplist">
                                <li><a href="">新闻动态</a></li>
                                <li><a href="">通知公告</a></li>

                            </ul>
                        </li>
                        <li class="f_libt">
                            <a href="" class="f_lib">教学科研</a>
                            <ul class="f_droplist">
                                <li><a href="">教学实践</a></li>
                                <li><a href="">学术活动</a></li>
                                <li><a href="">科研成果</a></li>
                            </ul>
                        </li>
                        <li class="f_libt">
                            <a href="" class="f_lib">科普教育</a>
                            <ul class="f_droplist">
                                <li><a href="">科普知识</a></li>
                                <li><a href="">科普活动</a></li>
                                <li><a href="">志愿服务</a></li>
                            </ul>
                        </li>
                        <li class="f_libt">
                            <a href="" class="f_lib">陈列展览</a>
                            <ul class="f_droplist">
                                <li><a href="">常设展览</a></li>
                                <li><a href="">临时展览</a></li>
                                <li><a href="">馆藏文物</a></li>
                                <li><a href="">数字展厅</a></li>
                                <li><a href="">藏品捐赠</a></li>
                            </ul>
                        </li>
                        <li class="f_libt">
                            <a href="" class="f_lib">服务指南</a>
                            <ul class="f_droplist">
                                <li><a href="">参观须知</a></li>
                                <li><a href="">预约参观</a></li>
                                <li><a href="">交通指南</a></li>
                                <li><a href="">文创中心</a></li>
                                <li><a href="">公众留言</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="f_line2">

                </div>
                <div class="footer_right">
                    <img src="../assets/img/二维码.png" alt="二维码">
                    <p>扫码关注公众号</p>
                    <button>友情链接</button>
                </div>
            </div>

            <div class="address">
                <span>
                            <p>馆址：河南省郑州市新郑市龙湖镇祥和路1号 电话：0371-62634307</p>
                            <p style="text-indent:40px;    line-height: 30px;">Copyright2023河南工程学院纺织服装博物馆版权所有</p>
                        </span>
            </div>
        </div>

    </div>

</template>

<script>
export default {
  name: 'MyFooter',
  // props: {
  //   title: String,
  //   content: String
  // }
}
</script>
<style scoped>
* {


    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

body {
    height: auto;
}

.wrapper {
    width: 100%;
}

/* 中间部分结束 */

/* 最下面 */

.footer {
margin-top:1500px;
    /* top: 1700px; */
    background-image: url(../assets/img/underbackground.png);
    width: 100%;
    height: 500px;
   
}

.footer .f_top {
    box-sizing: border-box;
    border-bottom: 1px solid #D6D2D2;
    border-top: 1px solid #D6D2D2;
    width: 100%;
    margin-top: 40px;
    height: 350px;
}

/* logo图片 */

.logo1 {
    position: absolute;
    transform: scale(0.7);
    top: 110px;
    margin-left: 180px;
}

.logo2 {
    position: absolute;
    transform: scale(0.7);
    top: 150px;
    margin-left: 20px;
}

.footer .footer_mid .f_ullist {
    position: absolute;
    display: flex;
    left: 450px;
    height: 300px;
    width: 700px;
    top: 60px;
}

.footer img {}

.footer .footer_mid .f_ullist .f_lib {
    font-size: 18px;
    color: #F1E7D4;
}

.footer .footer_mid .f_ullist li {
    position: relative;
    border: none;
    width: 130px;
    text-align: center;
    line-height: 30px;
    padding-top: 10px;
    padding-right: 25px;
    font-size: 15px;
}

.footer .footer_right {
    position: absolute;
    top: 70px;
    left: 1285px;
    transform: scale(0.7);
    color: #F1E7D4
}

/* 二维码 */

/* 扫码关注公众号 */

.footer_right p {
    margin-top: 5px;
    margin-left: 15px;
}

/* 友情链接按钮 */

.footer .footer_right button {
    border: 1px solid #FFFFFF;
    border-radius: 20px;
    line-height: 40px;
    width: 120px;
    margin-top: 20px;
    margin-left: 15px;
    text-align: center;
    font-size: 20px;
}

.footer .address {
    position: absolute;
    top: 420px;
    left: 600px;
    height: 100px;
    font-size: 14px;
    color: #F1E7D4;
}

.footer .f_line {
    position: relative;
    left: 370px;
    top: 20px;
    width: 15px;
    height: 240px;
    border-right: solid #777777 1px;
}

.footer .f_line2 {
    position: relative;
    left: 1250px;
    top: -220px;
    width: 15px;
    height: 240px;
    border-right: solid #777777 1px;
}

.footer_mid a {
    color: #F1E7D4;
}
</style>
