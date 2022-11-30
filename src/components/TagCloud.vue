<template>
  <h1>Tag Cloud</h1>
  <div v-for="tag in uniqueTags" :key="tag">
    <p>{{tag}}</p>
  </div>
</template>  

<script>
import { ref } from '@vue/reactivity';
export default {
  props: ['posts'],

  setup(props) {
    let tags = ref([])

    props.posts.forEach(post => {
      post.tags.forEach( tag => {
        tags.value.push(tag);
      })
    });

    let uniqueTags = tags.value.filter((tag,index,array) => {
      return array.indexOf(tag) === index;
    })
    
    return {uniqueTags}
  }
}
</script>

<style>

</style>