<template>
	<view class="content">
		<view class="section-a">
			<!--  -->
			<view class="address c690">
				<view class="title">
					<text>收货人：包小花</text>
					<text>13000000000</text>
				</view>
				<view class="middle">
					山东省青岛市山东省青岛市山东省青岛市山东省青岛市山东省青岛市山
				</view>
				<view class="operation">
					<view class="oper-l">
						<view class="item">
							<!-- <image :src="staticURL + 'mainAll/icon-false.png'"></image> -->
							<image :src="staticURL + 'mainAll/icon-true.png'"></image>
							<text class="orange">默认地址</text>
						</view>
					</view>
					<view class="oper-r">
						<view class="item">
							<image :src="staticURL + 'mainAll/icon-edit.png'"></image>
							<text>编辑</text>
						</view>
						<view class="item">
							<image :src="staticURL + 'mainAll/icon-del.png'"></image>
							<text>删除</text>
						</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<!--  -->
			<view class="address c690">
				<view class="title">
					<text>收货人：包小花</text>
					<text>13000000000</text>
				</view>
				<view class="middle">
					山东省青岛市山东省青岛市山东省青岛市山东省青岛市山东省青岛市山
				</view>
				<view class="operation">
					<view class="oper-l">
						<view class="item">
							<image :src="staticURL + 'mainAll/icon-false.png'"></image>
							<text>默认地址</text>
						</view>
					</view>
					<view class="oper-r" @click="goPage(`/pages/mainAll/addressEdit/addressEdit`)">
						<view class="item">
							<image :src="staticURL + 'mainAll/icon-edit.png'"></image>
							<text>编辑</text>
						</view>
						<view class="item">
							<image :src="staticURL + 'mainAll/icon-del.png'"></image>
							<text>删除</text>
						</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<!--  -->
		</view>
		<view class="footer">
			<button class="btn" @click="goPage(`/pages/mainAll/addressAdd/addressAdd`)">添加新地址</button>
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
	  .address {
		  padding-top: 30upx;
		  .title {
			  height: 50upx;
			  display: flex;
			  align-items: center;
			  justify-content: space-between;
			  font-size:28upx;
			  color:#3C3C3C;
		  }
		  .middle {
			  padding: 16upx 0;
			  font-size:28upx;
			  color:#AAAAAA;
			  border-bottom: 1px solid #eeeeee;
		  }
		  .operation {
			padding: 20upx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size:24upx;
			.oper-r {
				display: flex;
				align-items: center;
			}
			.item {
				display: flex;
				align-items: center;
				image {
					width:36upx;
					height:36upx;
					margin:0 10upx;
				}
				.orange {
					color: #FD744F;
				}
			}
		  }
	  }
  }
  .line:not(:last-child) {
	border-bottom: 14upx solid #eeeeee;
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
