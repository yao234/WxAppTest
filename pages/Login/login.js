// pages/Login/login.js
class Test{
  firstnum=0;
  sencondnum=10;
  TwoNumber(a,b){
   return a+b;
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("1");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("2");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("3");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("4");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage:function(){
    return {
      title:'猥琐不'
    }
  },
  onClick:function(){
 
    
    // wx.showToast({
    //   title: '傻逼',
    // })
    // let arr=Array.of(1,2,3,4,5);
    // for (let index = 0; index < arr.length; index++) {
    //     console.log(arr[index]);
    // }
  // var c=new Test();
  // console.log(c.TwoNumber(1,2));
  // console.log(c.firstnum);
  // console.log(c.sencondnum);
  // c.firstnum=18;
  // console.log(c.firstnum);
  //  var val=wx.getSystemInfoSync();
  //  console.log(val.version);
 
  
  //  try {
  //    wx.clearStorage({
  //       success:()=>{
  //           console.log("清除成功");
  //       }
  //    });
  //   //  wx.setStorageSync('name', "猥琐不");
  //   //  wx.setStorageSync('age', 18);
    
  //   // var d= wx.getStorageSync('name');
  //   // console.log(d);

  //   // var c= wx.getStorageSync('age');
  //   // console.log(c);

  //   // wx.removeStorageSync('age');

  //   // var e= wx.getStorageSync('age');
  //   // console.log(e);

  //  } catch (error) {
     
  //  }
 
  }
})




 


