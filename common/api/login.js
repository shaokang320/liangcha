import request from "../utils/request.js"

export function apiWeiXinLogin(data) {    //用户登录
	return request(data, "login")
}
