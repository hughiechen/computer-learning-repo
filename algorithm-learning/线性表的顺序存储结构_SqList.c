/*
 * @Author: Hughie
 * @Date: 2020-11-14 18:49:09
 * @LastEditors: Hughie
 * @LastEditTime: 2020-11-29 11:03:42
 * @Description: 
 */
#include "stdio.h";
#include "stdlib.h";
#include "io.h";
#include "math.h";
#include "time.h";
#define MAXSIZE 20 /*存储空间初始化分配量*/
#define OK 1;
#define ERROR 0;
#define TRUE 1;
#define FALSE 0;

typedef int Status;		/*Status 是函数的类型，其值是函数结果状态*/
typedef int ElemType; /*ElemType类型根据实际情况而定*/

typedef struct
{
	ElemType data[MAXSIZE]; /*数组存储数据元素，最大值为MAXSIZE*/
	int length;							/*线性表当前长度*/
} SqList;

/*获取元素*/
/*初始条件：顺序线性表L已存在，1<=i<=ListLength(L)*/
/*操作结果：用e返回L中第i个数据元素的值*/
Status GetElem(SqList L, int i, ElemType e)
{
	if (L.length == 0 || i < 1 || i > L.length)
		return ERROR;
	e = L.data[i - 1];
	return OK;
}

/*插入元素*/
Status ListInsert(SqList *L, int i, ElemType e)
{
	int k;
	/*顺序线性表已满，返回错误*/
	if (L->length == MAXSIZE)
		return ERROR;

	if (i < 1 || i > L->length + 1)
		return ERROR;

	if (i <= L->length)
	{
		for (k = L->length - 1; k >= i - 1; k--)
		{
			L->data[k + 1] = L->data[k];
		}
	}
	L->data[i - 1] = e;
	L->length++;
	return OK;
}

/*删除元素*/
Status ListDelete(SqList *L, int i, ElemType *e)
{
	int k;
	if (L->length == 0)
		return ERROR;
	if (i < 1 || L->length)
		return ERROR;
	*e = L->data[i - 1];
	if (i < L->length)
	{
		for (k = i; k < L->length; k++)
		{
			L->data[k - 1] = L->data[k];
		}
	}
	L->length--;
	return OK;
}
