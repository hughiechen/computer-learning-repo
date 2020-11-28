// 手写promise
const isFunction = (v) => typeof v === "function";

// promise 有三状态，状态只能由pending变为fulfilled或rejected，状态变更后不可改变
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class _Promise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error("Param is Not A Function");
    }
    // 初始化
    this.status = PENDING;
    this.value = undefined;
    this.fulfilledQueues = [];
    this.rejectedQueues = [];
    try {
      handle(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  reject(error) {
    if (this.status !== PENDING) return;
    setTimeout(() => this.execute(REJECTED, error, this.rejectedQueues), 0);
  }
  resolve(value) {
    if (this.status !== PENDING) return;
    const run = () => {
      /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
        当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
    */
      if (value instanceof _Promise) {
        value.then(
          (val) => {
            this.execute(FULFILLED, val, this.fulfilledQueues);
          },
          (error) => {
            this.execute(REJECTED, error, this.rejectedQueues);
          }
        );
      } else {
        this.execute(FULFILLED, value, this.fulfilledQueues);
      }
    };

    setTimeout(run, 0);
  }
  // 执行异步队列中的函数，并清空队列
  execute(status, value, queues) {
    this.status = status;
    this.value = value;
    let cb;
    while ((cb = queues.shift())) {
      cb(value);
    }
  }
  /**
   *
   * @param {any} onFulfilled 成功回调参数
   * @param {any} onRejected 失败回调参数
   */
  then(onFulfilled = undefined, onRejected = undefined) {
    const { value, status } = this;

    return new _Promise((onFulfilledNext, onRejectedNext) => {
      const handleRes = (value, status, handleFunc) => {
        try {
          const handleNextFunc = {
            [FULFILLED]: onFulfilledNext,
            [REJECTED]: onRejectedNext,
          };
          // 如果onFulfilled 不是函数且 promise1 状态为成功（Fulfilled）， promise2 必须变为成功（Fulfilled）并返回 promise1 成功的值
          // 如果 onRejected 不是函数且 promise1 状态为失败（Rejected），promise2必须变为失败（Rejected） 并返回 promise1 失败的值

          if (!isFunction(handleFunc)) {
            handleNextFunc[status](value);
          } else {
            let res = handleFunc(value);
            // 如果当前回调函数返回_Promise对象，必须等待其状态改变后在执行下一个回调
            if (res instanceof _Promise) {
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res);
            }
          }
        } catch (error) {
          onRejectedNext(error);
        }
      };
      switch (status) {
        case PENDING:
          this.fulfilledQueues.push(onFulfilled);
          this.rejectedQueues.push(onRejected);
          break;
        case FULFILLED:
          handleRes(value, status, onFulfilled);
          break;
        case REJECTED:
          handleRes(value, status, onRejected);
          break;
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(val) {
    if (val instanceof _Promise) return val;
    return new _Promise((onFuFilled) => onFuFilled(val));
  }
  static reject(error) {
    return new _Promise((undefined, reject) => reject(error));
  }
  static all(promiseArr) {
    return new _Promise((resolve, reject) => {
      let values = [];
      for (const promise of promiseArr) {
        this.resolve(promise).then(
          (res) => {
            values.push(res);
            if (values.length === promiseArr.length) {
              resolve(values);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static race(promiseArr) {
    return new _Promise((resolve, reject) => {
      for (const promise of promiseArr) {
        this.resolve(promise).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  finally(cb) {
    return this.then(
      (value) => _Promise.resolve(cb()).then(() => value),
      (err) =>
        _Promise.resolve(cb()).then(() => {
          throw err;
        })
    );
  }
}

// new _Promise((resolve) => {
//   resolve(1);
// }).then((res) => console.log(res));
// new _Promise((resolve, reject) => {
//   reject("错了");
// }).then("不传", (err) => console.log(err));

let p1 = new _Promise((resolve, reject) => {
  resolve(
    new _Promise((r) => {
      setTimeout(() => {
        r(2);
      }, 0);
    })
  );
});

p1.then((res) => {
  console.log(res);
});
p1.finally((res) => {
  console.log("end", res);
});
_Promise.all([2, 3]).then((res) => console.log(res));
_Promise.race([2, 3]).then((res) => console.log(res));
console.log(_Promise.reject(1));
