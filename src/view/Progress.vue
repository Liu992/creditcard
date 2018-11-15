<template>
  <div class="progress">
    <div class="progress_banner">
      <img src="../assets/images/banner.png" alt="">
    </div>
    <div class="progress_content">
      <ul class="progress_ul">
        <li>
          <img src="../assets/images/bank1.png" alt="">
          <span>交通银行</span>
        </li>
        <li>
          <img src="../assets/images/bank2.png" alt="">
          <span>浦发银行</span>
        </li>
        <li>
          <img src="../assets/images/bank3.png" alt="">
          <span>渣打银行</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .progress{
    width: 100%;
  }
  .progress .progress_banner{
    width: 100%;
  }
  .progress .progress_banner img{
    width: 100%;
  }
  .progress .progress_content{
    width: 100%;
    margin-top:32px;
  }
  .progress .progress_content .progress_ul{
    width: 100%;
    display: flex;
  }
  .progress .progress_content .progress_ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .progress .progress_content .progress_ul li img{
    width: 44px;
  }
  .progress .progress_content .progress_ul li span{
    color:#666666;
    font-size: 15px;
    margin-top:10px;
  }
</style>