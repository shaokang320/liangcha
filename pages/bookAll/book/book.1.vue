<template>
	<view class="content">
		<view class="section-a">
			<view class="box" @click="changeTime">
				<view class="h-title">
					<text>预约时间</text>
					<text class="time">{{day}} {{time}}</text>
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
			<picker class="box" :value="number - 1" :range="numdata" @change="changeNumber">
				<view class="h-title">
					<text>人数</text>
					<text class="time">{{number}}</text>
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</picker>
		</view>
		<view style="height: 90upx;"></view>
		<!-- 预约餐桌 -->
		<view class="common-title c690">
			预约餐桌
		</view>
		<view class="section-b c690">
			<view class="nav" v-for="(itemOne, i) in seat.da.seatList" :key="i">
				<text class="title text-block">{{itemOne.name}}</text>
				<view class="subnav">
					<block v-for="(itemTwo, j) in itemOne.list" :key="j">
						<!-- 已被预约 未被禁用 -->
						<view class="seat disabled" v-if="itemTwo.status && !itemOne.disabled">
							{{itemTwo.name}}
						</view>
						<!-- 已被预约 已被禁用 -->
						<view class="seat disabled" v-if="itemTwo.status && itemOne.disabled">
							{{itemTwo.name}}
						</view>
						<!-- 未被预约 已被禁用 -->
						<view class="seat disabled" v-if="!itemTwo.status && itemOne.disabled">
							{{itemTwo.name}}
						</view>
						<!-- 未被预约 未被禁用 -->
						<view class="seat" v-if="!itemTwo.status && !itemOne.disabled && !itemTwo.active" @click="selectSeat(['da',i,j])">
							{{itemTwo.name}}
						</view>
						<!--当前选中 未被预约 未被禁用 -->
						<view class="seat active" v-if="!itemTwo.status && !itemOne.disabled && itemTwo.active">
							{{itemTwo.name}}
						</view>
					</block>
				</view>
			</view>
		</view>
		<view class="line c690"></view>
		<!-- 预约包间 -->
		<view class="common-title c690">
			预约包间
		</view>
		<view class="section-b c690">
			<view class="nav" v-for="(itemOne, i) in seat.bao.seatList" :key="i">
				<text class="title text-block">{{itemOne.name}}</text>
				<view class="subnav">
					<block v-for="(itemTwo, j) in itemOne.list" :key="j">
						<!-- 已被预约 未被禁用 -->
						<view class="seat disabled" v-if="itemTwo.status && !itemOne.disabled">
							{{itemTwo.name}}
						</view>
						<!-- 已被预约 已被禁用 -->
						<view class="seat disabled" v-if="itemTwo.status && itemOne.disabled">
							{{itemTwo.name}}
						</view>
						<!-- 未被预约 已被禁用 -->
						<view class="seat disabled" v-if="!itemTwo.status && itemOne.disabled">
							{{itemTwo.name}}
						</view>
						<!-- 未被预约 未被禁用 -->
						<view class="seat" v-if="!itemTwo.status && !itemOne.disabled && !itemTwo.active" @click="selectSeat(['bao',i,j])">
							{{itemTwo.name}}
						</view>
						<!--当前选中 未被预约 未被禁用 -->
						<view class="seat active" v-if="!itemTwo.status && !itemOne.disabled && itemTwo.active">
							{{itemTwo.name}}
						</view>
					</block>
				</view>
			</view>
		</view>
		<view class="footer c690">
			<button class="btn" @click="goPage">下一步</button>
		</view>
		<!-- 日历 -->
		<mask :class="[ flag ? '' : 'none']" :bgcolor="'#ffffff'" class="components-mask">
			<view class="c690">
				<uni-calendar disableBefore :date="startData" :insert="true" :lunar="true" :start-date="startData" :end-date="endData"
				 @change="change" />
			</view>
			<view class="time c690">
				<view class="common-title">
					<view class="t-l">
						时间
					</view>
					<view class="t-r">
						<picker mode="time" :value="time" :start="startTime" :end="endTime" @change="bindTimeChange">
							<view class="text">{{time}}</view>
						</picker>
						<image :src="staticURL + 'common/arrow-gray.png'"></image>
					</view>
				</view>
			</view>
			<button type="primary" class="btn" @click="changeTime">确认</button>
		</mask>
	</view>
</template>

