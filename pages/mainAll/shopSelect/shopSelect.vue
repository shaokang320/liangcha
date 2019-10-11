<template>
	<view class="content c690">
		<view class="section-a">
			<view class="title">
				离我最近
			</view>
			<view class="list">
				<view class="item" v-for="(item, index) in list" :key="index">
					<image class="logo" :src="staticURL + item.logo"></image>
					<view class="detail">
						<view class="top">
							<text>{{item.name}}</text>
							<text>{{item.address}}</text>
						</view>
						<view class="distance">
							<text>{{item.distance}}m</text>
						</view>
					</view>
					<view class="select">
						<image v-if="item.status" :src="staticURL + 'common/right-black.png'"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="section-a">
			<view class="title">
				更多店面
			</view>
			<view class="list">
				<view class="item" v-for="(item, index) in list" :key="index">
					<image class="logo" :src="staticURL + item.logo"></image>
					<view class="detail">
						<view class="top">
							<text>{{item.name}}</text>
							<text>{{item.address}}</text>
						</view>
						<view class="distance">
							<text>{{item.distance}}m</text>
						</view>
					</view>
					<view class="select">
						<image v-if="item.status" :src="staticURL + 'common/right-black.png'"></image>
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
				list: [
					{
						logo: 'test/index02.png',
						name: '卓越店',
						address: '卓越世纪中心 D区北门3号',
						distance: '10086',
						status: true
					},
					{
						logo: 'test/index02.png',
						name: '万象城',
						address: '卓越世纪中心 D区北门3号',
						distance: '10086'
					},
					{
						logo: 'test/index02.png',
						name: '万象城',
						address: '卓越世纪中心 D区北门3号',
						distance: '10086'
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	.section-a {
		.title {
		font-size: 29upx;
		font-weight: 500;
		line-height: 71upx;
		}
		.list {
			.item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height:172upx;
				margin-bottom: 26upx; 
				background:rgba(255,255,255,1);
				box-shadow:0px 3upx 24upx 0upx rgba(4,0,0,0.06);
				border-radius:10upx;
				.logo {
					width:128upx;
					height:129upx;
					margin: 0 15upx;
					border-radius: 10upx;
				}
				.detail {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 380upx;
					height:129upx;
					margin: 0 10upx;
					.top {
						text {
							display: block;
							&:first-child {
								font-size:31upx;
								font-weight:500;
								color:rgba(11,11,11,1);
							}
							&:last-child {
								font-size:22upx;
								color:rgba(153,153,153,1);
							}
						}
					}
					.distance {
						font-size:22upx;
						color:rgba(153,153,153,1);
					}
				}
				.select {
					width:34upx;
					height:34upx;
					margin-right:10upx;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
