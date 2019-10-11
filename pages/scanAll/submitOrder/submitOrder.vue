<template>
	<view class="content">
			<view class="section-a">
				<view class="name">
					日源（广州白云区店）
				</view>
				<view class="number">
					10号桌/2人（17:09）
				</view>
			</view>
			<view class="section-c c690">
				<view class="title">
					已点餐品
				</view>
				<scroll-view  class="list"  scroll-y=true>
					<view class="item" v-for="(item, i) in scanAll.cart" :key="i">
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
					<view class="item" v-for="(item, i) in scanAll.cart" :key="i">
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
					<view class="item" v-for="(item, i) in scanAll.cart" :key="i">
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
					<view class="item" v-for="(item, i) in scanAll.cart" :key="i">
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
				<view class="line"></view>
				<view class="msg">
					<text class="title">添加备注:</text>
					<textarea :value="msg" placeholder="请填写(100字)" maxlength="100" auto-height/>
				</view>
			</view>
			<view class="footer">
				<view class="f-l">
					<view class="cart">
						合计：￥
					</view>
					<text>{{scanAll.totalPrice}}</text>
				</view>
				<view class="f-r" @click="goPage">
					去付款
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
				list: []
			};
		},
		onLoad() {
			console.log(this.scanAll);
		},
		methods: {
			goPage() {
				this.$utils.goPage(`/pages/scanAll/paySuccess/paySuccess`)
			}
		},
		computed: {
			...mapState(['scanAll'])
		}
	}
</script>

<style lang="scss">

	.section-a {
		position: fixed;
		height: 6vh;
		width: 690upx;
		left: 30upx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		background: #f5f5f5;
		.name {
			font-size: 32upx;
			font-weight: 500;
			color: rgba(62, 58, 57, 1);
		}

		.number {
			font-size: 21upx;
			color: rgba(62, 58, 57, 1);
		}
	}
	.section-c {
		padding: 6vh 0 10vh;
		.title {
			padding-top: 10upx;
			font-size: 29upx;
			font-weight: 500;
			height: 80upx;
			line-height: 80upx;
		}
		.list {
			min-height:360upx;
			max-height: 660upx;
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
		.line {
			margin: 20upx 0;
			border-bottom: 4px solid #EEEEEE;
		}
		.msg {
			textarea {
				width: 690upx;
				padding: 20upx;
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
