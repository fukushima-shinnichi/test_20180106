$(function(){
  
  $(document).ready(function(){
    
    /////   start page button function  /////////
    
        /////   button hover function startPage & goalPage   //////////
    $(".startPage button, .goalPage button").hover(function(){
      $(this).css({
        backgroundColor:"#0000cd",
        border:"solid 5px #fffaf0"
      });
      $(".startPage h3, .goalPage h3").css({
        color:"#fff"
      });
    },function(){
      $(this).css({
        backgroundColor:"#fff",
        border:"solid 5px #0000cd"
      });
      $(".startPage h3, .goalPage h3").css({
        color:"#0000cd"
      });
    });
    
    
      ///   startPage fadeOut & domino fadeIn & start  ///
    $(".startPage button").click(function(){
      $(".startPage").fadeOut(2500,function(){
        domino_start_timerID();
      });
    });
  
  /////////   domino start function   /////////
  
  var domino_start_timerID = function(){
    
    setTimeout(function(){
      $("#t1").click();
    },5000);
    
    return;
    
  };
  
  
  ///////   domino roll   ///////////////
  
  var testFunction = function(){
    var test_deg = "rotate(45deg)";
    var testID = 1;
    $(".domino").each(function(){
      $(this).on("transitionend",function(){
      testID = testID+1;
      console.log(testID);
    $("#t"+testID).css({
      transform:test_deg
    });
    });
    });
      return;
  };
  
  
  ///////   roll first   ///////////////
  
  $("#t1").click(function(){
    var angle = "rotate(45deg)";
    t_id = 1;
    $(this).css({
      transform:angle
    }).on("transitionend",function(){
      console.log(t_id);
      t_id= t_id+1;
      $("#t"+t_id).css({  //2
      transform:angle
    });
    });
    
    ////////     2end-each domino start&end   ///////////
      testFunction();
      
    });
  
  
  ///////////   square top line   /////////////////////

  var squareTopFunction = function(){
    var squareNo = 1;
    squareNo = squareNo + 1;
    console.log(squareNo);
    $("#s"+squareNo).animate({
        marginLeft:"103px",
        marginRight:"0px"
    },1000,"linear",function(){
      squareNo = squareNo + 1;
      $("#s"+squareNo).animate({
        marginLeft:"103px",
        marginRight:"0px"
    },1000,"linear",function(){
        squareNo = squareNo + 1;
        $("#s"+squareNo).css({
          transform:"translateX(100px)"
        });
      });
    });
    return;
  };
  

  
  ////   top square   ////////////
    /////   click trigger ver         ///////////
  $("#s1").click(function(){
    $(this).animate({
      marginLeft:"100px",
      marginRight:"0px"
    },1000,"linear",function(){
      squareTopFunction();
    });
    });

    /////   finish automatic trigger ver         ///////////
  $("#t6").on("transitionend",function(){
    $("#s1").animate({
      marginLeft:"100px",
      marginRight:"0px"
    },1000,"linear",function(){
      squareTopFunction();
    });
  });
  
  //////   second line   //////////////
    ////   collapsed tower roll   ////////////
  var collapsed_tower_function = function(){
    $(".collapsed_tower").css({
      transform:"rotate(90deg)",
      marginLeft:"35px",
      marginTop:"35px"
    }).on("transitionend",function(){
      $(".triangle").css({
        transform:"translateY(-165px)"
      });
    });
  };
  
      /////   click trigger ver         ///////////
  $(".tower").click(function(){
    collapsed_tower_function();
  });
  
      /////   finish automatic trigger ver         ///////////
  $("#s4").on("transitionend",function(){
    collapsed_tower_function();
  });
  
  
    ////   conveyor   ////////////
      
  var conveyor_function = function(){
    
    ///////   gear roll   ///////////
    $(".gear_big").css({
      transform:"rotate(1800deg)"
    });
  
      ////////   box slide   //////////
    $("#b1").css({
      transform:"translateX(340px)"
    });
  
  $("#b1").on("transitionend",function(){
    $(this).css({
      transition: "all 2s linear",
      transform:"translate(340px,100px)"
    });
  });
    
    return;
  };
  
      /////   click trigger ver         ///////////
          ///////   gear roll   ///////////
  $("#b1").click(function(){
    $(".gear_big").css({
      transform:"rotate(1800deg)"
    });
  });
  
          ////////   box slide   //////////
  $("#b1").click(function(){
    $(this).css({
      transform:"translateX(310px)"
    });
  });
  
  $("#b1").on("transitionend",function(){
    $(this).css({
      transition: "all 2s linear",
      transform:"translate(310px,100px)"
    });
  });
  
  
        /////   finish automatic trigger ver         ///////////
  $(".triangle").on("transitionend",function(){
    conveyor_function();
  });
  
  
  /////   third line   ///////////////
    ///////   seesaw   /////////////////
  
      /////   click trigger ver         ///////////
  $("#b2").click(function(){
    $(".seesaw_top").css({
      transition: "all 1.5s linear",
      transform:"rotate(20deg)"
    }).on("transitionend",function(){
      $("#ball_1").fadeTo("1",0);
    });
  });
  
  $("#b2").click(function(){
    $(".seesaw").css({
      transition: "all 1.5s linear",
      transform:"rotate(20deg)"
    });
  });
  
      /////   finish automatic trigger ver         ///////////
  var seesaw_function = function(){
    
    $(".gear_big").on("transitionend",function(){
      $(".seesaw_top").css({
        transition: "all 1.5s linear",
        transform:"rotate(20deg)"
      }).on("transitionend",function(){
        $("#ball_1").fadeTo("1",0);
      });
    
      $(".seesaw").css({
        transition: "all 1.5s linear",
        transform:"rotate(20deg)"
      });
    });
    
    return;
    
  };
  
  
  $("#b1").on("transitionend",function(){
    seesaw_function();
  });
  
  
    ///////   jump ball   /////////////////
  
      /////   click trigger ver         ///////////
  $("#ball_2").click(function(){
    $(this).css({
      transition:"all 2s linear",
      transform:"translate(-100px,-100px)"
    });
  });
  
  $("#ball_2").click(function(){
    $("#car_2").css({
      transition:"all 5s linear",
      transform:"translate(-246px,0px)"
    });
  });
  
  $("#ball_2").on("transitionend",function(){
    $(this).css({
      transition:"all 3s linear",
      transform:"translate(-246px,72px)"
    });
  });
  
  
      /////   finish automatic trigger ver         ///////////
  
  var jump_ball_function = function(){
    
    $("#ball_2").fadeTo("1",1);
    
    $("#ball_2").css({
      transition:"all 2s linear",
      transform:"translate(-100px,-100px)"
    });
    
    $("#car_2").css({
      transition:"all 5s linear",
      transform:"translate(-246px,0px)"
    });
    
    $("#ball_2").on("transitionend",function(){
      $(this).css({
        transition:"all 3s linear",
        transform:"translate(-246px,72px)"
      });
    });
  
    return;
    
  };
  
  $(".seesaw").on("transitionend",function(){
    jump_ball_function();
  });
  
  
    ///////   go to goal   /////////////////
  
      /////   click trigger ver         ///////////
  $("#ball_3").click(function(){
    $(".car_set").css({
      transition:"all 3s linear",
      transform:"translate(-220px,0px)"
    });
  });
  
      /////   finish automatic trigger ver & goalPage fadeIn   ///////////
  
  var go_to_goal_function = function(){
    
    $("#ball_2,#car_1,#car_2").fadeOut("1000");
    //$("#car_1").fadeTo("10",0);
    //$("#car_2").fadeTo("10",0);
    
    $(".car_set").fadeIn("1000");
    
    $(".car_set").css({
      transition:"all 3s linear",
      transform:"translate(-220px,0px)"
    }).on("transitionend",function(){
      setTimeout(function(){
        $(".dominoPage").fadeOut(2500);
      },5000);
    });
    
    
    return;
  };
  
  
  $("#car_2").on("transitionend",function(){
    console.log("end");
    go_to_goal_function();
  });
  
  
  
  
    ////////   goalPage button click reload   //////////////
    
    $(".goalPage button").click(function(){
      location.reload();
    });
    
    
    
    
  });
  
});


