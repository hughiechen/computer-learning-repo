### BubbleSort
数组相邻两个数相互比较，数值小的往下沉，数值大的往上浮，外层循环控制次数，内层循环控制元素比较
```js
function bubbleSort(arr) {
  let length = arr.length
  if (!length) {
    return []
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log([arr[j + 1], arr[j]])
        let a = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = a
      }
    }
    console.log(`第${i + 1}次循环`, arr);
  }
  return arr
}
let array = [1, 6, 7, 4, 5, 8, 9, 0, 2, 3];
let res = bubbleSort(array);
```
#### 优化：单向冒泡
如果没有需要交换的数据，说明数组已经有序，可以减少排序循环的次数
```js
function bubbleSort(arr){
  let len=arr.length
  for(let i=0;i<len;i++){
    let mark=true
    for(let j=0;j<len-i-1;j++){
      if(arr[j]>arr[j+1]){
        mark=false
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
    if(mark)return
  }
  return arr
}
```
