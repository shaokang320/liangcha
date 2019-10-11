<template>
	<view class="content">
		<view class="section-a c660">
			<view class="item" @click="goPage('/pages/videoAll/articleDetail/articleDetail')">
				<view class="item-t">
					<view class="userInfo">
						<image :src="detail.article_img"></image>
						<view class="name">
							<text>{{detail.article_author}}</text>
							<text>{{detail.createTime}}</text>
						</view>
					</view>
				</view>
				<view class="item-a">
					<text class="title">{{detail.article_title}}</text>
				</view>
				<!-- 	
				<view class="item-c" v-if="detail.imageArr.length > 0">
					<block v-if="detail.imageArr.length == 1">
						<image :src="staticURL + detail.imageArr[0]" mode="aspectFill" class="image-one"></image>
					</block>
					<block v-else>
						<image v-for="(item, index) in detail.imageArr" :key="index" :src="staticURL + item" mode="aspectFill">
						</image>
					</block>
				</view> -->
				<view class="item-b">
					<text class="context">{{detail.article_abstract}}</text>
					<rich-text class="temporary" :nodes="detailBody"></rich-text>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="box">
				<view class="praise">
					<image :src="staticURL + 'videoAll/praise-on.png'"></image>
				</view>
				<!-- <view class="praise">
					<image :src="staticURL + 'scanAll/star-on.png'"></image>
				</view> -->
				<view class="praise">
					<image :src="staticURL + 'videoAll/star-on1.png'"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// strings: '',
				// aa: '<p><img style="width:100%;height:auto" src="https://wx.lifeinsightusa.com/uploads/2019/07/201907161605508014.jpg /></p>"',
				// strings: '<div style="text-align:center;"><img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"/></div>',
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				publish: '', //评论内容
				detail: {},
				detailBody: ''
			};
		},
		onLoad() {
			const vm = this;
			uni.getStorage({
				key: 'shopDetail',
				success: function(res) {
					vm.detail = res.data;
					let article_content = res.data.article_content;
					article_content = article_content.replace(/\<img/gi, '<img class="clear-img"')					
					article_content = article_content.replace(/\<p/gi, '<span class="clear-span"')
					article_content = article_content.replace(/\<span/gi, '<span class="clear-span"')
					console.log(article_content)
					vm.detailBody = article_content;
				}
			})
		},
		methods: {
			onShareAppMessage() {},
			goPage(url) {
				this.$utils.goPage(url)
			}
		}
	}
</script>

<style lang="scss">
	.section-a {
		.item {
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
					color: #666666;
					line-height: 40upx;
				}
			}

			.item-c {
				overflow: hidden;
				display: flex;
				flex-wrap: wrap;

				image {
					width: 205upx;
					height: 205upx;
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
		}
	}

	.section-b {
		.common-title {
			width: 660upx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			height: 80upx;
			line-height: 80;
			border-bottom: 1px solid #EEEEEE;

			.t-r {
				display: flex;
				align-items: center;

				.text {
					font-size: 26upx;
					color: #666666;
				}
			}
		}
	}

	.clear-img {
		width: 100% !important;
		height: auto !important;
	}

	.clear-span {
		color: #666666 !important;
		line-height: 40upx !important;
		font-size: 24upx !important;
		font-weight: 400 !important;
		background-color: #FFFFFF !important;
	}

	.footer {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 10upx;
		width: 100%;
		height: 80upx;
		background: #FFFFFF;

		.box {
			width: 100%;
			height: 80upx;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.praise {
				display: flex;
				justify-content: center;
				align-items: center;

				&:last-child {
					width: 18%;
				}
			}

			image {
				width: 60upx;
				height: 60upx;
				transtion: all .5s;

				&:active {
					transform: scale(1.1);
				}
			}
		}
	}
</style>
