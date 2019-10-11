<template>
	<view class="content">
		<view class="header">
			<view class="search" @click="goPage('/pages/videoAll/videoSearch/videoSearch')">
				<view class="box">
					<image :src="staticURL + 'videoAll/search.png'"></image>
					<text>搜视频标题 享更多好课</text>
				</view>
			</view>
			<scroll-view class="classify" scroll-x="true">
				<view class="subnav" :class="[index == 0 ? ' active' : '']" @click="changeIndex(0)">
					免费
				</view>
				<view class="subnav" :class="[index == 1 ? ' active' : '']" @click="changeIndex(1)">
					付费
				</view>
				<view class="subnav" :class="[index == 2 ? ' active' : '']" @click="changeIndex(2)">
					精品
				</view>
				<view class="subnav" :class="[index == 3 ? ' active' : '']" @click="changeIndex(3)">
					热门
				</view>
			</scroll-view>
			<view class="line"></view>
		</view>
		<view class="pd"></view>
		<!-- 展示 -->
		<view class="common-title">
			<view class="t-l">
				<text class="text">公开体验课</text>
			</view>
		</view>
		<view class="section-d c660">
			<scroll-view class="box" scroll-x="true">
				<view v-for="(item, index) in list.other" :key="index" class="item">
					<text class="mark">2180次播放</text>
					<image :src="staticURL + item"></image>
					<text class="name text1">寿司的各种做法</text>
					<text class="desc text1">简单易学，硬易上手</text>
				</view>
			</scroll-view>
		</view>
		<!--  -->
		<view class="section-b c660">
			<image :src="staticURL + 'videoAll/banner0.png'" mode="widthFix"></image>
		</view>
		<!-- mei wen -->
		<view class="common-title">
			<view class="t-l">
				<text class="text">相关课程</text>
			</view>
		</view>
		<view class="section-f c660">

			<view class="item">
				<view class="img">
					<image :src="staticURL + 'test/index01.png'"></image>
					<view class="num">2018次播放</view>
				</view>
				<view class="detail">
					<text class="d-a text-block">
						正宗日本寿司制作教程--13种口味教你花样翻新！
					</text>
					<text class="d-b text-block">
						【木之初】
					</text>
					<text class="d-c text-block">
						免费
					</text>
				</view>
			</view>
			<view class="item">
				<view class="img">
					<image :src="staticURL + 'test/index01.png'"></image>
					<view class="num">2018次播放</view>
				</view>
				<view class="detail">
					<text class="d-a text-block">
						正宗日本寿司制作教程--13种口味教你花样翻新！
					</text>
					<text class="d-b text-block">
						【木之初】
					</text>
					<text class="d-c text-block">
						免费
					</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapGetter
	} from 'vuex'
	import comArticle from '@/components/article.vue'
	export default {
		components: {
			comArticle
		},
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				flag1: false, //用户信息授权状态
				flag2: false, //用户手机号授权状态
				flag3: false, //用户地理位置授权状态
				dataInfo: {}, //用于提交的用户信息
				index: 0,
				list: {
					banner: ['test/video1.png'],
					other: ['test/video01.png', 'test/video02.png', 'test/index03.png', 'test/index03.png']
				}
			}
		},
		onLoad() {
			const vm = this;
		},
		methods: {
			goPage(url) {
				this.$utils.goPage(url)
			},
			changeIndex(index) {
				this.index = index;
			}

		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>
<style lang="scss">
	.header {
		z-index: 666;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background: #ffffff;
		.search {
			width: 690upx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 20upx 0 30upx;
			height: 66upx;
			border: 1px solid #000000;
			border-radius: 10px;
			.box {
				display: flex;
				align-items: center;
				image {
					width: 34upx;
					height: 34upx;
					margin-right: 12upx;
				}
				text {
					font-size: 30upx;
					color: #8F8F8F;
				}
			}
		}

		.classify {
			width: 690upx;
			white-space: nowrap;

			.subnav {
				display: inline-block;
				padding: 0 6upx;
				line-height: 60upx;
				height: 60upx;
				margin-right: 100upx;
				transition: font .5s;
				font-weight: 600;

				&.active {
					font-size: 28upx;
					color: #00A47C;
					border-bottom: 2px solid #00A47C;
				}
			}
		}

		.line {
			width: 100%;
			height: 8upx;
			background: rgba(238, 238, 238, 1);
		}
	}

	.pd {
		width: 100%;
		height: 184upx;
	}

	.common-title {
		width: 660upx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		height: 100upx;
		line-height: 100upx;

		.t-l {
			display: flex;
			align-items: center;

			.text {
				font-size: 28upx;
				font-weight: 600;
				color: #484848;
			}
		}

		.t-r {
			display: flex;
			align-items: center;

			.text {
				font-size: 24upx;
				color: #666666;
			}

			image {
				width: 30upx;
				height: 26upx;
				transform: rotate(-90deg);
			}
		}
	}

	.section-b {
		image {
			width: 100%;
		}
	}

	.section-d {
		padding-bottom: 20upx;

		.box {
			width: 100%;
			white-space: nowrap;

			.item {
				position: relative;
				display: inline-block;
				overflow: hidden;
				width: 320upx;
				margin-right: 20upx;

				image {
					width: 320upx;
					height: 181upx;
					border-radius: 6upx;
				}

				.mark {
					position: absolute;
					left: 0;
					top: 161upx;
					width: 110upx;
					height: 20upx;
					line-height: 20upx;
					font-size: 12upx;
					text-align: center;
					color: #A2A3A4;
					background: #DCDCDC;
				}

				.name {
					display: block;
					width: 320upx;
					padding: 6upx 0;
					font-size: 28upx;
					color: rgba(11, 11, 11, 1);
				}

				.desc {
					display: block;
					width: 210upx;
					font-size: 22upx;
					color: #9C9C9C;
				}
			}
		}
	}

	.section-f {
		padding-bottom: 50upx;

		.item {
			display: flex;
			align-items: center;
			padding-bottom: 26upx;

			.img {
				position: relative;
				width: 210upx;
				height: 119upx;
				margin-right: 18upx;

				image {
					position: absolute;
					width: 210upx;
					height: 119upx;
					border-radius: 6upx;
				}

				.num {
					position: absolute;
					bottom: 0;
					width: 100%;
					height: 36upx;
					text-align: center;
					line-height: 36upx;
					color: rgba(162, 163, 164, 1);
					font-size: 20upx;
					background: rgba(220, 220, 220, 1);
				}
			}

			.detail {
				width: 422upx;
				height: 119upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.d-a {
					font-size: 22upx;
					color: rgba(5, 15, 26, 1);
				}

				.d-b {
					font-size: 20upx;
					color: #8490A1;
					margin-left: -8upx;
				}

				.d-c {
					font-size: 20upx;
					color: #ED5851;
				}
			}
		}
	}
</style>
