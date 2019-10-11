<template>
	<view class="components-cart">
		<view class="title">
			<view class="t-l">
				已选商品
			</view>
			<view class="t-r">
				<image :src="staticURL + 'scanAll/del.png'"></image>
				<text>清空购物车</text>
			</view>
		</view>
		<scroll-view class="list" scroll-y=true>
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="item-l">
					<view class="name">
						{{item.name}}
					</view>
					<view class="desc">
						{{item.desc}}
					</view>
				</view>
				<view class="item-m">
					￥{{item.price}}
				</view>
				<view class="item-r">
					<view class="calc" @click="change('reduce', index)">
						-
					</view>
					<view class="num">
						{{item.num}}
					</view>
					<view class="calc" @click="change('add', index)">
						+
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				list: [], //商品列表
			};
		},
		computed: {
			...mapState(['scanAll'])
		},
		created() {
			this.list = this.scanAll.cart;
			console.log(this.list);
		},
		methods: {
			change(type, index) {
				const vm = this;
				let num = vm.list[index].num;
				if (type == 'reduce') { // 减
					num == 1 ? (num = 1) : (num -= 1);
				} else if (type == 'add') { // 加
					num += 1;
				}
				vm.list[index].num = num;
			}
		}
	}
</script>

<style lang="scss">
	.components-cart {
		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 14upx 50upx;
			background: #f5f5f5;
			font-size: 28upx;
			.t-l {
				text-indent: 10upx;
				border-left: 4px solid #00a47c;
			}
			.t-r {
				display: flex;
				align-items: center;
				image {
					width: 32upx;
					height: 34upx;
					margin-right: 5upx;
				}
			}
		}

		.list {
			background: #fff;
			min-height: 480upx;
			max-height: 600upx;
			.item {
				display: flex;
				align-items: center;
				padding: 0 50upx;
				height: 120upx;
				border-bottom: 1px solid #f5f5f5;
				.item-l {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					width: 360upx;
					height: 80upx;
					.name {
						overflow: hidden;
						white-space: nowrap;
						font-size: 30upx;
						font-weight: 500;
						color: #333333;
					}
					.desc {
						overflow: hidden;
						white-space: nowrap;
						width: 360upx;
						font-size: 22upx;
						color: #9c9c9c;
					}
				}
				.item-m {
					width: 140upx;
					font-size: 30upx;
					font-weight: 500;
					color: #DD524D;
				}
				.item-r {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 150upx;
					.calc {
						width: 38rpx;
						height: 38rpx;
						background: #00a47c;
						border-radius: 50%;
						text-align: center;
						line-height: 36rpx;
						color: #ffffff;
					}
					.num {
						width: 74upx;
						text-align: center;
					}
				}
			}
		}
	}
</style>
