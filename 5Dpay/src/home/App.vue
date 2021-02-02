<template>
  <div id="app" >
    <Header/>
    <div class="home-bg">
      <img src="../assets/img/logo.png" alt="">
    </div>
    <Footer/>
  </div>
</template>

<script>

// import { language } from '../utils/common.js'//公共参数
import Header from '../components/header.vue'//头部
import Footer from '../components/footer.vue'//底部
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data() {
    text:{
      a:'1'
    }
  },
  created() {
    this.init()
  },
  methods: {
    init(){

    }
  }
}
</script>

<style scoped>

.home-bg{
  background: url('../assets/img/home_bg_1.png') no-repeat ;
  background-size: 100% auto;
  font-size: 16px;
  font-family: "Poppins-Light";
  color: #64646A;
}
</style>

