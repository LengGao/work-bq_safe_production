export default {
    methods: {
        handleAuthClick() {
            if (!this.$store.state.user.token) {
                console.log('%c需要登录', 'color:red');
                this.$store.commit('user/SET_LOGIN_SHOW', true)
            }
        },
    },
};