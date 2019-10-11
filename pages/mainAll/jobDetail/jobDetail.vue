<template>
	<view class="content">
		<!-- 分类 -->
		<view class="section-c c690">
			<view class="item c660">
				<view class="detail">
					<view class="name">
						<text>厨师助理</text>
						<text class="money">4-6K</text>
					</view>
					<view class="desc">
						本科 | 3年经验 | 全职
					</view>
				</view>
			</view>
			<view class="add  c660" @click="goPage('/pages/mainAll/addBio/addBio')">
				<view class="pic">
					<image :src="staticURL + 'test/logo.png'"></image>
				</view>
				<view class="detail">
					<view class="name">
						<text>广东深圳日源科技有限公司</text>
					</view>
					<view class="desc">
						日式料理餐饮，欢迎你的加入
					</view>
				</view>
			</view>
		</view>
		<view class="section-d c660">
			<view class="add  c660" @click="seeLocation">
				<view class="pic">
					<image :src="staticURL + 'mainAll/location.png'" mode="widthFix"></image>
				</view>
				<view class="detail">
					<view class="name">
						<text>工作地址</text>
					</view>
					<view class="desc">
						广州市白云区西关大街10号日源科技
					</view>
				</view>
				<view class="specification">
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
		</view>
		<view class="section-a">
			<view class="sec3">
				<view class="box c660">
					<view class="biao">
						职位描述
					</view>
					<view class="other">
						<view class="info">
							<view class="context">
								1.负责电商线上店铺日常设计工作；
							</view>
						</view>
					</view>
				</view>
				<view class="box c660">
					<view class="biao">
						经验要求
					</view>
					<view class="other">
						<view class="info">
							<view class="context">
								1.负责电商线上店铺日常设计工作；
							</view>
						</view>
					</view>
				</view>
				<view class="box c660">
					<view class="biao">
						福利待遇
					</view>
					<view class="other">
						<view class="info">
							<view class="context">
								1.负责电商线上店铺日常设计工作；
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<button class="btn c660" @click="callStore">拨打电话</button>
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
				list: [1, 2]
			}
		},
		onShow() {},
		methods: {
			seeLocation() {
				uni.openLocation({
					latitude: 36.159074,
					longitude: 120.424672,
					success: function() {
						console.log('success');
					}
				});
			},
			callStore() {
				const vm = this;
				uni.makePhoneCall({
					phoneNumber: '114'
				});
			},
			goPage(url) {
				this.$utils.goPage(url)
			}
		},
		computed: {}
	}
</script>

<style lang="scss">
	.line {
		width: 100%;
		height: 15upx;
	}

	.section-a {
		padding-bottom: 180upx;

		.sec3 {
			.box {
				display: flex;
				flex-direction: column;

				.biao {
					height: 90upx;
					line-height: 90upx;
					font-family: Source Han Sans CN;
					font-size: 30upx;
					font-weight: 600;
					color: #666;
				}

				.other {
					display: flex;
					align-items: center;

					image {
						width: 110upx;
						height: 110upx;
						border-radius: 55upx;
					}

					.info {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						width: 600upx;

						.context {
							font-size: 24upx;
							color: #666666;
							line-height: 36upx;
						}
					}
				}
			}
		}
	}

	.section-c {
		margin-top: 10upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.06);
		border-radius: 20px;

		.item {
			height: 160upx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #F1F1F1;

			.detail {
				padding-left: 10upx;
				height: 100upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.name {
					font-size: 32upx;
					color: #333333;
				}

				.desc {
					font-size: 24upx;
					color: #999999;
				}

				.money {
					padding: 10upx 20upx;
					font-weight: bold;
					font-size: 30upx;
					color: #FE3701;
				}
			}
		}

		.add {
			height: 160upx;
			display: flex;
			align-items: center;

			.pic {
				margin-right: 20upx;
				overflow: hidden;

				image {
					width: 92upx;
					height: 92upx;
					border-radius: 10upx;
				}
			}

			.detail {
				width: 430upx;
				height: 70upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.name {
					font-size: 24upx;
					color: #333333;
				}

				.desc {
					font-size: 20upx;
					color: rgba(156, 156, 156, 1);
				}
			}
		}
	}

	.section-d {
		.add {
			margin-top: 30upx;
			padding: 40upx 0;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #F1F1F1;

			.pic {
				margin-right: 20upx;
				overflow: hidden;
				border-radius: 10upx;
				align-self: flex-start;

				image {
					width: 36upx;
				}
			}

			.detail {
				width: 430upx;
				height: 70upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.name {
					font-weight: 600;
					font-size: 28upx;
					color: #333333;
				}

				.desc {
					padding-top: 6upx;
					font-size: 24upx;
					color: #666666;
				}
			}

			.specification {
				width: 160upx;
				display: flex;
				flex-direction: column;
				align-items: flex-end;

				image {
					width: 30rpx;
					height: 26rpx;
					transform: rotate(-90deg);
				}
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		padding: 20upx 0;
		width: 100%;
		background: #FFFFFF;
	}

	.btn {
		border-radius: 48upx;
		margin: 0 auto;
	}
</style>
