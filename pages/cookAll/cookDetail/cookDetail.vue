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
				<view class="item price">
				¥{{detail.price}}
				</view>
				<view class="item">
					<image :src="staticURL + 'scanAll/icons02.png'"></image>
					<text>{{detail.sales}}人点过</text>
				</view>
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
		<view class="section-c c660">
			<view class="box">
				<text class="title text-block">套餐详情</text>
				<view class="list">
					<view class="list-item">
						<text>片三文鱼(3份)</text>
						<text>￥50</text>
					</view>
					<view class="list-item">
						<text>紫菜寿司(3份)</text>
						<text>￥50</text>
					</view>
					<view class="list-item">
						<text>意面(6份)</text>
						<text>￥680</text>
					</view>
					<view class="list-item">
						<text>舒芙蕾厚松饼(13份)</text>
						<text>￥550</text>
					</view>
					<view class="list-item">
						<text>紫菜寿司(3份)</text>
						<text>￥50</text>
					</view>
					<view class="list-item">
						<text>意面(6份)</text>
						<text>￥680</text>
					</view>
					<view class="list-item">
						<text>舒芙蕾厚松饼(13份)</text>
						<text>￥550</text>
					</view>
					<view class="list-item">
						<text>人工费</text>
						<text>￥550</text>
					</view>
				</view>
			</view>
		</view>
		<view class="footer c690">
			<button class="btn" @click="goPage('/pages/cookAll/submitOrder/submitOrder')">立即预约</button>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				value: 1,
				refresh: false,   //刷新购物车
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL, 
				detail: {
						banner: ['test/index1.png', 'test/index1.png'],
						id: '1',
						pic: 'test/index02.png',
						name: '精品4人聚餐套餐',
						desc: '精选优质白菜，颗颗入味',
						price: 1968,
						specification: '份',
						sale: 196,
						grade: 9.9, //评分
						sales: 550, //销量
						evaluate: 15,//评价数
						desc: '日本料理的主食以米饭、面条为主，因为靠近大海所以副食多为新鲜鱼虾等海产，常配以日本酒。和食以清淡著称，烹调时尽量保持材料本身的原味，分量超足且多样，完全满足用餐需求。'
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
			goPage(url) {
				this.$utils.goPage(url)
			}
		},
		computed: {
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
				align-items: flex-end;
				image {
					width:24upx;
					height:24upx;
					margin:0 4upx 6upx 10upx;
				}
			}
			.price {
				font-size: 34upx;
				font-weight:500 ;
				color: #ED5851;
			}
		}
		.desc {
			width:660upx;
			margin-top:34upx;
			padding:20upx;
			background:rgba(255,255,255,1);
			box-shadow:0upx 3upx 24upx 0upx rgba(4,0,0,0.06);
			border-radius:10upx;
			text {
				display: block;
				padding: 20upx 0;
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
		padding-bottom: 12vh;
		.box{
			width:660upx;
			margin-top:34upx;
			padding:20upx;
			background:rgba(255,255,255,1);
			box-shadow:0upx 3upx 24upx 0upx rgba(4,0,0,0.06);
			.title {
				width: 100%;
				font-size:24upx;
				font-weight:500;
				color:#414141;
				padding: 10upx 0 20upx 0;
				border-bottom:1px solid #EEEEEE;
			}
			.list {
				.list-item {
					height: 60upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					color:#414141;
					font-size: 24upx;
					text {
						&:last-child {
							font-weight:bold;
						}
					}
				}
			}
		}
	}
	.footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: fixed;
		bottom: 0;
		left: 30upx;
		height: 8vh;
		background: #ffffff;
		.btn {
			width:197upx;
			height:57upx;
			border-radius:29px;
			font-size: 24upx;
		}
	}
</style>
