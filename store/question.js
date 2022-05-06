export const state = () => ({
    qid: ''
})
export const mutations = {
    SET_QID(state, payload) {
        state.qid = payload
    }
}