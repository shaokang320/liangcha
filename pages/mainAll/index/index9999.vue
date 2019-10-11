<template>
	<view class="content c690">
		<form @submit="subMsg" report-submit="true">
			<button formType="submit">发送模板消息</button>
		</form>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				appid: "wx37e1a79b3121536a", //appid
				secret: '543287527815f0c3750092cb9a88cb33', //秘钥
				access_token: "", // 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + that.data.appid + '&secret=' + that.data.secret,
				tmpID: 'E0R3uolMlkWC4CqtmtfjCkp-CVOeYk2ZkFX7AgIVFJM', //模板id
				openID: '', //用户id
			}
		},
		onLoad() {
			const vm = this;
		},
		methods: {
			// 获取access_token
			getToken() {
				return new Promise((resolve, reject) => {
					const vm = this;
					wx.login({
						success: function (res) {
						  var code = res.code;
						  wx.request({
							url: `https://api.weixin.qq.com/sns/jscode2session?appid=${vm.appid}&secret=${vm.secret}&js_code=${code}&grant_type=authorization_code`,
							header: {
							  'content-type': 'json'
							},
							success: function (res) {
								vm.openID = res.data.openid;
								wx.request({
									url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${vm.appid}&secret=${vm.secret}`,
									method: "get",
									success: function(res) {
										vm.access_token = res.data.access_token;
										resolve(true);
									},
									fail: function(err) {}
								})
							}
						  })
						}
					  })
				})
			},
			async subMsg(e) {
				const vm = this;
				await vm.getToken();
				var params = {
					access_token: vm.access_token, //必填
					touser: vm.openID, //必填
					template_id: vm.tmpID, //必填
					form_id: e.detail.formId, //开发者工具会报错没有formid 真机联调就不报错了
					page: "pages/index/index", //点击消息模板进去的页面路径
					data: {
						"keyword1": {
							"value": "0123456",
							"color": "#000"
						},
						"keyword2": {
							"value": "99",
							"color": "#000"
						},
						"keyword3": {
							"value": "2018-11-15",
							"color": "#000"
						},
						"keyword4": {
							"value": "西瓜",
							"color": "#000"
						}
					}
				}
				wx.request({
					url: `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${vm.access_token}`,
					header: {
						'content-type': 'application/json'
					},
					data: params,
					method: "POST",
					success: function(res) {
						console.log(res, '推送成功')
					},
					fail: function(err) {
						console.log(err, '失败');
					},
					complete: function(res) {
						console.log("request completed!");
					}
				})
			}
		}
	}
</script>
<style lang="scss">

</style>
