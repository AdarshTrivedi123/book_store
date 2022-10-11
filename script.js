var i;
var index=0;
display();
function display()
{
    
    var slidevar=document.getElementsByClassName("back")
    for(i=0;i<slidevar.length;i++)
    {
        slidevar[i].style.display="none";
    }
    index++;
    if(index>slidevar.length){index=1} 
    slidevar[index-1].style.display="block";
    setTimeout( display,3000);
}