let tree = {
    text: '一级', // 要显示的文本
    value: 1,  // 唯一值
    checked: false, // 选中转态
    children: [{
        text: '二级-1',
        value: 11,
        checked: false,
        children: [{
            text: '三级-1',
            value: 111,
            checked: false,
        }]
    }, {
        text: '二级-2',
        value: 12,
        checked: false,
    }]
}

var result = []
function treeToLine(tree, treeKey, isRoot = true, root = null) {
    if (!tree || !tree.children) return result
    let obj = {}
    for (let key in tree) {
        if (tree.hasOwnProperty(key) && key !== 'children') {
            obj[key] = tree[key]
        }
    }
    obj.parent = isRoot ? null : root[treeKey]
    result.push(obj)
    for (let child of tree.children) {
        if (child && child.children) {
            treeToLine(child, treeKey, false, tree)
        } else if (child && !child.children) { // 最后一层
            child.parent = tree[treeKey]
            result.push(child)
            return result
        }
    }
}
console.log(treeToLine(tree, 'value'))

let line = treeToLine(tree, 'value')


function lineToTree(data, value = 'value', parentId = 'parent') {
    let children = 'children'

    let valueMap = [], tree = []
    data.forEach(v => {
        valueMap[v[value]] = v
    })

    data.forEach(v => {
        let parent = valueMap[v[parentId]]
        if (parent) {
            !parent[children] && (parent[children] = [])
            parent[children].push(v)
        } else {
            tree.push(v)
        }
    })
    return tree
}

console.log("tree", lineToTree(line))

// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
];

function convert(list) {
    const result = [];
    // 使用Map保存id和对象的映射
	const map = list.reduce((result, cur) => (result[cur.id] = cur, result), {})
	for (const item of list) {
        // 把parentId===0的节点取出来，作为根节点
		if (item.parentId === 0) {
			result.push(item)
        }
        // 如果不是根节点
		if (item.parentId in map) {
            const parent = map[item.parentId]
            // 1、确认父节点有children属性
            parent.children = parent.children || []
            // 2、把当前节点，添加到父节点children属性上
			parent.children.push(item)
		}
	}
	return result
}

const arr1 = convert(list,);

console.log("result", arr1)