// components/nav-head/nav-head.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text1: {
      type: String,
      value: '',
      observer(){
        console.log('我的数据更新了');
      }
    },
    text2: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {}
});
