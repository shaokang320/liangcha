<template>
	<view class="content">
		<view class="section-a c690">
			<view class="only">
				<text class="only-l">姓名</text>
				<input class="only-r" type="text" v-model="name" placeholder="输入" />
			</view>
			<picker class="box" mode="selector" :range="gender" :value="genderIndex" @change="changeGender">
				<view class="h-title">
					<text>性别</text>
					<view class="r">
						<text>{{gender[genderIndex]}}</text>
						<!-- <image :src="staticURL + 'common/arrow-gray.png'"></image> -->
					</view>
				</view>
			</picker>
			<view class="only">
				<text class="only-l">手机号</text>
				<input class="only-r" type="text" v-model="tel" placeholder="输入" />
			</view>
			<view class="only">
				<text class="only-l">身份证号</text>
				<input class="only-r" type="text" v-model="card" placeholder="输入" />
			</view>
			<view class="cart-title">
				<text class="l">上传您的身份证照片</text>
				<text class="r">（手持身份证正面）</text>
			</view>
			<view class="card-img c660" @click="photograph">
				<image :src="cartImg ? cartImg : (staticURL + 'videoAll/idCard.png')" mode="widthFix"></image>
			</view>
		</view>
		<button @click="submit" class="btn c660">提交申请</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				gender: ['男', '女'],
				genderIndex: 0,
				name: 'carson',
				tel: '18561332353',
				card: '370826199511000031',
				cartImg: ''
			};
		},
		methods: {
			submit() {
				const vm = this;
				if(vm.tel.length != 11) {
					vm.$utils.toast('请将手机号输入完整');
					return false;
				} else if(!vm.cartImg){
					vm.$utils.toast('请上传手持身份证照片');
					return false;
				}
				if(!vm.name || !vm.card) {
					vm.$utils.toast('请将信息填写完整');
					return false;
				}
				uni.showModal({
				    content: '确认提交',
				    success: function (res) {
				        if (res.confirm) {					
							vm.$utils.toast('信息提交成功,预计将在24h内予以审核');
							vm.$utils.goPage(`/pages/videoAll/auditResult/auditResult`)
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			// 拍照
			photograph() {
				const vm = this;
				uni.chooseImage({
					count: 1,
					sourceType: ['camera'],
					success: function(res) {
						const tempFilePaths = res.tempFilePaths;
						vm.cartImg = tempFilePaths[0];
						console.log(tempFilePaths);
						// this.$utils.uploadingImg();
					},
					fail: function() {}
				})
			},
			changeGender(e) {
				this.genderIndex = e.target.value
			},
			goPage() {
				this.$utils.goPage(`/pages/mainAll/addressAdd/addressAdd`)
			}
		}
	}
</script>

<style lang="scss">
	.section-a {
		.only {
			height: 100upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #EEEEEE;

			.only-l {
				font-size: 30upx;
				font-weight: 500;
				color: #666666;
			}

			.only-r {
				padding-right: 60upx;
				font-size: 30upx;
				font-weight: 500;
				text-align: right;
				color: #666666;
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
					justify-content: flex-end;
				}

				text {
					font-size: 32upx;
					font-weight: 500;
					color: #666666;
					padding-right: 60upx;
				}
			}
		}

		.cart-title {
			height: 100upx;
			padding: 40upx 0 100upx;

			.l {
				font-size: 32upx;
				font-weight: 500;
				color: #000;
			}

			.r {
				font-size: 26upx;
				color: #666666;
			}
		}

		.card-img {
			display: flex;
			align-items: center;
			justify-content: center;

			image {
				width: 570upx;
				border-radius: 20upx;
			}
		}
	}

	.btn {
		margin: 80upx auto 0;
		border-radius: 48px;
	}
</style>
