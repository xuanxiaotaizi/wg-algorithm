function promiseAll(promises) {
  const array = Array.from(promises);
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;

    array.forEatch((promise, index) => {
      promise
        .then((value) => {
          result[index] = value;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
function reject(err) {
  return new Promise((resolve, reject) => {
    reject(err);
  });
}

function reaolve(value) {
  if (value instanceof Promise) {
    return value;
  } else if (value && typeof value.then === "function") {
    return new Promise((resolve, reject) => {
      value.then(resolve, reject);
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  }
}

function add(initValue) {
  let sum = initValue;
  return function nextAdd(nextValue) {
    if (nextAdd === undefined) {
      return sum;
    } else {
      sum += nextValue;
      return nextAdd;
    }
  };
}

function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj === "null" || typeof obj != "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (hash.has(obj)) return hash.get(obj);

  let clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  Object.keys(obj).forEach((key) => {
    clone[key] = deepClone(obj[key], hash);
  });
  return clone;
}

function ObjectIs(x, y) {
  //+0 和 -0
  if (x === y) {
    return 1 / x === 1 / y;
  }

  //NaN
  if (x !== x && y !== y) {
    return true;
  }
  return x === y;
}

function debounce(fn, wait) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

function throttle(fn, limit) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, limit);
    }
  };
}
class EventBus{
	constructor(){
		this.handlers = []
	}

	on(type,event){
		if(!this.handlers[type]){
			this.handlers.push(event)
		}
	}
	once(type,event){
		const f = (...args)=>{
			this.off(type,event)
			event.apply(this,args)
		}
		this.on(type,f)
	}
	emit(type,...args){
		if(this.handlers[type]){
			this.handlers[type].forEach((listener)=>{
				listener(...args)
			})
		}
	}
	off(type,listener){
		if(this.handlers[type]){
			this.handlers[type] = this.handlers[type].filter(i=>i!==listener)
		}
	}
}

function myNew(constructor,...args){
	const obj = {}
	Object.setPrototypeOf(obj,constructor.prototype)
	const result = constructor.apply(obj,args)
	return (result!==null && (typeof result === 'object' || typeof result === 'function'))?result:obj
}