<script>
	import mask from '@/components/mask.vue';
	import mock from "./data.js"
	import {
		uniCalendar
	} from "@/components/uni-calendar/uni-calendar"
	export default {
		components: {
			mask,
			uniCalendar
		},
		data() {
			return {
				numdata: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
					30
				],
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				flag: false,
				startData: '', //开始日期
				endData: '', //结束日期
				startTime: '', //营业开始时间
				endTime: '', //营业结束日期
				time: '', //所选时间
				day: '', //所选日期
				number: 4, //就餐人数
				seat1: JSON.stringify(mock), //选完时间后返回的数据-jsonString
				seat2: JSON.stringify(mock), //选完时间和人数后返回的数据-jsonString
				seat: mock, //页面展示的数据
			}
		},
		onShow() {
			const vm = this;
			vm.getTime();
			vm.seatStatus();
		},
		methods: {
			// 选择座位（e[大厅包间，几人桌索引，桌号索引]）
			selectSeat(e) {
				const [area, i, j] = [...e];
				console.log(area, i, j);
				this.seat[area].seatList[i].list[j].active = true;
				this.seat = JSON.parse(this.seat2);
				this.$nextTick(() => {
					this.seat[area].seatList[i].list[j].active = true;
				})
			},
			// 根据人数刷新选座状态
			seatStatus() {
				const vm = this;
				const number = vm.number;
				const da = vm.seat.da.seatList;
				const bao = vm.seat.bao.seatList;
				vm.seat = JSON.parse(this.seat1);
				for (let i in da) {
					// 餐桌限制人数大于输入的人数开启餐桌且餐桌有空座
					if (da[i].num >= number) {
						let flag = false;
						for (let j of da[i].list) {
							if (!j.status) {
								vm.$nextTick(() => {
									//i代表有空座的类别餐桌索引
									vm.seat.da.seatList[i].disabled = false;
									this.$nextTick(() => {
										vm.seat2 = JSON.stringify(vm.seat)
									})
								})
								flag = true;
								break;
							}
						};
						if (flag) {
							break;
						}
					}
				}
				for (let i in bao) {
					// 餐桌限制人数大于输入的人数开启餐桌且餐桌有空座
					if (bao[i].num >= number) {
						let flag = false;
						for (let j of bao[i].list) {
							if (!j.status) {
								vm.$nextTick(() => {
									//i代表有空座的类别餐桌索引
									vm.seat.bao.seatList[i].disabled = false;
									this.$nextTick(() => {
										vm.seat2 = JSON.stringify(vm.seat)
									})
								})
								flag = true;
								break;
							}
						};
						if (flag) {
							break;
						}
					}
				}
			},
			// 获取初始时间
			getTime() {
				const vm = this;
				const start = new Date().getTime() + 1000 * 60 * 60 * 24;
				const end = new Date().getTime() + 1000 * 60 * 60 * 24 * 7;
				vm.startData = vm.$utils.getMyDate(start);
				vm.endData = vm.$utils.getMyDate(end);
				vm.startTime = '09:00';
				vm.endTime = '18:00';
				vm.time = '09:00';
				vm.day = vm.$utils.getMyDate(start);
			},
			bindTimeChange(e) {
				this.time = e.detail.value;
			},
			changeNumber(e) {
				this.number = this.numdata[e.detail.value];
				this.seatStatus();
			},
			changeTime() {
				this.flag = !this.flag;
			},
			change(e) {
				this.day = e.fulldate;
			},
			// 下一步
			goPage() {
				const vm = this;
				uni.setStorageSync('params', {
					time: vm.day + ' ' + vm.time,
					number: vm.number,
					location: {
						name: '2人桌',
						name1: '14',
						money: 150
					}
				});
				this.$utils.goPage('/pages/bookAll/submitOrder/submitOrder')
			}
		}
	}
</script>
<style lang="scss">
	.section-a {
		z-index: 3;
		position: fixed;
		width: 690upx;
		left: 30upx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
		background-color: #ffffff;
		.box {
			width: 26%;
			&:first-child {
				width: 60%;
			}
			.h-title {
				display: flex;
				align-items: center;
				height: 90upx;
				background: #ffffff;
				justify-content: space-between;
				text {
					font-size: 26upx;
					font-weight: 500;
					color: rgba(11, 11, 11, 1);
				}
				image {
					width: 36upx;
					height: 26upx;
				}
			}
		}
	}

	.common-title {
		font-size: 24upx;
		color: rgba(11, 11, 11, 1);
		height: 90upx;
		line-height: 90upx;
		border-bottom: 1px solid #EEEEEE;
	}

	.line {
		height: 8upx;
		background: #EEEEEE;
	}

	.section-b {
		.nav {
			padding-bottom: 44upx;
			.title {
				height: 40upx;
				line-height: 40upx;
				font-size: 20upx;
				color: #0B0B0B;
			}

			.subnav {
				display: flex;
				flex-wrap: wrap;
				.seat {
					min-width: 40upx;
					height: 40upx;
					padding: 4upx;
					margin: 12upx 17upx 0 0;
					text-align: center;
					line-height: 36upx;
					background: #FFFFFF;
					border: 1px solid #8A8A8A;
					border-radius: 10upx;
					font-size: 18upx;
					color: #0B0B0B;
					&.active {
						color: #ffffff;
						background: #00A47C;
						border: 1px solid #ffffff;
					}
					&.disabled {
						background: #EBECEE;
						border: 1px solid #ffffff;
					}
				}
			}
		}
	}

	.components-mask {
		.time {
			margin-top: 48upx;
			height: 130upx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 3upx 24upx 0px rgba(4, 0, 0, 0.06);
			border-radius: 10upx;
			.common-title {
				width: 660upx;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				height: 120upx;
				line-height: 120upx;
				border: none;
				.t-l {
					font-size: 36upx;
					font-weight: 500;
					color: #484848;
				}
				.t-r {
					display: flex;
					align-items: center;
					.text {
						font-size: 36upx;
						color: #484848;
						font-weight: 500;
					}
					image {
						width: 40upx;
						height: 30upx;
						transform: rotate(-90deg);
					}
				}
			}
		}

		.btn {
			margin: 124upx auto 0;
			width: 216upx;
			height: 77upx;
			font-size: 30upx;
			line-height: 77upx;
			background: rgba(0, 164, 124, 1);
			border-radius: 39upx;
		}
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 30upx;
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
</style>
