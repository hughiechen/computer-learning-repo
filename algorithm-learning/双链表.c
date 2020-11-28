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

typedef struct DulNode
{
    ElemType data;
    struct DulNode *prior;
    struct DulNode *next;

}DulNode,*DuLinkList;


