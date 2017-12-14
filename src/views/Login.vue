<template>
<el-container direction="vertical">
    <el-main>
        Main
        <router-link to="/admin">Login!</router-link>
    </el-main>
    <app-footer></app-footer>
</el-container>
</template>

<script>
import AppFooter from '@/components/Footer'
export default {
    components: {
        AppFooter
    }
}
</script>

<style scoped>
.el-container{
    height: 100%;
}
.el-main{
    color: #333;
}
</style>

