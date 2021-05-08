// pages/index/index.js
import { getIndexSwiper } from '../../request/index';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    swiperList: [],
    btnList:[
      {
        name:'每日推荐',
        icon:'icon-liwu'
      },
      {
        name:'歌单',
        icon:'icon-liwu'
      },
      {
        name:'排行榜',
        icon:'icon-liwu'
      },
      {
        name:'电台',
        icon:'icon-liwu'
      },
      {
        name:'直播',
        icon:'icon-liwu'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperData();
  },
  clickSwiper(e) {
    console.log(' 我是click', e);
    wx.navigateTo({
      url: '/pages/test/test'
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  async getSwiperData() {
    let data = await getIndexSwiper();
    console.log('轮播图内容---', data);
    this.setData({
      swiperList: data.banners.slice(0, 4)
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
});
