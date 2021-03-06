function add(x,y){
  if(Number(x)==x && Number(y)==y){
    return Number(x) + Number(y)
  }
  return x+y
}
function test(title,fn){
  try{
    fn()
    console.log(title,'测试通过')
  }catch(e){
    console.log(e)
    console.log(title,'测试失败')
  }
}
function expect(ret){
  return {
    toBe(arg){
      if(ret!==arg){
        throw Error(`预期和实际不符，预期是${arg},实际是${ret}`)
      }
    }
  }
}
test('测试数字相加',()=>{
  expect(add(1,2)).toBe(3)
})
test('测试数字和字符串数字想加',()=>{
  expect(add(1,'2')).toBe(3)
})
test('测试数字和非数字字符串想加',()=>{
  expect(add(1,'ab')).toBe('1ab')
})