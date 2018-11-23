<template>
  <div class="tasklist">
    <ul class="task_ul">
      <li v-for="(item) in tasklist" :key="item.id" @click="toInvitation(item.id)">
        <div class="li_l">
          <span class="li_l_tip">{{item.title}}</span>
          <span class="li_l_text"><b v-for="(item1, index1) in item.rules" :key="index1">{{item1.key}},</b></span>
        </div>
        <div class="li_r">
          <i class="el-icon-arrow-right"></i>
        </div>
      </li>
    </ul>
    <div class="more">
      <button class="more_btn">更多佣金任务，敬请期待...</button>
    </div>
  </div>
</template>

<script>
import * as service from "../service/index.js";
export default {
  data() {
    return {
      tasklist: []
    };
  },
  methods: {
    toInvitation(id) {
      this.$router.push("/introduce/" + id + "");
    },
    getTask() {
      service.taskList().then(res => {
        if (res.code === 200) {
          this.tasklist = res.data.rows
        } else {

        }
        console.log(res);
      });
    }
  },
  mounted() {
    this.getTask()
  }
};
</script>

<style scoped>
.tasklist {
  width: 100%;
}
.tasklist .task_ul {
  width: 100%;
  border-bottom: 1px solid #ededed;
}
.tasklist .task_ul li {
  width: 100%;
  padding: 18px 20px;
  border-top: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tasklist .task_ul li .li_l span {
  display: block;
}
.tasklist .task_ul li .li_l .li_l_tip {
  font-size: 12px;
  color: #979797;
}
.tasklist .task_ul li .li_l .li_l_text {
  color: #666666;
  font-size: 20px;
}
.tasklist .task_ul li .li_l .li_l_text b{
  font-weight: 400;
}
.tasklist .task_ul li .li_r {
  font-size: 12px;
  color: #979797;
}
.tasklist .more {
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
}
.tasklist .more_btn {
  width: 100%;
  height: 34px;
  background: #ededed;
  border: none;
  outline: none;
  border-radius: 2px;
  font-size: 12px;
  color: #979797;
}
</style>