const app = getApp()

Page({
    data: {
      iconType: [
        'success_no_circle'
      ],
      array: [{
        mode: 'scaleToFill',
        text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应',
        sc_weight: app.sc_info.sc_width,
        sc_height: app.sc_info.sc_height
      }],
      src: '../../imageSourse/colorFrame.png'
    },
    imageError: function (e) {
      console.log('image3发生error事件，携带值为', e.detail.errMsg)
    },
})