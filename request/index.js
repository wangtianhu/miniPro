/*
 * @Author: your name
 * @Date: 2021-05-08 15:50:02
 * @LastEditTime: 2021-05-21 14:30:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \miniIterm\request\index.js
 */
import API from "./api";
import { banner, personnal, rank } from "./data";
let cookie = {
  cookie: wx.getStorageSync("cookie")
    ? JSON.parse(wx.getStorageSync("cookie")).find(item => item.includes("MUSIC_U"))
    : ""
};
let isMock = true;
const request = (url, methods = "GET", data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      methods,
      data,
      header: {
        ...cookie
      },
      success(res) {
        console.log(res.data);
        if (data.isLogin) {
          return resolve(res);
        }
        resolve(res.data);
      },
      fail(er) {
        console.log(er);
        reject(er);
      }
    });
  });
};

export function getIndexSwiper() {
  if (isMock) {
    return banner;
  }
  return request(API.indexSwiper, "GET", { type: 1 });
}

/**
 * @description: 获取专辑列表
 * @return {Object}
 */
export function getRecommondList() {
  if (isMock) {
    return personnal;
  }
  return request(API.indexRecommond, "GET", { limit: 10 });
}

/**
 * @description: 获取排行榜
 * @param {Number} idx
 * @return {Object}
 */
export function getIndexRankList(idx = 10) {
  if (isMock) {
    return rank;
  }
  return request(API.indexRank, "GET", { idx });
}

/**
 * @description: 获取当前用户最近播放记录
 * @param {Object} params
 * {
 *  phone,  Number
 *  password, string
 *  isLogin   booleadn
 * }
 * @return {Object}
 */
export function getLoginRequest(params) {
  return request(API.login, "GET", params);
}

/**
 * @description:
 * @param {Object} params
 * {
 *  uid,  number
 *  type, number  1 最近一周播放记录   0 所有记录  接口返回最近100条
 * }
 * @return {*}
 */
export function getuserRecordRequest(params) {
  return request(API.userRecord, "POST", params);
}
