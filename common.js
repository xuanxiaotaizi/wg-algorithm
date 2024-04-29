/*
 * @Author: wanggang(wanggang220713@credithc.com)
 * @Date: 2023-05-24 10:15:51
 * @LastEditors: wanggang wanggang220713@credithc.com
 * @LastEditTime: 2024-04-24 17:31:35
 * @Description: 
 */
//深copy
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
function deepClone(obj,hash= new WeakMap()) {
  if(!isObject(obj)) return obj
  if(hash.has(obj)) return hash.get(obj)
  const newObj = Array.isArray(obj) ? [] : {}
  hash.set(obj, newObj)
  Reflect.ownKeys(obj).forEach(key=>{
    newObj[key] = isObject(obj[key]) ? deepClone(obj,hash):obj[key]
  })
  return newObj
}
//promise系列
//promise race的实现方式
function race(promises){
  return new Promise((resolve, reject) =>{
    for(let i of promises){
      Promise.resolve(i).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    }
  })
}
//promise resolve方法
function resolve(value){
  //如果value是promise则返回
  if(value instanceof Promise) return value
  //如果value有then方法的对象，则转为promise并立即执行then
  if(typeof value === 'object' && 'then' in  value){
    return new Promise((resolve,reject)=>value.then(resolve,reject))
  }
  return new Promise(resolve=>resolve(value))
}
//promise reject方法
function reject(error){
  return new Promise(reject=>reject(error))
}
//promise all方法 返回fulfilled数组，但是如果有一个失败则返回一个promise reject
function all(promises){
  return new Promise((resolve,reject)=>{
    let len = promises.length
    let count = 0
    let result = []
    for(let i=0;i<len;i++){
      Promise.resolve(promises[i]).then(res=>{
        count++
        result[i] = res
        if(count === len) resolve(result)
      },
      err=>reject(err))
    }
  })
}

//promise allsettled 返回所有状态的promise实例数组
function allSettled(promises){
  return new Promise((resolve,reject)=>{
    let len = promises.length
    let count = 0
    let result = []
    promises.forEach((item,index) => {
      Promise.resolve(item).then(res=>{
        conut ++ 
        result[index] = {
          status:'fulfilled',
          value:res
        }
        if(len === count) resolve(result)
      },err=>{
        conut ++ 
        result[index] = {
          status:'reject',
          value:err
        }
        if(len === count) resolve(result)
      })
    });
  })
}

//查询文件夹下所有路径
function getAllFilePath(){
  const paths = []
  const currentPath = path.resolve()
  function getPath(currentPath,paths){
    const filePaths = fs.readaddirSync(currentPath)
    filePaths.forEach(i=>{
      const path = path.join(currentPath,i)
      const fileState = fs.statSync(path)
      if(fileState.isDirectory){
        getPath(path,paths)
      }else{
        paths.push(path)
      }
    })
  }
  getPath(currentPath,paths)

  return paths
}

//并发控制,多个并发的任务，一旦有任务完成，就立刻开启下一个任务
async function sendRequest(reqs,limits,callback){
  const promises = []

  const pool = new Set()


  for(let i of reqs){
    if(pool.size >=limits){
      //当并发池超出限制，等待并发任务最先完成的那个
      await Promise.race(pool).catch(err=>err)
    }
    const promise = i()
    const cb = ()=>{
      pool.delete(promise)
    }

    promise.then(cb,cb)
    pool.add(promise)
    promises.push(i)
  }
  Promise.allSettled(promises).then(callback,callback)
}