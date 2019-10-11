<template>
	<view class="content">
		<view class="section-a c690">
			<view class="only">
				<text class="only-l">预约时间</text>
				<text class="only-r">2019-08-19 15:30</text>
			</view>
			<view class="only">
				<text class="only-l">人数</text>
				<text class="only-r">4人</text>
			</view>
			<view class="only">
				<text class="only-l">定金</text>
				<text class="only-r red">180元</text>
			</view>
		</view>
		<view class="line"></view>
		<view class="section-b c690">
			<view class="only">
				<text class="only-l">姓名</text>
				<input class="only-r" type="text" value="" placeholder="请填写"/>
			</view>
			<view class="only">
				<text class="only-l">电话</text>
				<input class="only-r" type="text" value="" placeholder="请填写"/>
			</view>
			<view class="only">
				<text class="only-l">备注</text>
				<input class="only-r" type="text" value="" placeholder="请填写"/>
			</view>
		</view>
		<view class="footer c690">
			<button class="btn" @click="pay">确认预约</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: '',
				number: '',
				money: '',
				name: '',
				tel: '',
				msg: ''
			};
		},
		onLoad() {
			console.log(uni.getStorageSync('params'))
		},
		methods: {
			// 预约支付
			pay() {
				this.$utils.goPage('/pages/bookAll/paySuccess/paySuccess')
			}
		}
	}
</script>

<style lang="scss">
	.section-a {
		.only {
			height: 100upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #EEEEEE;
			.only-l {
				font-size: 26upx;
				color: #000000;
			}
			.only-r {
				font-size: 24upx;
				color: #8F8D8D;
				&.red {
					color: #ED5851;
				}
			}
		}
	}
	.line {
		height:8upx;
	}
	.section-b {
		.only {
			height: 100upx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #EEEEEE;
			.only-l {
				font-size: 26upx;
				color: #000000;
			}
			.only-r {
				width:400upx;
				margin-left: 80upx;
				font-size: 26upx;
			}
		}
	}
	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 30upx;
		height:200upx;
		background: #ffffff;
		.btn {
			width: 216upx;
			height: 77upx;
			line-height: 77upx;
			border-radius: 39px;
			font-size: 30upx;
		}
	}
</style>
