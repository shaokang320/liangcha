<template>
	<view class="content">
		<view class="header">
			<view class="classify c660">
				<view 
					class="subnav" 
					:class="[index == 0 ? ' active' : '']"
					@click="changeIndex(0)"
				>
					点赞
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
		<view class="section-a">
			<view class="list c660">
				<com-article></com-article>
			</view>
			<view class="line"></view>
		</view>
	</view>
</template>

<script>	
	import comArticle from '@/components/article.vue'
	export default {
		components: {
			comArticle
		},
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
		border-bottom: 1px solid #EEEEEE;
		.classify {
			height: 90upx;
			display: flex;
			align-items: center;
			.subnav {
				width: 100upx;
				transition:font .5s;
				&.active {
					font-size: 28upx;
					color: #00A47C;
				}
			}
		}
	}
	.line {
		width: 100%;
		height: 8upx;
		background: #EEEEEE;
	}
	.section-a {
		padding-top:94upx;
	}


</style>
