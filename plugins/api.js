export default ({ $axios }, inject) => {
    inject('api', {
        /**
         * 章节列表
         * @param {string} limit - 单页数量
         * @param {string} page - 分页
         */
        getChapterList(params) {
            return $axios({
                url: '/topicChapter/list',
                method: 'get',
                params
            })
        },
    })
}