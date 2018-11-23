let util = {};

util.getUrl = (urlBase, params) => {
    return `${urlBase}?${Object.keys(params).map((key) => {
      return [key, encodeURIComponent(params[key])].join('=')
    }).join('&')}`;
  }
  
  util.getParams = (params) => {
    return `${Object.keys(params).map((key) => {
      return [key, encodeURIComponent(params[key])].join('=')
    }).join('&')}`;
  }

util.fetch = (options) => {
    let defs = {
      url: '',
      method: 'post',
      data: {},
      auth: util.getCookie('Authorization'),
      dataType: 'json'
    };
    options = Object.assign(defs, options);
  
    let fetchOpts = {
      method: options.method,
      credentials: "include",
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
        'Authorization': 'Bearer ' + options.auth
      }
    }
  
    let url = options.url;
    let data = options.data;
    if ('GET' === options.method.toUpperCase()) {
      url = util.getUrl(url, data);
    } else {
      if (options.dataType === 'json') {
        data = util.getParams(data);
      }
      fetchOpts.body = data;
    }
  
    return fetch(url, fetchOpts).then((res) => {
      return res.json();
    }).then(json => {
      if (json.error) {
        return Promise.reject(json);
      }
      return json;
    })
  }

  util.getCookie = (name) => {
    //用处理字符串的方式查找到key对应value
    name = escape(name);
    //读cookie属性，这将返回文档的所有cookie
    var allcookies = document.cookie;
    //查找名为name的cookie的开始位置
    name += "=";
    var pos = allcookies.indexOf(name);
    //如果找到了具有该名字的cookie，那么提取并使用它的值
    if (pos !== -1) { //如果pos值为-1则说明搜索"version="失败
      var start = pos + name.length; //cookie值开始的位置
      var end = allcookies.indexOf(";", start); //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
      if (end === -1) end = allcookies.length; //如果end值为-1说明cookie列表里只有一个cookie
      var value = allcookies.substring(start, end); //提取cookie的值
      value = decodeURI(value); //对它解码
      return (value);
    } else { //搜索失败，返回空字符串
      return "";
    }
  }
  // 刷新
  export const tokenSignin = (params) => {
    let auth = util.getCookie('Authorization');
    if (!auth) {
      return Promise.resolve({ result: 'not' });
    }
    return fetch(`/api/sign`, {
      method: "get",
      credentials: "include",
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
        'Authorization': 'Bearer ' + auth
      }
    }).then((res) => {
      return res.json();
    })
    .catch(err => {
      throw err;
    });
  };

  export default util;