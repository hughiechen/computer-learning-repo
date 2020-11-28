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

typedef int QElementType;
typedef struct
{
    QElementType data[MAXSIZE];
    int front; //头指针
    int rear;  //尾指针

} SqQueue;

// 初始化队列
Status InitQueue(SqQueue *Q)
{
    Q->front = 0;
    Q->rear = 0;
    return OK;
}

// 返回队列当前长度
int QueueLength(SqQueue Q)
{
    return (Q.rear - Q.front + MAXSIZE) % MAXSIZE;
}

// 队列未满，则插入元素e为Q新的对队尾元素
Status EnQueue(SqQueue *Q, QElementType e)
{

    if ((Q->rear + 1) % MAXSIZE == Q->front) //队满判断
    {
        return ERROR;
    }
    Q->data[Q->rear] = e;
    Q->rear = (Q->rear + 1) % MAXSIZE;
    return OK;
}

// 若队列不为空，则删除Q中队列元素，用e返回值
Status DeQueue(SqQueue *Q, QElementType *e)
{
    if (Q->front == Q->rear)
    {
        return ERROR;
    }
    *e = Q->data[Q->front];
    Q->front = (Q->front + 1) % MAXSIZE;
    return OK;
}