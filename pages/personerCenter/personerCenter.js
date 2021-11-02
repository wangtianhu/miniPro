/*
 * @Author: your name
 * @Date: 2021-05-17 11:13:11
 * @LastEditTime: 2021-05-21 15:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \miniIterm\pages\personerCenter\personerCenter.js
 */
// pages/personerCenter/personerCenter.js
let scrollYStart = 0;
let scrollYEnd = 0;
import { getuserRecordRequest } from '../../request/index';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    recentPlayList: [],
    translateY: 0,
    transition: 'all 1s ease'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : {};
    let userId = wx.getStorageSync('userId');
    console.log('获取缓存---', userInfo);
    this.setData({
      userInfo
    });
    this.getRcentePlaysData(userId);
  },
  async getRcentePlaysData(uid) {
    let recentData = await getuserRecordRequest({ uid, type: 0 });
    recentData = recentData.allData.slice(0, 10).map((el) => el.song.al);
    this.setData({
      recentPlayList: recentData
    });
  },
  handleTouchStart(event) {
    scrollYStart = event.touches[0].clientY;
    this.setData({
      transition: 'none'
    });
  },
  handleTouchMove(event) {
    scrollYEnd = event.touches[0].clientY;
    let scroll = scrollYEnd - scrollYStart;
    scroll = scroll < 0 ? 0 : scroll;
    scroll = scroll > 100 ? 100 : scroll;
    let translateY = scroll + 'rpx';
    this.setData({
      translateY
    });
  },
  handleTouchEnd() {
    scrollYStart = 0;
    scrollYEnd = 0;
    let translateY = 0;
    this.setData({
      translateY,
      transition: 'all .5s ease'
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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
