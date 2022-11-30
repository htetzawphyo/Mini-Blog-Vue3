<template>
  <div class="container mt-3">
    <!-- Error -->
    <div v-if="error">
      {{error}}
    </div>
    <!-- Data -->
    <div v-if="posts.length">
      <div class="row">
        <div class="col-md-6">
          <PostsList :posts="filteredPosts"></PostsList>
        </div>
        <div class="col-md-6">
          <TagCloud :posts="posts"></TagCloud>
        </div>
      </div>
    </div>
        <!-- Spinner -->
    <div v-else-if="!error && !posts.length">
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostsList from '../components/PostsList'
import getPosts from '@/composables/getPosts'
import { computed } from '@vue/runtime-core';
import Spinner from '../components/Spinner'

export default {
  components: {
    TagCloud,
    PostsList, Spinner
    },
    props: ["tag"],
    setup(props) {
        let {posts, error, load} = getPosts();
        load();

        let filteredPosts = computed(() => {
            return posts.value.filter( post => {
                return post.tags.includes(props.tag)
            })
        })
        return {posts, error, load, filteredPosts}
    }
}
</script>

<style>

</style>