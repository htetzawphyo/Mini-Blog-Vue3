import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore/lite";
import { ref } from "vue";

let getPost = (id) => {
    let post = ref(null);
    let error = ref(""); 

    let load = async() => {
        try{
            // await new Promise( (resolve, reject) => {
            //     setTimeout(resolve, 2000) // for loading process
            // })
            let rawDoc = doc(db, 'posts', id);
            let docData = await getDoc(rawDoc);
            post.value = {id: docData.id, ...docData.data()}
        } catch(err){
            error.value = err.message;
        }
    }

    return {post, error, load}
} 

export default getPost;