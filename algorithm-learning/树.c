/*
 * @Author: Hughie
 * @Date: 2020-11-28 10:30:41
 * @LastEditors: Hughie
 * @LastEditTime: 2020-11-29 10:16:57
 * @Description: 树结构
 */

// 树的双亲表示法
#define MAX_TREE_SIZE 100
typedef int TElemType;
typedef struct PTNode
{ // 节点结构
  TElemType data;
  int parent;
} PTNode;

typedef struct
{
  PTNode nodes[MAX_TREE_SIZE];
  int r, n;
} PTree;

// 孩子表示法
typedef struct CTnode /*孩子节点*/
{
  int child;
  struct CTnode *next;

} * ChildPtr;
typedef struct
{ //表头结构
  TElemType data;
  ChildPtr firstchild;
} CTbox;
typedef struct
{ //树结构
  CTbox nodes[MAX_TREE_SIZE];
  int r, n;
} CTree;

// 树的孩子兄弟表示法
typedef struct CSNode
{
  TElemType data;
  struct CSNode *firstchild, *rightsib;
} CSNode, *CStree;

