const app = getApp()
Page({
  data: {
    PageCur: 'basics'
  },
  onLoad() {
    app.globalData.a = 2
    console.log(app.globalData.a)
  }
})
