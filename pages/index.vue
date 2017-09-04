<template>
  <div>
    <post></post>
    <comments></comments>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import post from '../components/post'
import comments from '../components/comments'

export default {
  computed: mapGetters({
    post: 'entities/posts/get',
    comments: 'entities/comments/get'
  }),
  components: { post, comments }
}
</script>
