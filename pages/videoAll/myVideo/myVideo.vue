<template>
	<view class="content">
		<view class="header">
			<view class="classify c660">
				<view 
					class="subnav" 
					:class="[index == 0 ? ' active' : '']"
					@click="changeIndex(0)"
				>
					已购课程
				</view>
				<view 
					class="subnav" 
					:class="[index == 1 ? ' active' : '']"
					@click="changeIndex(1)"
				>
					收藏
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="section-a c690">
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
						￥532
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
				index: 0,
			};
		},
		methods: {
			changeIndex(index) {
				this.index = index;
			}
		}
	}
</script>

<style lang="scss">
	.header {
		position: fixed;
		width: 100%;
		background: #ffffff;
		font-size: 26upx;
		border-bottom: 4px solid #EEEEEE;
		.classify {
			height: 90upx;
			display: flex;
			align-items: center;
			.subnav {
				width: 200upx;
				transition:font .5s;
				&.active {
					font-size: 28upx;
					color: #00A47C;
				}
			}
		}
	}
	.section-a {
		padding-top:90upx;
		.item {
			display: flex;
			align-items: center;
			padding: 30upx 0;
			border-bottom:1px solid #EEEEEE;
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
					color:rgba(162,163,164,1);
					font-size: 20upx;
					background:rgba(220,220,220,1);
				}
			}
			.detail {
				width: 422upx;
				height: 119upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.d-a {
					font-size:22upx;
					color:rgba(5,15,26,1);
				}
				.d-b {
					font-size:20upx;
					color:#8490A1;
					margin-left: -8upx;
				}
				.d-c {
					font-size:20upx;
					color:#ED5851;
				}
			}
		}
	}


</style>
