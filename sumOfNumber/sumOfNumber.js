//Here we are trying to find sum of number nth using recursion

module.exports= function findSum(n){
    if(n==0){
        return 0
    }
    return n+findSum(n-1)
}
