<template>
	<view class="content">
		<view class="header c690">
			<view class="box">
				<image class="avar" :src="staticURL + 'test/lady.png'"></image>
				<view class="userInfo">
					<text>资深吃货ayk</text>
					<view class="class">
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
		<view class="line"></view>
		<view class="tl c660">可用余额（元）</view>
		<view class="common-title money">
			<view class="t-l red">
				0.00
			</view>
		</view>
		<view class="line"></view>
		<view class="tl-title c660">会员权益</view>
		<view class="section-a c660">
			<view class="subitem">
				<image :src="staticURL + 'mainAll/member-m1.png'"></image>
				<view class="other">
					<text class="oth-a">返佣比例5%</text>
					<text class="oth-b">分享视频，别人购买后可获得佣金</text>
				</view>
			</view>
			<view class="subitem">
				<image :src="staticURL + 'mainAll/member-m2.png'"></image>
				<view class="other">
					<text class="oth-a">会员消费</text>
					<text class="oth-b">可用于点餐和购买课程</text>
				</view>
			</view>
		</view>
		<view class="c690">
			<image class="" :src="staticURL + 'mainAll/member-banner.png'" mode="widthFix" style="width: 100%;"></image>
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
			}
		},
		computed: {}
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
		margin: 20upx auto;;
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
				width: 180upx;
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
	@keyframes xuanzhuan {
		from {
			transform: rotatey(0deg);
		}

		to {
			transform: rotatey(-360deg);
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
	.tl {
		padding-top: 60upx;
		font-size: 24upx;
		color: #BDB8B8;
	}
	.common-title {
		padding:20upx 0 40upx 0;
		width: 660upx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.t-l {
			font-size: 34upx;
			font-size: 34upx;
			color: #DD524D;
		}
	}

	.line {
		width: 100%;
		height: 15upx;
	}
	.tl-title {
		padding: 40upx 0 20upx 0;
		font-size: 26upx;
		color: #414141;
		font-weight:500;
		border-bottom: 1px solid #EEEEEE;
	}
	.section-a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 240upx;
		.subitem {
			display: flex;
			image {
				width: 80upx;
				height: 80upx;
			}
			.other {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				margin-left: 10upx;
				.oth-a {
					font-size:24upx;
					font-weight: bold;
					color:#333333;
				}
				.oth-b {
					font-size:18upx;
					color:#939393;
				}
			}
		}
	}
</style>
