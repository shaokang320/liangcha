<template>
	<view class="content c690">
		<!-- 授权 -->
		<com-authorized></com-authorized>
		<!-- 轮播 -->
		<swiper class="section-a" indicator-active-color="#00A47C" indicator-dots="true" circular="true" autoplay="true"
		 duration="2000">
			<swiper-item v-for="(item, index) in list.shopInfo.banner" :key="index">
				<view class="swiper-item">
					<image :src="item" class="banner"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 分类 -->
		<view class="section-b">
			<view class="item" @click="scan">
				<image :src="staticURL + 'mainAll/scan.png'"></image>
				<text>店内点餐</text>
			</view>
			<navigator class="item" url="/pages/bookAll/takeNumber/takeNumber" hover-class="none">
				<image :src="staticURL + 'mainAll/book.png'"></image>
				<text>取号就餐</text>
			</navigator>
			<navigator class="item" url="/pages/bookAll/book/book" hover-class="none">
				<image :src="staticURL + 'mainAll/share.png'"></image>
				<text>预约订座</text>
			</navigator>
			<navigator class="item" url="/pages/cookAll/cook/cook" hover-class="none">
				<image :src="staticURL + 'mainAll/cook.png'"></image>
				<text>厨师上门</text>
			</navigator>
		</view>
		<!-- 店铺 -->
		<view class="section-c c660">
			<view class="store">
				<image class="logo" :src="list.shopInfo.shop_logo"></image>
				<navigator class="detail" hover-class="none" url="/pages/mainAll/shopSelect/shopSelect">
					<text class="name">{{list.shopInfo.shop_name}}</text>
					<view class="time">
						<text>营业时间:</text>
						<text>{{list.shopInfo.business_hours[0]}}-{{list.shopInfo.business_hours[1]}}</text>
					</view>
					<text class="address">{{list.shopInfo.shop_address}}</text>
					<text class="set">切换店铺>></text>
				</navigator>
				<view class="contact">
					<image :src="staticURL + 'mainAll/navigation.png'" @click="seeLocation"></image>
					<image :src="staticURL + 'mainAll/tel.png'" @click="callStore"></image>
				</view>
			</view>
		</view>
		<view class="hint c660" @click="goPage('/pages/mainAll/job/job')">
			<!-- 轮播 -->
			<swiper autoplay="true" duration="1000" easing-function="easeInOutCubic" interval="3000" circular style="width:70%;height: 40upx;">
				<swiper-item>
					<text>日源招聘开始了,更多职位等你挑战</text>
				</swiper-item>
				<swiper-item>
					<text>日源招聘开始了,更多职位等你挑战</text>
				</swiper-item>
			</swiper>
			<!-- <image :src="staticURL + 'mainAll/icon-laba.png'"></image> -->
			<image :src="staticURL + 'common/arrow-gray.png'"></image>
		</view>
		<!-- 展示 -->
		<!-- <view class="common-title">
			<view class="t-l">
				招牌菜品
			</view>
		</view>
		<view class="section-d c660">
			<scroll-view class="box" scroll-x="true">
				<view v-for="(item, index) in list.other" :key="index" class="item">
					<image :src="staticURL + item" @click="preview(item, list.other)"></image>
					<text class="name text1">甜辣特色辣白菜</text>
					<text class="desc text1">精选优质新鲜白菜，丝丝入味</text>
				</view>
			</scroll-view>
		</view>
		<view class="line"></view> -->
		<!-- 展示 -->
		<view class="common-title" v-if="list.courseList">
			<view class="t-l">
				日食讲堂
			</view>
			<view class="t-r" @click="goPage('/pages/videoAll/videoList/videoList')">
				<text class="text">更多</text>
				<image :src="staticURL + 'common/arrow-gray.png'"></image>
			</view>
		</view>
		<view class="section-e c660" v-if="list.courseList">
			<view class="item">
				<view class="img">
					<image :src="list.courseList.course_image"></image>
					<view class="num">{{list.courseList.section_number}}次播放</view>
				</view>
				<view class="detail">
					<text class="d-a text-block">
						{{list.courseList.course_name}}
					</text>
					<text class="d-b text-block text2">
						{{list.courseList.course_introduce}}
					</text>
					<text class="d-c text-block" v-if="list.courseList.course_status == 1">
						免费
					</text>
					<text class="d-c text-block" v-else>￥{{list.courseList.course_price}}</text>
				</view>
			</view>
		</view>
		<view class="line"></view>
		<!-- mei wen -->
		<view class="common-title" v-if="list.articleList.length > 0">
			<view class="t-l">
				美文专区
			</view>
			<view class="t-r" @click="goPage('/pages/videoAll/articleList/articleList')">
				<text class="text">更多</text>
				<image :src="staticURL + 'common/arrow-gray.png'"></image>
			</view>
		</view>
		<view class="section-f c630" v-if="list.articleList.length > 0">
			<view class="list">
				<com-article :detail="item" v-for="(item, index) in list.articleList" :key="index" ></com-article>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapGetter
	} from "vuex"
	import comArticle from '@/components/article.vue'
	import comAuthorized from '@/components/authorized.vue'
	import {
		index
	} from "@/common/api/mainAll"
	export default {
		components: {
			comArticle,
			comAuthorized
		},
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				flag3: false, //用户地理位置授权状态
				longitude: '', //用户坐标经度
				latitude: '', //用户坐标经度
				list: ""
			}
		},
		onLoad(options) {
			const vm = this;
			console.log(vm.storeId);
			// if (options.scene) {
			// 	console.log(decodeURIComponent(options.scene));
			// } else if (options.id) {				
			// 	console.log(options.id);
			// };
			vm.$store.commit('SET_TABLE', {id: 1, name: '10'});
			vm.$store.commit('SET_STOREID', '1');
		},
		methods: {
			// 获取首页信息
			index() {
				const vm = this;
				let data = {};
				data.longitude = vm.longitude;
				data.latitude = vm.latitude;
				console.log(vm.storeId)
				data.shop_id = vm.storeId;
				vm.$utils.show();
				index(data).then((data) => {
					console.log(data);
					vm.$store.commit('SET_STOREINFO', data.shopInfo);
					vm.list =  data;
					vm.$utils.hide();
				});
			},
			// 获取用户坐标
			getAddress() {
				const vm = this;
				wx.getLocation({
					success: function(res) {
						// console.log('经度+纬度', res.longitude, res.latitude);
						vm.longitude = res.longitude;
						vm.latitude = res.latitude;
						vm.flag3 = true;
						vm.index();
					},
					fail: function() {
						wx.getSetting({
							success: function(res) {
								let statu = res.authSetting;
								if (!statu['scope.userLocation']) {
									wx.showModal({
										title: '请授权当前位置',
										showCancel: false,
										content: '需要获取您的地理位置，请确认授权，否则无法查询店铺信息',
										success: function(tip) {
											if (tip.confirm) {
												wx.openSetting({
													success: function(data) {
														if (data.authSetting["scope.userLocation"] === true) {
															uni.getLocation({
																type: 'wgs84',
																success: function(res) {
																	// console.log('经度+纬度', res.longitude, res.latitude);
																	vm.longitude = res.longitude;
																	vm.latitude = res.latitude;
																	vm.flag3 = true;
																	vm.index();
																}
															});
														} else {
															vm.$utils.toast('授权失败', 'error');
															vm.getAddress();
														}
													}
												})
											}
										}
									})
								}
							},
							fail: function(res) {
								vm.$utils.toast('授权失败', 'error');
								vm.getAddress();
							}
						})
					}
				})
			},
			scan() {
				const vm = this;
				if(vm.storeId) {
					uni.navigateTo({
						url: `/pages/scanAll/scan/scan`
					})
				} else {
					vm.$utils.toast('请使用微信扫描餐桌二维码')
				}
				// uni.scanCode({
				// 	onlyFromCamera: true,
				// 	scanType: ['qrCode'],
				// 	success(res) {
				// 		uni.navigateTo({
				// 			url: `/pages/scanAll/scan/scan?number=${res.result}`
				// 		})
				// 	},
				// 	fail(err) {
				// 		uni.navigateTo({
				// 			url: `/pages/scanAll/scan/scan?number=28}`
				// 		})
				// 		// vm.$utils.toast('请重新扫描餐桌二维码')
				// 	}
				// })
			},
			preview(i, arr) {
				const current = this.staticURL + i
				const urls = arr.map(i => this.staticURL + i)
				uni.previewImage({
					current,
					urls
				})
			},
			seeLocation() {
				const vm = this;
				console.log(vm.list.shopInfo.shop_latitude);
				console.log(vm.list.shopInfo.shop_longitude);
				uni.openLocation({
					latitude: parseFloat(vm.list.shopInfo.shop_latitude),
					longitude: parseFloat(vm.list.shopInfo.shop_longitude),
					success: function() {
					}
				});
			},
			callStore() {
				const vm = this;
				uni.makePhoneCall({
					phoneNumber: vm.list.shopInfo.shop_mobile
				});
			},
			goPage(url) {
				this.$utils.goPage(url)
			},
		},
		computed: {
			...mapState(['userInfo', 'authorize', 'storeId'])
		},
		watch: {
			authorize(e) {
				if (this.authorize) {
					uni.showToast({
						title: '已授权'
					});
					// 判断是否扫码进来存在店铺id，存在获取首页信息,否则获取坐标
					if (this.storeId) {
						this.index();
					} else {
						this.getAddress();
					}
				} else {
					uni.showToast({
						title: '未授权'
					})
				}
			}
		}
	}
