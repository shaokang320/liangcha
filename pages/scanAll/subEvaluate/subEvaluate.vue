<template>
	<view class="content c690">
		<!-- 简介 -->
		<view class="section-a">
			<image :src="staticURL + detail.banner[0]"></image>
			<view class="other">
				<text>菜品点评</text>
				<view class="component-start">
					<star @changeStar="getStarNum" :value="value"></star>
				</view>
			</view>
		</view>
		<view class="section-b">
			<view class="tag" v-for="(item,index) in tag" :key="index" @click="select(index)">
				<text :class="[item.status ? 'active' : '']">
					{{item.name}}
				</text>
			</view>
		</view>
		<view class="section-c">
			<textarea :value="msg" placeholder="写下品尝感受或是店铺服务内容，为其他小伙伴提供参考(60字)" maxlength="60"/>
		</view>
		<button class="btn" >确认提交</button>
	</view>
</template>

<script>
	import star from "@/components/star.vue"
	export default {
		components:{
			star
		},
		data() {
			return {
				value: 5,
				msg: '',
				staticURL: this.$url.staticURL,
				uploadURL: this.$url.uploadURL, 
				detail: {
					banner: ['test/index1.png', 'test/index1.png'],
					id: '1'
				},
				tag: [
					{
						name: '味道不错',
						status: true
					},
					{
						name: '服务态度好',
						status: false
					},
					{
						name: '店面整洁',
						status: false
					},
					{
						name: '实惠',
						status: false
					},
					{
						name: '菜品新鲜',
						status: false
					},
				]
			};
		},
		onLoad() {
		},
		methods: {
			select(index) {
				console.log(index)
				this.tag[index].status = !this.tag[index].status
			},
			getStarNum(e) {
				this.value = e.num
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section-a {
		display: flex;
		align-items: center;
		height: 180upx;
		border-bottom: 1px solid #EEEEEE;
		image {
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
		}
		.other {
			height: 120upx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding-left: 35upx;
			text {
				font-size:33upx;
				color:rgba(11,11,11,1);
			}
			.component-start {
				width: 220upx;
			}
		}
	}
	.section-b {
		display: flex;
		flex-wrap: wrap;
		.tag {
			width: 25%;
			margin-top: 30upx;
			text-align: center;
			text {
				display: inline-block;
				font-size:24upx;
				color:#666;
				padding:0 14upx;
				height: 40upx;
				line-height: 38upx;
				border: 1px solid #666;
				border-radius: 20upx;
			}
			.active {
				color: #DD524D;
				border-color: #DD524D;
			}
		}
	}
	.section-c {
		padding-top:30upx;
			textarea {
				width: 690upx;
				padding: 20upx;
				height: 200upx;
				border: 1px solid #EEEEEE;
				border-radius:5upx;
			}
	}
	.btn {
		margin-top: 104upx;
	}
</style>
