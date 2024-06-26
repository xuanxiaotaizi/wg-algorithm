
// 删除排序链表中的重复元素

// 删除排序链表中的重复元素 II

// 反转链表

// 反转链表 II

// K 个一组翻转链表

// 回文链表

// 合并两个有序链表(链表排序)
function mergeList(l1,l2){
    const dummy = new ListNode(-1)
    let current = dummy
    while(l1 && l2){
        if(l1.val > l2.val){
            current.next = l2
            l2 = l2.next
        }
        if(l1.val < l2.val){
            current.next = l1
            l1 = l1.next
        }
    }
    current.next = l1?l1:l2
    return dummy.next
}

// 合并 K 个升序链表(链表排序)

// 环形链表(双指针)

// 环形链表 II(双指针)

// 相交链表(双指针)

// 删除链表的倒数第 N 个结点(双指针)

// 链表中倒数第k个节点

//重排链表

//两数相加

