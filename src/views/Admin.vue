<template>
<el-container direction="vertical">
    <el-header>Header</el-header>
    <el-container>
        <!-- menu -->
        <el-aside width="210px">
            <el-menu :default-active="defaultActive" :router="router" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="/admin">
                    <i class="el-icon-location"></i>
                    <span>Dashboard</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>Menu</span>
                    </template>
                    <el-menu-item index="/admin/section">option-1</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">Setting</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <!-- main -->
        <el-container direction="vertical">
            <el-main>
                <router-view></router-view>
            </el-main>
            <app-footer></app-footer>
        </el-container>
    </el-container>
</el-container>
</template>

<script>
import AppFooter from '@/components/Footer'
export default {
    components: {
        AppFooter
    },
    data() {
      return {
          router: true,
          defaultActive: "/admin"
      };
    }
}
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
.el-container{
    height: 100%;
}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
}
.el-aside .el-menu{
    height: 100%;
}
</style>
