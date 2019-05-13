function compress(str){
  let output = ''
  let count = 0
  for (let i = 0; i < str.length; i++) {
   count++
   //if the char is the last char or is not the same as the one after it, append it with the number
   if(i === str.length-1 || str[i]!== str[i+1]){
     output += str[i] + count.toString()
     count = 0
   }
  }
  return output.length < str.length ? output : str
}
