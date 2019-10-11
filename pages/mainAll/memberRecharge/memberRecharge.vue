<template>
	<view class="content">
		<view class="header c690">
			<view class="box">
				<view class="userInfo">
					<text>充值￥2000</text>
					<text>充值会员享更多权力</text>
				</view>
				<image class="membership" :src="staticURL + 'mainAll/pay.png'"></image>
				<image class="set" :src="staticURL + 'mainAll/vip.png'"></image>
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
		<view class="more c690">
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
		padding: 100upx 0 80upx;

		.box {
			position: relative;
			height: 170upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 10upx;
			box-shadow: 0px 3px 24px 0px rgba(4, 0, 0, 0.06);

			.userInfo {
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				width: 300upx;
				height: 80upx;
				margin-left: 20upx;

				text {
					&:first-child {
						font-size: 30upx;
						font-weight: bold;
						color: #040404;
					}

					&:last-child {
						font-size: 23upx;
						color: #888888;
					}
				}
			}

			.membership {
				width: 209upx;
				height: 140upx;
				margin-right: 20upx;
			}
		}

		.set {
			position: absolute;
			top: -35upx;
			left: 20upx;
			width: 70upx;
			height: 70upx;
		}
	}

	.tl {
		padding-top: 60upx;
		font-size: 24upx;
		color: #BDB8B8;
	}

	.line {
		width: 100%;
		height: 15upx;
	}

	.tl-title {
		padding: 40upx 0 20upx 0;
		font-size: 26upx;
		color: #414141;
		font-weight: 500;
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
					font-size: 24upx;
					font-weight: bold;
					color: #333333;
				}

				.oth-b {
					font-size: 18upx;
					color: #939393;
				}
			}
		}
	}

	.more {
		padding-top: 100upx;
	}
</style>
