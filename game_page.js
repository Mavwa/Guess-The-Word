var player1 = localStorage.getItem("p1")
var player2 = localStorage.getItem("p2")

document.getElementById("p1_name").innerHTML=player1
document.getElementById("p2_name").innerHTML=player2

var p1_score = 0 
var p2_score = 0 

document.getElementById("p1_score").innerHTML=p1_score
document.getElementById("p2_score").innerHTML=p2_score

document.getElementById("q_turn").innerHTML="Question turn - "+player1
document.getElementById("a_turn").innerHTML="Answer Turn - "+player2


function send(){
    var word = document.getElementById("word").value
    var q_word = word.toLowerCase()
    console.log(q_word)
    letter1 = q_word.charAt(1)
    console.log(letter1)
    r1 = q_word.replace(letter1," _ ")
    console.log(r1)
    

    var x  = q_word.length-1
    letter2 = q_word.charAt(x)
    console.log(letter2)
    r2 = r1.replace(letter2," _ ")
    console.log(r2)

    var y = Math.floor(q_word.length/2)
    letter3 = q_word.charAt(y)
    console.log(letter3)
    r3 = r2.replace(letter3," _ ")
    console.log(r3)

    qt = "<h2 id='word_display'>Q. "+r3+"</h4>"
    at = "<br>Answer : <input type = 'text' id='input_check_box'>"
    bt = "<br><button class = 'btn btn-danger' onclick='check()'>Check</button>"
    fq = qt+at+bt
    document.getElementById("output").innerHTML=fq

}

a_turn = "Player 2"
q_turn = "Player 1"


function check(){

    var word = document.getElementById("word").value
    var q_word = word.toLowerCase()
    var ans2 = document.getElementById("input_check_box").value
    var ans = ans2.toLowerCase()
    
    if (ans == q_word){
        if (a_turn == "Player 1"){

            p1_score = p1_score+1
            document.getElementById("p1_score").innerHTML=p1_score

            a_turn = "Player 2"
            q_turn = "Player 1"

            document.getElementById("q_turn").innerHTML="Question turn - "+player1
            document.getElementById("a_turn").innerHTML="Answer Turn - "+player2
        }


            
        else{
            p2_score = p2_score + 1
            document.getElementById("p2_score").innerHTML=p2_score

            a_turn = "Player 1"
            q_turn = "Player 2"

            document.getElementById("q_turn").innerHTML="Question turn - "+player2
            document.getElementById("a_turn").innerHTML="Answer Turn - "+player1


        }

        
    
            
    }

    else{

        if (a_turn == "Player 1"){

            p1_score = p1_score-1
            if(p1_score <= 0){
                p1_score = 0
            }
            document.getElementById("p1_score").innerHTML=p1_score

            a_turn = "Player 2"
            q_turn = "Player 1"

            document.getElementById("q_turn").innerHTML="Question turn - "+player1
            document.getElementById("a_turn").innerHTML="Answer Turn - "+player2
        }

        else{
            p2_score = p2_score - 1

            if(p2_score <= 0){
                p2_score = 0
            }

            document.getElementById("p2_score").innerHTML=p2_score

            a_turn = "Player 1"
            q_turn = "Player 2"

            document.getElementById("q_turn").innerHTML="Question turn - "+player2
            document.getElementById("a_turn").innerHTML="Answer Turn - "+player1


        }

    }

}
