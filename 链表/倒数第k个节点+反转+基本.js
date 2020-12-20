/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * 建链:返回头指针, 指向头结点
 * @param {*} arr 
 */
function create(arr) {
    let head = new ListNode(); // 注意：会导致Head指向节点, 值是unde
    let cur = head;
    for (let i = 0; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
}



/**
 * 从(正向/反向)第k个开始遍历
 */
// demo1 正序第k个
// let i = 0;
// function getKthFromEnd (head, k) {
//     let cur = head;
//     if (i == k) {
//         return cur
//     }
//     if(cur != null){
//         i++;
//         return getKthFromEnd(cur.next, k)
//     }
// };


// demo2 反向第k个
function getKthFromEnd(head, k) {
    let q = head, m = head; // q:快指针  m:慢指针
    while (q !== null && k > 0) {
        q = q.next;
        k--;
    }
    while(q !== null){
        q = q.next;
        m = m.next;
    }
    return m;
}



/**
 * 链表反转
 */
function reverse(head,){
    if(!head || !head.next) return head
    let pre = null, cur = head;
    while(cur !== null){
        // 临时存储后继节点
        var next = cur.next;
        // 反转curr的后继指针
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    head = pre;
    return head;
}



/**
 * 输出
 * @param {*} head 
 */
// 方法一 遍历实现输出
// function output(head) {
//     console.log(">>>>", head)
//     let cur = head;
//     while (cur !== null ) {
//         console.log("输出元素: ", cur);
//         cur = cur.next;
//     }
// }

// 方法二 递归实现输出（正序+逆序  核心:打印顺序）
let i = 0;
function output(head, k = 2){
    let cur = head;
    if(cur != null){
        console.log("输出元素: ", cur);
        output(cur.next)
        i += 1;
        if(i == k){
            return cur;
        }
    }
}



let arr = [1, 2, 3, 4, 5]
let head = create(arr)
// console.log("创建链表", head)

// let start = getKthFromEnd(head, 5);
// output(start);

let start = reverse(head);
console.log("逆序数组", start)

