// pages/login/login.js
import { getLoginRequest } from '../../request/index';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
    isBtnLoding: false
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
  checkPhone(e) {
    let type = e.target.dataset.id;
    this.setData({
      [type]: e.detail.value.trim()
    });
  },
  async clickLogin() {
    if (this.data.isBtnLoding) return;
    let { phone, password } = this.data;
    if (!phone) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      });
      return;
    }
    const phoneReg = /^1[3456789]\d{9}$/;
    let phoneTest = phoneReg.test(phone);
    if (!phoneTest) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return;
    }
    if (!password) {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      });
      return;
    }
    this.setData({
      isBtnLoding: true
    });
    let params = { phone, password, isLogin: true };
    let loginData;
    try {
      loginData = await getLoginRequest(params);
    } catch (er) {
      wx.showToast({
        title: '网络错误~',
        icon: 'none'
      });
      this.setData({
        isBtnLoding: false
      });
    }
    console.log('loginData---', loginData);
    if (parseInt(loginData.data.code) !== 200) {
      let title = loginData.data.message;
      this.setData({
        isBtnLoding: false
      });
      return wx.showToast({
        title,
        icon: 'none'
      });
    }

    // 将用户的信息存储至本地
    wx.setStorageSync('userInfo', JSON.stringify(loginData.data.profile));
    wx.setStorageSync('userId', loginData.data.profile.userId);
    wx.setStorageSync('cookie', JSON.stringify(loginData.cookies));
    this.setData({
      isBtnLoding: false,
      phone: '',
      password: ''
    });
    wx.switchTab({
      url: '/pages/index/index',
      success: (result) => {
        wx.showToast({
          title: '登录成功~',
          icon: 'none'
        });
      },
      fail: () => {},
      complete: () => {}
    });
  },
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
