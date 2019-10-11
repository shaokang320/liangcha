<template>
	<view class="content">
		<view class="section-a">
			<view class="box c660">
				<view class="title01">
					大厅4号桌
				</view>
				<view class="title02">
					距离订单关闭还有
				</view>
				<view class="title03">
					05:59:59
				</view>
			</view>
		</view>
		<view class="section-b">
			<view class="box c660">
				<view class="title01">
					<image :src="staticURL + 'cookAll/pro-on.png'"></image>
					<view class="progress">
						<text class="progress01">已取号</text>
						<text class="progress02">2019-11-11 12:00</text>
					</view>
				</view>
				<view class="line"></view>
				<view class="title01">
					<image :src="staticURL + 'cookAll/pro-off.png'"></image>
					<view class="progress">
						<text class="progress01">等待确认</text>
						<text class="progress02">2019-11-11 12:00</text>
					</view>
				</view>
				<view class="line"></view>
				<view class="title01">
					<image :src="staticURL + 'cookAll/pro-off.png'"></image>
					<view class="progress">
						<text class="progress01">取号成功</text>
						<text class="progress02">2019-11-11 12:00</text>
					</view>
				</view>
			</view>
		</view>
		<view class="footer c690">
			<button class="btn" @click="goPage">确认</button>
		</view>
		<mask v-if="flag" :bgcolor="'rgba(0,0,0,0.4)'" class="components-mask">
			<view class="content">
				<image :src="staticURL + 'cookAll/wating03.png'"></image>
				<text class="text01">取号失败</text>
				<text class="text02">很抱歉,取号已超时,请重新取号排队</text>
				<button class="btn" type="primary" @click="flag = !flag">知道了</button>
			</view>
		</mask>
	</view>
</template>

<script>
	import mask from '@/components/mask.vue'
	export default {
		components: {
			mask
		},
		data() {
			return {
				flag: true,
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
			};
		}
	}
</script>

<style lang="scss">
	.section-a {
		padding: 30upx 0;
		border-top: 16upx solid #EEEEEE;
		border-bottom: 16upx solid #EEEEEE;

		.title01 {
			font-size: 28upx;
			color: rgba(51, 51, 51, 1);
		}

		.title02 {
			padding: 40upx 0 6upx;
			font-size: 22upx;
			color: #999999;
		}

		.title03 {
			font-size: 57upx;
			color: #333333;
		}
	}

	.section-b {
		padding: 30upx 0 100upx;
		.title01 {
			display: flex;

			image {
				width: 36upx;
				height: 36upx;
			}

			.progress {
				padding-left: 30upx;

				.progress01 {
					// width: 130upx;
					font-size: 28upx;
					color: rgba(51, 51, 51, 1);
				}

				.progress02 {
					padding-left: 20upx;
					font-size: 24upx;
					color: #999999;
				}
			}
		}

		.line {
			width: 1px;
			height: 75upx;
			background: rgba(204, 204, 204, 1);
			opacity: 0.7;
			margin: -2upx 0 0 18upx;
		}
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 8vh;
		background: #ffffff;

		.btn {
			width: 216upx;
			height: 77upx;
			line-height: 77upx;
			border-radius: 39px;
			font-size: 30upx;
		}
	}

	.components-mask {
		display: flex;
		align-items: center;
		justify-content: center;

		.content {
			padding: 30upx;
			background: #00A47C;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: 14upx;

			image {
				width: 100upx;
				height: 100upx;

				&.image01 {
					animation: xuanzhuan 6s infinite;
				}
			}

			.text01 {
				padding: 14upx 0;
				font-size: 30upx;
				color: #FFFFFF;
				font-weight: 500;
			}

			.text02 {
				font-size: 24upx;
				color: #FFFFFF;
			}

			button {
				margin-top: 40upx;
				width: 267upx;
				height: 62upx;
				background: rgba(0, 164, 124, 1);
				border: 2upx solid rgba(255, 255, 255, 1);
				border-radius: 10upx;
				font-size: 24upx;
				color: rgba(255, 255, 255, 1);
			}
		}
	}

	@keyframes xuanzhuan {
		0% {
			transform: rotatez(0deg);
		}

		16% {
			transform: rotatez(20deg);
		}

		32% {
			transform: rotatez(-20deg);
		}

		48% {
			transform: rotatez(20deg);
		}

		64% {
			transform: rotatez(-20deg);
		}

		72% {
			transform: rotatez(0deg);
		}

		100% {
			transform: rotatez(180deg);
		}
	}
</style>
