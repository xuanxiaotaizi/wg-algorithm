// 最小栈
class MinStack{
    constructor(){
        this.stack = []
        this.minStack = []
    }

    push(x){
        this.stack.push(x)
        if(this.minStack.length === 0){
            this.minStack.push(x)
        }else{
            this.minStack.push(Math.min(this.minStack[this.minStack.length - 1],x))
        }
    }
    pop(){
        this.stack.pop()
        this.minStack.pop()
    }

    getMin(){
        return this.minStack[this.minStack.length - 1]
    }
}
// 有效括号
function isVaild(str){
    const stack = []
    const map = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    for(let i of str){
        if(map[i]){
            let top = stack.pop()
            if(top!== map[i]){
                return false
            }
        }else{
            stack.push(i)
        }
    }

}

// 基本计算器 II
function calc(str){
    let num = 0
    let sign = '+'
    let stack = []
    for(let i of str){
        if(!isNaN(i)&& i!=' '){
            num = num*10 + parseInt(i)
        }
        if(isNaN(i)&&i!=' ' || i == str[str.length - 1]){
            if(sign === '+'){
                stack.push(num)
            }
            if(sign==='-'){
                stack.push(-num)
            }
            if(sign === '*'){
                stack.push(stack.pop()*num)
            }
            if(sign === '/'){
                stack.push(Math.floor(stack.pop()/num))
            }
            sign = i
            num = 0
        }
    }

    return stack.reduce((a,b)=>a+b)
}
// 用栈实现队列
// 字符串解码 3[a2[c]]
function decodeString(str){
    let num = 0
    let currentStr = ''
    let stack = []
    for(let i of str){
        if(i<='9'&& i>='0'){
            num = num*10 + parseInt(i)
        }else if(i==='['){
            stack.push(currentStr)
            stack.push(num)
            currentStr = ''
            num = 0
        }else if(i===']'){
            let pre = stack.pop()
            let num = stack.pop()
            currentStr = pre + currentStr.repeat(num)
        }else{
            currentStr+=i
        }
    }
    return currentStr
}