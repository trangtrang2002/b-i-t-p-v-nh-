var numbers=document.getElementsByClassName('btn');
    var result= document.getElementById("result");

for(var number of numbers)
{
    number.addEventListener('click',function(){
    result.innerHTML+=this.value;
    
    });
}

function equal()
{
    var res=result.innerHTML;
    var output=eval(res);
    result.innerHTML = output;
}
function clear()
{
    result.innerHTML="";
}
function del(){
    var res=result.innerHTML;
    result.innerHTML=res.slice(0,res.length-1);
};
