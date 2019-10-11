<template>
	<view class="content">
		<view class="header">
			填写基本信息
		</view>
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
				<text class="only-l">年龄</text>
				<input class="only-r" type="text" v-model="age" placeholder="输入" />
			</view>
			<picker class="box" mode="selector" :range="education" :value="educationIndex" @change="changeEducation">
				<view class="h-title">
					<text>学历</text>
					<view class="r">
						<text>{{education[educationIndex]}}</text>
						<!-- <image :src="staticURL + 'common/arrow-gray.png'"></image> -->
					</view>
				</view>
			</picker>
			<picker class="box" mode="selector" :range="money" :value="moneyIndex" @change="changeMoney">
				<view class="h-title">
					<text>薪资</text>
					<view class="r">
						<text>{{money[moneyIndex]}}</text>
						<!-- <image :src="staticURL + 'common/arrow-gray.png'"></image> -->
					</view>
				</view>
			</picker>
			<picker class="box" mode="selector" :range="job" :value="jobIndex" @change="changeJob">
				<view class="h-title">
					<text>求职岗位</text>
					<view class="r">
						<text>{{job[jobIndex]}}</text>
						<!-- <image :src="staticURL + 'common/arrow-gray.png'"></image> -->
					</view>
				</view>
			</picker>
		</view>
		<view class="header">
			请上传简历（doc格式）
		</view>
		<view class="section-a">
			<view class="card-img c690" @click="addDoc">
				<image v-if="!docName" :src="staticURL + 'mainAll/dio.jpg'" mode="widthFix"></image>
				<view v-else>{{docName}}</view>
			</view>
		</view>
		<button @click="submit" class="btn c660">提交简历信息</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL,
				genderIndex: 0,
				gender: ['男', '女'],
				educationIndex: 2,
				education: ['初中','高中','大专','大学本科','研究生'],
				moneyIndex: 2,
				money: ['1000-3000','3000-5000','5000-7000','7000以上'],
				jobIndex: 2,
				job: ['服务员','收银员','厨师','经理'],
				name: 'carson',
				age: '29',
				docPath:'',
				docName:''
			};
		},
		methods: {
			submit() {
				const vm = this;
				if (vm.tel.length != 11) {
					vm.$utils.toast('请将手机号输入完整');
					return false;
				} else if (!vm.docPath) {
					vm.$utils.toast('请上传简历');
					return false;
				}
				if (!vm.name || !vm.card) {
					vm.$utils.toast('请将信息填写完整');
					return false;
				}
				uni.showModal({
					content: '确认提交',
					success: function(res) {
						if (res.confirm) {
							vm.$utils.toast('简历提交成功,预计将在24h内予以审核');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// 上传文件
			addDoc() {
				const vm = this;
				uni.chooseMessageFile({
				  count: 1,
				  type: 'file',
				  extension: ['doc'],
				  success (res) {
				    console.log(res);
					vm.docPath = res.tempFiles[0].path
					vm.docName = res.tempFiles[0].name
				  }
				})
				wx.uploadFile({
				  url: 'https://example.weixin.qq.com/upload',
				  filePath: vm.docPath,
				  name: 'file',
				  formData: {
					'user': 'test'
				  },
				  success (res){
				  }
				})
			},
			changeGender(e) {
				this.genderIndex = e.target.value
			},
			changeEducation(e) {
				this.educationIndex = e.target.value
			},
			changeMoney(e) {
				this.moneyIndex = e.target.value
			},
			changeJob(e) {
				this.jobIndex = e.target.value
			},
			goPage() {
				this.$utils.goPage(`/pages/mainAll/addressAdd/addressAdd`)
			}
		}
	}
</script>

<style lang="scss">
	.header {
		height: 90upx;
		padding-left: 30upx;
		color: #414141;
		font-size: 28upx;
		line-height: 90upx;
		background: #EFEFEF;
	}

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

		.card-img {
			margin-top: 20upx;

			image {
				width: 120upx;
				border-radius: 4upx;
			}
		}
	}

	.btn {
		margin: 100upx auto 0;
		border-radius: 48px;
	}
</style>
