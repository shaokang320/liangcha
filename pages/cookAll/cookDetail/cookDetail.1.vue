<template>
	<view class="content">
		<view class="section-a c690">
			<view class="item">
				<view class="pic">
					<image :src="staticURL + userInfo.pic"></image>
				</view>
				<view class="detail">
					<view class="name">
						<text>{{userInfo.name}}</text>
					</view>
					<view class="tag">
						擅长:{{userInfo.tag}}
					</view>
				</view>
			</view>
			<view class="intro c690">
				<text>简介</text>
				<view>
					中国烹饪协会会长，上海烹饪协会会长，高级烹饪师，高级厨艺研究员高级食品营养师，先后在南京玄武饭店、上海锦江之星连锁店任厨，擅长粤菜、鲁菜、家常菜。
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="h-title c690">
			<image :src="staticURL + 'bookAll/icon-book.png'"></image>
			<text>套餐选择</text>
		</view>
		<view class="section-c c690">
			<scroll-view  class="list"  scroll-y=true>
				<view class="item" v-for="(item, i) in list" :key="i">
					<view class="pic">
						<image :src="staticURL + item.pic"></image>
					</view>
					<view class="detail">
						<view class="name">
							<text>{{item.name}}</text>
						</view>
						<view class="desc">
							{{item.desc}}
						</view>
					</view>
					<view class="specification">
							<view>
								x{{item.num}}
							</view>
							<view>
								￥{{item.price}}
							</view>
					</view>
				</view>
			</scroll-view >
		</view>
		<view class="footer">
			<view class="f-l">
				<view class="cart">
					<image :src="staticURL + 'scanAll/cart.png'"></image>
					<text>2</text>
				</view>
				<text>￥1000</text>
			</view>
			<view class="f-r" @click="goPage">
				下一步
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				userInfo: {
						id: '1',
						pic: 'test/index02.png',
						name: '王晓伟',
						tag: '鲁菜、粤菜、川菜、家常菜',
						grade: 9.9, //评分
						sales: 550, //销量
						evaluate: 15,//评价数
					},
				list:[{
							pic: 'test/index02.png',
							name: '全家福豪华套餐',
							desc: '菜品涉及广，简单上手，难易程度三颗星',
							price: 680,
							num: 6
						},
						{
							pic: 'test/index02.png',
							name: '全家福豪华套餐',
							desc: '菜品涉及广，简单上手，难易程度三颗星',
							price: 960,
							num: 1
						},
						{
							pic: 'test/index02.png',
							name: '全家福豪华套餐',
							desc: '菜品涉及广，简单上手，难易程度三颗星',
							price: 960,
							num: 1
						},
						{
							pic: 'test/index02.png',
							name: '全家福豪华套餐',
							desc: '菜品涉及广，简单上手，难易程度三颗星',
							price: 960,
							num: 1
						},
						{
							pic: 'test/index02.png',
							name: '全家福豪华套餐',
							desc: '菜品涉及广，简单上手，难易程度三颗星',
							price: 960,
							num: 1
						},
						{
							pic: 'test/index02.png',
							name: '全家福豪华套餐',
							desc: '菜品涉及广，简单上手，难易程度三颗星',
							price: 960,
							num: 1
						},
						{
							pic: 'test/index02.png',
							name: '全家福豪华套餐',
							desc: '菜品涉及广，简单上手，难易程度三颗星',
							price: 960,
							num: 1
						}
					]
			}
		},
		methods: {
			goPage() {
				this.$utils.goPage(`/pages/cookAll/submitOrder/submitOrder`)
			}
		}
	}
</script>

<style lang="scss">
	.h-title {
		display: flex;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: #ffffff;
		image {
			width:38upx;
			height:38upx;
		}
		text {
			margin-left: 12upx;
			font-size:29upx;
			font-weight:500;
			color:rgba(11,11,11,1);
		}
	}
	.section-a {
		padding-bottom: 40upx;
		.item {
			height: 150upx;
			display: flex;
			align-items: center;
			.pic {
				width: 95upx;
				height: 95upx;
				margin-right:30upx;
				overflow: hidden;
				border-radius: 50%;
				image {
					width: 100%;
					heigt: 100%;
				}
			}

			.detail {
				height: 90upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name {
					font-size: 31upx;
					color: rgba(11, 11, 11, 1);
				}
				.tag {
					font-size: 21upx;
					color: #999999;
				}
			}
		}
		.intro {
			height:235upx;
			margin-top: 10upx;
			padding: 45upx;
			background:rgba(0,164,124,1);
			border-radius:10upx;
			color: #EEEEEE;
			text {
				font-size:26upx;
			}
			view {
				font-size:22upx;
				line-height: 40upx;
			}
		}
	}
	
	.line {
		border-bottom: 8upx solid #EEEEEE;
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
			height: 120upx;
			display: flex;
			align-items: center;
			.pic {
				width: 90upx;
				height: 90upx;
				margin-right:30upx;
				overflow: hidden;
				border-radius: 6upx;
				image {
					width: 100%;
					heigt: 100%;
				}
			}
	
			.detail {
				width: 430upx;
				height: 70upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name {
					font-size: 26upx;
					color: rgba(11, 11, 11, 1);
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
					&:first-child {
						font-size: 20upx;
						color:#ED5851;
					}
	
					&:last-child {
						font-size: 28upx;
						font-weight:bold;
						color:#ED5851;
					}
				}
				}
		}
	}
	.footer {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 8vh;
	
		.f-l {
			flex: 0 0 70%;
			display: flex;
			align-items: center;
			background: #ffffff;
	
			.cart {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 61upx;
				height: 61upx;
				margin: 0 10upx 0 50upx;
	
				image {
					width: 100upx;
					height: 60upx;
				}
	
				text {
					position: absolute;
					top: -10upx;
					right: -10upx;
					width: 36upx;
					height: 36upx;
					border-radius: 50%;
					background: #DD524D;
					color: #ffffff;
					text-align: center;
					font-weight: normal;
					font-size: 24upx;
					line-height: 36upx;
				}
			}
	
			text {
				height: 61upx;
				line-height: 85upx;
				font-size: 28upx;
				font-weight: bold;
				color: #333333;
			}
		}
	
		.f-r {
			flex: 0 0 30%;
			background: rgba(0, 164, 124, 1);
			line-height: 8vh;
			text-align: center;
			font-size: 33upx;
			color: rgba(255, 255, 255, 1);
		}
	}
</style>
