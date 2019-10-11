<template>
	<view class="content">
		<view class="header">
			<view class="classify c660">
				<view 
					class="subnav" 
					:class="[index == 0 ? ' active' : '']"
					@click="changeIndex(0)"
				>
					热门精选
				</view>
				<view 
					class="subnav" 
					:class="[index == 1 ? ' active' : '']"
					@click="changeIndex(1)"
				>
					总店推荐
				</view>
				<view 
					class="subnav" 
					:class="[index == 3 ? ' active' : '']"
					@click="changeIndex(3)"
				>
					商家文章
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
			display: flex;
			.subnav {
				line-height: 90upx;
				height: 90upx;
				margin-right: 50upx;
				transition:font .5s;
				font-weight: 600;
				&.active {
					font-size: 28upx;
					color: #00A47C;
					border-bottom: 3px solid #00A47C;
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
