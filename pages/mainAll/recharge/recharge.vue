<template>
	<view class="content">
		<!-- 分类 -->
		<view class="tl c660">
			<text>充值金额</text>
		</view>
		<view class="common-title money">
			<view class="t-l red">
				￥
			</view>
			<view class="t-r">
				<input v-model="money" type="number" placeholder="请输入充值金额" />
			</view>
		</view>
		<view class="line"></view>
		<view class="tl c660">
			<text>充值到</text>
		</view>
		
		<view class="section-c c660">
				<view class="type">
					<view class="pic">
						<image :src="staticURL + 'mainAll/icon-money.png'"></image>
					</view>
					<view class="detail">
						<view class="name">
							<text>余额</text>
						</view>
						<view class="desc">
							充值
						</view>
					</view>
					<image class="yes" :src="staticURL + 'common/icon-yes.png'"></image>
				</view>
		</view>
		<button class="btn c660">确认充值</button>
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
	.tl {
		padding: 60upx 0 20upx 0;
		font-size: 24upx;
		color: #333333;
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
	.section-c {
		.type {
			height: 120upx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #EEEEEE;
			.pic {
				width: 70upx;
				height: 70upx;
				margin-right:20upx;
				overflow: hidden;
				border-radius: 35upx;
				image {
					width: 70upx;
					height: 70upx;
				}
			}

			.detail {
				width: 490upx;
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
			.yes {
				width: 36upx;
				height: 35upx;
			}
		}
	}
	.btn {
		margin: 230upx auto 0;
	}
</style>
