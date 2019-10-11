<template>
	<view class="common-item">
		<view class="item-t">
			<view class="userInfo">
				<image :src="detail.article_img"></image>
				<view class="name">
					<text>{{detail.article_author}}</text>
					<text>{{detail.createTime}}</text>
				</view>
			</view>
			<!-- <button class="focus btn">
				关注
			</button> -->
		</view>
		<view class="item-a" @click="goPage">
			<text class="title">{{detail.article_title}}</text>
		</view>
		<view class="item-b" @click="goPage">
			<text class="context">{{detail.article_abstract}}</text>
			<!-- <rich-text :nodes="article_content" class='context'></rich-text> -->
			<text class="blue">全文</text>
		</view>
	<!-- 	<view class="item-c" v-if="detail.imageArr.length > 0" @click="goPage('/pages/videoAll/articleDetail/articleDetail')">
			<block v-if="detail.imageArr.length == 1">
				<image :src="staticURL + detail.imageArr[0]" mode="aspectFill" class="image-one"></image>
			</block>
			<block v-else>
				<image v-for="(item, index) in detail.imageArr" :key="index" :src="staticURL + item" mode="aspectFill">
				</image>
			</block>
		</view> -->
		<view class="item-c"  @click="goPage">
			<image :src="detail.article_img" mode="aspectFill" class="image-one"></image>
		</view>
		<view class="item-d">
			<view class="praise">
				<image :src="staticURL + 'common/praise-on.png'"></image>
				<text class="num">{{detail.article_praise}}</text>
			</view>
			<view class="praise">
				<image :src="staticURL + 'videoAll/star-off.png'"></image>
				<text class="num">{{detail.article_praise}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			detail: {
				required: false,
				// default: function() {
				// 	return {
				// 		author: '爱我所爱',
				// 		avarUrl: 'test/lady.png',
				// 		time: '2019.08.18',
				// 		title: '关于你，有太多东西关于你',
				// 		desc: '短暂的一生，我们也终会老去。所有的回忆存放在那间房子和四方桌上。既然大势.已去，买不起房子，那就……先填满自己肚...',
				// 		imageArr: ['test/index02.png', 'test/index01.png', 'test/index03.png'],
				// 		praise: 199,
				// 		comment: 106,
				// 		star: 1903
				// 	}
				// }
			}
		},
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL
			};
		},
		created() {
		},
		methods: {
			goPage(url) {
				const vm = this;
				uni.setStorageSync('shopDetail', vm.detail)
				this.$utils.goPage('/pages/videoAll/articleDetail/articleDetail')
			}
		}
	}
</script>

<style lang="scss">
	.common-item {
		padding: 30upx 0;

		.item-t {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.userInfo {
				display: flex;
				width: 50%;

				image {
					width: 60upx;
					height: 60upx;
					border-radius: 50%;
				}

				.name {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					margin-left: 22upx;
					height: 60upx;

					text {
						display: block;

						&:first-child {
							font-size: 24upx;
							color: #414141;
						}

						&:last-child {
							font-size: 18upx;
							color: #8E8E8E;
						}
					}
				}

			}

			.focus {
				width: 78upx;
				font-size: 20upx;
				height: 36upx;
				line-height: 36upx;
			}
		}

		.item-a {
			padding: 16upx 10upx 0;
			margin-bottom: -6upx;

			.title {
				font-weight: bold;
				color: #414141;
				font-size: 24upx;
			}
		}

		.item-b {
			padding: 16upx 10upx;
			margin: 0 auto;
			font-size: 24upx;

			.context {
				display: inline;
				color: #999999;
			}

			.blue {
				display: inline;
				color: #00A47C;
			}
		}

		.item-c {
			overflow: hidden;
			display: flex;
			flex-wrap: wrap;
			image {
				width: 200upx;
				height: 200upx;
				border-radius: 2upx;
				margin-left: 4upx;

				&:first-child {
					margin-left: 10upx;
				}
			}

			.image-one {
				width: 100%;
				height: 260upx;
				border-radius: 2upx;
				margin: 0 10upx;
			}
		}

		.item-d {
			width: 600upx;
			height: 60upx;
			display: flex;
			justify-content:flex-end;
			align-items: center;
			.praise {
				display: flex;
				align-items: center;
				width: 20%;
				&:last-child {
					image {
						margin-left: 50upx;
					}
				}
			}

			image {
				margin-left: 20upx;
				width: 32upx;
				height: 32upx;
			}

			.num {
				font-size: 22upx;
				color: #999999;
			}
		}
	}
</style>
