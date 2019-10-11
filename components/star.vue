<template>
	<view class="components-star">
		<image 
			class="star"
			v-for="item in startMax"
			:key="item"
			:style="{width:halfWidth,height:halfWidth}"
			:src="(item + 1) <= value ? startURL : defaultURL"
			@click="changeStar(item + 1)"
		>
		</image>
	</view>
</template>

<script>
	export default {
		props: {
			size: { //星星的大小
				type: [Number, String],
				default: 36
			},
			value: { //当前评分
				type: [Number, String],
				default: 5
			}
		},
		data() {
			return {
				startURL: this.$url.staticURL + 'scanAll/star-on.png',
				defaultURL: this.$url.staticURL + 'scanAll/star-off.png',
				startMax: 5
			}
		},
		created() {
		},
		methods: {
			changeStar(index) {
				this.$emit('changeStar', {
					num: index
				})
			}
		},
		computed: {
			halfWidth() {
				return uni.upx2px(this.size) + 'px'
			}
		}
	}
</script>

<style lang="scss">
	.components-star {
		width: 100%;
		min-width:185upx ;
		display: flex;
		justify-content: space-between;
		.star {
			width: 29upx;
			height: 29upx;
		}
	}
</style>
