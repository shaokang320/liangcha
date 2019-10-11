<template>
	<view class="content">
		<view class="section-a c690">
			<view class="h-title c690" @click="changeTime">
				<text>选择时间</text>
				<text class="time">{{day}} {{time}}</text>
				<image :src="staticURL + 'common/arrow-gray.png'"></image>
			</view>
		</view>
		<view class="section-c c690">
			<scroll-view  class="list"  scroll-y=true>
				<view class="item" v-for="(item, i) in list" :key="i" @click="goPage('/pages/cookAll/cookDetail/cookDetail')">
					<view class="pic">
						<image :src="staticURL + item.pic"></image>
					</view>
					<view class="detail">
						<view class="name">
							<text>{{item.name}}</text>
						</view>
						<view class="desc">
							{{item.desc}}: {{item.num}}
						</view>
					</view>
					<view class="specification">
							<view>
								￥{{item.price}}
							</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<mask :class="[ flag ? '' : 'none']" :bgcolor="'#ffffff'" class="components-mask">
			    <view class="c690">
			    	<uni-calendar
			    	disableBefore
			    	:date="startData"
			    	:insert="true"
			    	:lunar="true" 
			    	:start-date="startData"
			    	:end-date="endData"
			    	@change="change"
			    	/>
			    </view>
				<view class="time c690">
					<view class="common-title">
						<view class="t-l">
							时间
						</view>
						<view class="t-r">
							<picker 
								mode="time" 
								:value="time" 
								:start="startTime" 
								:end="endTime" 
								@change="bindTimeChange"
							>
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
	import mask from '@/components/mask.vue'
	import {uniCalendar} from "@/components/uni-calendar/uni-calendar"
	export default {
		components: {
			mask, uniCalendar
		},
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				flag: false,
				startData:'',                  //开始日期
				endData:'',                    //结束日期
				startTime:'',                  //营业开始时间
				endTime:'',                    //营业结束日期
				time: '',                      //所选时间
				day: '',                       //所选日期
				userInfo: {
						id: '1',
						pic: 'test/goods01.png',
						name: '王晓伟',
						tag: '鲁菜、粤菜、川菜、家常菜',
						grade: 9.9, //评分
						sales: 550, //销量
						evaluate: 15,//评价数
					},
				list:[{
							pic: 'test/goods01.png',
							name: '4人聚餐套餐',
							desc: '剩余数量',
							price: 1680,
							num: 6
						},
						{
							pic: 'test/goods01.png',
							name: '樱花精致日料套餐',
							desc: '剩余数量',
							price: 1960,
							num: 1
						},
						{
							pic: 'test/index02.png',
							name: '不谷精致日料',
							desc: '剩余数量',
							price: 960,
							num: 1
						},
						{
							pic: 'test/goods01.png',
							name: '全家福豪华套餐',
							desc: '剩余数量',
							price: 960,
							num: 1
						},
						{
							pic: 'test/index02.png',
							name: '精品12人豪华多人餐',
							desc: '剩余数量',
							price: 1060,
							num: 1
						}
					]
			}
		},
		onShow() {
			const vm = this;
			const start = new Date().getTime() + 1000*60*60*24;
			const end = new Date().getTime() + 1000*60*60*24*7;
			vm.startData = vm.$utils.getMyDate(start);
			vm.endData = vm.$utils.getMyDate(end);
			vm.startTime = '09:00';
			vm.endTime = '18:00';
			vm.time = '09:00';
			vm.day = vm.$utils.getMyDate(start);
		},
		methods: {
			bindTimeChange(e) {
				this.time = e.detail.value;
			},
			changeTime() {
				this.flag = !this.flag;
			},
			change(e) {
				this.day = e.fulldate;
			},
			goPage(url) {
				this.$utils.goPage(url)
			}
		}
	}
</script>

<style lang="scss">
	.section-a {
		.h-title {
			z-index: 3;
			position: fixed;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 690upx;
			height: 120upx;
			background: #ffffff;
			border-bottom: 1px solid #EEEEEE;
			text {
				font-size:30upx;
				font-weight:500;
				color:rgba(11,11,11,1);
			}
			.time {
				margin-left: -40upx;
			}
			image {
				width: 36upx;
				height: 26upx;
			}
		}
	}
	.section-c {
		padding-top: 120upx;
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
			height: 172upx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #EEEEEE;
			.pic {
				width: 109upx;
				height: 109upx;
				margin-right:30upx;
				overflow: hidden;
				border-radius: 6upx;
				image {
					width: 109upx;
					height: 109upx;
				}
			}

			.detail {
				width: 430upx;
				height: 90upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name {
					font-size: 32upx;
					color: rgba(11, 11, 11, 1);
				}
				.desc {
					font-size: 20upx;
					color: rgba(156, 156, 156, 1);
				}
			}
	
			.specification {
				width: 120upx;
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				view {
					font-size: 28upx;
					font-weight:bold;
					color:#ED5851;
				}
			}
		}
	}
	
	.components-mask {
		.time{
			margin-top: 48upx;
			height:130upx;
			background:rgba(255,255,255,1);
			box-shadow:0px 3upx 24upx 0px rgba(4,0,0,0.06);
			border-radius:10upx;
			
			.common-title {
				width: 660upx;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				height: 120upx;
				line-height: 120upx;
				.t-l {
					font-size:36upx;
					font-weight:500;
					color:#484848;
				}
				.t-r {
					display: flex;
					align-items: center;
					.text {
						font-size:36upx;
						color:#484848;
						font-weight:500;
					}
					image {
						width: 40upx;
						height: 30upx;
						transform: rotate(-90deg);
					}
				}
			}
		}
		.btn{
			margin: 124upx auto 0;
			width:216upx;
			height:77upx;
			font-size:30upx;
			line-height: 77upx;
			background:rgba(0,164,124,1);
			border-radius:39upx;
		}
	}
</style>
