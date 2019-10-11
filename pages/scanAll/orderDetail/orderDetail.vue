<template>
	<view class="content">
		<view class="section-a">
			<!--  -->
			<view class="sub">
				<view class="c660">
					<view class="title">
						<view class="t-l">
							<image :src="staticURL + 'mainAll/icon-chu.png'"></image>
							<text class="text">广州白云店</text>
						</view>
						<view class="t-r">
							<!-- 	<text>2019-08-08 15:04</text>
							<text class="text">完成</text> -->
						</view>
					</view>
					<view class="ul">
						<view class="li" v-for="(item, i) in list" :key="i">
							<view class="pic">
								<image :src="staticURL + item.pic"></image>
							</view>
							<view class="detail">
								<view class="name text1">
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
					</view>
				</view>
				<view class="other">
					<view class="box c660">
						<view class="box01">
							<text class="text-a">总金额：</text>
							<text class="text-b">￥680</text>
						</view>
						<view class="box01">
							<text class="text-a">总优惠：</text>
							<text class="text-b">￥10</text>
						</view>
					</view>
				</view>
				<view class="other">
					<view class="box c660">
						<view class="box01">
							<text class="text-a">已支付：</text>
							<text class="text-b">50.00</text>
						</view>
					</view>
				</view>
			</view>
			<!--  -->
		</view>

		<view class="section-c c660">
			<view class="box">
				<text class="title text-block">订单信息</text>
				<view class="list">
					<view class="list-item">
						<text>交易店铺：</text>
						<text>广州白云店</text>
					</view>
					<view class="list-item">
						<text>下单时间：</text>
						<text>2019-09-11 09:40:40</text>
					</view>
					<view class="list-item">
						<text>支付时间：</text>
						<text>2019-09-11 09:40:40</text>
					</view>
					<view class="list-item">
						<text>下单状态：</text>
						<text>已完成</text>
					</view>
				</view>
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
				list: [{
						id: '1',
						pic: 'test/index02.png',
						name: '甜辣特色白菜',
						desc: '10号桌/2人',
						price: 68,
						num: 196
					},
					{
						id: '2',
						pic: 'test/index02.png',
						name: '甜辣特色白菜',
						desc: '6号桌/4人',
						price: 68,
						num: 196
					}
				]
			};
		},
		methods: {
			goPage(url) {
				this.$utils.goPage(url)
			}
		}
	}
</script>

<style lang="scss">
	.header {
		position: fixed;
		width: 100%;
		height: 90upx;
		line-height: 70upx;
		background: #ffffff;
		font-size: 26upx;
		color: #00A47C;
		border-bottom: 1px solid #EEEEEE;
	}

	.section-a {
		.sub {
			border-bottom: 12upx solid #EEEEEE;

			.title {
				display: flex;
				justify-content: space-between;
				height: 100upx;
				line-height: 100upx;

				.t-l {
					display: flex;
					align-items: center;

					.text {
						padding-left: 10upx;
						font-size: 28upx;
						font-weight: bold;
						color: #484848;
					}

					image {
						width: 36upx;
						height: 36upx;
					}
				}

				.t-r {
					display: flex;
					align-items: center;
					font-size: 24upx;
					color: #9C9C9C;

					.text {
						padding-left: 10upx;
					}
				}
			}

			.ul {
				.li {
					height: 140upx;
					display: flex;
					align-items: center;

					.pic {
						width: 90upx;
						height: 90upx;
						margin-right: 20upx;
						overflow: hidden;

						image {
							width: 90upx;
							height: 90upx;
						}
					}

					.detail {
						width: 400upx;
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
						width: 150upx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 24upx;
						color: #9C9C9C;
					}
				}
			}

			.other {
				border-top: 1upx solid #EEEEEE;

				.box {
					height: 80upx;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					font-size: 26upx;

					.box01 {
						width: 240upx;
						display: flex;
						justify-content: flex-end;

						.text-b {
							color: #EA3510;
							font-weight: bold;
							text-align: right;
						}
					}
				}
			}
		}

	}

	.section-c {
		padding-top: 30upx;

		.box {
			width: 660upx;

			.title {
				width: 100%;
				font-size: 24upx;
				font-weight: 500;
				color: #414141;
				margin: 10upx 0 20upx 0;
				text-indent: 10upx;
				border-left: 3px solid #00A47C;
			}

			.list {
				.list-item {
					height: 50upx;
					display: flex;
					align-items: center;
					color: #999999;
					font-size: 24upx;

					text {
						&:first-child {
							width: 160upx;
						}
					}
				}
			}
		}
	}
</style>
