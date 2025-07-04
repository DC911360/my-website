<template>
    <div>
        <Headers />
        <main>
            <RouterView />
        </main>
        <Footers />
    </div>
</template>
<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Headers from './components/header.vue'
    import Footers from './components/footer.vue'

</script>
<style scoped>
    
</style>