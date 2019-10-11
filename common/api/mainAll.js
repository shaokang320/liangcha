import request from "../utils/request.js"


/* 首页 */
export function index(data) {//提交用户信息
	return request(data, "index")
}
/* 美厨 */
export function video(data) {
	return request(data, '/video/video').then(res => res)
}
/* 我的 */
export function my(data) {
	return request(data, '/my/my').then(res => res)
}