<template>
	<view class="content">
		<!-- 轮播 -->
		<swiper class="section-a c690" indicator-active-color="#00A47C" indicator-dots="true" circular="true" autoplay="true"
		 duration="2000">
			<swiper-item v-for="(item, index) in list.banner" :key="index">
				<view class="swiper-item">
					<image :src="staticURL + 'videoAll/play.png'" class="play"></image>
					<image :src="staticURL + item" class="banner"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 展示 -->
		<view class="common-title">
			<view class="t-l">
				<image :src="staticURL + 'videoAll/circle.png'"></image>
				<text class="text">课程推荐</text>
			</view>
			<view class="t-r" @click="goPage('/pages/videoAll/videoList/videoList')">
				<text class="text">更多</text>
				<image :src="staticURL + 'common/arrow-gray.png'"></image>
			</view>
		</view>
		<view class="section-d c660">
			<scroll-view class="box" scroll-x="true">
				<view v-for="(item, index) in list.other" :key="index" class="item"  @click="goPage('/pages/videoAll/videoDetail/videoDetail')">
					<image :src="staticURL + 'videoAll/vip1.png'" class="mark"></image>
					<image :src="staticURL + item"></image>
					<text class="name text1">寿司的各种做法</text>
					<text class="desc text1">简单易学，硬易上手</text>
				</view>
			</scroll-view>
		</view>
		<!-- <view class="line"></view> -->
		<view class="apply c690" @click="goPage('/pages/videoAll/apply/apply')">
			<image :src="staticURL + 'videoAll/apply.png'"></image>
		</view>
		<!-- mei wen -->
		<view class="common-title">
			<view class="t-l">
				<image :src="staticURL + 'videoAll/circle.png'"></image>
				<text class="text">美文推荐</text>
			</view>
			<view class="t-r" @click="goPage('/pages/videoAll/articleList/articleList')">
				<text class="text">更多</text>
				<image :src="staticURL + 'common/arrow-gray.png'"></image>
			</view>
		</view>
		<view class="section-f">
			<view class="list c630">
				<com-article></com-article>
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
				dataInfo: {},     //用于提交的用户信息
				list: {
					banner: ['test/video1.png'],
					other: ['test/video01.png', 'test/video02.png', 'test/index03.png', 'test/index03.png']
				}
			}
		},
		onLoad() {
			const vm = this;
		},
		onShow() {
			if(!this.authorize) {
				wx.showModal({
					title: '',									
					showCancel: false,
					content: '请登录后查看',
					success: function (tip) {
						if (tip.confirm) {
							wx.switchTab({
								url: '/pages/mainAll/index/index'
							})
						}
					}
				})
			}
		},
		methods: {
			goPage(url) {
				this.$utils.goPage(url)
			}

		},
		computed:{
			...mapState(['userInfo', 'authorize'])
		}
	}
</script>
<style lang="scss">
	video {
		width: 100%;
	}
	.section-a {
		height: 386upx;
		.swiper-item {
			position: relative;
			.banner {
				// position: absolute;
				width: 690upx;
				height: 386upx;
				border-radius: 10upx;
			}
			.play{
				position: absolute;
				width:96upx;
				height:96upx;
				top: 150upx;
				left: 300upx;
			}
		}

	}
	.apply {
		width:685upx;
		height:200upx;
		margin: 0 auto;
		background: #EEEEEE;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.common-title {
		width: 660upx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		height: 120upx;
		line-height: 120upx;
		.t-l {			
			display: flex;
			align-items: center;
			.text {
				padding-left: 10upx;
				font-size:28upx;
				font-weight:600;
				color:#484848;
			}
			image {
				width: 30upx;
				height:30upx;
			}
		}
		.t-r {
			display: flex;
			align-items: center;
			.text {
				font-size:24upx;
				color:#666666;
			}
			image {
				width: 30upx;
				height: 26upx;
				transform: rotate(-90deg);
			}
		}
	}
	.line {
		height:8upx;
		background:rgba(238,238,238,1);
	}
	.section-d {
		padding-bottom: 40upx;
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
					right: 0;
					top: 0;
					width: 80upx;
					height: 80upx;
				}
				.name {
					display: block;
					width: 320upx;
					padding: 6upx 0;
					font-size:28upx;
					color:rgba(11,11,11,1);
				}
				.desc {
					display: block;
					width: 210upx;
					font-size:22upx;
					color:#9C9C9C;
				}
			}
		}
	}
	.section-f {
		padding-bottom:50upx;
	}
</style>
