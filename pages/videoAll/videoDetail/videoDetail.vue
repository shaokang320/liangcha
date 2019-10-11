<template>
	<view class="content">
		<view class="header">
			<view class="cover" v-if="!play" @click="selectVideo(0)">
				<image :src="staticURL + 'videoAll/play.png'" class="play"></image>
				<image :src="staticURL + 'test/video1.png'" class="banner"></image>
			</view>
			<video class="video" v-else="play" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
			 show-center-play-btn="false" autoplay="true" controls>
			</video>
			<view class="classify c660">
				<view class="subnav" :class="[index == 0 ? ' active' : '']" @click="changeIndex(0)">
					课程介绍
				</view>
				<view class="subnav" :class="[index == 1 ? ' active' : '']" @click="changeIndex(1)">
					视频目录
				</view>
				<view class="subnav" :class="[index == 2 ? ' active' : '']" @click="changeIndex(2)">
					评价(450)
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="section-a">
			<!-- 课程介绍 -->
			<view class="list1" v-if="index == 0">
				<view class="sec1">
					<view class="box c660">
						<text class="name">正宗日本寿司制作教程</text>
						<view class="other">
							<text class="other01">￥588</text>
							<text class="other02">购买人数320</text>
							<text class="other03">好评98%</text>
						</view>
					</view>
				</view>
				<view class="sec2">
					<view class="box c660">
						<view class="biao">
							老师介绍
						</view>
						<view class="other">
							<image :src="staticURL + 'test/lady.png'"></image>
							<view class="info">
								<text>讲师-王老师</text>
								<view class="context text2">
									日源签约讲师，资深二级厨师，短暂的一生，我们也终会老去。所有的回忆存放在那间房子和四方桌上。既然大势已去，买不起房子，那就
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="sec3">
					<view class="box c660">
						<view class="biao">
							课程详情
						</view>
						<view class="other">
							<view class="info">
								<view class="context">
									日源签约讲师，资深二级厨师，日源签约讲师，资深二级厨师日源签约讲师，资深二级厨师日源签约讲师。
									资深二级厨师日源签约讲师，资深二级厨。
									师日源签约讲师，资深二级厨师日源签约讲师，资深二级厨师日源签约讲师，资深二级厨师日源签约讲师，资深二级厨师日源签约讲师，资深二级厨师短暂的一生，我们也终会老去。所有的回忆存。
									放在那间房子和四方桌上。既然大势已去，买不起房子，那就房子和四方桌上。既然大势已去，买不起房子，那就房子和四方桌上。既然大势已去，买不起房子，那就房子和四方桌上。既然大势已去，买不起房子，那就房子和四方桌上。既然大势已去，买不起房子，那就
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 视频目录 -->
			<view class="list2" v-if="index == 1">
				<view class="title">
					<view class="box c660">
						<image :src="staticURL + 'videoAll/play1.png'"></image>
						<text class="text1">共15课时</text>
						<text class="text2">(已全部更新)</text>
					</view>
				</view>
				<view class="ul">
					<view class="li" :class="[videoIndex == 0 ? ' video-active' : '']" @click="selectVideo(0)">
						<view class="box c660">
							<view class="box-l">
								<text class="text1">1. 标题内容标题内容标题内容</text>
							</view>
							<text class="box-r">可试看</text>
						</view>
					</view>
					<view class="li" :class="[videoIndex == 1 ? ' video-active' : '']" @click="selectVideo(1)">
						<view class="box c660">
							<view class="box-l">
								<text class="text1">2. 标题内容标题内容标题内容</text>
							</view>
							<image class="lock" :src="staticURL + 'videoAll/lock.png'"></image>
						</view>
					</view>
					<view class="li" :class="[videoIndex == 2 ? ' video-active' : '']" @click="selectVideo(2)">
						<view class="box c660">
							<view class="box-l">
								<text class="text1">3. 标题内容标题内容标题内容</text>
							</view>
							<image class="lock" :src="staticURL + 'videoAll/lock.png'"></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 评论部分 -->
			<view class="list3 c660" v-if="index == 2">
				<view class="item" @click="goPage('/pages/videoAll/articleDetail/articleDetail')">
					<view class="item-t">
						<view class="userInfo">
							<image :src="staticURL + evaluate.avarUrl"></image>
							<view class="name">
								<text>{{evaluate.author}}</text>
								<text>{{evaluate.time}}</text>
							</view>
						</view>
						<!-- 	<button class="focus btn">
							关注
						</button> -->
					</view>
					<view class="item-b">
						<text class="context">{{evaluate.desc}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="box c690">
				<view class="box01">
					<image :src="staticURL + 'videoAll/praise01-on.png'"></image>
					<image :src="staticURL + 'videoAll/share.png'"></image>
				</view>
				<button class="btn" @click="goPage('/pages/cookAll/submitOrder/submitOrder')">立即购买</button>
			</view>
		</view>
	</view>
</template>

<script>
	import comArticle from '@/components/article.vue'
	export default {
		components: {
			comArticle
		},
		data() {
			return {
				play: false,
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				index: 0,
				videoIndex: -1,
				evaluate: {
					author: '爱我所爱',
					avarUrl: 'test/lady.png',
					time: '2019.08.18',
					title: '关于你，有太多东西关于你',
					desc: '短暂的一生，我们也终会老去。所有的回忆存放在那间房子和四方桌上。既然大势.已去，买不起房子，那就……先填满自己肚...',
					imageArr: ['test/index02.png', 'test/index01.png', 'test/index03.png'],
					praise: 199,
					comment: 106,
					star: 1903
				}
			};
		},
		methods: {
			changeIndex(index) {
				this.index = index;
			},
			selectVideo(index) {
				if (index != 0) {
					this.$utils.toast('该视频为付费视频')
				} else {
					this.play = true;
					this.videoIndex = index;
				}
			}
		}
	}
</script>

<style lang="scss">
	.header {
		z-index: 666;
		position: fixed;
		top: 0;
		border-bottom: 1px solid #EEEEEE;
		background: #FFFFFF;

		.cover {
			position: relative;

			.banner {
				width: 750upx;
				height: 424upx;
			}

			.play {
				position: absolute;
				width: 96upx;
				height: 96upx;
				top: 170upx;
				left: 325upx;
			}
		}

		.video {
			width: 750upx;
			height: 424upx;
		}

		.classify {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 20upx;

			.subnav {
				height: 70upx;
				font-weight: 600;
				font-size: 26upx;

				&.active {
					color: #00A47C;
					border-bottom: 3px solid #00A47C;
				}
			}
		}
	}

	.section-a {
		padding: 524upx 0 100upx;

		.list1 {
			.sec1 {
				height: 150upx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #EEEEEE;

				.box {
					height: 90upx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.name {
						font-family: Source Han Sans CN;
						font-size: 30upx;
						color: #333333;
					}

					.other {
						display: flex;
						align-items: flex-end;

						.other01 {
							margin-bottom: -2upx;
							font-weight: bold;
							font-size: 26upx;
							color: #ED5851;
						}

						.other02 {
							padding: 0 20upx;
							font-size: 20upx;
							color: #666666;
						}

						.other03 {
							font-size: 20upx;
							color: #666666;
						}

					}
				}
			}

			.sec2 {
				height: 250upx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #EEEEEE;

				.box {
					display: flex;
					height: 250upx;
					flex-direction: column;

					.biao {
						heigth: 100upx;
						line-height: 100upx;
						font-family: Source Han Sans CN;
						font-size: 30upx;
						color: #333333;
					}

					.other {
						display: flex;
						align-items: center;

						image {
							width: 110upx;
							height: 110upx;
							border-radius: 55upx;
						}

						.info {
							padding-left: 20upx;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							width: 500upx;
							height: 100upx;

							text {
								font-size: 24upx;
								color: #333333;
							}

							.context {
								font-size: 20upx;
								color: #666666;
								line-height: 30upx;
							}
						}
					}
				}
			}

			.sec3 {
				display: flex;
				align-items: center;

				.box {
					display: flex;
					flex-direction: column;

					.biao {
						heigth: 100upx;
						line-height: 100upx;
						font-family: Source Han Sans CN;
						font-size: 30upx;
						color: #333333;
					}

					.other {
						display: flex;
						align-items: center;

						image {
							width: 110upx;
							height: 110upx;
							border-radius: 55upx;
						}

						.info {
							padding-left: 20upx;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							width: 600upx;

							text {
								font-size: 24upx;
								color: #333333;
							}

							.context {
								font-size: 24upx;
								color: #666666;
								line-height: 36upx;
							}
						}
					}
				}
			}
		}

		.list2 {
			.title {
				border-bottom: 1px solid #EEEEEE;

				.box {
					height: 100upx;
					display: flex;
					align-items: center;

					image {
						width: 42upx;
						height: 42upx;
					}

					.text1 {
						padding-left: 6upx;
						font-size: 28upx;
						color: #333333;
					}

					.text2 {
						font-size: 28upx;
						color: #959595;
					}
				}
			}

			.ul {
				.li {
					border-bottom: 1px solid #EEEEEE;

					&.video-active {
						background: #F8F8F8;
					}

					.box {
						height: 100upx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.box-l {
							.text1 {
								font-size: 28upx;
								color: #333333;
							}
						}

						.box-r {
							width: 105upx;
							height: 40upx;
							line-height: 40upx;
							background: #41ACFF;
							opacity: 0.5;
							border-radius: 10upx;
							font-size: 22upx;
							color: #FFFFFF;
							text-align: center;
						}

						.lock {
							width: 34upx;
							height: 34upx;
							margin-right: 32upx;
						}
					}
				}
			}
		}

		.list3 {
			.item {
				padding: 20upx 0;
				border-bottom: 1px solid #EEEEEE;

				.item-t {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.userInfo {
						display: flex;
						width: 50%;

						image {
							width: 50upx;
							height: 50upx;
							border-radius: 50%;
						}

						.name {
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							margin-left: 20upx;
							height: 50upx;

							text {
								display: block;

								&:first-child {
									font-size: 22upx;
									color: #414141;
								}

								&:last-child {
									font-size: 16upx;
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

				.item-b {
					padding: 16upx 10upx;
					margin: 0 auto;
					font-size: 22upx;

					.context {
						display: inline;
						color: #999999;
					}

					.blue {
						display: inline;
						color: #00A47C;
					}
				}
			}
		}
	}

	.footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #ffffff;
		border-top: 1px solid #EEEEEE;

		.box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 90upx;

			.box01 {
				display: flex;
				align-items: center;

				image {
					&:first-child {
						width: 46upx;
						height: 46upx;
					}

					&:last-child {
						width: 40upx;
						height: 40upx;
						margin-left: 14upx;
					}
				}
			}

			.btn {
				width: 210upx;
				height: 66upx;
				border-radius: 33upx;
				font-size: 28upx;
			}
		}
	}
</style>
