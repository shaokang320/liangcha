<template>
	<view class="content">
		<!-- 搜索 -->
		<view class='search'>
			<view class='left'>
				<image :src="staticURL + 'videoAll/search.png'"></image>
				<input confirm-type="search" placeholder='请输入职位名称' v-model="key" @confirm="search"></input>
			</view>
		</view>
		<view style="height:140upx;"></view>
		<view class="section-d c660">
			<view class="add" @click="goPage('/pages/mainAll/addBio/addBio')">
				<view class="pic">
					<image :src="staticURL + 'mainAll/bio.png'"></image>
				</view>
				<view class="detail">
					<view class="name">
						<text>简历填写</text>
					</view>
					<view class="desc">
						直接与企业约面试
					</view>
				</view>
				<view class="specification">
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="section-a">
			<view class="case c660">
				<view class="case-i">
					<picker class="box" mode="selector" :range="gender" :value="genderIndex" @change="changeGender">
						<view class="h-title">
							<text>{{gender[genderIndex]}}</text>
							<image  :src="staticURL + 'mainAll/drop.png'" mode="widthFix"></image>
							<!-- <view class="r">
								<text>{{gender[genderIndex]}}</text>
								<image :src="staticURL + 'common/arrow-gray.png'"></image>
							</view> -->
						</view>
					</picker>
				</view>
				<view class="case-i">
					<picker class="box" mode="selector" :range="money" :value="moneyIndex" @change="changeMoney">
						<view class="h-title">
							<text>{{money[moneyIndex]}}</text>
							<image  :src="staticURL + 'mainAll/drop.png'" mode="widthFix"></image>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="section-c c660">
			<scroll-view class="list" scroll-y=true>
				<view class="item" v-for="(item, i) in list" :key="i" @click="goPage('')">
					<view class="detail">
						<view class="name">
							<text>厨师助理</text>
						</view>
						<view class="desc">
							上海 | 本科 | 3年经验
						</view>
						<view class="money">
							广东省深圳市日源科技有限公司
						</view>
					</view>
					<view class="specification">
						<view>
							4-6k
						</view>
						<view>
							2019-09-12 09:18
						</view>
					</view>
				</view>
				<!-- <view class="null-content">
					暂无记录
				</view> -->
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapGetter
	} from 'vuex'
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				page: 1,
				key: '',
				list: [1, 2],
				genderIndex: 0,
				gender: ['配菜员', '服务员'],
				moneyIndex: 0,
				money: ['1000-2000', '2000-6000','6000以上'],
			}
		},
		onLoad() {
			const vm = this;
		},
		methods: {
			changeGender(e) {
				this.genderIndex = e.target.value
			},
			changeMoney(e) {
				this.moneyIndex = e.target.value
			},
			// 搜索
			search() {
				this.list = [];
				this.apiSearch();
			},
			// 搜索api
			apiSearch() {
				const vm = this;
				if (!vm.key) {
					vm.$utils.toast('请输入课程名称');
					return false;
				}
				COMMON.show();
				API('goodsList', {
						class_id: '',
						goods_name: self.data.key,
						page: self.data.page
					})
					.then((e) => {
						COMMON.hide();
						if (e.code == 200) {
							if (e.resData.goodsList.data.length == 0) {
								if (self.detail.length <= 0) {
									self.setData({
										detail: []
									})
									COMMON.Toast('未查询到该商品')
								} else {
									COMMON.Toast('已全部加载')
								}
							} else {
								self.setData({
									detail: [...self.detail, ...e.resData.goodsList.data]
								})
								console.log(self.detail)
							}
						}
					})
			},
			goPage(url) {
				this.$utils.goPage(url)
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>
<style lang="scss">
	/* 顶部搜索 */
	.search {
		position: fixed;
		width: 690upx;
		left: 30upx;
		top: 20upx;
		height: 100upx;
		overflow: hidden;
		background: #fff;
	}

	.search .left {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60upx;
		border: 1px solid #000000;
		border-radius: 10upx;
		overflow: hidden;
	}

	.search .left image {
		width: 35upx;
		height: 35upx;
		margin: 13upx 5upx 10upx 20upx;
	}

	.search .left input {
		// width: 72%;
		height: 60upx;
		color: #9b9b9b;
		font-size: 30upx;
		line-height: 34upx;
	}

	.line {
		margin-top: 20upx;
		height: 10upx;
		width: 100%;
	}
	.section-a {
		border-bottom: 1px solid #EEEEEE;
		.case {
			height: 76upx;
			display: flex;
			align-items: center;
			.case-i {
				padding-right: 60upx;
				.box {
					.h-title {
						display: flex;
						align-items: center;
						background: #ffffff;
						justify-content: space-between;
						// .r {
						// 	display: flex;
						// 	justify-content: flex-end;
						// }
						text {
							font-size: 28upx;
							font-weight: 500;
							color: #00A47C;
						}
						image {
							width: 30upx;
						}
					}
				}
			}
		}
	}
	.section-d {
		.add {
			height: 100upx;
			display: flex;
			align-items: center;

			.pic {
				margin-right: 20upx;
				overflow: hidden;
				border-radius: 35upx;

				image {
					width: 82upx;
					height: 82upx;
				}
			}

			.detail {
				width: 430upx;
				height: 60upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name {
					font-size: 22upx;
					color: #555555;
				}

				.desc {
					font-size: 20upx;
					color: rgba(156, 156, 156, 1);
				}
			}

			.specification {
				width: 160upx;
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				image {
					width: 30rpx;
					height: 26rpx;
					transform: rotate(-90deg);
				}
			}
		}
	}
	
	.section-c {
		.null-content {
			height: 130upx;
			line-height: 130upx;
			font-size: 24upx;
			color: #555555;
			text-indent: 10upx;
		}
		.item {
			height: 180upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #EEEEEE;
			.detail {
				width: 430upx;
				height: 120upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name {
					font-size: 26upx;
					color: #555555;
				}
	
				.desc {
					font-size: 24upx;
					color: #999999;
				}
	
				.money {
					font-size: 24upx;
					color: #333333;
				}
			}
	
			.specification {
				width: 300upx;
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				view {
					font-size: 20upx;
					color: #CCCCCC;
					&:first-child {
						padding: 6upx 0;
						font-size: 28upx;
						color: #FE3701;
					}
				}
			}
		}
	}
</style>
