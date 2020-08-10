## 题目地址
https://leetcode.com/problems/min-stack/description/
## 描述
```
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

```

## 算法

每次入栈的时候，保存的不再是真正的数字，而是它与当前最小值的差（当前元素没有入栈的时候的最小值）。 这样我们pop和top的时候拿到栈顶元素再加上上一个最小值即可。 另外我们在push和pop的时候去更新min，这样getMin的时候就简单了，直接返回min

pop或者top的时候：
*  如果栈顶元素小于0，说明栈顶是当前最小的元素，它出栈会对min造成影响，我们需要去更新    min。上一个最小的是“min - 栈顶元素”,我们需要将上一个最小值更新为当前的最小值
   *  因为栈顶元素入栈的时候的通过 栈顶元素 = 真实值 - 上一个最小的元素 得到的， 而真实值 = min， 因此可以得出上一个最小的元素 = 真实值 -栈顶元素

*  如果栈顶元素大于0，说明它对最小值没有影响，上一个最小值就是上上个最小值。

## 实现


```Javascript
/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */
/**
 * initialize your data structure here.
 */
let MinStack=()=>{
  this.stack=[]
  this.min=Number.MAX_VALUE;
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push=(x)=>{
  const min=this.min
  if(x<this.min){
    this.min=x;
  }
  return this.stack.push(x-min)
}

/**
 * @return {void}
 */
MinStack.prototype.pop=()=>{
  const item=this.stack.pop()
  const min=this.min
  if(item>0){
    this.min=min-item
    return min
  }
  return item+min
}
/**
 * @return {number}
 */
MinStack.prototype.top=()=>{
  const item=this.stack[this.stack.length-1]
  const min=this.min
  if(item>0){
    return min
  }
  return item+min
}

/**
 * @return {number}
 */
MinStack.prototype.getMin=()=>{
  return this.min
}


```