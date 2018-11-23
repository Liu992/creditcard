<template>
  <div class="login">
    <div class="login_banner">
      <img :src="banner" alt="">
    </div>
    <div class="login_box">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入您的手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="sendCode" :error="errorMsg.code">
          <el-input v-model.number="ruleForm.code" placeholder="请输入短信验证码"></el-input>
          <i class="hei"></i>
          <el-button @click="sendSMS">发送</el-button>
        </el-form-item>
        <el-form-item prop="graphCode" class="sendCode" :error="errorMsg.graphCode">
          <el-input v-model="ruleForm.graphCode" placeholder="请输入您的图形验证码"></el-input>
          <img class="imgcode" :src="captchaSrc" alt="">
        </el-form-item>
        <el-form-item class="clause">
          <el-checkbox v-model="ruleForm.checked" @change="!ruleForm.checked">本人以阅读并同意以下条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="sub">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var checkCode = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("验证码不能为空"));
      } else {
        callback()
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else if (!(/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value))) {
        callback(new Error("请输入正确的手机格式"));
      } else {
        callback();
      }
    };
    var validateGraphCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入图形验证码"));
      } else {
        callback();
      }
    };
    return {
      banner:require('../assets/images/banner.png'),
      captchaSrc:"",
      errorMsg: {
        code: "",
        graphCode: ""
      },
      ruleForm: {
        checked: false,
        phone: "",
        code: "",
        graphCode: ""
      },
      rules: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
        graphCode: [{ validator: validateGraphCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.errorMsg.code = "";
      this.errorMsg.graphCode = "";
      this.$refs[formName].validate(valid => {
        let { phone, code, checked, graphCode } = this.ruleForm;
        // console.log(phone, code, checked, graphCode)
        if (!checked) {
          this.checkedError();
        }
        if (valid && checked) {
          this.errorMsg.code="短信验证码错误"
          this.errorMsg.graphCode="短信验证码错误"
          alert("submit!");
          // this.$router.push({ path: "/tasklist" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    checkedError() {
      this.$notify({
        // title: '警告',
        message: "请阅读条款",
        type: "warning"
      });
    },
    sendSMS() {
      console.log(123456789)
    }
  },
  created(){
    fetch("/api/captcha", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
    }).then(res => {
      return res.blob()
    }).then(res => {
      console.log(res)
    })
  },
  mounted() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<style>
.el-notification__icon {
  font-size: 20px;
}
.el-notification {
  width: 170px;
  padding: 10px !important;
}
.el-notification__content {
  margin: 0;
}
.el-notification__icon {
  height: 20px;
}
.login_banner {
  width: 100%;
  margin-bottom: 30px;
}
.login_banner img {
  width: 100%;
}
.login_box {
  padding: 0 20px;
}
.login_box .el-form-item.is-error .el-input__inner {
  border: 1px solid #dcdfe6;
}
.login_box .sendCode {
  /* margin-bottom: 4px; */
}
.login_box .sendCode .imgcode{
  width: 100px;
  height: 36px;
}
.login_box .clause{
  margin: -18px 0 16px 0;
}
.el-notification__closeBtn{
  top: 12px;
}
.login_box .sendCode .el-input__inner {
  border: none !important;
}
.login_box .sendCode .el-form-item__content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.login_box .sendCode input[type="text"] {
  border: none;
}
.login_box .sendCode .el-button {
  border: none;
  color: #409eff;
}
.login_box .sendCode .el-input {
  width: 80%;
}
.login_box .sendCode .hei {
  display: inline-block;
  height: 20px;
  border-right: 1px solid #979797;
}
.login_box .el-checkbox .el-checkbox__label {
  font-size: 12px;
  color: #979797;
}
.login_box .sub {
  width: 100%;
}
</style>
