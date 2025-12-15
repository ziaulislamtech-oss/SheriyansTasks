function abcd(fn){
    fn()
}
abcd(function(){
    console.log('hellow call back')
})