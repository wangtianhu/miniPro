const api = {};
let base = "http://localhost:3000";
api.indexSwiper = `${base}/banner`; // 首页轮播banners
api.indexRecommond = `${base}/personalized`; // 首页歌单推荐
api.indexRank = `${base}/top/list`; // 排行榜数据
api.login = `${base}/login/cellphone`; // 手机号登录
api.userRecord = `${base}/user/record`; // 获取用户最近的播放记录

export default api;
