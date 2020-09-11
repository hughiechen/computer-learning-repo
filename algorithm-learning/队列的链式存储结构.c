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
typedef struct QNode
{
    QElementType data;
    struct QNode *next;

} QNode, *QueuePtr;

typedef struct
{
    QueuePtr front, rear;
} LinkQueue;

// 插入元素
Status EnQueue(LinkQueue *Q, QElementType e)
{
    QueuePtr s = (QueuePtr)malloc(sizeof(QNode));
    if (!s)
    {
        exit(OVERFLOW)
    }
    s->data = e;
    s->next = NULL;
    Q->rear->next = s;
    Q->rear = s;
    return OK;
}
// 队头删除元素
Status DeQueue(LinkQueue *Q, QElementType *e)
{
    QueuePtr p;
    if (Q->front == Q->rear)
    {
        return ERROR
    }
    p = Q->front->next;
    *e = p->data;
    Q->front->next = p->next;
    if (Q->rear == p)
    {
        Q->rear = Q->front;
    }
    free(p);
    return OK;
}