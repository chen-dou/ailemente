<template>
  <div class="el-form-item">
    <label
      v-if="label"
    >{{ label }}</label>
    <slot />
    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>
  </div>
</template>
<script lang="ts">
export default {
  name:'ElFormItem'
}
</script>
<script setup lang="ts">
import Schema from "async-validator"
import {withDefaults,onMounted,ref,inject} from 'vue'
import { FormItem, key } from "./type"
import { emitter } from "../../emitter"
interface Props {
  prop?:string,
  label?:string
}
const props = withDefaults(defineProps<Props>(),{
  prop:'',
  label:''
})
const error = ref("")
const formData = inject(key)
const o: FormItem = {
  validate,
}
defineExpose(o)
onMounted(() => {
  if (props.prop) {
    emitter.on("validate", () => {
      console.log('formItem validate')
      validate()
    })
    emitter.emit("addFormItem", o)
  }
})
function validate() {
  if (formData?.rules === undefined) {
    return Promise.resolve({ result: true })
  }
  const rules = formData.rules[props.prop]
  const value = formData.model[props.prop]
  const schema = new Schema({ [props.prop]: rules })
  return schema.validate({ [props.prop]: value }, (errors) => {
    if (errors) {
      error.value = errors[0].message || "校验错误"
    } else {
      error.value = ""
    }
  })
}
</script>
<style scoped lang="scss">

</style>


