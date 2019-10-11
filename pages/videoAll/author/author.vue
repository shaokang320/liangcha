<template>
	<view class="content">
		<view class="header c690">
			<view class="box">
				<image class="avar" :src="staticURL + 'test/lady.png'"></image>
				<view class="userInfo">
					<text>未设置昵称</text>
					<view class="class">
						<text>账号：18561335968</text>
						<text>密码：123456</text>
					</view>
				</view>
				<view class="membership">
					<text>收益订单</text>
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
		</view>
		<!-- 分类 -->
		<view class="tl c660">累计佣金（元）</view>
		<view class="common-title money">
			<view class="t-l red">
				0.00
			</view>
			<view class="t-r">
				<text class="text">提现</text>
				<image :src="staticURL + 'common/arrow-gray.png'"></image>
			</view>
		</view>
		<view class="line"></view>
		<view class="navbar">
			<view class="classify c660">
				<view class="subnav" :class="[index == 0 ? ' active' : '']" @click="changeIndex(0)">
					视频管理
				</view>
				<view class="subnav" :class="[index == 1 ? ' active' : '']" @click="changeIndex(1)">
					美文管理
				</view>
			</view>
		</view>
		<view class="section-a c690" v-if="index == 0">
			<view class="item">
				<view class="img">
					<image :src="staticURL + 'test/index01.png'"></image>
					<view class="num">2018次播放</view>
				</view>
				<view class="detail">
					<text class="d-a text-block">
						正宗日本寿司制作教程--13种口味教你花样翻新！
					</text>
					<text class="d-b text-block">
						【木之初】
					</text>
					<view class="d-c">
						<text>￥532</text>
						<text>销量：418</text>
						</text>
					</view>
				</view>
			</view>
		</view>
		<view class="section-b c690" v-if="index == 1">
			<view class="list c660">
				<com-article></com-article>
			</view>
		</view>
		<view class="hint">
			<image :src="staticURL + 'mainAll/icon-laba.png'"></image>
			<text>登录网址：http://www.baidu.com</text>
		</view>
	</view>
</template>

<script>
	import comArticle from '@/components/article.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		components: {
			comArticle
		},
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				index: 0
			}
		},
		onShow() {},
		methods: {
			changeIndex(index) {
				this.index = index;
			},
			goPage(url) {
				this.$utils.goPage(url)
			},
		},
		computed: {}
	}
</script>

<style lang="scss">
	.header {
		height: 220upx;
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
				height: 100upx;
				margin-left: 10upx;

				text {
					font-size: 24upx;
					color: #FFFFFF;
				}

				.class {
					display: flex;
					flex-direction: column;

					text {
						font-size: 18upx;
					}
				}
			}

			.membership {
				display: flex;
				align-items: center;
				justify-content: center;
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
	}

	.tl {
		padding-top: 50upx;
		font-size: 16upx;
		color: #BDB8B8;
	}

	.common-title {
		padding: 20upx 0;
		width: 660upx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.t-l {
			font-size: 30upx;
			color: #484848;

			&.red {
				font-size: 34upx;
				color: #DD524D;
			}
		}

		.t-r {
			display: flex;
			align-items: center;

			.text {
				font-size: 24upx;
				color: #6C6A6A;
			}

			image {
				width: 30upx;
				height: 26upx;
				transform: rotate(-90deg);
			}
		}
	}

	.line {
		width: 100%;
		height: 15upx;
	}

	// 
	.navbar {
		width: 100%;
		background: #ffffff;
		font-size: 26upx;
		border-bottom: 1px solid #EEEEEE;

		.classify {
			height: 90upx;
			display: flex;
			align-items: center;

			.subnav {
				width: 50%;
				text-align: center;
				transition: font .5s;

				&.active {
					font-size: 28upx;
					color: #00A47C;
				}
			}
		}
	}

	.section-a {
		.item {
			display: flex;
			align-items: center;
			padding: 30upx 0;
			border-bottom: 1px solid #EEEEEE;

			.img {
				position: relative;
				width: 210upx;
				height: 119upx;
				margin-right: 18upx;

				image {
					position: absolute;
					width: 210upx;
					height: 119upx;
					border-radius: 6upx;
				}

				.num {
					position: absolute;
					bottom: 0;
					width: 100%;
					height: 36upx;
					text-align: center;
					line-height: 36upx;
					color: rgba(162, 163, 164, 1);
					font-size: 20upx;
					background: rgba(220, 220, 220, 1);
				}
			}

			.detail {
				width: 422upx;
				height: 119upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.d-a {
					font-size: 22upx;
					color: rgba(5, 15, 26, 1);
				}

				.d-b {
					font-size: 20upx;
					color: #8490A1;
					margin-left: -8upx;
				}

				.d-c {
					display: flex;
					align-items: center;
					justify-content: space-between;

					text {
						font-size: 20upx;

						&:first-child {
							color: #ED5851;
						}

						&:last-child {
							color: #8490A1;
						}
					}
				}
			}
		}
	}

	.hint {
		z-index: 33;
		display: flex;
		align-items: center;
		width: 690upx;
		height: 55upx;
		position: fixed;
		bottom: 30upx;
		left: 30upx;
		background: rgba(0, 164, 124, 1);
		opacity: 0.75;
		border-radius: 4upx;

		text {
			font-size: 24upx;
			color: #FFFFFF;
			padding-left: 30upx;
		}

		image {
			width: 50upx;
			height: 50upx;
			margin-left: 20upx;
			animation: xuanzhuan 2s infinite;
		}
	}

	@keyframes xuanzhuan {
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(1.1);
		}

		100% {
			transform: scale(1);
		}
	}
</style>
