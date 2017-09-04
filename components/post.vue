<template>
  <div>
    <h2>Post</h2>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'post',
  computed: {
    ...mapGetters ({
      post: 'entities/posts/get',
    })
  }
}
</script>
