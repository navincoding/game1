var guessnumber = document.getElementById("guessnumber")
var result = document.getElementById("result")
var score = document.getElementById("score")

var you=10



function a1()
{
    var computernumber = Math.floor(Math.random()*10)+2;
    var number = guessnumber.value

        if(number==computernumber)
        {
            alert("You are won")
            result.textContent="right"
        }
        else
        {
            you=you-1
            score.textContent="score:"+you
            result.textContent="wrong"
        }

}
