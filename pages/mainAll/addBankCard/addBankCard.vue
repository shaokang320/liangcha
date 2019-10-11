<template>
	<view class="content">
		<view class="header">
			输入银行卡信息
		</view>
		<view class="section-a c690">
			<view class="only">
				<text class="only-l">持卡人</text>
				<input class="only-r" type="text" v-model="name" placeholder="请输入姓名"/>
			</view>
			<view class="only">
				<text class="only-l">卡号</text>
				<input class="only-r" type="text" v-model="name" placeholder="银行卡卡号"/>
			</view>
			<view class="only">
				<text class="only-l">银行</text>
				<input class="only-r" type="text" v-model="name" placeholder="例:中国银行"/>
			</view>
			<view class="only">
				<text class="only-l">开户支行</text>
				<input class="only-r" type="text" v-model="name" placeholder="例:广州**路支行"/>
			</view>
		</view>
		<button class="btn c660">确认添加</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				name:'',
			};
		},
		methods: {
			goPage() {
				this.$utils.goPage(`/pages/mainAll/addressAdd/addressAdd`)
			}
		}
	}
</script>

<style lang="scss">
	.header {
		height: 120upx;
		padding-left: 30upx;
		color: #BABABA;
		font-size: 26upx;
		line-height: 120upx;
		background: #F5F5F5;
	}
	.section-a {
		border-bottom: 1px solid #EEEEEE;
		.only {
			height: 120upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #EEEEEE;
			.only-l {
				font-size: 32upx;
				font-weight: 500;
				color:#333333;
			}
			.only-r {
				width: 500upx;
				font-size: 28upx;
				font-weight: 500;
				color: #BABABA;
			}
		}
	}
	.btn {
		margin: 80upx auto 0;
	}
</style>
