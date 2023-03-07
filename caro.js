var player="x";
for(var i=1; i<=9;i++)
{
    document.getElementById(i.toString()).addEventListener("click",function()
    {
        if(this.innerHTML==="")
        {
            this.innerHTML=player;
            if(player==="x")
            {
                player="o"
                alert("da duoc danh")
            }
            else 
            {
                player="x"
                alert("da duoc danh")
            }
        }}
            


            
        ) }
