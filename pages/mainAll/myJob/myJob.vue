<template>
	<view class="content">
		<view class="header c690">
			<view class="box">
				<image class="avar" :src="staticURL + 'test/lady.png'"></image>
				<view class="userInfo">
					<text>红尘客栈</text>
					<view class="class">
						<image :src="staticURL + 'mainAll/icon-tel.png'"></image>
						<text>1856133253</text>
					</view>
				</view>
				<view class="membership" @click="goPage('/pages/mainAll/job/job')">
					<text>更多好工作</text>
					<image :src="staticURL + 'common/arrow-gray.png'"></image>
				</view>
			</view>
		</view>
		<!-- 分类 -->
		<view class="tl c660">投递记录</view>
		<view class="section-c c660">
			<scroll-view class="list" scroll-y=true>
				<view class="item" v-for="(item, i) in list" :key="i" @click="goPage('/pages/mainAll/jobDetail/jobDetail')">
					<view class="detail">
						<view class="name">
							<text>厨师助理</text>
						</view>
						<view class="desc">
							广东省深圳市日源科技有限公司
						</view>
						<view class="money">
							4-6k
						</view>
					</view>
					<view class="specification">
						<button class="btn" type="primary"></button>
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
		<view class="section-d c660">
				<view class="add" @click="goPage('/pages/mainAll/addBio/addBio')">
					<view class="pic">
						<image  :src="staticURL + 'mainAll/bio.png'"></image>
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
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				list: [1, 2]
			}
		},
		onShow() {},
		methods: {
			goPage(url) {
				this.$utils.goPage(url)
			}
		},
		computed: {}
	}
</script>

<style lang="scss">
	.header {
		height: 220upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #00A47C;
		border-radius: 20upx;

		.box {
			width: 600upx;
			height: 170upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.avar {
				width: 130upx;
				height: 130upx;
				border-radius: 50%;
			}

			.userInfo {
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				width: 300upx;
				height: 80upx;
				margin-left: 10upx;

				text {
					font-size: 24upx;
					color: #FFFFFF;
				}

				.class {
					display: flex;
					align-items: center;
					height: 40upx;
					line-height: 40upx;

					image {
						width: 21upx;
						height: 24upx;
						border-radius: 50%;
					}

					text {
						font-size: 20upx;
					}
				}
			}

			.membership {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 150upx;
				height: 40upx;
				line-height: 40upx;
				background: #F7F7F7;
				border-radius: 20upx;
				opacity: 0.83;

				image {
					border-radius: 50%;

					&:first-child {
						width: 38upx;
						height: 38upx;
					}

					&:last-child {
						width: 22upx;
						height: 22upx;
						transform: rotate(-90deg);
					}
				}

				text {
					font-size: 20upx;
					color: #5D5B5B;
				}
			}
		}
	}

	.tl {
		margin-top: 50upx;
		font-size: 24upx;
		color: #BDB8B8;
		text-indent: 10upx;
		border-left: 3px solid #00A47C;
	}

	.line {
		width: 100%;
		height: 15upx;
	}

	.section-c {
		.null-content {
			height: 100upx;
			line-height: 100upx;
			font-size: 24upx;
			color: #555555;
			text-indent: 10upx;
		}
		.item {
			height: 160upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #EEEEEE;

			.detail {
				width: 430upx;
				height: 60upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.name {
					font-size: 24upx;
					color: #555555;
				}

				.desc {
					font-size: 18upx;
					color: rgba(156, 156, 156, 1);
				}

				.money {
					padding: 10upx 0;
					font-weight: bold;
					font-size: 24upx;
					color: #FE3701;
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
				}

				.btn {}
			}
		}
	}
	.section-d {
		padding-top: 30px;
		.add {
			height: 100upx;
			display: flex;
			align-items: center;
			.pic {
				margin-right:20upx;
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
</style>
