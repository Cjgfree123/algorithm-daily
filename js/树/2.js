let list = [

    { id: 1, name: '1', },

    { id: 2, name: '1-1', parentId: 1 },

    { id: 3, name: '1-1-1', parentId: 2 },

    { id: 4, name: '1-2', parentId: 1 },

    { id: 5, name: '1-2-2', parentId: 4 },

    { id: 6, name: '1-1-1-1', parentId: 3 },

    { id: 7, name: '2', }

];


function convert(list) {
    const result = [];
    // 使用Map保存id和对象的映射
	const map = list.reduce((result, cur) => (result[cur.id] = cur, result), {})
	for (const item of list) {
        // 把parentId===0的节点取出来，作为根节点
		if (!item.parentId) {
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

console.log("result", JSON.parse(JSON.stringify(arr1)))