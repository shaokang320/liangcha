<template>
	<view class="content">
		<view class="section-a c690">
			<view class="only">
				<text class="only-l">个人姓名</text>
				<input class="only-r" type="text" v-model="name" placeholder="请填写"/>
			</view>
			<view class="only">
				<text class="only-l">手机号码</text>
				<input class="only-r" type="text" v-model="tel" placeholder="请填写"/>
			</view>
			<picker class="box" mode="region"  @change="changeCity">
				<view class="h-title">
					<text>所在地区</text>
					<view class="r">
						<text>{{province}} {{city}} {{town}}</text>
						<image :src="staticURL + 'common/arrow-gray.png'"></image>
					</view>
				</view>
			</picker>
			<view class="only lg">
				<view class="textbox">
					<text class="only-l">详细地址</text>
					<textarea class="only-r" type="text" v-model="address" placeholder="如：道路、门牌号、小区、楼栋号、单元等"/>
				</view>
			</view>
		</view>
		<button @click="a" class="btn c660">保存地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				province: '广东省',
				city: '广州市',
				town: '荔湾区',
				name:'',
				tel:'' ,
				address: ''
			};
		},
		methods: {
			a() {
				console.log(this.name)
			},
			changeCity(e) {
				console.log(e);
				this.province = e.detail.value[0];
				this.city = e.detail.value[1];
				this.town = e.detail.value[2];
			},
			goPage() {
				this.$utils.goPage(`/pages/mainAll/addressAdd/addressAdd`)
			}
		}
	}
</script>

<style lang="scss">
	.section-a {
		border-bottom: 1px solid #EEEEEE;
		.only {
			height: 100upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #EEEEEE;
			.only-l {
				font-size: 32upx;
				font-weight: 500;
				color: #666666;
			}
			.only-r {
				width: 500upx;
				font-size: 32upx;
				font-weight: 500;
				color: #666666;
			}
			&.lg {
				height: 160upx;
				.textbox {
					width: 100%;
					height: 77upx;
					display: flex;
					justify-content: space-between;
					textarea {
						height: 100upx;
						width: 500upx;
						font-size: 32upx;
						font-weight: 400;
						color: #666666;
					}
				}
			}
		}
		.box {
			border-bottom: 1px solid #EEEEEE;
			.h-title {
				display: flex;
				align-items: center;
				height: 100upx;
				background: #ffffff;
				justify-content: space-between;
				.r {
					width: 500upx;
					display: flex;
					justify-content: space-between;
				}
				text {
					font-size: 32upx;
					font-weight: 500;
					color: #666666;
				}
				image {
					width: 40upx;
					height: 30upx;
					transform: rotate(-90deg);
				}
			}
		}
	}
	.btn {
		margin: 80upx auto 0;
	}
</style>
