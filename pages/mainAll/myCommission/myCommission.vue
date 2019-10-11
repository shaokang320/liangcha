<template>
	<view class="content">
		<view class="section-a">
			<text>共0个订单</text>
			<text>累计收益0.00</text>
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
							2019-08-12 17:15:35
						</view>
					</view>
					<view class="specification">
							<view>
								+{{item.price}}
							</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
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
							pic: 'test/lady.png',
							name: '寿司制作',
							desc: '剩余数量',
							price: 1680,
							num: 6
						},
						{
							pic: 'test/lady.png',
							name: '日料初级课程',
							desc: '剩余数量',
							price: 1960,
							num: 1
						},
						{
							pic: 'test/lady.png',
							name: '不谷精致日料',
							desc: '剩余数量',
							price: 960,
							num: 1
						},
						{
							pic: 'test/lady.png',
							name: '不谷精致日料',
							desc: '剩余数量',
							price: 960,
							num: 1
						},
						{
							pic: 'test/lady.png',
							name: '三文鱼的保鲜',
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
		position: fixed;
		width: 690upx;
		left: 30upx;
		height: 60upx;
		padding: 0 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #00A47C;
		color: #FFFFFF;
		font-size: 20upx;
	}
	.section-c {
		padding-top: 60upx;
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
