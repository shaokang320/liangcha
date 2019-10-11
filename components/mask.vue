<template>
	<view 
		class="components-mask"
		:style="{background: bgcolor}"
	>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			bgcolor: {
				type: String,
				required: false,
				default: 'transparency'
			}
		},
		data() {
			return {
			}
		},
		methods:{
		}
	}
</script>

<style lang="scss">
 .components-mask {
	 position: fixed;
	 left: 0;
	 top: 0;
	 width: 100vw;
	 height: 100vh;
 }
</style>
