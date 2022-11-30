<template>
    <div class="card mb-3 text-start">
        <div class="card-header">
            <router-link :to="{name:'detail', params:{id:post.id}}"  class="text-decoration-none">
                <h2>{{post.title}}</h2>
            </router-link>
        </div>
        <div class="card-body">
            <p>{{cutBody}}</p>
            <div v-for="tag in post.tags" :key="tag"  class="badge bg-secondary p-2 me-1">
                <router-link :to="{name:'tag', params:{tag:tag}}"><span class="text-light">{{tag}}</span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['post'],
    setup(props) {
        let cutBody = computed( () => {
            return props.post.body.substring(0,100)+"...";
        })

        return {cutBody}
    }
}
</script>

<style>
    
</style>