<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
    .spin {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid transparent;
        margin: 50px auto;
        border-top-color: red;
        animation: spin 1s infinite;
    }
    @keyframes spin{
        to{transform: rotate(360deg);}
    }
</style>