const app = getApp()

Page({
  onLoad:function(event){
    wx.cloud.init({
      env: 'zbyz'
    })
  },
    data: {
      
      iconType: [
        'success_no_circle'
      ],
      array: [{
        mode: 'scaleToFill',
        text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
        
      }],
      sc_width: app.sc_info.sc_width,
      sc_height: app.sc_info.sc_height,
      src: ''
    },
    imageError: function (e) {
      console.log('image3发生error事件，携带值为', e.detail.errMsg)
    },
 
    
 
})