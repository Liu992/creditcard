<template>
  <div class="introduce">
    <el-button type="primary" class="next" @click="toCreditCard">下一步</el-button>
  </div>
</template>

<script>
import * as service from '../service/index.js';
export default {
  data(){
    return {
      userMessage: ""
    }
  },
  methods: {
    toCreditCard () {
      this.$router.push({path:"/creditcard"})
    },
    getUser () {
      service.getUser()
      .then(res => {
        this.userMessage = res
      })
    }
  },
  mounted () {
    this.getUser()
    console.log(this.$route.params.id)
  }
};
</script>

<style scoped>
.introduce{
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/banner.png');
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}
.introduce .next{
  width: 90%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>