<template>
    <el-col :span="24" class="breadcrumb-container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-star-on"></i></el-breadcrumb-item>
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </el-col>
</template>

<style>
.breadcrumb-container{
    margin-bottom: 25px
}
</style>