</script>
<style lang="scss">
	// 	background: url('#{$URL}/aaa');
	.section-a {
		height: 350upx;

		.banner {
			width: 690upx;
			height: 350upx;
			border-radius: 10upx;
		}
	}

	.section-b {
		display: flex;
		justify-content: space-around;
		margin: 80upx 0 60upx;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 76upx;
				height: 76upx;
			}

			text {
				padding-top: 10upx;
				font-size: 20upx;
				color: rgba(72, 72, 72, 1);
			}
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
			font-size: 30upx;
			font-weight: 600;
			color: #484848;
		}

		.t-r {
			display: flex;
			align-items: center;

			.text {
				font-size: 24upx;
				color: #484848;
			}

			image {
				width: 30upx;
				height: 26upx;
				transform: rotate(-90deg);
			}
		}
	}

	.section-c {
		.store {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 660upx;
			height: 217upx;
			box-shadow: 0px 3px 24px 0px rgba(4, 0, 0, 0.06);
			border-radius: 10px;

			.logo {
				width: 152upx;
				height: 152upx;
				border-radius: 76upx;
				margin: 0 22upx;
			}

			.detail {
				flex: 1;
				height: 152upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-size: 21upx;
				color: rgba(72, 72, 72, 1);

				.name {
					font-size: 28upx;
					line-height: 48upx;
				}

				.time {
					text {
						&:first-child {
							display: inline-block;
							width: 95upx;
							height: 26upx;
							// border: 1px solid rgba(237, 88, 81, 1);
							border-radius: 10upx;
							line-height: 22upx;
						}
					}

				}

				.title {
					font-size: 29upx;
					font-weight: 500;
					color: rgba(72, 72, 72, 1);
					line-height: 71upx;
				}
			}

			.contact {
				padding: 0 22rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 152upx;

				image {
					width: 64upx;
					height: 64upx;
					border-radius: 50%;
				}
			}
		}
	}

	.line {
		height: 8upx;
		background: rgba(238, 238, 238, 1);
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
				width: 190upx;
				margin-right: 15upx;

				image {
					width: 180upx;
					height: 180upx;
					border-radius: 6upx;
				}

				.name {
					display: block;
					width: 190upx;
					padding: 4upx 0;
					font-size: 20upx;
					color: rgba(11, 11, 11, 1);
				}

				.desc {
					display: block;
					width: 190upx;
					font-size: 18upx;
					color: #9C9C9C;
				}
			}
		}
	}

	.section-e {
		padding: 17upx 0 50upx 0;

		.item {
			display: flex;
			align-items: center;

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
				}

				.d-c {
					font-size: 20upx;
					color: #ED5851;
				}
			}
		}
	}

	.section-f {
		padding-bottom: 50upx;
	}

	.hint {
		z-index: 33;
		display: flex;
		width: 660upx;
		height: 55upx;
		margin-top: 10upx;
		background: #FFFFFF;
		border-radius: 6upx;
		align-items: center;
		justify-content: space-between;

		text {
			color: #484848;
			font-size: 24upx;
			padding-left: 30upx;
		}

		image {
			width: 30upx;
			height: 26upx;
			transform: rotate(-90deg);
		}
	}

	// @keyframes xuanzhuan {
	// 	0% {
	// 		transform: scale(1);
	// 	}

	// 	50% {
	// 		transform: scale(1.1);
	// 	}

	// 	100% {
	// 		transform: scale(1);
	// 	}
	// }
</style>
