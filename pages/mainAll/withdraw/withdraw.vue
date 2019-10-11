<template>
	<view class="content">
		<view class="header c690" @click="goPage('/pages/mainAll/bankCard/bankCard')">
			<view class="box">
				<text class="avar">到账银行卡</text>
				<view class="userInfo">
					<text>中信银行储蓄卡(7820)</text>
					<text>体现金额预计24小时到账</text>
				</view>
				<view class="membership" @click="goPage('/pages/mainAll/bankCard/bankCard')">
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
		</view>
		<!-- 分类 -->
		<view class="tl c660">
			<text>提现金额</text>
		</view>
		<view class="common-title money">
			<view class="t-l red">
				￥
			</view>
			<view class="t-r">
				<input v-model="money" placeholder="请输入提现金额" />
			</view>
		</view>
		<view class="line"></view>
		<view class="tl c660" style="padding-top: 30upx;">
			<text>可提现金额：{{blance}}元</text>
			<text class="blu" @click="all">全部提现</text>
		</view>
		<button class="btn c660" @click="goPage('/pages/mainAll/withdrawSuccess/withdrawSuccess')">确认提现</button>
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
				blance: '5000.00',
				money: ''
			}
		},
		onShow() {},
		methods: {
			all() {
				this.money = this.blance;
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
		box-shadow: 0px 3upx 24upx 0px rgba(4, 0, 0, 0.1);
		border-radius: 10upx;
		background: #FFFFFF;

		.box {
			width: 600upx;
			height: 170upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.avar {
				width: 130upx;
				height: 70upx;
				font-size: 22upx;
				color: #333333;
			}

			.userInfo {
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				width: 430upx;
				height: 100upx;
				margin-left: 30upx;

				text {
					&:first-child {
						font-size: 32upx;
						color: #2B2B2B;
					}

					&:last-child {
						font-size: 22upx;
						color: #878787;
					}
				}
			}

			.membership {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 70upx;
				height: 40upx;
				line-height: 40upx;

				image {
					border-radius: 50%;
					width: 30upx;
					height: 30upx;
					transform: rotate(-90deg);
				}
			}
		}
	}

	.tl {
		padding: 60upx 0 20upx 0;
		font-size: 24upx;
		color: #333333;
		display: flex;
		justify-content: space-between;

		.blu {
			color: #00A47C;
		}
	}

	.common-title {
		padding: 30upx 0;
		width: 660upx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.t-l {
			&.red {
				font-size: 40upx;
				font-weight: bold;
				color: #333333;
			}
		}

		.t-r {
			display: flex;
			align-items: center;

			input {
				font-size: 30upx;
				text-align: right;
				color: #6C6A6A;
			}
		}
	}

	.line {
		width: 100%;
		height: 15upx;
	}

	.btn {
		margin: 150upx auto 0;
	}
</style>
