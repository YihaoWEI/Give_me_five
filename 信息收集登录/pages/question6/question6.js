const app = getApp()
Page({
  data: {
    titleone: '6. 你喜欢下列哪几个图片作为桌布？（单选）',
    percentage: '66',
    items: [
      { name: '推理性', value: '神秘的法国卢浮宫（Louvre）', src:'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_15377850489996261469%22%7D&n_type=0&p_from=1'},
      { name: '扮演性', value: '盛产大片的好莱坞（Hollywood）', src:'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_14816358832531652735%22%7D&n_type=0&p_from=1' },
      { name: '竞技性', value: '刺激的西班牙角斗场（Spanish Arena）', src: 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_15377850489996261469%22%7D&n_type=0&p_from=1'},
      { name: '团队性', value: '团结的长城（the Great Wall）', src: 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9265537404522888683%22%7D&n_type=0&p_from=1'  },
      { name: '策略性', value: '曾靠策略打赢战争的赤壁（Chibi）', src: 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_14751441754747744948%22%7D&n_type=0&p_from=1'  },
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
      var percentage = '79';
    } else {
      var percentage = '66';
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
      app.globaldata.num6 = app.globaldata.num6 + 1;
    if (Page.checknum2 == true)
      app.globaldata.num6 = app.globaldata.num6 + 2;
    if (Page.checknum3 == true)
      app.globaldata.num6 = app.globaldata.num6 + 3;
    if (Page.checknum4 == true)
      app.globaldata.num6 = app.globaldata.num6 + 4;
    if (Page.checknum5 == true)
      app.globaldata.num7 = app.globaldata.num7 + 5;
    console.log('设计性得分：', app.globaldata.num6);
    Page.checknum1 = false;
    Page.checknum2 = false;
    Page.checknum3 = false;
    Page.checknum4 = false;
    Page.checknum5 = false;
    wx.navigateTo({
      url: '/pages/question7/question7?title=question7'
    })
  }
})