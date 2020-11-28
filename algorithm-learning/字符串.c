/*
 * @Author: Hughie
 * @Date: 2020-11-14 18:52:00
 * @LastEditors: Hughie
 * @LastEditTime: 2020-11-28 10:22:46
 * @Description: 字符串
 */

//朴素字符串匹配算法
//返回子串T在主串S中第pos个字符之后的位置。若不存在，则函数返回值为0. T非空，1<=pos<=StrLength(s)

int Index(String S, String T, int pos){
  // i用于s中当前位置下标，若pos不为1，则从pos位置开始匹配
  int i=pos;
  // j用于子串T中当前位置下标值
  int j=1;
  // 若i小于s长度且j小于T的长度时循环
  while(i<=S[0]&&j<=T[10]){
    // 两字母相等则继续
    if(S[i]==T(j)){
      ++i;
      ++j
    }else{
      // 否则指针后退重新开始匹配，i退回到上次匹配首位的下一位，j退回到子串T的首位
      i=i-j+2
      j=1
    }
  }
  if(j>T(0)){
    return i-T(0)
  }else{
    return 0
  }
}

// KMP模式匹配算法实现

// 返回子串T中的next数组
void get_next(String T, int *next){
int i,j;
i=1;
j=0;
next[1]=0;
while(i<T[0]){//T[0]表示T的长度
  if(j==0||T[i]==T[j]){//T[i]表示后缀的单个字符，T[j]表示前缀的单个字符
    ++i;
    ++j;
    next[i]=j
  }else{
    j=next[j]//若字符不相同，则j值回溯
  }
}
}

// 返回子串T在主串s中第pos个字符之后的位置，若不存在，则返回值为0
// T非空，1<=pos<=StrLength(s)
int Index_KMP(String S,String T,int pos){
// i用于主串S当前位置下标，若pos不为1，则从pos位置开始匹配
int i=pos;
// j用于子串T中当前位置下标值
int j=1;
int next[255];
get_next(T,next)
// 若i小于s长度且j小于T的长度时循环
while(i<=S[0]&& j<=T[0]){
  // 两字母相等则继续，相对于朴素算法增加j=0判断
  if(j==0 ||S[i]==T[j]){
    ++i;
    ++j;
  }else{
    // 否则指针后退重新开始匹配，j回退合适位置，i值不变
    j=next[j]
  }
}
if(j>=T[0]){
return i-T[0]
}else{
return 0
}
}

// KMP匹配算法改进
void get_nextval(String T,int *nextval){
  int i,j;
  i=1;
  j=0;
  nextval[1]=0;
  while(i<T[0]){
    if(j==0 ||T[i]==T[j]){
      ++i;
      ++j;
      if(T[i]!=T[j]){
        nextval[i]=j;
      }else{
        nextval[i]=nextval[j]
      }
    }else{
      j=nextval[j]
    }
  }
}