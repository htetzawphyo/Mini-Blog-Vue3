import { ref } from '@vue/reactivity'
import { collection, doc, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/config'

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async() => {
      try{
        const postsCol = collection(db, 'posts');
        let response = await getDocs(postsCol)
        posts.value = response.docs.map( doc => {
          return {id:doc.id, ...doc.data()}
        })
      }catch(err) {
        error.value = err.message;
      }   
    }

    return {posts, error, load}
}

export default getPosts;