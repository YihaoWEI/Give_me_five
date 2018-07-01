const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    textf: [
      { x: '冷静的推理专家', y: '擅长推理和决断，你就是众人心中最容易明察秋毫的人，快快发挥自己的专长，带着大家玩一局《天黑请闭眼》吧！' },
      { x: '灵活的超级巨星', y: '天生就是好莱坞级别的表演者，你能用表情、动作、声音等多维方式演绎人间酸甜苦辣，还犹豫什么，自爆吧，你应该就是铁狼了！' },
      { x: '好胜的竞技天才', y: '视比赛如战场，永不服输的你总能影响身边最多的人，跟你一起并肩作战，快去寻觅你的小伙伴来一局《德国心脏病》吧！' },
      { x: '赚威望的团队领袖', y: '每个团队都少不了你这样的角色，你就是团队的核心，为了团队的胜利，你可以不顾一切，那么，来一局《三国杀》么？' },
      { x: '机智的策略天才', y: '天哪，世界上怎么能有想你这么聪明的人！你就像诸葛亮一般，极富军师气质，你这样的人一定要来试试《苏格兰场》，冠军就是你啦！' },
    ],
    textf1:'',
    textf2:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    if (app.globaldata.num1 >= app.globaldata.num2 && app.globaldata.num1 >= app.globaldata.num3 && app.globaldata.num1 >= app.globaldata.num4 && app.globaldata.num1 >= app.globaldata.num5){
      that.setData({
        //将临时变量赋值给已经在data中定义好的变量
        textf1: '冷静的推理专家',
        textf2: '擅长推理和决断，你就是众人心中最容易明察秋毫的人，快快发挥自己的专长，带着大家玩一局《天黑请闭眼》吧！',
      })
    } else if (app.globaldata.num2 >= app.globaldata.num1 && app.globaldata.num2 >= app.globaldata.num3 && app.globaldata.num2 >= app.globaldata.num4 && app.globaldata.num2 >= app.globaldata.num5) {
      that.setData({
        //将临时变量赋值给已经在data中定义好的变量
        textf1: '灵活的超级巨星',
        textf2: '天生就是好莱坞级别的表演者，你能用表情、动作、声音等多维方式演绎人间酸甜苦辣，还犹豫什么，自爆吧，你应该就是铁狼了！',
      }) 
      } else if (app.globaldata.num3 >= app.globaldata.num1 && app.globaldata.num3 >= app.globaldata.num2 && app.globaldata.num3 >= app.globaldata.num4 && app.globaldata.num3 >= app.globaldata.num5) {
      that.setData({
        //将临时变量赋值给已经在data中定义好的变量
        textf1: '好胜的竞技天才',
        textf2: '视比赛如战场，永不服输的你总能影响身边最多的人，跟你一起并肩作战，快去寻觅你的小伙伴来一局《德国心脏病》吧！',
      })
    } else if (app.globaldata.num4 >= app.globaldata.num1 && app.globaldata.num4 >= app.globaldata.num2 && app.globaldata.num4 >= app.globaldata.num3 && app.globaldata.num4 >= app.globaldata.num4) {
      that.setData({
        //将临时变量赋值给已经在data中定义好的变量
        textf1: '赚威望的团队领袖',
        textf2: '每个团队都少不了你这样的角色，你就是团队的核心，为了团队的胜利，你可以不顾一切，那么，来一局《三国杀》么？',
      })
    } else if (app.globaldata.num5 >= app.globaldata.num1 && app.globaldata.num5 >= app.globaldata.num2 && app.globaldata.num5 >= app.globaldata.num3 && app.globaldata.num5 >= app.globaldata.num4) {
      that.setData({
        //将临时变量赋值给已经在data中定义好的变量
        textf1: '机智的策略天才',
        textf2: '天哪，世界上怎么能有想你这么聪明的人！你就像诸葛亮一般，极富军师气质，你这样的人一定要来试试《苏格兰场》，冠军就是你啦！' ,
      })
    }
  
  },

  onShow: function () {
    // Do something when page show.
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '平行世界的我',
      path: '/pages/image/image?title=image'
    }
  },

})