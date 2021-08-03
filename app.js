// app.js
App({
  onLaunch() {
    let that = this
    // 在这里用定时器模拟网络请求的过程
    setTimeout(function () {
      that.globalData.name = 'pxh'
    }, 3000)
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  },
  //app 全局属性监听
  watch: function (method) {
    var obj = this.globalData;
    Object.defineProperty(obj, "data", { //这里的 data 对应 上面 globalData 中的 data
      configurable: true,
      enumerable: true,
      set: function (value) { //动态赋值，传递对象，为 globalData 中对应变量赋值
        this._showPictureDetail = value.showPictureDetail;
        this._pictureTime = value.pictureTime;
        this._pictureAddress = value.pictureAddress;
        method(value);
      },
      get: function () { //获取全局变量值，直接返回全部
        return this.globalData;
      }
    })
  },

  globalData: {
    openid: '',
    userInfo: null,
    _showPictureDetail: false,
    _pictureTime: '',
    _pictureAddress: '',
    //改变量用户存放全局变量修改过程中的值传递, 传递对象
    data: {}
  }
})