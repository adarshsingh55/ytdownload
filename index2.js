console.log("in index2.js");
var button =document.querySelector('.button')
var text =document.querySelector('.input')

button.addEventListener("click",()=>{
    console.log(text.value);
    sendurl(text.value)
})
let sendurl=(url)=>{
    // fetch(`http://localhost/download?URL=${url}`,{
    //     method:"GET"
    // }).then(res=>res.json()).then(json=>{console.log(json)})
    window.location.href=`https://ytdownloadverse.cyclic.app/download?URL=${url}`
}