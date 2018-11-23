  import util from '../utils/index.js';
  // 登录
  export const signin = (params) => {
    return fetch(`/api/sign/token`, {
      method: "post",
      credentials: "include",
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
        'Authorization': 'Basic cGVhdGlvLmpzOmY0YzQ1OTJiMGM5ZjE2NjI='
      },
      body: util.getParams(params)
    }).then((res) => {
      return res.json();
    });
  };
  // 发送短信
  export const sendSMS = (params) => {
    return fetch(`/api/smscode`, {
        method: "post",
        credentials: "include",
        headers: {
          'Content-Type': "application/x-www-form-urlencoded"
        },
        body: util.getParams(params)
      }).then((res) => {
        return res.json();
      });
  }
  // 点击注册
  export const subAuth = (params) => {
    return fetch(`/api/auth`, {
        method: "post",
        credentials: "include",
        headers: {
          'Content-Type': "application/x-www-form-urlencoded"
        },
        body: util.getParams(params)
      }).then((res) => {
        return res.json();
      });
  }
  // 获取图片验证
  export const getImgSrc = () => {
    return fetch("/api/captcha", {
        method: "get",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => {
          return res.blob();
        })
  }
  // 任务列表
  export const taskList = () => {
      return fetch(`/api/user/tasks`, {
          method: "get",
          credentials: "include",
          headers: {
            'Content-Type': "application/x-www-form-urlencoded"
          }
      })
      .then(res => {
          return res.json()
      })
  }
  // 用户信息
  export const getUser = () => {
      return fetch(`/api/user/profile`, {
          method: "get",
          credentials: "include",
          headers: {
            'Content-Type': "application/x-www-form-urlencoded"
          }
      })
      .then(res => {
          return res.json()
      })
  }
  // 被邀请人填写信息接口
  export const sendInvitee = (params) => {
    return fetch(`/api/invitee`, {
        method: "post",
        credentials: "include",
        headers: {
          'Content-Type': "application/x-www-form-urlencoded"
        },
        body: util.getParams(params)
      }).then((res) => {
        return res.json();
      });
  }

  // 获取我的邀请好友列表
  export const getUserList = () => {
    return fetch(`/api/user/invitees`, {
        method: "post",
        credentials: "include",
        headers: {
          'Content-Type': "application/x-www-form-urlencoded"
        },
        body: util.getParams({
            page:1,
            size:100
        })
      }).then((res) => {
        return res.json();
      });
  }