<template>
	<view class="content">
		<view class="header c690">
			<view class="box">
				<image class="avar" :src="staticURL + 'test/lady.png'"></image>
				<view class="userInfo">
					<text>资深吃货ayk</text>
					<view class="class" @click="goPage('/pages/mainAll/memberRecharge/memberRecharge')">
						<image :src="staticURL + 'mainAll/icon-vip.png'"></image>
						<text>VIP会员</text>
					</view>
				</view>
				<view class="membership" @click="goPage('/pages/mainAll/member/member')">
					<image :src="staticURL + 'mainAll/icon-vip.png'"></image>
					<text>VIP会员</text>
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
			<image class="set" :src="staticURL + 'mainAll/icon-set.png'"></image>
		</view>
		<!-- 分类 -->
		<view class="section-a">
			<view class="item" @click="goPage('/pages/scanAll/orderList/orderList')">
				<image :src="staticURL + 'mainAll/icon-sao.png'"></image>
				<text>扫码订单</text>
			</view>
			<view class="item" @click="goPage('/pages/bookAll/orderList/orderList')">
				<image :src="staticURL + 'mainAll/icon-yu.png'"></image>
				<text>预约订单</text>
			</view>
			<view class="item" @click="goPage('/pages/cookAll/orderList/orderList')">
				<image :src="staticURL + 'mainAll/icon-chu.png'"></image>
				<text>厨师订单</text>
			</view>
		</view>
		<view class="line"></view>
		<view class="section-b">
			<view class="item" @click="goPage('/pages/mainAll/myBalance/myBalance')">
				<view class="t-l">
					<image :src="staticURL + 'mainAll/icon-money.png'"></image>
					<text class="text">我的钱包</text>
				</view>
				<view class="t-r">
					<text class="text">0.00</text>
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
			<view class="item" @click="goPage('/pages/mainAll/myCommission/myCommission')">
				<view class="t-l">
					<image :src="staticURL + 'mainAll/icon-commission.png'"></image>
					<text class="text">我的佣金</text>
				</view>
				<view class="t-r">
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
			<view class="item" @click="author">
				<view class="t-l">
					<image :src="staticURL + 'mainAll/icon-creation.png'"></image>
					<text class="text">我的创作</text>
				</view>
				<view class="t-r">
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
			<view class="item" @click="goPage('/pages/videoAll/myVideo/myVideo')">
				<view class="t-l">
					<image :src="staticURL + 'mainAll/icon-video.png'"></image>
					<text class="text">我的美厨</text>
				</view>
				<view class="t-r">
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
			<view class="item" @click="goPage('/pages/videoAll/myArticle/myArticle')">
				<view class="t-l">
					<image :src="staticURL + 'mainAll/icon-article.png'"></image>
					<text class="text">我的美文</text>
				</view>
				<view class="t-r">
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
			<view class="item" @click="goPage('/pages/mainAll/addressList/addressList')">
				<view class="t-l">
					<image :src="staticURL + 'mainAll/icon-address.png'"></image>
					<text class="text">地址管理</text>
				</view>
				<view class="t-r">
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
			<view class="item" @click="goPage('/pages/mainAll/myJob/myJob')">
				<view class="t-l">
					<image :src="staticURL + 'mainAll/icon-address.png'"></image>
					<text class="text">我的求职</text>
				</view>
				<view class="t-r">
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
			}
		},
		onShow() {
			if(!this.authorize) {
				wx.showModal({
					title: '',									
					showCancel: false,
					content: '请登录后查看',
					success: function (tip) {
						if (tip.confirm) {
							wx.switchTab({
								url: '/pages/mainAll/index/index'
							})
						}
					}
				})
			}
		},
		methods: {
			author() {
				// 判断审核状态 提交进入审核结果页面 通过进入创作者个人中心
				this.goPage("/pages/videoAll/author/author")
				// this.goPage("/pages/videoAll/auditResult/auditResult")
			},
			goPage(url) {
				this.$utils.goPage(url)
			},
		},
		computed: {
			...mapState(['authorize'])
		}
	}
</script>

<style lang="scss">
	.header {
		position: relative;
		height: 260upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #00A47C;
		border-radius: 20upx;

		.box {
			width: 600upx;
			height: 170upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.avar {
				width: 130upx;
				height: 130upx;
				border-radius: 50%;
			}

			.userInfo {
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				width: 300upx;
				height: 72upx;
				margin-left: 10upx;

				text {
					font-size: 24upx;
					color: #FFFFFF;
				}

				.class {
					display: flex;
					align-items: center;
					height: 40upx;
					line-height: 40upx;

					image {
						width: 34upx;
						height: 34upx;
						border-radius: 50%;
					}

					text {
						font-size: 20upx;
					}
				}
			}

			.membership {
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 150upx;
				height: 40upx;
				line-height: 40upx;
				background: #F7F7F7;
				border-radius: 20upx;
				opacity: 0.83;

				image {
					border-radius: 50%;

					&:first-child {
						width: 38upx;
						height: 38upx;
						animation: xuanzhuan 16s infinite;
					}

					&:last-child {
						width: 22upx;
						height: 22upx;
						transform: rotate(-90deg);
					}
				}

				text {
					font-size: 20upx;
					color: #5D5B5B;
				}
			}
		}

		.set {
			position: absolute;
			right: 20upx;
			top: 20upx;
			width: 36upx;
			height: 36upx;
		}
	}

	@keyframes xuanzhuan {
		from {
			transform: rotatey(0deg);
		}

		to {
			transform: rotatey(-360deg);
		}
	}

	.section-a {
		display: flex;
		justify-content: space-around;
		margin: 60upx 0 60upx;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 40upx;
				height: 40upx;
			}

			text {
				padding-top: 10upx;
				font-size: 20upx;
				color: rgba(72, 72, 72, 1);
			}
		}
	}

	.line {
		width: 100%;
		height: 15upx;
	}

	.section-b {
		.item {
			width: 660upx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			height: 108upx;
			line-height: 108upx;
			border-bottom: 1px solid #EEEEEE;

			.t-l {
				display: flex;
				align-items: center;

				.text {
					padding-left: 20upx;
					font-size: 28upx;
					color: #484848;
				}

				image {
					width: 50upx;
					height: 50upx;
					transform: rotate(-90deg);
				}
			}

			.t-r {
				display: flex;
				align-items: center;

				.text {
					font-size: 26upx;
					color: #6C6A6A;
				}

				image {
					margin-left: 10upx;
					width: 30upx;
					height: 26upx;
					transform: rotate(-90deg);
				}
			}
		}
	}
</style>
