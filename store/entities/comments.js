import axios from 'axios'

export const state = () => ({
  comments: Object,
  commentsStatus: null
})

export const actions = {
  findByPostId: ({ commit }, postId) => {
    commit('commentsRequest')
    const savedComments = state.comments

    /* Return a promise to index.js nuxtServerInit.
    https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action */
    return axios.get('http://jsonplaceholder.typicode.com/comments?postId=' + postId)
      .then((response) => {
        commit('commentsSuccess', { comments: response.data })
      })
      .catch(function (error) {
        commit('commentsFailure', { savedComments })
      });
  }
}

export const mutations = {
  commentsRequest (state) {
    state.commentsStatus = null
    state.called = true
  },
  commentsSuccess (state, { comments }) {
    state.comments = comments
    state.commentsStatus = 'successful'
  },
  commentsFailure (state, { savedComments }) {
    state.comments = savedComments
    state.commentsStatus = 'failed'
  }
}

export const getters = {
  get (state) {
    return state.comments
  }
}
