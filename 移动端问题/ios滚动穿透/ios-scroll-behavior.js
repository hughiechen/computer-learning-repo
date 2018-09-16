//当发起弹层时，设置body元素的position属性为fixed，并且设置body元素向上的偏移量等于此时其已经滚动的距离；当关闭弹层时，恢复body元素的相关属性即可。可以适用于弹层包含滚动的场景，是一个相对完美的解决方案。该方案的核心处理函数的示例代码如下：

// 发起弹层时调动
function fixBody() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = -scrollTop + 'px';
    // 设置body宽度等于viewport的宽度，防止body子元素宽度大于视口宽度时布局错乱
    document.body.style.width = '100%';
}
// 关闭弹层时调用
function relaxBody() {
    // 清空position属性
    document.body.style.position = '';
    // 恢复scrollTop
    document.body.scrollTop = document.documentElement.scrollTop = -parseFloat(document.body.style.top);
    // 清空top属性
    document.body.style.top = '';
    // 清空width属性
    document.body.style.width = '';
}