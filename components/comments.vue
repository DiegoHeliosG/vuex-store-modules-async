<template>
  <div>
    <h2>Comments</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'comment',
  computed: {
    ...mapGetters ({
      comments: 'entities/comments/get',
    })
  }
}
</script>
