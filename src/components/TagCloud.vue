<template>
  <h1>Tag Cloud</h1>
  <div v-for="tag in uniqueTags" :key="tag" class="badge bg-secondary p-2 me-2">
    <router-link :to="{name:'tag', params:{tag:tag}}" class="text-light">{{tag}}</router-link>
  </div>
</template>  

<script>
import { ref } from '@vue/reactivity';
export default { 
  props: ['posts'],
  
  setup(props) {
    let tags = ref([]);
 
    props.posts.forEach((post) => { 
      post.tags.forEach( (tag) => {
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