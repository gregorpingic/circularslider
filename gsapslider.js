gsap.registerPlugin(MotionPathPlugin);


var circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
circlePath.id = "circlePath";
document.querySelector("svg").prepend(circlePath);
var items = document.querySelectorAll('.item');
var itemContentSingle = document.querySelectorAll('.item-content');
var itemsContent = gsap.utils.toArray('.item-content');
var itemContent1 = document.querySelectorAll('#text1');
var itemContent2 = document.querySelectorAll('#text2');
var itemContent3 = document.querySelectorAll('#text3');
var itemContent4 = document.querySelectorAll('#text4');
var itemContent5 = document.querySelectorAll('#text5');
var itemContent6 = document.querySelectorAll('#text6');
var itemContentFake = document.querySelectorAll('#textFake');

var step = 1 / items.length;
var wrapProgress = gsap.utils.wrap(0, 1);
var snap = gsap.utils.snap(step)

gsap.set(items, { motionPath: {
  path: circlePath,
  align: circlePath,
  alignOrigin: [0.5, 0.5],
  //autoRotate: true,
  end: i => i / items.length
}});


  var tl = gsap.timeline({ 
    paused:true, 
      onUpdate: function() {
        // console.log(this.progress());
    }
  });
  // tl.timeScale(0.5);

  tl.to('.circle-wrapper', {
    rotation: 360, 
    transformOrigin: 'center', 
    duration: 12, 
    ease: 'none',
    // timeScale:0.5
  });
  tl.to(items, {
    rotation: "-=360", 
    transformOrigin: 'center', 
    duration: 12, 
    ease: 'none',
  }, 0);



  var tl2 = gsap.timeline({ 
    paused:true, 
      onUpdate: function() {
        //console.log(this.progress());
        //console.log(this.currentLabel());
    }
  });

  //gsap.defaults({timeScale:4});

  // itemsContent.forEach((item, i) => {
  //   //var itemContent = document.querySelectorAll('#text'+i);
  //   //var currentActiveContent = $(".activeEl").attr("data-counter");
  //   if (i == 0){
      
  //     tl2.fromTo(itemContentFake, {width:0,autoAlpha:0}, {width:500,autoAlpha:1,duration:0.5})

  //    }else{
  //     //slide  start
  //     tl2.fromTo(itemContentFake, {width:0,autoAlpha:0}, {width:500,autoAlpha:1,duration:0.5})
  //     .addLabel("slide_"+i)
  //     tl2.fromTo("itemContent"+i, {width:0,autoAlpha:0}, {width:500,autoAlpha:1,duration:0.5})
  //     tl2.to($("#fake-box"+i),{
  //        x:138,
  //        duration:0.2,
  //     },">")
  //     tl2.fromTo($("#item-inner"+i), {autoAlpha:0}, {autoAlpha:1,duration:0.5})
  //     tl2.fromTo($("#item-inner"+i+":before"), {autoAlpha:0}, {autoAlpha:1,duration:0.5},"<") 
  //     .addLabel("slide_pause_"+i)
  //       //slide  end

  //      //slide  fadeout start
  //         .addLabel("slide_fadeout_"+i)
  //         tl2.to("itemContent"+i,{
  //            width:0,
  //            autoAlpha:0,
  //            duration:0.1,
  //         })
  //         .addLabel("slide_fadeout_pause_"+i)
  //       //slide  fadeout end

  //    }
  // });

    //slide 1 start
      tl2.fromTo(itemContent1, {width:0,autoAlpha:0}, {width:500,autoAlpha:1,duration:0.2})
      .addLabel("slide_1")
      tl2.fromTo(itemContent1, {width:0,autoAlpha:0}, {width:500,autoAlpha:1,duration:0.3},)
      tl2.to($("#fake-box1"),{
         x:138,
         scaleX:1.5,
         scaleY:1.5,
         duration:0.2,
      },">")
      tl2.fromTo($("#item-inner1"), {autoAlpha:0}, {autoAlpha:1,duration:0.2})
      tl2.fromTo($("#item-inner1:before"), {autoAlpha:0}, {autoAlpha:1,duration:0.2},"<") 
      .addLabel("slide_pause_1")
    //slide 1 end

   //slide 1 fadeout start
      .addLabel("slide_fadeout_1")
      tl2.to(itemContent1,{
         width:0,
         autoAlpha:0,
         duration:0.1,
      })
      .addLabel("slide_fadeout_pause_1")
    //slide 1 fadeout end

    //slide 2 start
      .addLabel("slide_2")
      tl2.fromTo(itemContent2, {width:0,autoAlpha:0}, {width:500,autoAlpha:1,duration:0.3})
      tl2.to($("#fake-box2"),{
         x:138,
         scaleX:1.5,
         scaleY:1.5,
         duration:0.2,
      })
      tl2.fromTo($("#item-inner2"), {autoAlpha:0}, {autoAlpha:1,duration:0.2})
      tl2.fromTo($("#item-inner2:before"), {autoAlpha:0}, {autoAlpha:1,duration:0.2},"<")
      .addLabel("slide_pause_2")
    //slide 2 end

    //slide 2 fadeout start
      .addLabel("slide_fadeout_2")
      tl2.to(itemContent2,{
         width:0,
         autoAlpha:0,
         duration:0.1,
      })
      .addLabel("slide_fadeout_pause_2")
    //slide 2 fadeout end

    //slide 3 start
     .addLabel("slide_3")
      tl2.fromTo(itemContent3, {width:0,autoAlpha:0}, {width:500,autoAlpha:1,duration:0.3})
      tl2.to($("#fake-box3"),{
         x:138,
         scaleX:1.5,
         scaleY:1.5,
         duration:0.2,
      })
      tl2.fromTo($("#item-inner3"), {autoAlpha:0}, {autoAlpha:1,duration:0.2})
      tl2.fromTo($("#item-inner3:before"), {autoAlpha:0}, {autoAlpha:1,duration:0.2},"<")
      .addLabel("slide_pause_3")
    //slide 3 end

    //slide 3 fadeout start
      .addLabel("slide_fadeout_3")
      tl2.to(itemContent3,{
         width:0,
         autoAlpha:0,
         duration:0.1,
      },">")
      .addLabel("slide_fadeout_pause_3")
    //slide 3 fadeout end

    //slide 4 start
     .addLabel("slide_4")
      tl2.fromTo(itemContent4, {width:0,autoAlpha:0}, {width:500,autoAlpha:1,duration:0.3})
      tl2.to($("#fake-box4"),{
         x:138,
         scaleX:1.5,
         scaleY:1.5,
         duration:0.2,
      })
      tl2.fromTo($("#item-inner4"), {autoAlpha:0}, {autoAlpha:1,duration:0.2})
      tl2.fromTo($("#item-inner4:before"), {autoAlpha:0}, {autoAlpha:1,duration:0.2},"<")
      .addLabel("slide_pause_4")
    //slide 4 end

    //slide 4 fadeout start
      .addLabel("slide_fadeout_4")
      tl2.to(itemContent4,{
         width:0,
         autoAlpha:0,
         duration:0.1,
      },">")
      .addLabel("slide_fadeout_pause_4")
    //slide 4 fadeout end

    //slide 5 start
     .addLabel("slide_5")
      tl2.fromTo(itemContent5, {width:0,autoAlpha:0}, {width:500,autoAlpha:1,duration:0.3})
      tl2.to($("#fake-box5"),{
         x:138,
         scaleX:1.5,
         scaleY:1.5,
         duration:0.2,
      })
      tl2.fromTo($("#item-inner5"), {autoAlpha:0}, {autoAlpha:1,duration:0.2})
      tl2.fromTo($("#item-inner5:before"), {autoAlpha:0}, {autoAlpha:1,duration:0.2},"<")
      .addLabel("slide_pause_5")
    //slide 5 end

    //slide 5 fadeout start
      .addLabel("slide_fadeout_5")
      tl2.to(itemContent5,{
         width:0,
         autoAlpha:0,
         duration:0.1,
      },">")
      .addLabel("slide_fadeout_pause_5")
    //slide 5 fadeout end

    //slide 6 start
     .addLabel("slide_6")
      tl2.fromTo(itemContent6, {width:0,autoAlpha:0}, {width:600,autoAlpha:1,duration:0.3})
      tl2.to($("#fake-box6"),{
         x:138,
         scaleX:1.5,
         scaleY:1.5,
         duration:0.2,
      })
      tl2.fromTo($("#item-inner6"), {autoAlpha:0}, {autoAlpha:1,duration:0.2})
      tl2.fromTo($("#item-inner6:before"), {autoAlpha:0}, {autoAlpha:1,duration:0.2},"<")
      .addLabel("slide_pause_6")
    //slide 6 end

    //slide 6 fadeout start
      .addLabel("slide_fadeout_6")
      tl2.to(itemContent6,{
         width:0,
         autoAlpha:0,
         duration:0.1,
      },">")
      .addLabel("slide_fadeout_pause_6")
    //slide 6 fadeout end

    function removeActive(){
      if ($(".item-content").hasClass("active")){
        $(".item-content").addClass("passive").removeClass("active");
      }
    }


