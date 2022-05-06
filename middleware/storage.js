export default function (context) {
    const { app, store } = context
    // 刷新的时候cookies里数据的设置给state
    const cookiesQid = app.$cookies.get('WF_qid')
    const stateQid = store.state.question.qid
    const cookiesToken = app.$cookies.get('WF_token')
    const stateToken = store.state.user.token
    if (cookiesQid && stateQid === '') {
        store.commit('question/SET_QID', cookiesQid)
    }
    if (cookiesToken && stateToken === '') {
        store.commit('user/SET_TOKEN', cookiesToken)
        store.commit('user/SET_USER_INFO', app.$cookies.get('userInfo'))
    }
}
