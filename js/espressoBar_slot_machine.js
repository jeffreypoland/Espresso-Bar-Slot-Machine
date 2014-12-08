/*
Author: Jeffrey Poland
Title: Expresso Bar Slot Machine
*/
(function($) {

(function espressoBarSlot() {
        
        
        //Background position for reels
		var reelPosition = ['0px', '200px', '100px'];

		//Pick random number from 0-2 for each reel. If all three match you win
		var randomReelOne = Math.floor(Math.random() * 3);
		var randomReelTwo = Math.floor(Math.random() * 3);
		var randomReelThree = Math.floor(Math.random() * 3);

		//Play click event
		$('#play_button').click(function(event) {

            //make button unclickable while game is in play
			$('#play_button').unbind('click');

			//slot lights
			//Set Red light
			$(".red_light").find('img').attr('src', 'img/redlight.png');

			//Set Blinking White lights
            $('.white_lights').css('display', 'block');
            $('.youWin').css('display', 'none');


			//Set result to game play chart
			$('.result').find('img').attr({
				'src': 'img/game_play.png',
				'alt': 'How to play'
			});

			//add animation to the reels
			$('#reel_one').addClass('reelOneAnimation');
			$('#reel_two').addClass('reelTwoAnimation');
			$('#reel_three').addClass('reelThreeAnimation');

			//Time out for reel one
			setTimeout(function() {

				$('.reelOneAnimation').css(
					//set background position by applying randomReelOne value to the reelPosition array.
					'background-position', '0 ' + reelPosition[randomReelOne] + ''
				).removeClass('reelOneAnimation');
			}, 3000);

            //Time out for reel two
			setTimeout(function() {
				$('.reelTwoAnimation').css(
					//set background position by applying randomReelTwo value to the reelPosition array.
					'background-position', '0 ' + reelPosition[randomReelTwo] + ''
				).removeClass('reelTwoAnimation');
			}, 4000);

			//Time out for reel three and display if user has won or lost
			setTimeout(function() {
				$('.reelThreeAnimation').css(
					//set background position by applying randomReelThree value to the reelPosition array.
					'background-position', '0 ' + reelPosition[randomReelThree] + ''
				).removeClass('reelThreeAnimation');
                
                //Decide if the user has won or lost.
				if (reelPosition[randomReelOne] === reelPosition[randomReelTwo] && reelPosition[randomReelOne] === reelPosition[randomReelThree]) {
                    
                    //Decide what the user has won.
					if (randomReelOne === 0) {
						//user has won a coffee.
						
						$('.result').find('img').attr({
							'src': 'img/coffee_win.png',
							'alt': 'You Won! Enjoy your coffee'
							});

					} else if (randomReelOne === 1) {
						//user has won a tea.
						
						$('.result').find('img').attr({
							'src': 'img/tea_win.png',
							'alt': 'You Won! Enjoy your tea'
							});
					} else {
						//user has won an expresso.
						
						$('.result').find('img').attr({
							'src': 'img/espress_win.png',
							'alt': 'You Won! Enjoy your expresso'
							});
					}
                 
                 //Flashing red light
                 $('.red_light').find('img').attr('src', 'img/redlight_flashing.gif');
                 $('.white_lights').css('display', 'none');
                 $('.youWin').css('display', 'block');

				} else {

                    //The user has lost.
					$('.result').find('img').attr({
						'src': 'img/lose.png',
						'alt': 'Sorry no more caffeine'
						});
					
				}

				espressoBarSlot();

			}, 5000);

		});

	})();

}(window.jQuery));

