<template>
	<view class="content">
		<view class="header">
			<view class="c660">
				预约订单
			</view>
		</view>
		<view class="line"></view>
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
							<text>2019-08-08 15:04</text>
							<text class="text">完成</text>
						</view>
					</view>
					<view class="ul">
						<view class="li">
							<view class="pic">
								<image :src="staticURL + 'test/index02.png'"></image>
							</view>
							<view class="detail">
								<view class="name text1">
									<text>白云店</text>
								</view>

								<view class="desc">
									大厅10号桌
								</view>
							</view>
							<view class="specification">
								<view>
									预约金
								</view>
								<view class="money">
									￥200
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!--  -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
			};
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
		padding: 90upx 0;
		.sub {
			border-bottom: 20upx solid #EEEEEE;
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
				 padding:15upx 0 50upx 40upx;
				.li {
					height: 120upx;
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
						font-size: 22upx;
						color: #9C9C9C;
						.money {
						font-size: 24upx;
						font-weight: bold;
							color:#EA3510 ;
						}
					}
				}
			}
		}

	}


</style>
