/* 扫码点餐 */
import request from "../utils/request.js"
export function foodClass(data) {//菜品分类
	return request(data, "foodClass")
}
export function foodList(data) {//菜品列表
	return request(data, "foodList")
}