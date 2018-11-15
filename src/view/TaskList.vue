<template>
  <div class="tasklist">
    <ul class="task_ul">
      <li v-for="(item, index) in tasklist" :key="index" @click="toInvitation(index)">
        <div class="li_l">
          <span class="li_l_tip">推广信用卡，并协助1位客户成功下卡</span>
          <span class="li_l_text">佣金30元，办卡用户20元</span>
        </div>
        <div class="li_r">
          0/1 <i class="el-icon-arrow-right"></i>
        </div>
      </li>
    </ul>
    <div class="more">
      <button class="more_btn">更多佣金任务，敬请期待...</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasklist:[]
    }
  },
  methods: {
    toInvitation (id) {
      this.$router.push("/introduce/"+id+"")
    }
  },
  mounted () {
    this.tasklist = [
      {
        assistNum: 10,
        commission: 30,
        userAmount: 20
      },
      {
        assistNum: 11,
        commission: 31,
        userAmount: 21
      },
      {
        assistNum: 12,
        commission: 32,
        userAmount: 23
      }
    ]
  }
};
</script>

<style scoped>
.tasklist{
  width: 100%;
}
.tasklist .task_ul{
  width: 100%;
  border-bottom:1px solid #EDEDED;
}
.tasklist .task_ul li{
  width: 100%;
  padding: 18px 20px;
  border-top:1px solid #EDEDED;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tasklist .task_ul li .li_l span{
  display: block;
}
.tasklist .task_ul li .li_l .li_l_tip{
  font-size: 12px;
  color:#979797;
}
.tasklist .task_ul li .li_l .li_l_text{
  color:#666666;
  font-size: 20px;
}
.tasklist .task_ul li .li_r{
  font-size: 12px;
  color:#979797;
}
.tasklist .more{
  width: 100%;
  margin-top:20px;
  padding: 0 20px;
}
.tasklist .more_btn{
  width: 100%;
  height: 34px;
  background: #EDEDED;
  border:none;
  outline: none;
  border-radius: 2px;
  font-size: 12px;
  color:#979797;
}
</style>