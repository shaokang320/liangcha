import {uploadURL} from './config'
const utils = {
	show: (mask = false, title = '加载中···') => {
		uni.showLoading({
			title,
			mask
		})
	},
	hide: () => {
		uni.hideLoading();
	},
	toast: (title = '请稍后···', icon = 'none', mask = false, time = 1000) => {
		uni.showToast({
			title,
			icon,
			mask,
			time
		})
	},
	// 普通跳转(参事需拼接url)
	goPage(url) {
		uni.navigateTo({url})
	},
	// 传数组or对象
	goPageJson(url, params) {
		let path = '';
		if(params) {
			let par = JSON.stringify(params);
			path = `${url}?params=${par}`
		}else {
			path = url
		}
		uni.navigateTo({
			url: path
		})
	},
	getMyDate(str) {
		//补零操作
		function addZero(num){
		    if(parseInt(num) < 10){
		        num = '0'+num;
		    }
		    return num;
		}
	    var oDate = new Date(str),
	    oYear = oDate.getFullYear(),
	    oMonth = oDate.getMonth()+1,
	    oDay = oDate.getDate(),
	    // oHour = oDate.getHours(),
	    // oMin = oDate.getMinutes(),
	    // oSen = oDate.getSeconds(),
	    oTime = oYear +'-'+ addZero(oMonth) +'-'+ addZero(oDay);
	    return oTime;
	},
	uploadingImg(imgUrls) {
		    //启动上传等待中...  
		    uni.showLoading({title: '上传中'})
		    let i = 0;
		    let returnImgUrls = [];//返回的所有图片链接
		    uploadImg(imgUrls[i])
		    function uploadImg(path) {
		      wx.uploadFile({
		        url: uploadURL+ '/image_upload',
		        filePath: path,
		        header: {
		          'Content-Type':'multipart/form-data'
		        },
		        name: 'file',
		        success(data) {
		          returnImgUrls.push(JSON.parse(data.data).resData.filename)
		        },
		        complete: function () {
		          i++;
		          if (i < imgUrls.length) {
		            uploadImg(imgUrls[i])
		          } else {
		            uni.hideLoading()
					return returnImgUrls;
		          }
		        }
		      })
		    }
	}
}
export default utils
