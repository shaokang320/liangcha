<template>
	<view class="content">
		<!-- 搜索 -->
		<view class='search'>
			<view class='left'>
				<image :src="staticURL + 'videoAll/search.png'"></image>
				<input confirm-type="search" placeholder='请输入课程名称' v-model="key" @confirm="search"></input>
				<view class='search_btn' @click="search">搜索</view>
			</view>
		</view>
		<!-- mei wen -->
		<view class="common-title"></view>
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
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				list: [1],
				page: 1,
				key: ''
			};
		},
		methods: {
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
			}
		}
	}
</script>

<style lang="scss">
	/* 顶部搜索 */
	.search {
		position: fixed;
		width: 690upx;
		left: 30upx;
		padding: 20upx 0;
		overflow: hidden;
		border-bottom: 1px solid #EEEEEE;
		background: #fff;
	}

	.search .left {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60upx;
		border: 1px solid #000000;
		border-radius: 30upx;
		overflow: hidden;
	}

	.search .left image {
		width: 35upx;
		height: 35upx;
		margin: 13upx 5upx 10upx 20upx;
	}

	.search .left input {
		width: 72%;
		height: 60upx;
		color: #9b9b9b;
		font-size: 24upx;
		line-height: 34upx;
	}

	.search_btn {
		width: 15%;
		height: 60upx;
		line-height: 60upx;
		font-size: 24upx;
		color: #9b9b9b;
		text-align: center;
		border-left: 2upx solid #ddd;
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
