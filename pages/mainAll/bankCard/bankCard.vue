<template>
	<view class="content">
		<view class="section-a">
			<!--  -->
			<scroll-view 
				class="bank c690" 
				v-for="(item,index) in 2" :key="index"
				scroll-x="true" 
			>
				<view class="box">
					<view>
						<text class="text-block">开户人：</text>
						<text>李三枪</text>
					</view>
					<view>
						<text class="text-block">开户行：</text>
						<text>中国银行</text>
					</view>
					<view>
						<text class="text-block">开户支行：</text>
						<text>中国银行龙口支行</text>
					</view>
					<view>
						<text class="text-block">银行账号：</text>
						<text>****************5263</text>
					</view>
				</view>
				<image :src="staticURL + 'mainAll/y-del.png'" class="delete-cu"></image>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="btn" @click="goPage(`/pages/mainAll/addBankCard/addBankCard`)">添加银行卡</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
			};
		},
		methods: {
			goPage(url) {
				this.$utils.goPage(url)
			}
		}
	}
</script>

<style lang="scss">
	.section-a {
		paddding-bottom: 8vh;
		.bank {
			background: #FFFFFF;
			white-space:nowrap;
			margin: 20upx auto;
			.box {
				width: 690upx;
				display: inline-block;
				height: 220upx;
				padding: 20upx;
				border-radius: 10upx;
				background: linear-gradient(to right, #4ec7a7, #00a477);
				font-size: 26upx;
				color: #FFFFFF;
				view {
					height: 44upx;
					line-height: 44upx;
				}
			}
			.delete-cu {
				display: inline-block;
				width: 60upx;
				height: 68upx;
				margin: 40upx 20upx;
			}
		}
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 30upx;
		width: 100%;
		height: 8vh;
		background: #ffffff;

		.btn {
			width: 290upx;
			height: 77upx;
			line-height: 77upx;
			border-radius: 39px;
			font-size: 30upx;
		}
	}
</style>
