/*
 * @Author: wanggang(wanggang220713@credithc.com)
 * @Date: 2023-06-07 18:09:59
 * @LastEditors: wanggang
 * @LastEditTime: 2023-06-25 11:19:02
 * @Description: 
 */
//合并两个有序链表
function mergeList(list1,list2){
  let cur = new NodeList()
  while(list1.next && list2.next){
    if(list1.val>list2.val){
      cur.next = list2
      list2 = list2.next
    }else{
      cur.next = list1
      list1 = list1.next
    }
    cur = cur.next
  }

  cur.next = list1?list1:list2

  return cur.next
}
//删除链表倒数第n个节点
function delNode(list,n){
  const p = new NodeList()
  const q = new NodeList()
  const head = list
  let i = 0
  while(i<n){
    p = p.next
  }
  while(p.next){
    q = q.next
    p = p.next
  }
  if(q.next === head){
    return q.next
  }else{
    q.next = q.next.next
  }
  return list
}

/**
 * @Description: 反转链表(双指针)
 * @param {*} list
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function reverseList(list){
  const cur = list
  const pre = null

  while(cur){
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
}
