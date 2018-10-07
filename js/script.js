$(".card").hide();
var gameActive = true;

if(gameActive){
    function init(){
        $(".card .show").hide();
        $(".card .hidden").show();
    }

init();
    function selectCards(){

        var array = [];

        while(array.length !== 8) { 

            var r = Math.floor(Math.random() * 51) + 1;

            if(array.indexOf(r) == -1){  // Create unique random number array
                array.push(r);
                $(".card-" + r).show();
            }
        }
        
        console.log(array);
    }    
    selectCards();

    function jumbleCards(){
    
        for (var i = 0; i <= 102; i++){
            var r = Math.floor(Math.random() * 51) + 1;
            $(".game-interface div:nth-child(" + i + ")").css("order", r); //Select all the card divs and give them a random order for flexbox
        }
    }

    jumbleCards();
    var count = 0;
    var cards = [];
    var cardClass = [];
    var score = 0;

    $(".card").click(function(){

        $(this).find(".show").show();
        $(this).find(".hidden").hide();
        
        count++;
        console.log(count);

        var clickedCard = $(this).attr('id');
        var cardPush = clickedCard.replace("c", "#c");

        cardClass.push($(this).attr('class'));

        console.log(cardPush);
        cards.push(cardPush);
        console.log(cards);

        if(count === 2 && cardClass[0] !== cardClass[1]){
            setTimeout(function() {
                $(cards[0] + " .show").hide();
                $(cards[1] + " .show").hide();

                $(cards[0] + " .hidden").show();
                $(cards[1] + " .hidden").show();

                count = 0;
                cards.length = 0;
                cardClass.length = 0;
            }, 500);

        }else if(count === 2 && cardClass[0] === cardClass[1]){
            cards.length = 0;
            cardClass.length = 0;
            count = 0;
            score++;
        }

        if(score === 8){
            $(".win").show();
            gameActive = false;
            score = 0;
        }
    });

    $(".win button").click(function(){
        $(".card").hide();
        init();
        selectCards();
        jumbleCards();
        $(".win").hide();
    });

    $(".title button").click(function(){
        $(".card").hide();
        init();
        selectCards();
        jumbleCards();
        $(".win").hide();
    });

}
