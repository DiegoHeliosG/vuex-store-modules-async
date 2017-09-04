import axios from 'axios'

export const state = () => ({
  posts: Object,
  postsStatus: null
})

export const actions = {
  find: ({ commit }, id) => {
    commit('postsRequest')
    const savedPosts = state.posts

    /* Return a promise to index.js nuxtServerInit.
    https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action */
    return axios.get('http://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => {
        commit('postsSuccess', { posts: response.data })
      })
      .catch(function (error) {
        commit('postsFailure', { savedPosts })
      });
  }
}

export const mutations = {
  postsRequest (state) {
    state.postsStatus = null
    state.called = true
  },
  postsSuccess (state, { posts }) {
    state.posts = posts
    state.postsStatus = 'successful'
  },
  postsFailure (state, { savedPosts }) {
    state.posts = savedPosts
    state.postsStatus = 'failed'
  }
}

export const getters = {
  get (state) {
    return state.posts
  }
}
