// pages/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },
  handleShow(e) {
    console.log("点击", e);
  },
  handleLoad(e) {
    console.log("点击按钮", e);
  },
  handleGoIndex() {
    console.log("挑战");
    wx.switchTab({
      url: "/pages/index/index",
      success: result => {
        console.log("跳转成功");
      },
      fail: er => {
        console.log("失败", er);
      },
      complete: () => {}
    });
  },
  handleInfo(info) {
    console.log("用户信息-->", info);
    let {
      detail: { userInfo }
    } = info;
    this.setData({
      userInfo
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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
