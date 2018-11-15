<template>
  <div class="introduce">
    <el-button type="primary" class="next" @click="toCreditCard">下一步</el-button>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route.params.id)
  },
  methods: {
    toCreditCard () {
      this.$router.push({path:"/creditcard"})
    }
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