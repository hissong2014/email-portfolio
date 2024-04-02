window.onload = function intialImage(){
    // function to be executed
    $("#over-hero").hide();
    $("#over-product").hide();
    $("#project2").hide();
    $("#project3").hide();
    $("#project4").hide();
    $("#project5").hide();
    $("#project6").hide();
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
    $("#project4").hide();
    $("#project5").hide();
    $("#project6").hide();
    document.getElementById("emailBackground").style.backgroundColor = "rgb(238, 236, 236)";
    $(".project1button").addClass("active-button");
    $(".project2button").removeClass("active-button");
    $(".project3button").removeClass("active-button");
    $(".project4button").removeClass("active-button");
    $(".project5button").removeClass("active-button");
    $(".project6button").removeClass("active-button");
    scrollToTop()
}

function showProject2(){
    
    $("#project1").hide();
    $("#project2").show();
    $("#project3").hide();
    $("#project4").hide();
    $("#project5").hide();
    $("#project6").hide();
    document.getElementById("emailBackground").style.backgroundColor = "#1c2c1a";
    $(".project2button").removeClass("bold");
    $(".project1button").removeClass("active-button");
    $(".project2button").addClass("active-button");
    $(".project3button").removeClass("active-button");
    $(".project4button").removeClass("active-button");
    $(".project5button").removeClass("active-button");
    $(".project6button").removeClass("active-button");
    scrollToTop()
}

function showProject3(){
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").show();
    $("#project4").hide();
    $("#project5").hide();
    $("#project6").hide();
    document.getElementById("emailBackground").style.backgroundColor = "rgb(238, 236, 236)";
    $(".project3button").removeClass("bold");
    $(".project1button").removeClass("active-button");
    $(".project2button").removeClass("active-button");
    $(".project3button").addClass("active-button");
    $(".project4button").removeClass("active-button");
    $(".project5button").removeClass("active-button");
    $(".project6button").removeClass("active-button");
    scrollToTop()

}

function showProject4(){
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").hide();
    $("#project4").show();
    $("#project5").hide();
    $("#project6").hide();
    if($(document).height()<800){
        document.getElementsByClassName("codepen").dataHeight="100"
    }
    document.getElementById("emailBackground").style.backgroundColor = "#ffffff";
    $(".project4button").removeClass("bold");
    $(".project1button").removeClass("active-button");
    $(".project2button").removeClass("active-button");
    $(".project3button").removeClass("active-button");
    $(".project4button").addClass("active-button");
    $(".project5button").removeClass("active-button");
    $(".project6button").removeClass("active-button");
    scrollToTop()
}

function showProject5(){
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").hide();
    $("#project4").hide();
    $("#project5").show();
    $("#project6").hide();
    document.getElementById("emailBackground").style.backgroundColor = "#ffffff";
    $(".project5button").removeClass("bold");
    $(".project1button").removeClass("active-button");
    $(".project2button").removeClass("active-button");
    $(".project3button").removeClass("active-button");
    $(".project4button").removeClass("active-button");
    $(".project5button").addClass("active-button");
    $(".project6button").removeClass("active-button");
    scrollToTop()
}

function showProject6(){
    $("#project1").hide();
    $("#project2").hide();
    $("#project3").hide();
    $("#project4").hide();
    $("#project5").hide();
    $("#project6").show();
    document.getElementById("emailBackground").style.backgroundColor = "#ffffff";
    $(".project6button").removeClass("bold");
    $(".project1button").removeClass("active-button");
    $(".project2button").removeClass("active-button");
    $(".project3button").removeClass("active-button");
    $(".project4button").removeClass("active-button");
    $(".project5button").removeClass("active-button");
    $(".project6button").addClass("active-button");
    scrollToTop()
}


function scrollToTop(){
    document.getElementById("topOfProject").scrollIntoView({behavior: "smooth"});
  }

