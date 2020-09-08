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

typedef struct StackNode
{
    ElemType data;
    struct StackNode *next;
} StackNode, *LinkStackPtr;
typedef struct LinkStack
{
    LinkStackPtr top;
    int count;

} LinkStack;

// 进栈
Status Push(LinkStack *S, ElemType e)
{
    LinkStackPtr s = (LinkStackPtr)malloc(sizeof(StackNode));
    s->data = e;
    s->next = S->top;
    S->top = s;
    S->count++;
    return OK;
}
// 出栈
// 若栈不空，则删除S的栈顶元素，用e返回其值，并返回OK；否则返回ERROR；
Status Pop(LinkStack *S, ElemType *e)
{
    LinkStackPtr p;
    if (StackEmpty(*S))
    {
        return ERROR;
    }
    *e = S->top->data;
    p = S->top;            //将栈顶结点赋值给p
    S->top = S->top->next; //使得栈顶指针下移一位，指向后一节点
    free(p);               //释放节点
    S->count--;
    return OK;
}
