function ticket(movie, time , children, adult){
  this.movie = movie;
  this.time = time;
  this.children= children;
  this.adult = adult;
  //this.stateName = state;
}


$(document).ready(function() {
  $("form#new-movie").submit(function(event) {
    event.preventDefault();

    var selectedMovie = $("select#new-movie").val();
    var selectTime = $("select#new-time").val();
    var inputChild = $("input#new-child").val();
    var inputAdult = $("input#new-adult").val();
    //var inputState = $("input#new-state-name").val();

    var newTicket = new ticket(selectedMovie, selectTime, inputChild, inputAdult);

    $("ul#contacts").append(
      "<li><span class='movieInfo'>" + newTicket.movie + "</span></li>");

    $(".movieInfo").last().click(function(){
      $("#show-info").show();
      $("#show-info h2").text(newTicket.movie);
      $(".movie-name").text(newTicket.movie);
      $(".Time-name").text(newTicket.time);
      $(".child-input").text(newTicket.children);
      $(".adult-input").text(newTicket.adult);
     //$(".city-name").text(newTicket.cityName);
    //  $(".state-name").text(newTicket.stateName);
    });

    $("select#new-movie").val("");
    $("select#new-time").val("");
    $("input#new-child").val("");
    //$("input#new-city-name").val("");
    $("input#new-adult").val("");
  });
  });


//Create a constructor for object Contact
//function Contact(first, last , street, city, state){
//  this.firstName = first;
//  this.lastName = last;
  //this.streetName= street;
  //this.cityName = city;
  //this.stateName = state;
//}

//function clearInput()
{
//  $("input#new-first-name").val("");
  //$("input#new-last-name").val("");
  //$("input#new-street-name").val("");
//  $("input#new-city-name").val("");
//  $("input#new-state-name").val("");
}
