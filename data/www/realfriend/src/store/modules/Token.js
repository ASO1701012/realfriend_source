export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    token:"私はToken.jsのstateのtokenです！",
    firstFlag: true,
    tokenError: false,
    loginScreenJudgment: false
  },

  getters: {
    tokenGet: (state) => {return state.token},
    firstFlagGet: (state) => state.firstFlag,
    tokenErrorGet: (state) => state.tokenError,
    loginGet: (state) => {return state.loginScreenJudgment},
  },
  mutations: {
    setFirstFlag: (state, flag) => {
      state.firstFlag = flag
    },
    setError: (state, flag) => {
      state.tokenError = flag
    },
    setLogin: (state, flag) => {
      state.loginScreenJudgment = flag
    }
  },
  actions: {
    setFirstFlag: ({commit}, flag) => {
      commit('setFirstFlag', flag)
    },
    setError: ({commit}, flag) => {
      commit('setError', flag)
    },
    setLogin:({commit}, flag) => {
      commit('setLogin', flag)
    }
  }
}
