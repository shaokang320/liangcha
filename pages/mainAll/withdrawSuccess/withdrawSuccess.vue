<template>
	<view class="content">
		<view class="section-a">
			<image :src="staticURL + 'mainAll/finish.png'" mode="widthFix"></image>
			<view class="msg">
				提现申请已提交，等待商家审核
			</view>
			<text>2019-09-04 15:11:28</text>
		</view>
		<button class="btn">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
			};
		}
	}
</script>

<style lang="scss">
	.section-a {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 140upx 0;
		margin-bottom: 80upx;
		image {
			width:340upx;
		}
		.msg {
			padding: 80upx 0 30upx;
			font-size:38upx;
			font-weight: 550;
			color:#333333;
		}
		text {
			font-size:28upx;
			color:rgba(62,58,57,1);
			opacity:0.7;
		}
	}
	.btn {
		width:600upx;
		height:90upx;
		line-height: 90upx;
		margin: 0 auto;
		font-size:34upx;
		color: #FFFFFF;
	}
</style>
