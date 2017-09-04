/* For the purpose of this example */
const postId = 1

export const actions = {
  /* If you are using the Modules mode of the Vuex store,
  only the primary module (in store/index.js) will receive this action.
  https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action */
  nuxtServerInit ({ dispatch }) {
    /* Asynchronous nuxtServerInit actions must return a Promise
    to allow the nuxt server to wait on them.
    https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action */
    return dispatch('entities/posts/find', postId)
      .then(result => dispatch('entities/comments/findByPostId', postId))
  }
}
