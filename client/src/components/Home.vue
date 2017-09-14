<template>
  <div>
    <NavBar></NavBar>
    <p v-for="article in allArticles"></p>
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
