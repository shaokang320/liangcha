<template>
	<view class="content">
		<view class="section-b">
			<view class='process_wrap'>
				<view class='process'>
					<view class='process_line'></view>
					<icon type="success" color="#00A47C" size="14" />
					<view class='process_line'></view>
				</view>
				<text class='process_name'>提交信息</text>
			</view>
			<view class='process_wrap'>
				<view class='process'>
					<view class='process_line'></view>
					<icon type="success" color="#00A47C" size="14" />
					<view class='process_line'></view>
				</view>
				<text class='process_name' v-if="status == 1">审核中</text>
				<text class='process_name' v-else>已审核</text>
			</view>
			<view class='process_wrap'>
				<view class='process'>
					<view class='process_line'></view>
					<!-- 审核中 -->
					<view class="circle" v-if="status == 1"></view>
					<!-- 已审核 -->
					<icon type="success" color="#00A47C" size="14" v-else />
					<view class='process_line'></view>
				</view>
				<text class='process_name'>完成</text>
			</view>
		</view>
		<view class="section-a" v-if="status != 3">
			<icon type="success" color="#00A47C" size="60" />
			<view class="msg" v-if="status == 1">
				信息审核中
			</view>
			<view class="msg" v-if="status == 2">
				审核未通过
			</view>
			<text v-if="status == 1">{{content1}}</text>
			<text v-if="status == 2">{{content2}}</text>
		</view>
		<!-- 审核通过,提交信息 -->
		<view class="section-c  c660">
			<view class="only">
				<view class="avar" @click='uploadImg'>
					<image v-if="avarUrl" :src="avarUrl"></image>
				</view>
				<text class="only-l">上传个人头像</text>
			</view>
			<view class="only">
				<text class="only-l">笔名</text>
				<input class="only-r" type="text" v-model="nickName" placeholder="请输入姓名" />
			</view>
			<view class="only">
				<text class="only-l">账号</text>
				<input class="only-r" type="text" :value="account" />
			</view>
			<view class="only">
				<text class="only-l">密码</text>
				<input class="only-r" type="text" v-model="password" placeholder="请输入密码" />
			</view>
			<view class="only">
				<text class="only-l">确认密码</text>
				<input class="only-r" type="text" v-model="password1" placeholder="请输入密码" />
			</view>
		</view>
		<button class="btn1" v-if="status == 1 && status != 3" @click="back()">知道了</button>
		<button class="btn1" v-if="status == 2 && status != 3" @click="goPage('/pages/videoAll/apply/apply')">重新认证</button>
		<button @click="submit" class="btn c660" v-if="status == 3">上传资料</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '18566333333',
				avarUrl: '',
				imgUrls: [],
				nickName: '',
				password: '',
				password1: '',
				status: 3, //1审核中  2审核失败
				content1: '管理员正在审核您的信息,审核通过后可在个人中心创作者账号上传视频哦',
				content2: '很抱歉,您的身份证信息不清晰，请重新申请'
			};
		},
		methods: {
			//  选择图片
			uploadImg() {
				const vm = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success(res) {
						const tempFilePaths = res.tempFilePaths;
						let flag = true; //所有图片格式均正确
						for (let i = 0; i < tempFilePaths.length; i++) {
							uni.getImageInfo({
								src: tempFilePaths[i],
								success: function(res) {
									if (res.height < res.width) {
										flag = false;
										wx.showModal({
											content: '图片格式不正确（图片高度不得小于宽度）,请裁剪后再进行上传哦',
											showCancel: false,
											success: function(res) {
												if (res.confirm) {
													vm.uploadImg();
													return false;
												}
											}
										});
									}
									// 当所有图片格式均正确
									if (++i == tempFilePaths.length && flag) {
										console.log(tempFilePaths)
										vm.data.imgUrls = vm.$utils.uploadingImg(tempFilePaths);
									}
								}
							})
						}
					}
				})
			},
			goPage(url) {
				this.$utils.goPage(url)
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.section-b {
		display: flex;
		justify-content: center;
		padding: 80upx 0;
		background: #F7F7F7;

		.process_wrap {
			&:first-child {
				.process {
					.process_line:first-child {
						background: #F7F7F7;
					}
				}
			}

			&:last-child {
				.process {
					.process_line:last-child {
						background: #F7F7F7;
					}

					.circle {
						border: 1px solid #00A47C;
						background: #FFFFFF;
					}
				}
			}

			display: flex;
			flex-direction: column;
			align-items: center;

			.process_name {
				padding-top: 10upx;
				font-size: 22upx;
			}

			.process {
				display: flex;
				align-items: center;

				.process_line {
					width: 120upx;
					height: 6upx;
					background: #00A47C;
				}

				.circle {
					width: 28upx;
					height: 28upx;
					border-radius: 14upx;
					background: #00A47C;
				}
			}
		}
	}

	.section-a {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 100upx 0;
		margin-bottom: 120upx;
		border-bottom: 1px solid #EEEEEE;

		.msg {
			padding: 20upx 0;
			font-size: 36upx;
			font-weight: 600;
			color: rgba(11, 11, 11, 1);
		}

		text {
			padding: 0 80upx;
			font-size: 26upx;
			color: rgba(62, 58, 57, 1);
			opacity: 0.7;
		}
	}

	.section-c {
		.only {
			height: 120upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #EEEEEE;

			&:first-child {
				height: 140upx;
				margin-top: 20upx;
				border-bottom: none;
				justify-content: flex-start;

				.avar {
					width: 120upx;
					height: 120upx;
					background: rgba(0, 164, 124, 1);

					image {
						width: 100%;
						height: 100%;
					}
				}

				.only-l {
					font-size: 32upx;
					color: #121922;
					padding-left: 20upx;
				}
			}

			.only-l {
				font-size: 30upx;
				font-weight: 500;
				color: #7C838D;
			}

			.only-r {
				font-size: 30upx;
				font-weight: 500;
				text-align: right;
				color: #121922;
			}
		}
	}

	.btn1 {
		width: 267upx;
		height: 62upx;
		line-height: 62upx;
		margin: 0 auto;
		background: #FFFFFF;
		font-size: 28upx;
		color: #333333;
		border: 1px solid #2B907E;
		border-radius: 31upx;
	}

	.btn {
		margin: 80upx auto 0;
		border-radius: 48px;
	}
</style>
