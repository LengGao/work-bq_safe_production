export const state = () => ({
    token: '',
    userInfo: {},
    loginDialogShow: false
})

export const mutations = {
    SET_TOKEN(state, payload) {
        state.token = payload
    },
    SET_USER_INFO(state, payload) {
        state.userInfo = payload
    },
    SET_LOGIN_SHOW(state, payload) {
        state.loginDialogShow = payload
    }
}