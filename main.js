window.onload = function intialImage(){
    // function to be executed
    $("#over-hero").hide();
    $("#over-product").hide();
    $("#project2").hide();
    $("#project3").hide();
    $("#belowHeroButton").addClass("active-button")
    $("#belowProductButton").addClass("active-button")
}

function showBelowHero(){
    $("#over-hero").hide();
    $("#below-hero").show();
    $("#belowHeroButton").addClass("active-button")
    $("#aboveHeroButton").removeClass("active-button")
}

function showOverHero(){
    $("#below-hero").hide();
    $("#over-hero").show();
    $("#aboveHeroButton").addClass("active-button")
    $("#belowHeroButton").removeClass("active-button")
}

function showBelowProduct(){
    $("#over-product").hide();
    $("#below-product").show();
    $("#belowProductButton").addClass("active-button")
    $("#aboveProductButton").removeClass("active-button")
}

function showOverProduct(){
    $("#below-product").hide();
    $("#over-product").show();
    $("#aboveProductButton").addClass("active-button")
    $("#belowProductButton").removeClass("active-button")
}

function showProject1(){
    
    $("#project1").show();
    $("#project2").hide();
    $("#project3").hide();
    document.getElementById("emailBackground").style.backgroundColor = "rgb(238, 236, 236)";
    $(".project1button").addClass("active-button");
    $(".project2button").removeClass("active-button");
    $(".project3button").removeClass("active-button");
    scrollToTop()
}

function showProject2(){
    
    $("#project1").hide();
    $("#project2").show();
    $("#project3").hide();
    document.getElementById("emailBackground").style.backgroundColor = "#1c2c1a";
    $(".project2button").removeClass("bold");
    $(".project1button").removeClass("active-button");
    $(".project2button").addClass("active-button");
    $(".project3button").removeClass("active-button");
    scrollToTop()
}

function showProject3(){
    
    console.log("back to project 3 code")
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").show();
    document.getElementById("emailBackground").style.backgroundColor = "rgb(238, 236, 236)";
    $(".project3button").removeClass("bold");
    $(".project1button").removeClass("active-button");
    $(".project2button").removeClass("active-button");
    $(".project3button").addClass("active-button");
    scrollToTop()
}

function scrollToTop(){
    console.log("scrolling");
    window.scrollTo({top: 5, behavior: 'smooth'});
  }

