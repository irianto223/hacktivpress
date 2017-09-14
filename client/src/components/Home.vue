<template>
  <div>
    <NavBar></NavBar>
    <div v-for="article in allArticles">
      <h3>{{ article.title }}</h3>
      <p>{{ article.content }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NavBar from '@/components/NavBar'
export default {
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  computed: {
    ...mapState([
      'allArticles'
    ])
  },
  components: {
    NavBar
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style>
</style>
