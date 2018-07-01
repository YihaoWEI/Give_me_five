const app = getApp()
Page({
  data: {
    titleone: '7. 做了这么多题，为你的耐心打个分吧（多选）',
    percentage: '79',
    items: [
      { name: '推理性', value: '1分' },
      { name: '扮演性', value: '2分' },
      { name: '竞技性', value: '3分' },
      { name: '团队性', value: '4分' },
      { name: '策略性', value: '5分' },
    ],
    checknum1: false,
    checknum2: false,
    checknum3: false,
    checknum4: false,
    checknum5: false,
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value != []) {
      var percentage = '91';
    } else {
      var percentage = '79';
    }
    this.setData({
      percentage: percentage
    })
    for (var i = 0; i < 5; i++) {
      if (e.detail.value[i] == '推理性') {
        Page.checknum1 = true;
      } else if (e.detail.value[i] == '扮演性') {
        Page.checknum2 = true;
      } else if (e.detail.value[i] == '竞技性') {
        Page.checknum3 = true;
      } else if (e.detail.value[i] == '团队性') {
        Page.checknum4 = true;
      } else if (e.detail.value[i] == '策略性') {
        Page.checknum5 = true;
      }
    }
    console.log('推理性得分：', Page.checknum1);
    console.log('扮演性得分：', Page.checknum2);
    console.log('竞技性得分：', Page.checknum3);
    console.log('团队性得分：', Page.checknum4);
    console.log('策略性得分：', Page.checknum5);
  },
  nextpage: function (e) {
    if (Page.checknum1 == true)
      app.globaldata.num7 = app.globaldata.num7 + 1;
    if (Page.checknum2 == true)
      app.globaldata.num7 = app.globaldata.num7 + 2;
    if (Page.checknum3 == true)
      app.globaldata.num7 = app.globaldata.num7 + 3;
    if (Page.checknum4 == true)
      app.globaldata.num7 = app.globaldata.num7 + 4;
    if (Page.checknum5 == true)
      app.globaldata.num7 = app.globaldata.num7 + 5;
    console.log('耐心度得分：', app.globaldata.num1);
    Page.checknum1 = false;
    Page.checknum2 = false;
    Page.checknum3 = false;
    Page.checknum4 = false;
    Page.checknum5 = false;
    wx.navigateTo({
      url: '/pages/image/image?title=image'
    })
  }
})