//on next button click
   $("#next").hover(function () {
    $(this).removeClass('machine');
  });
  document.getElementById('next').addEventListener("click", function() {
    var current_active = $(".activeEl").attr("data-counter");
    if (current_active == 1){
      var current_active_get = 7
    }else{
      var current_active_get = current_active
    }
    var current_active_next = parseInt(Number(current_active_get) - 1);
    gsap.to(tl, {
      progress: snap(tl.progress() + step),
      delay:2,
      modifiers: {
        progress: wrapProgress
      },
      onComplete: function(item) {
        $('.item').addClass('passiveEl').removeClass('activeEl'); 
        $(".circle-wrapper").find("[data-counter='" + current_active_next + "']").addClass('activeEl');  
      }
    })
    tl2.tweenFromTo("slide_pause_"+current_active, "slide_"+current_active, {onComplete:animateSlide_next});
    
    function animateSlide_next() {
        tl2.tweenFromTo("slide_"+current_active_next,"slide_pause_"+current_active_next);
    }
  });

  //on prev button click
   document.getElementById('prev').addEventListener("click", function() {
    $('#next').removeClass('machine'); 
    var current_active = $(".activeEl").attr("data-counter");
    if (current_active == 6){
      var current_active_get = 0
    }else{
      var current_active_get = current_active
    }
    var current_active_next = parseInt(Number(current_active_get) + 1);
    gsap.to(tl, {
      progress: snap(tl.progress() - step),
      delay:2,
      modifiers: {
        progress: wrapProgress
      },
      onComplete: function(item) {
        $('.item').addClass('passiveEl').removeClass('activeEl'); 
        $(".circle-wrapper").find("[data-counter='" + current_active_next + "']").addClass('activeEl');  
      }
    })
    tl2.tweenFromTo("slide_pause_"+current_active, "slide_"+current_active, {onComplete:animateSlide_next});
    
    function animateSlide_next() {
        tl2.tweenFromTo("slide_"+current_active_next,"slide_pause_"+current_active_next);
    }
  });


  document.getElementById('box1').addEventListener("click", function() {
    $('#next').removeClass('machine'); 
    gsap.to(tl, {
      progress: snap(0),
      delay:0.1,
      modifiers: {
        progress: wrapProgress
      },
      onComplete: function(item) {
        $('.item').addClass('passiveEl').removeClass('activeEl'); 
        $('#box1').addClass('activeEl').removeClass('passiveEl');   }
    });
    var current_active = $(".activeEl").attr("data-counter");
    //console.log(current_active);
    tl2.tweenFromTo("slide_pause_"+current_active, "slide_"+current_active, {onComplete:animateSlide_1});

  });
  function animateSlide_1() {
      tl2.tweenFromTo(0,"slide_pause_1");
  }

  document.getElementById('box2').addEventListener("click", function() {
    $('#next').removeClass('machine'); 
    gsap.to(tl, {
      progress: snap(0.833333),
      delay:0.1,
      modifiers: {
        progress: wrapProgress
      },
       onComplete: function(item) {
        $('.item').addClass('passiveEl').removeClass('activeEl'); 
        $('#box2').addClass('activeEl').removeClass('passiveEl');   }
    });
    //  if (tl2.progress() >= 0.37690387016229715 && tl2.progress() <=0.6242197253433208){
    //    tl2.play("slide_4");
    //    tl2.addPause("slide_pause_4");
    // }else{
    //    tl2.play("slide_2");
    //    tl2.addPause("slide_pause_2");
    // }
    var current_active = $(".activeEl").attr("data-counter");
    //console.log(current_active);
    tl2.tweenFromTo("slide_pause_"+current_active, "slide_"+current_active, {onComplete:animateSlide_2});

  });
  function animateSlide_2() {
      tl2.tweenFromTo("slide_2","slide_pause_2");
  }

  document.getElementById('box3').addEventListener("click", function() {
    $('#next').removeClass('machine'); 
    gsap.to(tl, {
      progress: snap(0.666667),
      delay:0.1,
      modifiers: {
        progress: wrapProgress
      },
      onComplete: function(item) {
        $('.item').addClass('passiveEl').removeClass('activeEl'); 
        $('#box3').addClass('activeEl').removeClass('passiveEl');   }
    });

    var current_active = $(".activeEl").attr("data-counter");
    tl2.tweenFromTo("slide_pause_"+current_active, "slide_"+current_active, {onComplete:animateSlide_3});

  });
  function animateSlide_3() {
      tl2.tweenFromTo("slide_3","slide_pause_3");
  }


  document.getElementById('box4').addEventListener("click", function() {
    $('#next').removeClass('machine'); 
    gsap.to(tl, {
      progress: snap(0.5),
      delay:0.1,
      modifiers: {
        progress: wrapProgress
      },
      onComplete: function(item) {
        $('.item').addClass('passiveEl').removeClass('activeEl'); 
        $('#box4').addClass('activeEl').removeClass('passiveEl');   }
    });

    var current_active = $(".activeEl").attr("data-counter");
    tl2.tweenFromTo("slide_pause_"+current_active, "slide_"+current_active, {onComplete:animateSlide_4});
  });
  function animateSlide_4() {
      tl2.tweenFromTo("slide_4","slide_pause_4");
  }


  document.getElementById('box5').addEventListener("click", function() {
    $('#next').removeClass('machine'); 
    gsap.to(tl, {
      progress: snap(0.333333),
      delay:0.1,
      modifiers: {
        progress: wrapProgress
      },
      onComplete: function(item) {
        $('.item').addClass('passiveEl').removeClass('activeEl'); 
        $('#box5').addClass('activeEl').removeClass('passiveEl');   }
    });

    var current_active = $(".activeEl").attr("data-counter");
    tl2.tweenFromTo("slide_pause_"+current_active, "slide_"+current_active, {onComplete:animateSlide_5});
  });
  function animateSlide_5() {
      tl2.tweenFromTo("slide_5","slide_pause_5");
  }

  document.getElementById('box6').addEventListener("click", function() {
    $('#next').removeClass('machine'); 
    gsap.to(tl, {
      progress: snap(0.166667),
      delay:0.1,
      modifiers: {
        progress: wrapProgress
      },
      onComplete: function(item) {
        $('.item').addClass('passiveEl').removeClass('activeEl'); 
        $('#box6').addClass('activeEl').removeClass('passiveEl');   }
    });

    var current_active = $(".activeEl").attr("data-counter");
    tl2.tweenFromTo("slide_pause_"+current_active, "slide_"+current_active, {onComplete:animateSlide_6});
  });
  function animateSlide_6() {
      tl2.tweenFromTo("slide_6","slide_pause_6");
  }

  tl2.play("slide_1");
  tl2.addPause("slide_pause_1");

    setInterval(function(){ 
       $("#next.machine").click();
    },8000);