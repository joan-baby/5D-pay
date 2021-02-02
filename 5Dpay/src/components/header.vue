<template>
  <div id="app" class="bg-ff">
    <div class="ec head vam">
      <img src="../assets/img/logo.png" alt="">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header',
  components: {
  }
}
</script>

<style>
.head{
  height: 80px;
}
.ec{
  width: 1200px;
  margin: auto;
}
*{margin:0;padding:0;box-sizing:border-box;
	-webkit-tap-highlight-color:rgba(255,0,0,0);/*解决ios移动端点击出现黑色阴影*/
}
ul,ul li{list-style:none}
input,button{outline:none;}

.fl{ float:left;}.fr{ float:right}
.fl{ float:left;}.fr{ float:right}
.dn{display:none}.db{display:block}.dib{ display:inline-block}
.pa{ position:absolute}.pr{ position:relative}
.os{overflow-y:scroll;}.oh{ overflow:hidden}
.ma{ margin:auto;}
.wh-1{ width:100%; height:100%;}
.wh-1a{ width:100%; heigh:auto;}
.cf:after {content:""; display:block;clear:both;}
.yc{position: absolute;top: 50%;-webkit-transform: translateY(-50%);transform: translateY(-50%);}
.xc{position: absolute;left: 50%;-webkit-transform: translateX(-50%);transform: translateX(-50%);}
.pac{ position:absolute;top:50%; left:50%;-ms-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);-o-transform: translate(-50%,-50%);
	-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);}
/*文字*/
.cp,[href]{ cursor:pointer}
.vam{ vertical-align: middle}.vat{ vertical-align: top} .vab{ vertical-align:bottom}
.tl{ text-align:left;}.tc{ text-align:center;}.tr{ text-align:right;}
.ti-2{text-indent:2em;}
.fw-4{font-weight: 400!important;}.fw-8{font-weight: 800!important;}
.ls-1{letter-spacing:1px;}.ls-2{letter-spacing:2px;}
.wsn{white-space:nowrap;}/*文字不换行*/
.tj{text-align: justify;}/*文字填满容器*/
.otw{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}/*文字超出显示...*/
</style>
