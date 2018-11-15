<template>
  <div class="account">
    <div class="account_head">
      <img :src="userMessage.imgurl" alt="">
      <span class="phone">{{userMessage.phone}}</span>
      <span class="id">ID:{{userMessage.memberId}}</span>
    </div>
    <div class="account_list">
      <ul class="account_ul">
        <li @click="toList">
          <span class="li_text">我的邀请好友</span>
          <span>{{userMessage.friendsNum}}人 <i class="el-icon-arrow-right"></i></span>
        </li>
        <li @click="toProgress">
          <span class="li_text">进度查询</span>
          <span><i class="el-icon-arrow-right"></i></span>
        </li>
        <li @click="toWithdraw">
          <span class="li_text">提现</span>
          <span><i class="el-icon-arrow-right"></i></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  data () {
    return {
      userMessage: {
        imgurl: "../assets/images/head.jpg",
        phone: "13546354960",
        memberId: '09876',
        friendsNum: '0'
      }
    }
  },
  methods: {
    toList () {
      this.$router.push({path: "/invitation"})
    },
    toProgress () {
      this.$router.push({path: "/progress"})
    },
    toWithdraw () {
      this.$router.push({path: "/withdraw"})
    }
  }
};
</script>

<style scoped>
.account{
  width:100%;
}
.account .account_head{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:#333333;
}
.account .account_head img{
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin-top:25px;
  margin-bottom: 15px;
}
.account .account_head .phone{
  margin-bottom: 6px;
  font-size: 14px;
}
.account .account_list{
  width: 100%;
  margin-top:54px;
}
.account .account_list .account_ul{
  width: 100%;
}
.account .account_list .account_ul li{
  width: 100%;
  padding: 16px 20px;
  border-bottom: 1px solid #EDEDED;
  display: flex;
  justify-content: space-between;
}
.account .account_list .account_ul li .li_text{
  color:#666666;
}
.account .account_list .account_ul li span{
  color:#979797;
  font-size: 15px;
}
</style>