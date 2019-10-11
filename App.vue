<script>
	export default {
		data() {
			return {}
		},
		onLaunch: function() {
			function network() {
				uni.getNetworkType({
					success: function(res) {
						if (res.networkType == 'none') {
							uni.showModal({
								title: '网络错误',
								content: '请连接网络后重试',
								success(res) {
									network();
								}
							})
						}
					}
				});
			};
			network();
			const updateManager = uni.getUpdateManager();
			updateManager.onUpdateReady(function() {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success(res) {
						updateManager.applyUpdate();
					}
				})
			})
		},
		onShow: function() {},
		onHide: function() {}
	}
</script>
<style>
	@import './common/css/uni.css';

	page {
		height: 100%;
		width: 100%;
		font-size: 28upx;
		color: rgba(72, 72, 72, 1);
	}

	text {
		display: inline-block;
	}

	.text1 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.text2 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.none {
		display: none;
	}

	.c690 {
		width: 690upx;
		margin: 0 auto;
	}

	.c660 {
		width: 660upx;
		margin: 0 auto;
	}

	.c630 {
		width: 630upx;
		margin: 0 auto;
	}

	.arrow {
		display: inline-block;
		font-size: 28upx;
		color: #EEEEEE;
	}

	.btn {
		margin: 0;
		padding: 0;
		text-align: center;
		color: #FFFFFF;
		background-color: #00A47C;
	}

	.btn.button-hover {
		opacity: 0.7;
	}

	.line {
		background: #EEEEEE;
	}

	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}
</style>
