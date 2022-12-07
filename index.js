

function doFunction()
{
    var randomNumber1=Math.floor(Math.random()*6+1);        //-with math.round u cant eliminate zero case
    var link="images/"+"dice"+randomNumber1+".png";
    
    
    var randomNumber2=Math.floor(Math.random()*6+1);;
    var link2="images/"+"dice"+randomNumber2+".png";
    
    
    var imageLeft=document.querySelector(".img1");
    imageLeft.src=link;
    
    document.querySelector(".img2").setAttribute("src",link2);
    
    
    if(randomNumber1==randomNumber2)
    {
    document.querySelector("h1").innerHTML="Draw!!";
    }
    else if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="player1 wins";
    }
    else
    document.querySelector("h1").innerHTML="player2 wins";

}