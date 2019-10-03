$(document).ready(function(){ /*when the document is ready, execute the code (doc here means webpage)*/

  /*use jquery*/
  $('#slides').superslides({ /*dollar sign with bracket is for id*/
    animation:'fade',
    play:3000,
    pagination:false /*the page number at the bottom*/
  });

  /*typed js**/
  var typed = new Typed(".typed",{
    strings:["A developer.","A student.","An optimist."],
    typeSpeed:70,
    loop:true,
    startDelay:1000,
    showCursor:false
  });

  /*add the slider for technical skills*/
  $('.owl-carousel').owlCarousel({
      loop:true,
      items:4,

      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
              items:4
          }
      }
  })


                           /*this is the jquery object*/
    var skillsTopOffset = $(".skillsSection").offset().top;
    $(window).scroll(function(){ /*when window is scrolled, it will do this*/
      if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

          $('.chart').easyPieChart({
            easing:'easeInOut',
            barColor:'#fff',
            trackColor:false, /*like php is 75%, so remaining 25% make it no color*/
            scaleColor:false,
            lineWidth:4,
            size:152,
            onStep: function(from,to,percent){
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });
      }

    });

                $("#navigation li a").click(function(e) {
              e.preventDefault();

              var targetElement = $(this).attr("href");
              var targetPosition = $(targetElement).offset().top;
              $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
S
            });



          const nav = $("#navigation");
        	const navTop = nav.offset().top;

        	$(window).on("scroll", stickyNavigation); /*when the window is scroll, call this function*/

        	function stickyNavigation() {

        		var body = $("body");

        		if($(window).scrollTop() >= navTop) {
        			body.css("padding-top", nav.outerHeight() + "px");
        			body.addClass("fixedNav");
        		}
        		else {
        			body.css("padding-top", 0);
        			body.removeClass("fixedNav");
        		}
        	}


          $("#filters a").click(function(){
            $("#filters .current").removeClass("current");
            $(this).addClass("current");

            var selector =$(this).attr("data-filter");

            $(".items").isotope({
              filter: selector,
              animationOptions:{
                duration:1500,
                easing:'linear',
                queue:false
              }
            });
            return false;
          });












});
