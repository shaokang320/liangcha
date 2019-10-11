import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
	authorize: false,      //授权状态
	access_token: 'f0fd9769b7f82b0920a9f6e0756caa43',      //token
	userInfo: {},          //用户信息	
	storeId: '1',           //店铺ID
	tableId: '',           //点餐桌号id
	tableName: '',         //点餐桌号名称
	tableNum: '',          //点餐桌号人数
	storeInfo: {},         //店铺信息
	scanAll: {             //扫码点餐
		count: 0,          //购物车商品数量
		totalPrice: 0,     //购物车商品总价格
		cart: [            //购物车商品列表
				{          
					pic: 'test/index02.png',
					name: '甜辣特色辣白菜',
					desc: '精选优质新鲜白菜，丝丝入味',
					price: 680,
					num: 6
				},
				{
					pic: 'test/index02.png',
					name: '法式鹅肝',
					desc: '精选优质，丝丝入味',
					price: 660,
					num: 1
				}
			]           
	}
}
const mutations = {
	// 用户信息
	SET_USERINFO: (state, userInfo) => {
		state.userInfo = Object.assign({}, state.userInfo, userInfo)
	},
	// 店铺信息
	SET_STOREINFO: (state, storeInfo) => {
		state.storeInfo = Object.assign({}, state.storeInfo, storeInfo)
	},
	// 店铺id
	SET_STOREID: (state, storeId) => {
		state.storeId = storeId
	},
	// 桌号id和桌号name
	SET_TABLE: (state, data) => {
		state.tableId = data.id;
		state.tableName = data.name;
	},
	// 桌号点餐人数
	SET_TABLENUM: (state, num) => {
		state.tableNum =  num;
	},
	// 设置TOKEN
	SET_TOKEN: (state, access_token) => {
		state.access_token = access_token
	},
	// 授权状态
	SET_AUTHORIZE: (state, anthor) => {
		state.authorize = anthor
	},
	// 购物车
	SET_CART: (state, cart) => {
		state.scanAll.count = cart.count
		state.scanAll.totalPrice = cart.totalPrice
		state.scanAll.cart = cart.list
		console.log(cart.list)
	}
}
const actions = {
	// changeCart:( context, cart = {}) => {
	// 	context.commit('SET_CART', cart)
	// },
	changeCart: ({
		commit
	}, cart) => {
		commit('SET_CART', cart)
	}
}
const getters = {
	changeCount: (state, count = 100) => {
		return (state.scanAll.count = 100)
	}
}
const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

export default store
