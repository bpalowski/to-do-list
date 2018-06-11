$(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputLocation = $("#input-location").val();
    var inputLandmark = $("#input-landmark").val();
    var inputDate = $("#input-date").val();
    var inputNotes = $("#input-notes").val();

    var newPlace = new Place(inputLocation, inputLandmark, inputDate, inputNotes);

    $("ul#places").append(
      "<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location);
      newPlace.output(".location",".landmark",".date",".notes");
      // $(".location").text(newPlace.location);
      // $(".landmark").text(newPlace.landmark);
      // $(".date").text(newPlace.date);
      // $(".notes").text(newPlace.notes);
    });
    clearInput();
  });
});

//Create a constructor for object Contact
function Place(inputLocation, inputLandmark , inputDate, inputNotes){
  this.location = inputLocation;
  this.landmark = inputLandmark;
  this.date = inputDate;
  this.notes = inputNotes;
}

Place.prototype.output = function (outputLocation,outputLandmark,outputDate,outputNotes)
{
  $(outputLocation).text(this.location);
  $(outputLandmark).text(this.landmark);
  $(outputDate).text(this.date);
  $(outputNotes).text(this.notes);
};



function clearInput()
{
  $("#input-location").val("");
  $("#input-landmark").val("");
  $("#input-date").val("");
  $("#input-notes").val("");
}
