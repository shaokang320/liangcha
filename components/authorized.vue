<template>
	<view class="components-authorized" v-if="!flag1 || !flag2">
		<mask :bgcolor="'rgba(0,0,0,0.4)'" class="components-mask">
			<view class="content">
				<view class="popup">
					<image :src="staticURL + 'mainAll/popup.png'"></image>
					<text>请授权登录以便继续使用哦~</text>
					<button v-if="!flag1" type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
					<button v-if="flag1 && !flag2" type="primary" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">下一步</button>
				</view>
			</view>
		</mask>
	</view>
</template>

<script>
	import mask from '@/components/mask.vue'
	import {
		apiWeiXinLogin
	} from "@/common/api/login"
	export default {
		components: {
			mask
		},
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				phoneState: false, //数据库手机号是否存在
				dataInfo: {}, //用于提交的用户信息
				flag1: true, //用户信息授权状态
				flag2: true //用户手机号授权状态
			};
		},
		created() {
			const vm = this;
			vm.init();
		},
		methods: {
			async init() {
				const vm = this;
				vm.phoneState = await vm.authorization();
				// 判断获取用户头像昵称是否授权
				uni.getSetting({
					success: res => {
						if (res.authSetting['scope.userInfo']) {
							wx.getUserInfo({
								success: e => {
									console.log(e)
									vm.dataInfo.nickName = e.userInfo.nickName;
									vm.dataInfo.avatarUrl = e.userInfo.avatarUrl;
									if (vm.phoneState) {
										vm.flag2 = true;
										vm.login();
									}
								}
							});
						} else {
							vm.flag1 = false;
							if (!vm.phoneState) {
								vm.flag2 = false;
							}
						}
					}
				})
			},
			// 判断用户是否有手机号信息
			authorization() {
				return new Promise((resolve, reject) => {
					const vm = this;
					uni.login({
						success: res => {
							apiWeiXinLogin({
								code: res.code
							}).then((res) => {
								if (res.memberInfo.member_mobile) {
									resolve(true);
								} else {
									resolve(false);
								}
							})
						}
					})
				})
			},
			// 获取用户信息
			async getUserInfo(e) {
				const vm = this;
				console.log(e)
				if (e.detail.userInfo) {
					vm.dataInfo.nickName = e.detail.userInfo.nickName
					vm.dataInfo.avatarUrl = e.detail.userInfo.avatarUrl
					vm.flag1 = true;
				}
				if (vm.phoneState) {
					vm.login();
				} else {
					vm.flag2 = false;
				}
			},
			// 获取用户手机号
			getPhoneNumber(e) {
				const vm = this;
				if (e.detail.encryptedData) {
					vm.flag2 = true;
					vm.dataInfo.encryptedData = e.detail.encryptedData;
					vm.dataInfo.iv = e.detail.iv;
					vm.login();
				}
			},
			// 登录
			login() {
				const vm = this;
				uni.login({
					success: res => {
						apiWeiXinLogin({
							code: res.code,
							...vm.dataInfo
						}).then((res) => {
							vm.$store.commit('userInfo', res.memberInfo);
							vm.$store.commit('SET_TOKEN', res.memberInfo.access_token);
							vm.$store.commit('SET_AUTHORIZE', true);
							vm.flag1 = true;
							vm.flag2 = true;
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.components-authorized {
		.content {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;

			.popup {
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: space-around;
				overflow: hidden;
				width: 70vw;
				height: 70vw;
				background: #FFFFFF;
				border-radius: 30upx;
				box-shadow: 0px 3px 24px 0px rgba(4, 0, 0, 0.06);
				color: #00A47C;

				image {
					width: 200upx;
					height: 200upx;
				}

				button {
					width: 400upx;
					height: 80upx;
					line-height: 80upx;
					font-size: 34upx;
					font-weight: 500;
					border-radius: 50upx;
					border: 1px solid #00A47C;
					background: #ffffff;
					color: #00A47C;
				}

				button.button-hover {
					opacity: 0.7;
				}
			}
		}
	}
</style>
