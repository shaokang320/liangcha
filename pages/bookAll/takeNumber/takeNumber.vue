<template>
	<view class="content">
		<view class="section-a">
			<view class="box">
				<view class="h-title">
					<text>当前时间</text>
					<text class="time">{{currentTime}}</text>
				</view>
			</view>
			<picker class="box" :value="number - 1" :range="numdata" @change="changeNumber">
				<view class="h-title">
					<text>就餐人数</text>
					<text class="time">{{number}}</text>
					<!-- <image :src="staticURL + 'common/arrow-gray.png'"></image> -->
				</view>
			</picker>
		</view>
		<view class="section-b">
			<view class="headline">亲,很抱歉，当前暂无空座,请取号排队等待哦</view>
			<view class="box">
				<view class="box-item">
					<view class="title">餐厅类型</view>
					<view class="li" v-for="(item, index) in type" :key="index">
						{{item}}
					</view>
				</view>
				<view class="box-item">
					<view class="title">等待桌数</view>
					<view class="li" v-for="(item, index) in waitingNumber" :key="index">
						<text>{{item}}</text>桌
					</view>
				</view>
			</view>
		</view>
		<view class="footer c690">
			<button class="btn" @click="takeNumber()">确认取号</button>
		</view>
		<mask v-if="flag" :bgcolor="'rgba(0,0,0,0.1)'" class="components-mask">
			<view class="content">
				<image :src="staticURL + 'cookAll/wating01.png'"></image>
				<text class="text01">正在为您排队</text>
				<text class="text02">请稍后...</text>
			</view>
		</mask>
	</view>
</template>

<script>
	import mask from '@/components/mask.vue';
	export default {
		components: {
			mask
		},
		data() {
			return {
				flag: true,
				numdata: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
					30
				],
				number: 4, //就餐人数
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				type: ['大厅（1-2人）', '大厅（4人）', '大厅（8人）', '包间（12人）'],
				waitingNumber: [6, 9, 5, 411],
				currentTime: '' //当前时间
			};
		},
		created() {
			const vm = this;
			vm.getCurrentTime();
			setInterval(() => {
				vm.getCurrentTime();
			}, 1000)
			setTimeout(function() {
				vm.flag = false;
			}, 1000);
		},
		methods: {
			changeNumber(e) {
				this.number = this.numdata[e.detail.value];
			},
			takeNumber() {
				this.$utils.goPage('/pages/bookAll/takeSuccess/takeSuccess')
			},
			getCurrentTime() {
				const vm = this;
				const now = new Date();
				let hour = now.getHours(); //小时
				let minu = now.getMinutes(); //分钟
				let sec = now.getSeconds(); //秒
				if (hour < 10) hour = "0" + hour;
				if (minu < 10) minu = "0" + minu;
				if (sec < 10) sec = "0" + sec;
				vm.currentTime = hour + ':' + minu + ' ' + sec;
			}
		}
	}
</script>

<style lang="scss">
	.section-a {
		display: flex;
		align-items: center;
		z-index: 3;
		width: 100%;
		height: 260upx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
		background-color: #404d6d;

		.box {
			width: 50%;

			.h-title {
				display: flex;
				flex-direction: column;
				align-items: center;
				height: 110upx;
				justify-content: space-between;

				text {
					font-size: 28upx;
					font-weight: 500;
					color: #fffdff;
				}

				.time {
					font-size: 32upx;
					font-weight: 600;
					color: #fffdff;
				}

				image {
					width: 36upx;
					height: 26upx;
				}
			}
		}
	}

	.section-b {
		.headline {
			padding: 60upx 0 30upx;
			color: #8A8685;
			font-size: 22upx;
			text-align: center;
		}

		.box {
			display: flex;
			width: 500upx;
			margin: 0 auto;

			.box-item {
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;

				.title {
					width: 100%;
					color: #0B0B0B;
					text-align: center;
					font-size: 24upx;
					padding: 40upx 0;
					border-bottom: 1px solid #EEEEEE;
				}

				.li {
					width: 100%;
					color: #0B0B0B;
					text-align: center;
					font-size: 22upx;
					padding: 30upx 0;

					text {
						color: #DD524D;
					}
				}
			}
		}
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 20upx;
		left: 30upx;
		height: 8vh;
		background: #ffffff;

		.btn {
			width: 660upx;
			height: 90upx;
			line-height: 90upx;
			border-radius: 45px;
			font-size: 32upx;
		}
	}

	.components-mask {
		display: flex;
		align-items: center;
		justify-content: center;

		.content {
			padding: 30upx;
			background: #00A47C;
			width: 280upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: 8upx;

			image {
				width: 100upx;
				height: 100upx;
				animation: xuanzhuan 6s infinite;
			}

			.text01 {
				padding: 16upx 0 6upx;
				font-size: 28upx;
				color: #FFFFFF;
				font-weight: 500;
			}

			.text02 {
				font-size: 24upx;
				color: #FFFFFF;
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
