//deep copy

function deepCopy(obj,hash = new WeakMap()){
	if(obj === null) return null;
  if(typeof obj !== 'object') return obj;
	if(obj instanceof RegExp) return obj;
	if(obj instanceof Date) return obj;
	if(hash.has(obj)) return hash.get(obj)

	const temp = Array.isArray(obj) ? [] :{}
	hash.set(obj,temp)
	for(let key in obj){
    temp[key] = deepCopy(obj[key],hash)
  }
}