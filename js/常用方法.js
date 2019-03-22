// 滚动函数
function scrollUp(obj, top, child, time) {
  $(obj).animate(
    {
      marginTop: top
    },
    time,
    function() {
      $(this)
        .css({ marginTop: "0" })
        .find(child)
        .appendTo(this);
    }
  );
}

/* 金额处理，保留n位小数，千分位逗号相隔 */
function fmoney(s, n = 2) {
  let decimal = n > 0 && n <= 20 ? n : 2; // 保留几位小数
  let num = String(
    parseFloat(String(s).replace(/[^\d\.-]/g, "")).toFixed(decimal)
  );
  let l = num
    .split(".")[0]
    .split("")
    .reverse(); // 整数部分
  let r = num.split(".")[1]; // 小数部分
  let t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
  }
  return (
    t
      .split("")
      .reverse()
      .join("") +
    "." +
    r
  );
}

// 获取时间
var datastr = [
  "星期天",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
];
//获取当前时间
function getNowFormatDate(seperator) {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var splitYear = seperator ? seperator : "年";
  var splitMonth = seperator ? seperator : "月";
  var splitDay = seperator ? "" : "日";

  var days = date.getDay();

  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 1 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes >= 1 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds;
  }
  var currentdate =
    date.getFullYear() + splitYear + month + splitMonth + strDate + splitDay;
  var currenttime = hours + seperator2 + minutes + seperator2 + seconds;
  var currentWeek = datastr[days];
  return {
    day: currentdate,
    time: currenttime,
    week: currentWeek
  };
}

// 深拷贝
function deepCopy(obj) {
  var str,
    newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== "object") {
    return;
  } else if (window.JSON) {
    (str = JSON.stringify(obj)), //系列化对象
      (newobj = JSON.parse(str)); //还原
  } else {
    for (var i in obj) {
      newobj[i] = typeof obj[i] === "object" ? cloneObj(obj[i]) : obj[i];
    }
  }
  return newobj;
}
