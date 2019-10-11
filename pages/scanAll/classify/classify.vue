<template>
	<view class="content">
		<view class="section-a">
			<view class="name">
				{{storeInfo.shop_name}}
			</view>
			<view class="number">
				{{tableName}}号桌/{{tableNum}}
			</view>
		</view>
		<scroll-view class="section-b" scroll-y=true>
			<view class="item" v-for="(item, i) in classify" :class="[index == i ? 'active' : '']" :key="i" @click="changeClassify(i)">
				{{item.instore_class_name}}
			</view>
		</scroll-view>
		<scroll-view class="section-c" @scrolltolower="scrollAdd" scroll-y=true>
			<view class="item" v-for="(item, i) in list" :key="i">
				<view class="pic" @click="goPage(item.id)">
					<image :src="item.foodImages"></image>
				</view>
				<view class="detail" @click="goPage(item.id)">
					<view class="name">
						<text>{{item.food_name}}</text>
						<view class="desc">
							月售:{{item.food_salenum}}
						</view>
					</view>
					<view class="price">
						<view v-if="item.food_money">
							￥{{item.food_money}}
						</view>
						<view v-else>
							￥{{item.original_price}}
						</view>
						<view v-if="item.food_money">
							(折扣)
						</view>
					</view>
				</view>
				<view class="add" @click="add(i)">
					<view>
						+
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="footer">
			<view class="f-l" @click="show">
				<view class="cart">
					<image :src="staticURL + 'scanAll/cart.png'"></image>
					<text>{{scanAll.count}}</text>
				</view>
				<text>￥{{scanAll.totalPrice}}</text>
			</view>
			<navigator class="f-r" url="/pages/scanAll/submitOrder/submitOrder">
				去结算
			</navigator>
		</view>
		<!-- 购物车 -->
		<view class="components-cart" v-show="showCart">
			<!-- <cart-List :refresh="refresh"></cart-List> -->
			<cart-List></cart-List>
		</view>
	</view>
</template>

<script>
	import { foodClass, foodList} from '@/common/api/scanAll'
	import {
		mapState
	} from 'vuex'
	import cartList from '@/components/cartList.vue';
	export default {
		components: {
			cartList
		},
		data() {
			return {
				showCart: false, //控制显示状态
				refresh: false, //刷新购物车
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				index: 0,
				classify: [],
				page: 1,
				list: []
			}
		},
		onLoad() {
			const vm = this;
			vm.foodClass();
		},
		methods: {
			// 获取商品分类
			foodClass() {
				const vm = this;
				foodClass({shop_id: vm.storeId}).then((data) => {
					console.log(data.classList);
					vm.classify = data.classList;
					vm.page = 1;
					vm.foodList();
				})
			},
			// 获取菜品列表
			foodList() {
				const vm = this;
				vm.$utils.show();
				foodList({page: vm.page, shop_id: vm.storeId, instore_class_id: vm.classify[vm.index].instore_class_id}).then( (data) => {
					console.log(data);
					if(data.foodList.data.length == 0) {
						vm.$utils.toast('已加载全部')
					} else {
						vm.list = [...vm.list, ...data.foodList.data];
					}
					vm.$utils.hide();
				})
			},
			add(index) {
				const vm = this;
				console.log(vm.list[index]);
				vm.refresh = !vm.refresh;
			},
			scrollAdd() {
				this.page ++ ;
				this.foodList();
			},
			changeClassify(i) {
				if(this.index != i) {
					this.index = i;
					this.page = 1 ;
					this.list = [] ;
					this.foodList();
				}
			},
			show() {
				this.showCart = !this.showCart;
			},
			goPage(id) {
				this.$utils.goPage(`/pages/scanAll/goodsDetail/goodsDetail?id=${id}`)
			}
		},
		computed: {
			...mapState(['tableName', 'storeInfo','scanAll', 'tableNum', 'storeId'])
		}
	}
</script>

<style lang="scss">
	.section-a {
		height: 6vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		background: #ffffff;

		.name {
			font-size: 32upx;
			font-weight: 500;
			color: rgba(62, 58, 57, 1);
		}

		.number {
			font-size: 21upx;
			color: rgba(62, 58, 57, 1);
		}
	}

	.section-b {
		position: fixed;
		top: 6vh;
		width: 164upx;
		height: 86vh;
		background: rgba(249, 249, 249, 1);

		.item {
			height: 100upx;
			line-height: 100upx;
			text-align: center;

			&.active {
				color: #000000;
				background: #ffffff;
			}
		}
	}

	.section-c {
		position: fixed;
		top: 6vh;
		left: 164upx;
		width: 586upx;
		height: 86vh;

		.item {
			height: 180upx;
			display: flex;
			align-items: center;

			.pic {
				width: 120upx;
				height: 120upx;
				margin: 0 30upx;
				overflow: hidden;

				image {
					width: 120upx;
					height: 120upx;
				}
			}

			.detail {
				width: 300upx;
				height: 120upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.name {
					font-size: 26upx;
					color: rgba(11, 11, 11, 1);

					.desc {
						padding: 2upx 0 0;
						font-size: 18upx;
						color: rgba(156, 156, 156, 1);
					}
				}

				.price {
					display: flex;
					align-items: center;

					view {
						&:first-child {
							min-width: 100upx;
							font-size: 26upx;
							font-weight: bold;
							color: rgba(237, 88, 81, 1);
						}

						&:last-child {
							font-size: 18upx;
							font-weight: bold;
							color: rgba(156, 156, 156, 1);
						}
					}
				}
			}

			.add {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;

				view {
					width: 38upx;
					height: 38upx;
					background: rgba(0, 164, 124, 1);
					border-radius: 50%;
					text-align: center;
					line-height: 36upx;
					color: #ffffff;
				}

			}
		}
	}

	.footer {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 8vh;

		.f-l {
			flex: 0 0 70%;
			display: flex;
			align-items: center;
			background: #ffffff;

			.cart {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 61upx;
				height: 61upx;
				margin: 0 10upx 0 50upx;

				image {
					width: 100upx;
					height: 60upx;
				}

				text {
					position: absolute;
					top: -10upx;
					right: -10upx;
					width: 36upx;
					height: 36upx;
					border-radius: 50%;
					background: #DD524D;
					color: #ffffff;
					text-align: center;
					font-weight: normal;
					font-size: 24upx;
					line-height: 36upx;
				}
			}

			text {
				height: 61upx;
				line-height: 85upx;
				font-size: 28upx;
				font-weight: bold;
				color: #333333;
			}
		}

		.f-r {
			flex: 0 0 30%;
			background: rgba(0, 164, 124, 1);
			line-height: 8vh;
			text-align: center;
			font-size: 33upx;
			color: rgba(255, 255, 255, 1);
		}
	}

	.components-cart {
		position: fixed;
		bottom: 8vh;
		width: 100%;
	}
</style>
