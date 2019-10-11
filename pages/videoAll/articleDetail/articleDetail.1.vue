<template>
	<view class="content">
		<view class="section-a c660">
			<view class="item" @click="goPage('/pages/videoAll/articleDetail/articleDetail')">
				<view class="item-t">
					<view class="userInfo">
						<image :src="staticURL + detail.avarUrl"></image>
						<view class="name">
							<text>{{detail.author}}</text>
							<text>{{detail.time}}</text>
						</view>
					</view>
					<!-- 	<button class="focus btn">
					关注
				</button> -->
				</view>
				<view class="item-a">
					<text class="title">{{detail.title}}</text>
				</view>
				<view class="item-b">
					<text class="context">短暂的一生，我们也终会老去。所有的回忆存放在那间房子和四方桌上。既然大势已去，买不起房子，那就……先填满自己肚子吧！短暂的一生，我们也终会老去。</text>
				</view>
				<view class="item-c" v-if="detail.imageArr.length > 0">
					<block v-if="detail.imageArr.length == 1">
						<image :src="staticURL + detail.imageArr[0]" mode="aspectFill" class="image-one"></image>
					</block>
					<block v-else>
						<image v-for="(item, index) in detail.imageArr" :key="index" :src="staticURL + item" mode="aspectFill">
						</image>
					</block>
				</view>
				<view class="item-b">
					<text class="context">所有的回忆存放在那间房子和四方桌上。既然大势已去，买不起房子，那就……先填满自己肚子吧！</text>
					<rich-text class="temporary" :nodes="strings"></rich-text>
				</view>
			</view>
		</view>
		<view class="section-b c660">
			<view class="common-title">
				<view class="t-l">
					<text class="text">评论 (1690)</text>
				</view>
				<view class="t-r">
					<text class="text">赞 (1690)</text>
				</view>
			</view>
			<view class="list">
				<view class="li">
					<view class="userInfo">
						<image :src="staticURL + detail.avarUrl"></image>
						<view class="name">
							<text>{{detail.author}}</text>
						</view>
					</view>
					<view class="item-b">
						<text class="context">短暂的一生，我们也终会老去。所有的回忆存放在那间房子和四方桌上。既然大势已去，买不起房子，那就……先填满自己肚子吧！</text>
					</view>
					<view class="time">
						<text>{{detail.time}}</text>
					</view>
				</view>
				<view class="li">
					<view class="userInfo">
						<image :src="staticURL + detail.avarUrl"></image>
						<view class="name">
							<text>{{detail.author}}</text>
						</view>
					</view>
					<view class="item-b">
						<text class="context">短暂的一生，我们也终会老去。所有的回忆存放在那间房子和四方桌上。既然大势已去，买不起房子，那就……先填满自己肚子吧！</text>
					</view>
					<view class="time">
						<text>{{detail.time}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="publish" @click="showPublish">
				<view class="shu">
					写评论 . . .
				</view>
			</view>
			<view class="box">
				<view class="praise">
					<image :src="staticURL + 'common/praise-on.png'"></image>
				</view>
				<view class="praise">
					<image :src="staticURL + 'common/comment.png'"></image>
				</view>
				<view class="praise">
					<image :src="staticURL + 'scanAll/star-on.png'"></image>
				</view>
			</view>
		</view>
		<!-- 发表评论 -->
		<view class="footer-two" v-if="flagPublish && inputFocus">
			<view class="box c690">
				<view class="publish">
					<input type="text" @blur="publish1" cursor-spacing="10" :focus="inputFocus" v-model="publish" placeholder="优质评论将会被优先展示" />
				</view>
				<view class="box" @click="publish">发布</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aa: '<p><img style="width:100%;height:auto" src="https://wx.lifeinsightusa.com/uploads/2019/07/201907161605508014.jpg /></p>"',
				strings: '<div style="text-align:center;"><img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"/></div>',
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				flagPublish: false,
				inputFocus: false,
				publish: '', //评论内容
				detail: {
					author: '爱我所爱',
					avarUrl: 'test/lady.png',
					time: '2019.08.18',
					title: '关于你，有太多东西关于你',
					desc: '短暂的一生，我们也终会老去。所有的回忆存放在那间房短暂的一生，我们也终会老去。所有的回忆存放在那间房短暂的一生，我们也终会老去。所有的回忆存放在那间房短暂的一生，我们也终会老去。所有的回忆存放在那间房短暂的一生，我们也终会老去。所有的回忆存放在那间房短暂的一生，我们也终会老去。所有的回忆存放在那间房短暂的一生，我们也终会老去。所有的回忆存放在那间房短暂的一生，我们也终会老去。所有的回忆存放在那间房子和四方桌上。既然大势.已去，买不起房子，那就……先填满自己肚...',
					imageArr: ['test/index03.png'],
					praise: 199,
					comment: 106,
					star: 1903
				}
			};
		},
		methods: {
			showPublish() {
				this.flagPublish = true;
				this.inputFocus = true;
			},
			publish() {
				this.flagPublish = false;
				this.inputFocus = false;
			},
			publish1() {
				this.flagPublish = false;
				this.inputFocus = false;
			},
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

			.t-l {
				display: flex;
				align-items: center;

				.text {
					font-size: 26upx;
					color: #484848;
				}
			}

			.t-r {
				display: flex;
				align-items: center;

				.text {
					font-size: 26upx;
					color: #666666;
				}
			}
		}

		.list {
			.li {
				padding: 20upx 0;
				border-bottom: 1px solid #EEEEEE;

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

				.item-b {
					padding: 16upx 10upx;
					margin: 0 auto;
					font-size: 20upx;

					.context {
						display: inline;
						color: #666666;
						line-height: 32upx;
					}
				}

				.time {
					padding: 10upx 10upx;
					font-size: 20upx;
					color: #666666;
				}
			}
		}
	}

	.footer-two {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #FFFFFF;
		border-top: 1px solid #EEEEEE;

		.box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 80upx;

			.publish {
				width: 85%;
				height: 54upx;
				padding: 0 20upx;
				background: #f8f8f8;
				border-radius: 27upx;

				input {
					flex: 1;
					font-size: 26upx;
					margin-top: 6upx;
				}
			}

			.box {
				width: 15%;
				padding-left: 4%;
				font-size: 28upx;
				font-weight: bold;
				color: #808080;
			}
		}
	}

	.footer {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80upx;
		background: #FFFFFF;
		border-top: 1px solid #EEEEEE;

		.publish {
			width: 65%;
			height: 80upx;
			display: flex;
			align-items: center;

			.shu {
				margin-left: 6%;
				width: 80%;
				height: 50upx;
				line-height: 50upx;
				border-radius: 25upx;
				background: #EEEEEE;
				text-indent: 30upx;
				font-size: 26upx;
			}
		}

		.box {
			width: 30%;
			height: 80upx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.praise {
				display: flex;
				align-items: center;
			}

			image {
				width: 36upx;
				height: 36upx;
				margin-right: 10upx;
			}
		}
	}
</style>
