<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div v-if="post">
          <div class="card">
            <div class="card-header">
              <h2>{{post.title}}</h2>
            </div>
            <div class="card-body">
              <p>{{post.body}}</p>
              <span v-for="tag in post.tags" :key="tag" class="badge bg-secondary p-2 me-1">
                <router-link :to="{name:'tag', params:{tag:tag}}"><span class="text-light text-decoration-none">{{tag}}</span></router-link>
              </span>
            </div>
            <div class="card-footer">
              <button class="btn btn-danger" @click="postDelete">Delete</button>
            </div>
          </div>
        </div>
        <div v-else-if="!error && !post">
          <Spinner></Spinner>
        </div>
        <div v-if="error">
          {{error}}
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '@/composables/getPost';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { doc, deleteDoc } from "@firebase/firestore/lite";
import { db } from "@/firebase/config";

export default {
  components: { Spinner },
    props: ['id'],
    setup(props) {
        let route = useRoute();
        let router = useRouter();
        let {post, error, load} = getPost(route.params.id); // composables folder -> getPost() // route.params.id === props.id
        load();
        
        let postDelete = async() => {
          let id = props.id;
          // let docRef = doc(db, "posts", id);
          await deleteDoc(doc(db, "posts", id));

          router.push('/');
        }

        return {post, error, postDelete}
    }
}
</script>

<style>

</style>