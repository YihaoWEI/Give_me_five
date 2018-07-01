const app = getApp()
Page({
  data: {
    titleone: '5. 如果要去旅行，你想去下面哪里？（多选）',
    percentage: '53',
    items: [
      { name: '推理性', value: '神秘的法国卢浮宫（Louvre）' },
      { name: '扮演性', value: '盛产大片的好莱坞（Hollywood）' },
      { name: '竞技性', value: '刺激的西班牙角斗场（Spanish Arena）' },
      { name: '团队性', value: '团结的长城（the Great Wall）' },
      { name: '策略性', value: '曾靠策略打赢战争的赤壁（Chibi）' },
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
      var percentage = '66';
    } else {
      var percentage = '53';
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
      app.globaldata.num1 = app.globaldata.num1 + 1;
    if (Page.checknum2 == true)
      app.globaldata.num2 = app.globaldata.num2 + 1;
    if (Page.checknum3 == true)
      app.globaldata.num3 = app.globaldata.num3 + 1;
    if (Page.checknum4 == true)
      app.globaldata.num4 = app.globaldata.num4 + 1;
    if (Page.checknum5 == true)
      app.globaldata.num5 = app.globaldata.num5 + 1;
    console.log('推理性得分：', app.globaldata.num1);
    console.log('扮演性得分：', app.globaldata.num2);
    console.log('竞技性得分：', app.globaldata.num3);
    console.log('团队性得分：', app.globaldata.num4);
    console.log('团队性得分：', app.globaldata.num5);
    Page.checknum1 = false;
    Page.checknum2 = false;
    Page.checknum3 = false;
    Page.checknum4 = false;
    Page.checknum5 = false;
    wx.navigateTo({
      url: '/pages/question6/question6?title=question6'
    })
  }
})