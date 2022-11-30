import { ref } from '@vue/reactivity'

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async() => {
      try{
        // await new Promise( (resolve, reject) => {
        //   setTimeout(resolve, 2000) // for loading process
        // })
        let response = await fetch('http://localhost:3000/posts');
        if(response.status === 404){
          throw new Error("This page not found!");
        } 
        let datas = await response.json();
        posts.value = datas;
      }catch(err) {
        error.value = err.message;
      }   
    }

    return {posts, error, load}
}

export default getPosts;