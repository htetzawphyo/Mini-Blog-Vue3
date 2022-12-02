<template>
  <div class="container mt-5">
    <div class="row">
        <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="addData">
                            <div class="mb-3">
                                <label class="float-start mb-2">Title</label>
                                <input type="text" class="form-control" v-model="title">
                            </div>
                            <div class="mb-3">
                                <label class="float-start mb-2">Body</label>
                                <textarea class="form-control" cols="30" rows="5" v-model="body"></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="float-start mb-2">Tags (hit enter to add a tag)</label>
                                <input type="text" class="form-control" @keydown.enter.prevent="handleEnterKey" v-model="tag">
                            </div>
                            <div class="mb-3">
                                <span v-for="tag in tags" :key="tag" class="badge bg-secondary p-2 me-1">
                                    {{tag}}
                                </span>
                            </div>
                            <button class="btn btn-primary float-start">Add</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { db } from "@/firebase/config";
import { addDoc, collection } from '@firebase/firestore/lite';

export default {
    setup() {
        let router = useRouter();
        let title = ref("");
        let body = ref("");
        let tags = ref([]);
        let tag = ref("");

        let handleEnterKey = () => {
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }
            tag.value = "";
        }

        let addData = async() => {
            let addPost = {
                            title: title.value,
                            body: body.value,
                            tags: tags.value
                        };

            let dbRef = collection(db, "posts");
            let response = await addDoc(dbRef, addPost);

            router.push('/');
        }

        return {title, body, tags, tag, handleEnterKey, addData}
    }
}
</script>

<style>

</style>