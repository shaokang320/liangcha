<template>
	<view class="content">
		<view class="section-a">
			<icon type="success" color="#00A47C" size="80"/>
			<view class="msg">
				支付成功
			</view>
			<text>您已经完成支付</text>
		</view>
		<button class="btn">查看订单</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.section-a {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 100upx 0;
		margin-bottom: 80upx;
		border-bottom:1px solid #EEEEEE;
		.msg {
			padding: 20upx 0;
			font-size:38upx;
			font-weight:600;
			color:rgba(11,11,11,1);
		}
		text {
			font-size:28upx;
			color:rgba(62,58,57,1);
			opacity:0.7;
		}
	}
	.btn {
		width:267upx;
		height:62upx;
		line-height: 62upx;
		margin: 0 auto;
		background: #FFFFFF;
		font-size:28upx;
		color: #333333;
	}
</style>
