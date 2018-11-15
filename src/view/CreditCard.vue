<template>
  <div class="creditcard">
    <div class="creditcard_banner">
      <img src="../assets/images/banner.png" alt="">
    </div>
    <div class="creditcard_content">
      <ul class="creditcard_ul">
        <li>
          <span class="title">姓名</span>
          <div class="inp">
            <input type="text" placeholder="请输入申请人姓名" v-model="userMessage.name">
            <i v-if="errorType.indexOf('name')!==-1" class="el-icon-error warning"></i>
          </div>
        </li>
        <li>
          <span class="title">身份证号</span>
          <div class="inp">
            <input 
              type="text" 
              placeholder="请输入申请人身份证号" 
              v-model="userMessage.IdNumber"
              @blur="verifyNumber('idnumber')"
            >
            <i v-if="errorType.indexOf('IdNumber')!==-1" class="el-icon-error warning"></i>
          </div>
        </li>
        <li>
          <span class="title">手机号</span>
          <div class="inp">
            <input type="text" placeholder="请输入申请人手机号" v-model="userMessage.phone">
            <i v-if="errorType.indexOf('phone')!==-1" class="el-icon-error warning"></i>
          </div>
        </li>
        <li>
          <span class="title">短信验证码</span>
          <div class="inp sendcode">
            <input type="text" placeholder="请输入验证码" v-model="userMessage.code">
            <i v-if="errorType.indexOf('code')!==-1" class="el-icon-error warning"></i>
          </div>
          <el-button type="primary" @click="sendSMS">发送</el-button>
        </li>
      </ul>
      <div class="creditcard_tip">
        申请人信息须与信用卡申请表所填信息一致
      </div>
      <div class="creditcard_btn">
        <el-button type="primary" @click="nextSub">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      errorType: [],
      userMessage: {
        name: "",
        IdNumber: "",
        phone: "",
        code: ""
      }
    };
  },
  methods: {
    verifyNumber(type) {
      let reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
      let reg1 = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (
        type === "idnumber" &&
        !reg.test(this.userMessage.IdNumber) &&
        this.userMessage.IdNumber !== ""
      ) {
        this.tipError("身份证号码格式不正确");
        return false;
      }
      if (
        type === "phone" &&
        !reg.test(this.userMessage.phone) &&
        this.userMessage.phone !== ""
      ) {
        this.tipError("手机号码格式不正确");
        return false;
      }
    },
    tipError(message) {
      this.$notify({
        title: "警告",
        message: message,
        type: "warning"
      });
    },
    sendSMS() {
      console.log("发送");
    },
    nextSub() {
      for (let attr in this.userMessage) {
        if (this.userMessage[attr] === "") {
          this.errorType.push(attr);
        }
      }
      if (this.errorType.length !== 0) {
        setTimeout(() => {
          this.errorType = [];
        }, 2000);
        return false;
      }
    }
  }
};
</script>
<style>
.el-notification {
  width: 230px;
  padding: 8px;
}
</style>
<style scoped>
.creditcard {
  width: 100%;
}
.creditcard .creditcard_banner {
  width: 100%;
}
.creditcard .creditcard_banner img {
  width: 100%;
}
.creditcard .creditcard_content {
  margin-bottom: 30px;
}
.creditcard .creditcard_content .creditcard_ul {
  width: 100%;
}
.creditcard .creditcard_content .creditcard_ul li {
  padding: 14px 20px;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.creditcard .creditcard_content .creditcard_ul li .title {
  font-size: 15px;
  color: #666666;
  display: block;
  width: 100px;
}
.creditcard .creditcard_content .creditcard_ul li .inp {
  flex: 1;
  display: flex;
  align-items: center;
}
.creditcard .creditcard_content .warning {
  color: #f56c6c;
}
.creditcard .creditcard_content .sendcode {
}
.creditcard .creditcard_content .creditcard_ul li .el-button {
  font-size: 10px;
  padding: 4px 12px;
}
.creditcard .creditcard_content .creditcard_ul li input {
  font-size: 13px;
  flex: 1;
}
.creditcard
  .creditcard_content
  .creditcard_ul
  li
  input::-webkit-input-placeholder {
  color: #bdbdbd;
}
.creditcard .creditcard_tip {
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  color: #979797;
}
.creditcard .creditcard_btn {
  width: 100%;
  padding: 0 20px;
}
.creditcard .creditcard_btn .el-button {
  width: 100%;
}
</style>