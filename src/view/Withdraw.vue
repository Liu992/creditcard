<template>
  <div class="withdraw">
    <div class="withdraw_top">
      <div class="withdraw_top_content">
        <span class="content_tip">当前可提金额（元）</span>
        <span class="content_num">500</span>
      </div>
    </div>
    <div class="withdraw_bottom">
      <el-button type="primary">提现</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.withdraw{
  width: 100%;
}
.withdraw .withdraw_top{
  width: 100%;
  padding: 20px;
}
.withdraw .withdraw_top .withdraw_top_content{
  width: 100%;
  background: RGBA(52, 169, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.withdraw .withdraw_top .withdraw_top_content .content_tip{
  padding-top:20px; 
  color: RGBA(151, 151, 151, 1);
  font-size: 10px;
}
.withdraw .withdraw_top .withdraw_top_content .content_num{
  padding-bottom: 20px;
  margin-top:8px;
  font-size: 14px;
  color:#34A9FF;
}
.withdraw .withdraw_bottom{
  margin-top:15px;
  width: 100%;
  padding: 0 20px;
}
.withdraw .withdraw_bottom .el-button{
  width: 100%;
}
</style>