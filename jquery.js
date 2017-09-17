$(document).ready(function(){



$("#weather_button").click(function get_City(){
   var z= $("input.town").val();
    $(".change").text(z);
    $("form")[0].reset();
    //Enter key pressed
        /*   $("#weather_button").click();//Trigger search button click event
      }*/



x="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+z+"%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"




$.ajax(
   {
  url: x,
    method: "GET",
    success: function(data){

    var results = data.query.results.channel.item.condition.text;
      $("p.conditions").text(results);


    var results2 = data.query.results.channel.item.condition.temp;
      $("p.current").html(results2+"&#176");

    var results3 = data.query.results.channel.item.forecast[0].high;
      $("p.high").html(results3+"&#176");

    var results4 = data.query.results.channel.item.forecast[0].low;
      $("p.low").html(results4+"&#176");

    },
    error: function(error){
     alert(message)
     console.log(error,message);
    }
 });
});

$('input.town').keypress(function (e) {
  if (e.which == 13) {
    $('#weather_button').click();
    return false;    //<---- Add this line
  }
});



});
