import store from '@/store'
import { requestURL} from './config'

const Request = function Request(data, url) {
	let coreParams = {}
	if(store.state.access_token) {coreParams.access_token = store.state.access_token};
	if(store.state.storeID) {coreParams.storeId = store.state.storeID};
	return new Promise((resolve, reject) => {
		uni.request({
			url: requestURL + url,
			method: 'post',
			data: {
				...coreParams,
				...data
			},
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				if(res.data.code == 200) {
					resolve(res.data.resData)
				} else {
					uni.hideLoading();
					uni.showToast({
						title: '服务器错误'
					})
				}
			},
			fail: err => {
				uni.hideLoading();
				uni.showToast({
					title: '服务器错误'
				})
				reject(err)
			},
			complete: () => {}
		});
	}).catch(err => console.log(err))
}
export default Request