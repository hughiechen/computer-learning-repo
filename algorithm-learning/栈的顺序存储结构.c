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

// typedef struct 
// {
//     ElemType data[MAXSIZE];
//     int top;//栈顶指针
// }SqStack;
// // 入栈
// Status Push(SqStack *S,ElemType e){
//     if(S->top==MAXSIZE-1)
//         return ERROR;
//     S->top++;
//     S->data[S->top]=e;
//     return OK;

// }
// // 出栈
// Status Pop(SqStack *S,ElemType e){
//     if(S->top==-1){
//         return ERROR;
//     }
//     *e=S->data[S->top];
//     S->top--;
//     return OK;
// }

// 两栈共享空间结构
typedef struct
{
   ElemType data[MAXSIZE];
   int top1;
   int top2;

}SqDoubleStack;

// 插入元素e为新的栈顶元素
Status Push(SqDoubleStack *S,ElemType e,int stackNumber){
    if(S->top1+1==S->top2){
        return ERROR;//栈满
    }
    // 栈1元素进栈
    if(stackNumber==1){
        S->data[++s->top1]=e;
    }else if(stackNumber==2){//栈2元素进栈
        S->data[--S->top2]=e;
    }
    return OK;
}

// 若栈不为空，则删除S的栈顶元素，用e返回其值，并返回OK；否则返回ERROR
Status Pop(SqDoubleStack *S,ElemType *e,int stackNumber){
    if(stackNumber==1){
        if(S->top1==1){
            return ERROR;
        }
        *e=S->data[S->top1--];
    }
    else if(stackNumber==2){
        if(S->top2==MAXSIZE){
            return ERROR;
        }
        *e=S->data[S->top2++];
    }
    return OK;
}


