<template>
  <div class="invitation">
    <div class="invitation_alluser">
      <span class="alluser_tip">我的好友</span>
      <span class="alluser_num">{{userNum}} <i>人</i></span>
    </div>
    <div class="invitation_list">
      <table class="invitation_table">
        <thead>
          <tr>
            <th>用户昵称</th>
            <th>注册日期</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in userList" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.date}}</td>
            <td>{{item.state==="success"?"成功":"未下卡"}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userNum: 0,
      userList: []
    }
  },
  mounted () {
    this.userList = [
      {
        name: "123 9999 1212",
        date: "2018-10-19",
        state: 'success'
      },
      {
        name: "111 2222 3333",
        date: "2018-10-10",
        state: 'fail'
      },
      {
        name: "123 9999 0000",
        date: "2018-10-01",
        state: 'success'
      }
    ]
  }
};
</script>

<style scoped>
  .invitation{
    width: 100%;
  }
  .invitation .invitation_alluser{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:24px;
  }
  .invitation .invitation_alluser .alluser_tip{
    font-size: 12px;
    margin-bottom: 10px;
    color:#979797;
  }
  .invitation .invitation_alluser .alluser_num{
    color:#345FFF;
    font-size: 32px;
  }
  .invitation .invitation_alluser .alluser_num i{
    font-size: 15px;
    font-style: normal;
  }
  .invitation .invitation_list{
    width: 100%;
  }
  .invitation .invitation_table{
    width: 100%;
    text-align: center;
    margin-top:16px;
  }
  .invitation .invitation_table thead{
    /* display: flex;
    width: 100%; */
  }
  .invitation .invitation_table thead tr{
    background:#EDEDED;
  }
   .invitation .invitation_table thead th{
     font-size: 12px;
     color:#666666;
     padding: 6px 0;
   }
  .invitation .invitation_table tbody td{
    padding: 16px 0;
    color:#666666;
    border-bottom: 1px solid #EDEDED;
    font-size: 15px;
  }
</style>