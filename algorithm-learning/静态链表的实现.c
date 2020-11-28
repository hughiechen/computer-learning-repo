#include "stdio.h";
#include "stdlib.h";
#include "io.h";
#include "math.h";
#include "time.h";
#define OK 1;
#define ERROR 0;
#define TRUE 1;
#define FALSE 0;
#define MAXSIZE 1000;

typedef int ElemType; /*ElemType类型根据实际情况而定*/

typedef struct Node
{
	ElemType data;
	int cur;//游标 
} Component,StaticLinkList(MAXSIZE);

Status InitList(StaticLinkList space){
    int i;
    for (i=0;i<MAXSIZE;i++){
        space[i].cur=i+1;
    }
    space[MAXSIZE-1].cur=0;
    return OK;
}

// 静态链表的插入操作
// 若备用空间链表非空，则返回分配的结点下标，否则返回0
int _Malloc(StaticLinkList space){
    int i=space[0].cur;
    if(space[0].cur){
        space[0].cur=space[i].cur;
    }
    return i;
}

// 在L中第i个元素之前插入新的数据元素e
Status ListInsert(StaticLinkList L,int i,ElemType e){
    int j,k,l;
    k=MAXSIZE-1;
    if(i<1||i>ListLength(L)+1){
        return ERROR;
    }
    j=_Malloc(L);
    if(j){
        L[j].data=e;
        for ( l = 1; l < l-1; l++)
        {
            k=L[k].cur;
        }
        L[j].cur=L[k].cur;
        L[k].cur=j;
        return OK;
        
    }
    return ERROR;
}

// 静态链表的删除操作
Status ListDelete(StaticLinkList L,int i){

    int j,k;
    if(i<1||i>ListLength(L)){
        return ERROR;
    }
    k=MAXSIZE-1;
    for ( j = 1; j < i-1; j++)
    {
        k=L[k].cur;

    }
    j=L[k].cur;
    L[k].cur=L[j].cur;
    Free_SSL(L,j)
    return OK;
    
}
// 将下标为k的空闲节点回收到备用链表
void Free_SSL(StaticLinkList space,int k){
    space[k].cur=space[0].cur;
    space[0].cur=k;
}

// 初始条件：静态链表L已存在。操作结果：返回L中数据元素个数
int ListLength(StaticLinkList L){
    int j=0;
    int i=L[MAXSIZE-1].cur;
    while(i){
        i=L[i].cur;
        j++;
    }
    return j;
}