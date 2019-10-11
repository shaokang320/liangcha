<template>
	<view class="content">
		<view class="section-a c690">
			<view class="address">
				<image :src="staticURL + 'common/address-gray.png'" class="icon-address"></image>
				<view class="detail">
					<view class="d-a">
						<text class="name">流沙包</text>
						<text class="tel">18612341234</text>
					</view>
					<view class="d-b">
						<text class="area">北京市</text>
						<text class="area">北京市</text>
						<text class="area">朝阳区</text>
						花园路甲220号花园路甲25号写字楼230室
					</view>
				</view>
				<image :src="staticURL + 'common/arrow-gray.png'" class="icon-right"></image>
			</view>
			<image :src="staticURL + 'common/address-line.png'" class="icon-line"></image>
			<view class="line"></view>
		</view>
		<view class="section-c c690">
			<scroll-view class="list" scroll-y=true>
				<view class="item">
					<view class="pic">
						<image :src="staticURL + list.pic"></image>
					</view>
					<view class="detail">
						<view class="name">
							<text>{{list.name}}</text>
						</view>

						<view class="desc">
							预约时间：2019-08-19
						</view>
					</view>
					<view class="specification">
					<!-- 	<view>
							x{{list.num}}
						</view> -->
						<view>
							￥{{list.price}}
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="line"></view>
			<view class="msg">
				<text class="title text-block">添加备注:</text>
				<textarea :value="msg" placeholder="请填写备注" maxlength="100" auto-height />
				</view>
			</view>
			<view class="footer">
				<view class="f-l">
					<view class="cart">
						合计：￥
					</view>
					<text>{{list.price}}</text>
				</view>
				<view class="f-r" @click="goPage">
					去预约
				</view>
			</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				msg: '',
				list:{
						pic: 'test/index02.png',
						name: '全家福豪华套餐',
						desc: '菜品涉及广，简单上手，难易程度三颗星',
						price: 1680,
						num: 6
					}
					
			};
		},
		onLoad() {
			console.log(this.scanAll);
			uni.setNavigationBarTitle({
				title:'日源（广州白云区店）'
			})
		},
		methods: {
			goPage() {
				this.$utils.goPage(`/pages/cookAll/orderWaiting/orderWaiting`)
			}
		},
		computed: {
			...mapState(['scanAll'])
		}
	}
</script>

<style lang="scss">
	.section-a {
		.address {
			height:180upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.icon-address {
				width:50upx;
				height:50upx;
			}
			.icon-right {
				width:36upx;
				height:36upx;
				margin-top: 24upx;
				transform: rotate(-90deg);
			}
			.detail {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 560upx;				
				// height:160upx;
				.d-a {
					padding: 10upx 0;
					font-weight:bold;
					color:rgba(41,38,33,1);
					.name {
						font-size:30upx;
						padding-right: 20upx;
					}
					.tel {
						font-size:28upx;
						padding-right: 20upx;
					}
				}
				.d-b {
					padding: 10upx 0;
					font-size:28upx;
					font-weight:500;
					color:rgba(41,38,33,1);
					.area {
						padding-right: 20upx;
					}
				}
			}
		}
		.icon-line {
			width: 100%;
			height: 8upx;
			margin-bottom: -4upx;
		}
	}
	.line {
		border-bottom: 4px solid #EEEEEE;
	}
	.section-c {
		.list {
			padding: 30upx 0;
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
		.msg {
			text {
				padding: 16upx 0;
			}
			textarea {
				width: 690upx;
				padding: 20upx;
				font-size:22upx;
				min-height: 180upx;
				border: 1px solid #EEEEEE;
				border-radius:5upx;
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
			background:rgba(238,238,238,1);
	
			.cart {
				height: 61upx;
				margin-left: 33upx;
				line-height: 85upx;
				font-size: 24upx;
				font-weight: bold;
				color: #ED5851;
			}
	
			text {
				height: 61upx;
				line-height: 85upx;
				font-size: 28upx;
				font-weight: bold;
				color: #ED5851;
			}
		}
	
		.f-r {
			flex: 0 0 30%;
			background: rgba(0, 164, 124, 1);
			line-height: 8vh;
			text-align: center;
			font-size: 35upx;
			color: rgba(255, 255, 255, 1);
		}
	}
</style>
