<template>
	<view class="content">
		<view class="section-a">
			<view class="name">
				日源（广州白云区店）
			</view>
		</view>
		<view class="h-title">
			<image :src="staticURL + 'bookAll/icon-book.png'"></image>
			<text>厨师列表</text>
		</view>
		<view class="section-c c690">
			<view class="item" v-for="(item, i) in list" :key="i">
				<view class="pic" @click="goPage(item.id)">
					<image :src="staticURL + item.pic"></image>
				</view>
				<view class="detail" @click="goPage(item.id)">
					<view class="name">
						<text>{{item.name}}</text>
						<view class="tag">
							擅长:{{item.tag}}
						</view>
					</view>
					<view class="other">
						<view class="small">
							<image :src="staticURL + 'scanAll/icons01.png'"></image>
							<text>{{item.grade}}评分</text>
						</view>
						<view class="small">
							<image :src="staticURL + 'scanAll/icons02.png'"></image>
							<text>{{item.sales}}人点过</text>
						</view>
						<view class="small">
							<image :src="staticURL + 'scanAll/icons03.png'"></image>
							<text>{{item.evaluate}}次评价</text>
						</view>
					</view>
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
				list: [{
						id: '1',
						pic: 'test/index02.png',
						name: '王晓伟',
						tag: '鲁菜、粤菜、川菜、家常菜',
						grade: 9.9, //评分
						sales: 550, //销量
						evaluate: 15,//评价数
					},
					{
						id: '2',
						pic: 'test/index02.png',
						name: '王晓伟',
						tag: '鲁菜、粤菜、川菜、家常菜',
						grade: 9.9, //评分
						sales: 550, //销量
						evaluate: 15,//评价数
					},
					{
						id: '2',
						pic: 'test/index02.png',
						name: '王晓伟',
						tag: '鲁菜、粤菜、川菜、家常菜',
						grade: 9.9, //评分
						sales: 550, //销量
						evaluate: 15,//评价数
					}
				]
			}
		},
		methods: {
			goPage() {
				this.$utils.goPage(`/pages/cookAll/cookDetail/cookDetail`)
			}
		}
	}
</script>

<style lang="scss">
	.section-a {
		position: fixed;
		height: 6vh;
		width: 690upx;
		left: 30upx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		background: #f5f5f5;
	}
	.h-title {
		position: fixed;
		top: 6vh;
		left: 30upx;
		display: flex;
		align-items: center;
		width: 690upx;
		height: 5vh;
		background: #ffffff;
		image {
			width:38upx;
			height:38upx;
		}
		text {
			margin-left: 12upx;
			font-size:29upx;
			font-weight:500;
			color:rgba(11,11,11,1);
		}
	}
	.section-c {
		padding-top:11vh;
		.item {
			height: 180upx;
			display: flex;
			align-items: center;
			box-shadow:0px 3px 24px 0px rgba(4,0,0,0.06);
			border-radius:10px;
			margin-bottom: 40upx;
			.pic {
				width: 120upx;
				height: 120upx;
				margin: 0 30upx;
				overflow: hidden;
				border-radius: 50%;
				image {
					width: 100%;
					heigt: 100%;
				}
			}

			.detail {
				height: 120upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name {
					font-size: 31upx;
					color: rgba(11, 11, 11, 1);
					.tag {
						padding: 10upx 0;
						font-size: 21upx;
						color: #999999;
					}
				}
				.other {
					display: flex;
					color:#BCBCBC;
					font-size: 20upx;
					.small {
						display: flex;
						align-items: center;
						image {
							width:24upx;
							height:24upx;
						}
						text {
							padding:0 30upx 0 6upx;
						}
					}
				}
			}
		}
	}
</style>
