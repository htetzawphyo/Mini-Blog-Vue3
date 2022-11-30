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
          <PostsList :posts="posts"></PostsList>
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
