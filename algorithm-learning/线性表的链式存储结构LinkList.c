/*
 * @Author: Hughie
 * @Date: 2020-11-14 18:49:09
 * @LastEditors: Hughie
 * @LastEditTime: 2020-11-29 11:03:22
 * @Description: 
 */
#include "stdio.h";
#include "stdlib.h";
#include "io.h";
#include "math.h";
#include "time.h";
#define OK 1;
#define ERROR 0;
#define TRUE 1;
#define FALSE 0;

typedef int Status;		/*Status 是函数的类型，其值是函数结果状态*/
typedef int ElemType; /*ElemType类型根据实际情况而定*/

/*线性表的单链表存储结构*/
typedef struct Node
{
	ElemType data;
	struct Node *next;
} Node;
typedef struct Node *LinkList;

/*
	初始条件：线性表L已存在 1<=i<=ListLength(L)
	@return：用e返回L中第i个数据元素的值
*/
Status GetElem(LinkList L, int i, ElemType *e)
{
	int j;
	/*声明指针p*/
	LinkList p;
	/*让指针指向链表L的第一个节点*/
	p = L->next;
	j = 1;
	while (p && j < i)
	{
		/*p指向下一个节点*/
		p = p->next;
		++j;
	}
	if (!p || j > i)
	{
		/*第i个指针不存在*/
		return ERROR;
	}
	*e = p->data;
	return OK;
}
/*
操作结构：返回L中第i个节点位置之前插入新的元素e，L的长度加1
*/
Status ListInsert(LinkList *L, int i, ElemType e)
{
	int j;
	LinkList p, s;
	p = *L;
	j = 1;
	//寻找第i-1个结点
	while (p && j < i)
	{
		p = p->next;
		++j
	}
	if (!p || j > i)
		return ERROR;
	//生成新结点
	s = (LinkList)malloc(sizeof(Node));
	s->data = e;
	s->next = p->next;
	p->next = s;
	return OK;
}
//删除链表结点
Status ListDelete(LinkList *L, int i, ElemType e)
{
	int j;
	j = 1;
	LinkList p, q;
	p = *L;
	while (p->next && j < i)
	{
		p = p->next;
		++j;
	}
	if (!(p->next) || j > i)
	{
		return OK;
	}
	q = p->next;
	p->next = q->next;
	*e = q->data
					 free(q);
	return OK;
}

//单链表的整表创建
//随机生成n个元素的值，建立带有头结点的单链线性表L
//头插法
void CreateListHead(LinkList *L, int n)
{
	LinkList P;
	int i;
	//初始化随机数种子
	srand(time(0));
	//创建一个带头结点的单链表
	*L = (LinkList)malloc(sizeof(Node));
	(*L)->next = NULL;
	for (i = 0; i < n; i++)
	{
		p = (LinkList)malloc(sizeof(Node));
		p->data = rand() % 100 + 1;
		p->next = (*L)->next;
		//插入表头
		(*L)->next = p;
	}
}

// 尾插法
void CreateListTail(LinkList *L, int n)
{
	LinkList p, r;
	int i;
	srand(time(0)); //初始化随机种子
	*L = (LinkList)malloc(sizeof(Node));
	r = *L;
	for (int i = 0; i < n; i++)
	{
		p = (Node *)malloc(sizeof(Node));
		p->data = rand() % 100 + 1;
		r->next = p;
		r = p;
	}
	r->next = null;
}

// 单链表的整表删除
Status ClearList(LinkList *L)
{
	LinkList p, q;
	p = (*L)->next;
	while (p)
	{
		q = p->next;
		free(p);
		p = q;
	}
	(*L)->next = NULL;
	return OK;
}