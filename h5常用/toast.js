// toast函数
function toast(message = "", ms = "1500") {
  // js写法
  var outerDiv = document.createElement("div");
  outerDiv.id = "outer-div";
  outerDiv.className = "toast-box";
  var innerDiv = document.createElement("div");
  innerDiv.id = "inner-div";
  innerDiv.className = "toast-para";
  addCSS(
    ".toast-box{ width:100%; position: fixed; left: 0; top: 50%; margin-top: -1rem; text-align: center; z-index: 999999999; }.toast-para { max-width: 12.5rem; display: inline-block; line-height: 1.5em; margin: auto; font-size: 0.75rem; color: white; background: rgba(0,0,0,.8); border-radius: 0.3125rem; word-wrap: break-word; word-break: break-all; padding: 0.4rem; }"
  );
  innerDiv.innerText = message;
  outerDiv.appendChild(innerDiv);
  document.body.appendChild(outerDiv);
  setTimeout(function() {
    outerDiv.remove();
  }, ms);
}

// 动态添加样式
function addCSS(cssText) {
  var style = document.createElement("style"); // 创建一个style元素
  var head = document.head || document.getElementsByTagName("head")[0]; // 获取head元素
  style.type = "text/css"; // 这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
  if (style.styleSheet) {
    // IE
    var func = function() {
      try {
        // 防止IE中stylesheet数量超过限制而发生错误
        style.styleSheet.cssText = cssText;
      } catch (e) {}
    };
    // 如果当前styleSheet还不能用，则放到异步中则行
    if (style.styleSheet.disabled) {
      setTimeout(func, 10);
    } else {
      func();
    }
  } else {
    // w3c
    // w3c浏览器中只要创建文本节点插入到style元素中就行了
    var textNode = document.createTextNode(cssText);
    style.appendChild(textNode);
  }
  head.appendChild(style); // 把创建的style元素插入到head中
}
