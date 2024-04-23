//有效的括号
function isVaild(s) {
  const stack = [];
	const map = {
		')':'(',
		'}':'{',
		']':'['
	}

	for(let key of s){
		if(key in map){
			if(stack.pop() !== map[key]){
				return false
			}else{
				stack.push(key)
			}
		}
	}
	return stack.length === 0
}
