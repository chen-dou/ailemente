
<template>
  <!-- <el-dialog>123</el-dialog> -->
  <!-- <el-form :model="info" :rules="rules">
    <el-form-item label="年龄" prop="age">
      <el-input v-model="info.age"></el-input>
    </el-form-item>
    <el-form-item label="身高" prop="height">
      <el-input v-model="info.height"></el-input>
    </el-form-item>
  </el-form>
  <el-button size="large">123</el-button> -->


<!-- <el-container>
  <el-container>
    <el-header>Header</el-header>
  </el-container>
</el-container> -->
<div>123</div>
</template>
<script setup>
import {parse,tokenizer,transform,generate} from './compiler-core/index'






function compiler(template) {
  const ast = parse(template);
  transform(ast)
  console.log(ast)
  const code = generate(ast)
  return code
}

let template = `<div id="app">
  <div @click="()=>console.log(xx)" :id="name">{{name}}</div>
  <h1 :name="title">玩转vue3</h1>
  <p >编译原理</p>
</div>
`

const renderFunction = compiler(template)
console.log(renderFunction)
// import {h} from './runtime-core/vnode'
// import {resolveComponent} from 'vue'
// const ElForm = resolveComponent('ElForm')
// console.log(h(ElForm,{name:'陈豆'},'123'))
// import { effect } from './reactivity/effect'
import { reactive } from './reactivity/reactive'
let arr = reactive([3,8])
arr.push(23)
console.log(arr)
// import { ref } from './reactivity/ref'
// let count = ref([3,4])
// console.log(count.value[0])
// let info = reactive({num:{age:3}})
// let val
// effect(() => {
//   val = info.num.age
// })
// info.num++
// console.log(val)
// import {reactive} from 'vue' 
// let info = reactive({
//   age:'',
//   height:''
// })
// let rules = reactive({
//   age:[{required:true,message:'请输入年龄'}],
//   height:[{required:true,message:'请输入身高'}]
// })
</script>
<style>

body{
  width:1000px;
  margin:10px auto;
}
</style>