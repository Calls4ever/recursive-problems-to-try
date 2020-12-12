const { reverse } = require("dns");

module.exports=reverseString=(str)=>{
    if(str.length==1){
        return str
    }
    return str+reverseString(str.substring(0,str.length-2))
}