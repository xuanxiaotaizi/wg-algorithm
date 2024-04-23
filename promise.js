class SimplePromise {
    constructor(executor) {
      this.state = "pending"; // 初始状态
      this.value = undefined; // 最终值（成功值或失败原因）
      this.handlers = []; // 存储成功和失败的处理函数
  
      try {
        executor(this._resolve.bind(this), this._reject.bind(this));
      } catch (err) {
        this._reject(err);
      }
    }
  
    _resolve(value) {
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.value = value;
      this.handlers.forEach((h) => this._handle(h));
      this.handlers = null;
    }
  
    _reject(reason) {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.value = reason;
      this.handlers.forEach((h) => this._handle(h));
      this.handlers = null;
    }
  
    _handle(handler) {
      if (this.state === "pending") {
        this.handlers.push(handler);
      } else {
        if (
          this.state === "fulfilled" &&
          typeof handler.onFulfilled === "function"
        ) {
          handler.onFulfilled(this.value);
        } else if (
          this.state === "rejected" &&
          typeof handler.onRejected === "function"
        ) {
          handler.onRejected(this.value);
        }
      }
    }
  
    then(onFulfilled, onRejected) {
      return new SimplePromise((resolve, reject) => {
        this._handle({
          onFulfilled: (result) => {
            if (!onFulfilled) {
              resolve(result);
            } else {
              try {
                resolve(onFulfilled(result));
              } catch (ex) {
                reject(ex);
              }
            }
          },
          onRejected: (error) => {
            if (!onRejected) {
              reject(error);
            } else {
              try {
                resolve(onRejected(error));
              } catch (ex) {
                reject(ex);
              }
            }
          },
        });
      });
    }
  
    static reject(reason) {
      return new SimplePromise((resolve, reject) => {
        reject(reason);
      });
    }
  }