const app = getApp()
Page({
  data:{
    tempFilePathss: '',
    percentage: '91',
    congratulation:''
  },
  /** 
   * 上传图片
   */
  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9  
      // 可以指定是原图还是压缩图，默认二者都有  
      sizeType: ['original', 'compressed'],
      // 可以指定来源是相册还是相机，默认二者都有
      sourceType: ['album', 'camera'],
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片   
      success: function (res) {
        var tempFilePaths = res.tempFilePaths[0]
        that.setData({
          //将临时变量赋值给已经在data中定义好的变量
          tempFilePathss: tempFilePaths,
          percentage: '100',
          congratulation:'恭喜你完成测试，快点击下方按钮看看结果吧！'
        })
        console.log('自拍地址1：', tempFilePaths)
        wx.request({
          url: tempFilePaths,
          method: 'GET',
          responseType: 'arraybuffer',
          success: function (res) {
            app.globaldata.base64 = wx.arrayBufferToBase64(res.data);
            console.log("base64", app.globaldata.base64);
            console.log('推理性得分：', app.globaldata.num1);
            console.log('扮演性得分：', app.globaldata.num2);
            console.log('竞技性得分：', app.globaldata.num3);
            console.log('团队性得分：', app.globaldata.num4);
            console.log('策略性得分：', app.globaldata.num5);
            console.log('设计性得分：', app.globaldata.num6);
            console.log('耐心性得分：', app.globaldata.num7);
        }
      })
    },
  })
},
sendmessage:function(){
  wx.request({
    url: 'http://unibunny.party:8081/api/angelhack/table/game/person', 
    method: 'POST',
    data: { "pic_content": app.globaldata.base64, "scores": [app.globaldata.num1, app.globaldata.num2, app.globaldata.num3, app.globaldata.num4, app.globaldata.num5, app.globaldata.num6, app.globaldata.num7] },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      console.log(res.data)
      wx.navigateTo({
        url: '/pages/result/result?title=result'
      })
    }
  })
}
})