<template>
	<view class="content">
		<view class="header c690">
			<view class="box">
				<image class="avar" :src="staticURL + 'test/lady.png'"></image>
				<view class="userInfo">
					<text>红尘客栈</text>
					<view class="class">
						<image :src="staticURL + 'mainAll/icon-vip.png'"></image>
						<text>VIP会员</text>
					</view>
				</view>
				<view class="membership" @click="goPage('/pages/mainAll/bankCard/bankCard')">
					<text>银行卡</text>
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
		</view>
		<!-- 分类 -->
		<view class="tl c660">账户余额（元）</view>
		<view class="common-title money">
			<view class="t-l red">
				0.00
			</view>
			<view class="t-r" @click="goPage('/pages/mainAll/withdraw/withdraw')">
				<text class="text">提现</text>
				<image :src="staticURL + 'common/arrow-gray.png'"></image>
			</view>
			<view class="t-r" @click="goPage('/pages/mainAll/recharge/recharge')">
				<text class="text">充值</text>
				<image :src="staticURL + 'common/arrow-gray.png'"></image>
			</view>
		</view>
		<view class="section-c c660">
			<scroll-view  class="list"  scroll-y=true>
				<view class="item" v-for="(item, i) in list" :key="i" @click="goPage('')">
					<view class="detail">
						<view class="name">
							<text>提现</text>
						</view>
						<view class="desc">
							2019-08-12 17:15:35
						</view>
					</view>
					<view class="specification">
							<view>
								-{{item.price}}
							</view>
					</view>
				</view>
			</scroll-view>
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
				list:[{
							pic: 'test/lady.png',
							name: '寿司制作',
							desc: '剩余数量',
							price: 16,
							num: 6
						},
						{
							pic: 'test/lady.png',
							name: '日料初级课程',
							desc: '剩余数量',
							price: 160,
							num: 1
						},
						{
							pic: 'test/lady.png',
							name: '不谷精致日料',
							desc: '剩余数量',
							price: 60,
							num: 1
						},
						{
							pic: 'test/lady.png',
							name: '不谷精致日料',
							desc: '剩余数量',
							price: 90,
							num: 1
						},
						{
							pic: 'test/lady.png',
							name: '三文鱼的保鲜',
							desc: '剩余数量',
							price: 106,
							num: 1
						}
					]
			}
		},
		onShow() {},
		methods: {
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
				height: 80upx;
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
	.section-c {
		.title {
			padding-top: 10upx;
			font-size: 29upx;
			font-weight: 500;
			height: 80upx;
			line-height: 80upx;
		}
		.list {
			padding-bottom: 9vh;
		}
		.item {
			height: 100upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-top: 1px solid #EEEEEE;
			.detail {
				width: 430upx;
				height: 60upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name {
					font-size: 20upx;
					color: #555555;
				}
				.desc {
					font-size: 18upx;
					color: rgba(156, 156, 156, 1);
				}
			}
	
			.specification {
				width: 120upx;
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				view {
					font-size: 24upx;
					color: #555555;
				}
			}
		}
	}
</style>
