$( document ).ready(function() {
    console.info ("DOM Ready!")
    
//-----------------SLIDER CODE---------------
//This code was taken from https://github.com/peachananr/onepage-scroll, produced by Pete R. (http://www.thepetedesign.com/)
//No changes were made in this code
    $(".main").onepage_scroll({
     sectionContainer: "section",
        // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",
        // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,
        // AnimationTime let you define how long each section takes to animate
    pagination: true,
        // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,
        // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},
        // This option accepts a callback function. The function will be called before the page moves.
     afterMove: function(index) {
                console.log("afterMove");
                console.log(index);
                
                if (index == 3) {
                    console.log("this is the third slide");
                     $('#barra-map').attr("src", "img/barra.gif");
                }
                if (index == 4) {
                    console.log("this is the fourth slide");
                    $('#deodoro-map').attr("src", "img/deodoro.gif");
                }
                if (index == 5) {
                    console.log("this is the fifth slide");
                    $('#maracana-map').attr("src", "img/maracana.gif");
                }
                 if (index == 6) {
                    console.log("this is the sixth slide");
                    $('#copacabana-map').attr("src", "img/copacabana.gif");
                }
         
        },
        // This option accepts a callback function. The function will be called after the page moves.
    loop: false,
         // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,
        // You can activate the keyboard controls
    responsiveFallback: false,
        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical",
        // You can now define the direction of the One Page Scroll animation.
        //Options available are "vertical" and "horizontal". The default value is "vertical".
    });
    
//-----------------QUIZ CODE----------------
//Adapted from http://codepen.io/jchamill/pen/garoqg
    
    $('#quiz').quiz({
      resultsScreen: '#results-screen',
      //counter: false,
      //homeButton: '#custom-home',
      counterFormat: 'Question %current of %total',
      questions: [
        {
          'q': 'What year did Rio de Janeiro host the World Cup?',
          'options': [
            '2016',
            '2007',
            '2001',
            '2014'
          ],
          'correctIndex': 3,
          'correctResponse': 'Nice! You paid attention!',
          'incorrectResponse': 'Look\'s like dates aren\'t your thing'
        },
        {
          'q': 'What area of Rio are the Beach Volleyball Games going to be held at?', 
          'options': [
            'Barra',
            'Deodoro',
            'Maracana',
            'Copacabana'
          ],
          'correctIndex': 3,
          'correctResponse': 'Correct!',
          'incorrectResponse': 'Aw, come on! It was on the last slide...'
        },
        {
          'q': 'Which of the following places is in Barra?',
          'options': [
            'X-Park',
            'Olympic Golf Course', 
            'Olympic Stadium'
          ],
          'correctIndex': 1,
          'correctResponse': 'You\'re a genius!',
          'incorrectResponse': 'Alright, well I guess that one was kind of difficult.'
        },
        {
          'q': 'Who chooses where the Olympics are going to be held?',
          'options': [
            'The Incredible Olympics Club',
            'The Innovative Olympic City',
            'The International Olympic Committee'
          ],
          'correctIndex': 2,
          'correctResponse': 'Correct! You know a lot!',
          'incorrectResponse': 'Seriously? Did those other two even sound remotely correct?'
        },
        {
          'q': 'What is the name of the new metro line that Rio de Janeiro built for the Olympics?',
          'options': [
            'Linea 4',
            'Olympic Line',
            'Linea Olympica',
            'Metro 4'
          ],
          'correctIndex': 0,
          'correctResponse': 'Nice! You paid attention!',
          'incorrectResponse': 'Nice try...'
        },
      ]
    });
    
    
});