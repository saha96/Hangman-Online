$(document).ready(function(){
    
    
    var list_countries = ['afghanistan',
'albania',
'algeria',
'angola',
'argentina',
'armenia',
'australia',
'austria',
'bahamas',
'bangladesh',
'barbados',
'belgium',
'bhutan',
'bolivia',
'botswana',
'brazil',
'bulgaria',
'cambodia',
'cameroon',
'canada',
'chile',
'china',
'colombia',
'denmark',
'finland',
'france',
'georgia',
'germany',
'ghana',
'greece',
'honduras',
'hungary',
'iceland',
'india',
'indonesia',
'iran',
'iraq',
'israel',
'italy',
'jamaica',
'japan',
'kenya',
'libya',
'madagascar',
'malta',
'mexico',
'monaco',
'mongolia',
'montenegro',
'morocco',
'mozambique',
'namibia',
'nauru',
'nepal',
'netherlands',
'niger',
'nigeria',
'norway',
'oman',
'pakistan',
'palau',
'panama',
'paraguay',
'peru',
'philippines',
'poland',
'portugal',
'qatar',
'romania',
'russia',
'singapore',
'sudan',
'sweden',
'switzerland',
'tyria',
'taiwan',
'tajikistan',
'thailand',
'tunisia',
'turkey',
'turkmenistan',
'uganda',
'ukraine',
'uruguay',
'uzbekistan',
'venezuela',
'vietnam',
'zimbabwe'];
    
    var randomIndex = Math.floor(Math.random() * list_countries.length);
    var word = list_countries[randomIndex];
    
    $('#error-message').hide();
    
    var word_len = word.length;
    
    var present_word = "";
    var right_letters = [];
    var wrong_letters = [];
    var turn = 0;
    
    /*initalising with underscores at beginning*/
    for(var i=0;i<word_len; i++)
    {
        present_word += "_ ";
    }
    
    
    $('#guessed-word').text(present_word);
    
    
    
    
    $('.sub').click(function(){
        var letter = $('.letter').val();
        if (letter.length == 0/*empty input*/){
            $('#error-message').show();
            $('#error-message').text("Please enter a letter");
            setTimeout(function(){
                $('#error-message').hide();
            }, 2000);
        }
        else
        {
            $('.letter').val("");
            var find = word.indexOf(letter);
            if (find==-1/*not found*/) {
                //Wrong guess
                var w_letters = $('#wrong').text();
                w_letters += (letter + " ");
                wrong_letters.push(letter);
                $('#wrong').text(w_letters);
                turn++;
                if (turn==7) {
                    //die
                    swal({   title: "Sorry!",
                             text: "Correct word is " + word +".\nStarting new game in 5 seconds",
                             type: "error",
                    });
                    
                    setTimeout(function(){
                         window.location.href = "../Play/play_h.html"
                    }, 2000);
                }
                var imgsrc = 'HangmanPics/hangman'+turn+'.png';
                //change image as required
                $('.image').attr('src',imgsrc);            
            }
            else
            {
                right_letters.push(letter);
                for(var i=0;i<word_len;i++)
                {
                    if (word.charAt(i)==letter) {
                        present_word = present_word.substr(0, 2*i) + letter + present_word.substr(2*i + 1);
                    }
                }
                $('#guessed-word').text(present_word);
                    
                var check_if_complete = true;
                for(var i=0;i<present_word.length;i++)
                {
                    if (present_word.charAt(i)=="_") {
                        check_if_complete = false;
                        break;
                    }
                }
                
                if (check_if_complete==true /*game won*/) {
                    swal({   title: "Winner!",
                             text: "Well done! You have guessed the word correctly. \nStarting new game in 5 seconds.",
                             type: "success",
                    });
                    setTimeout(function(){
                         window.location.href = "../Play/play_h.html"
                    }, 2000);

                }
                
            }
        }
    });
    
    
    
    /*to go to new game i.e. welcome page*/
    $('#enter').click(function(){
        window.location.href = "../Play/play_h.html"
    });
});
                  