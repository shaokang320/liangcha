<template>
	<view class="content c660" >
		<view class="section-a">
			<image class="logo" :src="staticURL + 'test/index02.png'"></image>
			<view class="name">
				{{storeInfo.shop_name}}
			</view>
			<view class="number">
				{{tableName}}号桌
			</view>
		</view>
		<view class="line">
			今日菜品推荐：新鲜三文鱼刺身
		</view>
		<view class="section-b">
			<view class="title">
				请选择就餐人数：
			</view>
			<view class="list">
				<view class="item" :class="[ index == i ? 'active' : '']" @click="change(i)" v-for="(item, i) in num" :key="i">
					{{item}}
				</view>
			</view>
		</view>
		<view>
			<button class="btn" @click="next">开始点餐</button>
		</view>
	</view>
</template>

<script>
	import { mapState } from "vuex"
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				num: ['1人','2人','3人','4人','5人','6人','7人','8人','9人','10人','11人','11人以上'],
				index: 1
			}
		},
		methods: {
			alert() {
					uni.showLoading()
			},
			change(i) {
				this.index = i;
			},
			next() {
				const vm = this;
				vm.$store.commit('SET_TABLENUM', vm.num[vm.index]);
				uni.navigateTo({
					url: '/pages/scanAll/classify/classify'
				})
			}
		},
		computed: {
			...mapState(['tableName', 'storeInfo'])
		}
	}
</script>

<style lang="scss">
	.section-a {
		display: flex;
		align-items: center;
		flex-direction: column;
		.logo {
			width:152upx;
			height:152upx;
			margin: 20upx 0;
			border-radius:50%;
		}
		.name {
			font-size:34upx;
			color:rgba(62,58,57,1);
		}
		.number {			
			margin: 20upx 0;
			font-size:32upx;
			color:rgba(62,58,57,1);
		}
	}
	.line {
		height:55upx;
		text-align: center;
		line-height: 55upx;
		background:rgba(238,238,238,1);
		font-size:21upx;
		color:rgba(62,58,57,1);
	}
	.section-b {
		padding: 74upx 0;
		.title {
			font-size: 30upx;
			font-weight: 500;
			line-height: 90upx;
		}
		.list {
			display: flex;
			justify-content: space-between;
			align-content: space-between;
			flex-wrap: wrap;
			.item {
				width:138upx;
				height:138upx;
				margin-top:21upx;
				background:#ffffff;
				border-radius:10upx;
				text-align: center;
				line-height: 138upx;
				color: #000000;
				border:1px solid #E5E5E5;
			}
			.active {
				color: #ffffff;
				background:rgba(0,164,124,1);
				border:1px solid rgba(0,164,124,1);
			}
		}
	}
	.btn {
		width:616upx;
		height:76upx;
		font-size:30upx;
		color:rgba(254,254,254,1);
		line-height:76upx;
	}
</style>
