<template>
	<view class="content">
		<!-- 轮播 -->
		<swiper class="section-a" indicator-active-color="#00A47C" indicator-dots="true" circular="true" autoplay="true"
		 duration="2000">
			<swiper-item v-for="(item, index) in detail.banner" :key="index">
				<view class="swiper-item">
					<image :src="staticURL + item" class="banner"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 简介 -->
		<view class="section-b c660">
			<view class="name">
				{{detail.name}}
			</view>
			<view class="other">
				<view class="item">
					<image :src="staticURL + 'scanAll/icons01.png'"></image>
					<text>{{detail.grade}}评分</text>
				</view>
				<view class="item">
					<image :src="staticURL + 'scanAll/icons02.png'"></image>
					<text>{{detail.sales}}人点过</text>
				</view>
				<view class="item">
					<image :src="staticURL + 'scanAll/icons03.png'"></image>
					<text>{{detail.evaluate}}次评价</text>
				</view>
			</view>
			<view class="price">
				¥{{detail.price}}/{{detail.specification}}
			</view>
			<view class="desc">
				<text>简介</text>
				<view class="msg">
					{{detail.desc}}
				</view>
			</view>
		</view>
		<view class="line"></view>
		<!-- 评价 -->
		<view class="section-c c660" @click="goPage">
			<view class="title">
				<view class="t-l">
					评价（{{detail.evaluate}}）
				</view>
				<view class="t-r">
					<text>好评率</text>
					<text class="red">{{detail.grade * 10}}%</text>
					<text class="right">></text>
				</view>
			</view>
			<view class="list">
				<view class="item">
					<view class="item-t">
						<view class="userInfo">
							<image :src="staticURL + evalateList.avar"></image>
							<view class="name">
								<text>{{evalateList.nickName}}</text>
								<text>{{evalateList.time}}</text>
							</view>
						</view>
						<view class="star">
							<star :value="evalateList.star"></star>
						</view>
					</view>
					<view class="item-b">
						采用鲜嫩鲢鱼作为主要食材，辣味适中且不油腻。
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="f-l" @click="show">
				<view class="cart">
					<image :src="staticURL + 'scanAll/cart.png'"></image>
					<text>{{scanAll.count}}</text>
				</view>
				<text>￥{{scanAll.totalPrice}}</text>
			</view>
			<view class="f-r"  @click="add">
				加入购物车
			</view>
		</view>
		<!-- 购物车 -->
		<view class="components-cart" v-show="showCart">
			<cart-List :refresh="refresh"></cart-List>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	import cartList from "@/components/cartList.vue"
	import star from "@/components/star.vue"
	export default {
		components:{
			cartList,
			star
		},
		data() {
			return {
				value: 1,
				showCart: false,  //控制显示状态
				refresh: false,   //刷新购物车
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL, 
				detail: {
						banner: ['test/index1.png', 'test/index1.png'],
						id: '1',
						pic: 'test/index02.png',
						name: '甜辣特色白菜',
						desc: '精选优质白菜，颗颗入味',
						price: 68,
						specification: '份',
						sale: 196,
						grade: 9.9, //评分
						sales: 550, //销量
						evaluate: 15,//评价数
						desc: '秋葵是当季新鲜蔬菜，它分泌的黏蛋白有保护胃壁的作用。这道沙拉搭配的奇亚籽蜂蜜油醋汁，酸味的醋汁搭配新鲜蔬菜，保证你食欲大开。而且奇亚籽营养丰富，其蛋白质含量比传统谷物，小麦、大米还要高。'
					},
				evalateList: {
					avar:'test/index1.png',
					nickName: '我是***小月',
					time: '2018-09-14',
					star: 4,
					msg: '采用鲜嫩鲢鱼作为主要食材，辣味适中且不油腻。'
				}
			};
		},
		onLoad() {
		},
		methods: {
			add() {
				const vm = this;
				vm.refresh = !vm.refresh;
			},
			show() {
				this.showCart = !this.showCart;
			},
			goPage() {
				this.$utils.goPage(`/pages/scanAll/subEvaluate/subEvaluate`)
			}
		},
		computed: {
			...mapState(['scanAll'])
		}
	}
</script>

<style lang="scss" scoped>
	.section-a {
		height: 350upx;
		.banner {
			width:100%;
			height: 380upx;
		}
	}
	.section-b {
		.name {
			padding: 28upx 0;
			font-size: 34upx;
			font-weight:500 ;
			color: #414141;
		}
		.other {
			display: flex;
			color:#BCBCBC;
			font-size: 22upx;
			.item {
				display: flex;
				align-items: center;
				image {
					width:24upx;
					height:24upx;
				}
				text {
					padding:0 30upx 0 6upx;
				}
			}
		}
		.price {
			padding: 28upx 0;
			font-size: 32upx;
			font-weight:500 ;
			color: #ED5851;
		}
		.desc {
			width:660upx;
			margin-top:34upx;
			padding:40upx;
			background:rgba(255,255,255,1);
			box-shadow:0upx 3upx 24upx 0upx rgba(4,0,0,0.06);
			border-radius:10upx;
			text {
				display: block;
				padding: 20upx 0;
				text-align: center;			
				font-weight:500 ;
				font-size:26upx;
				color:#414141;
			}
			.msg {
				font-size:20upx;
				color:#666;
				line-height:50upx;
			}
		}
	}
	.line {
		padding-bottom: 34upx;
		border-bottom: 8upx solid #EEEEEE;
	}
	.section-c {
		border-bottom: 1px solid #f5f5f5;
		padding-bottom: 8vh;
		.title {
			display: flex;
			justify-content: space-between;
			height: 82upx;
			line-height: 82upx;
			font-size:24upx;
			color:#414141;
			.t-r {
				.red {
					color: #ED5851;
					padding-right: 6upx;
				}
			}
		}
		.list {
			.item {
				padding: 10upx;
				.item-t {
					display: flex;
					justify-content: space-between;
					.userInfo {
						display: flex;
						width: 50%;
						image {
							width:100upx;
							height:100upx;
							border-radius:50%;
						}
						.name {
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							margin-left: 22upx;
							height:100upx;
							text {
								display: block;
								&:first-child {
									font-size:24upx;
									color:#414141;
								}
								&:last-child {
									font-size:20upx;
									color:#8E8E8E;
								}
							}
						}
						
					}
					.star {
						width: 220upx;
					}
				}
				.item-b {
					padding: 16upx 26upx;
					margin: 0 auto;
					font-size:24upx;
					color:#999999;
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
			font-size: 31upx;
			color: rgba(255, 255, 255, 1);
		}
	}
	.components-cart {
		position: fixed;
		bottom: 8vh;
		width: 100%;
	}
</style>
