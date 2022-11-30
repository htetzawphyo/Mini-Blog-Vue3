<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div v-if="error">
          {{error}}
        </div>
        <div v-if="posts.length > 0">
          <PostsList :posts="posts"></PostsList>
        </div>
        <div v-else-if="!error && !posts.length">
          <Spinner></Spinner>
        </div>
      </div>
      <div class="col-md-3">
        <TagCloud :posts="posts"></TagCloud>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList';
import getPosts from '../composables/getPosts';

export default {
  components: {
    TagCloud,
    Spinner, PostsList },
  setup() {
    
    let {posts, error, load} = getPosts(); // from composables folder -> getPosts()
    load();

    return {posts, error}
  }
}
</script>
