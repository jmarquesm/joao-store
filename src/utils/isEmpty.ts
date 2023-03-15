export function isEmpty<T extends object>(obj:T | undefined){
  if(!obj){
    return true
  }
  
  return Object.keys(obj).length === 0
}