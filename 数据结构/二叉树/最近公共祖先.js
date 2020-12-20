var lowestCommonAncestor = function(root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        // 左子树是否包含p或q
        const lson = dfs(root.left, p, q);
        // 右子树是否包含p或q
        const rson = dfs(root.right, p, q);
        // 根节点是p或q,并且左右子树中有p或q
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        } 
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};

