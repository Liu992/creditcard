<template>
  <div class="signup">
    <div class="signup_banner">
      <img src="../assets/images/banner.png" alt="">
    </div>
    <div class="signup_box">
      <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入您的手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="sendCode">
          <el-input v-model.number="ruleForm.code" placeholder="请输入短信验证码"><el-button>发送</el-button></el-input>
          <i class="hei"></i>
          <el-button>发送</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="ruleForm.checked" @change="!ruleForm.checked">本人以阅读并同意以下条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="sub">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    var checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else {
        if (this.ruleForm.phone !== "") {
          // this.$refs.ruleForm.validateField("phone");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        checked: false,
        phone: "",
        code: ""
      },
      rules2: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        let { phone, code, checked } = this.ruleForm;
        if (!checked) {
          this.checkedError();
        }
        if (valid && checked) {
          console.log();
          alert("submit!");
          this.$router.push({ path: "/tasklist" });
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
    }
  },
  mounted() {}
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
.signup_banner {
  width: 100%;
  margin-bottom: 40px;
}
.signup_banner img {
  width: 100%;
}
.signup_box {
  padding: 0 20px;
}
.signup_box .el-form-item.is-error .el-input__inner {
  border: 1px solid #dcdfe6;
}
.signup_box .sendCode {
  margin-bottom: 4px;
}
.signup_box .sendCode .el-input__inner {
  border: none !important;
}
.signup_box .sendCode .el-form-item__content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.signup_box .sendCode input[type="text"] {
  border: none;
}
.signup_box .sendCode .el-button {
  border: none;
  color: #409eff;
}
.signup_box .sendCode .el-input {
  width: 80%;
}
.signup_box .sendCode .hei {
  display: inline-block;
  height: 20px;
  border-right: 1px solid #979797;
}
.signup_box .el-checkbox .el-checkbox__label {
  font-size: 12px;
  color: #979797;
}
.signup_box .sub {
  width: 100%;
}
</style>
