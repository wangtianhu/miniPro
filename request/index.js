import API from './api';

const request = (url, methods = 'GET', data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      methods,
      data,
      success(res) {
        console.log(res.data);
        resolve(res.data);
      },
      fail(er) {
        console.log(res.data);
        reject(er);
      }
    });
  });
};

export function getIndexSwiper() {
  return request(API.indexSwiper, 'GET', { type: 1 });
}
