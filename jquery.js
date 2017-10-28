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
      var current=parseInt(results2)

    var results3 = data.query.results.channel.item.forecast[0].high;
      $("p.high").html(results3+"&#176");

    var results4 = data.query.results.channel.item.forecast[0].low;
      $("p.low").html(results4+"&#176");

    var results5 = data.query.results.channel.item.forecast[1].day;
      $(".call1").html(results5+":");

    var results6 = data.query.results.channel.item.forecast[1].text;
      $(".call2").html(results6);

    var results7 = data.query.results.channel.item.forecast[1].high;
      $(".call3").html("High:"+results7+"&#176");

    var results8 = data.query.results.channel.item.forecast[1].low;
      $(".call4").html("Low:"+results8+"&#176");

    var results9 = data.query.results.channel.item.forecast[2].day;
      $(".call5").html(results9+":");

    var results10 = data.query.results.channel.item.forecast[2].text;
      $(".call6").html(results10);

    var results11 = data.query.results.channel.item.forecast[2].high;
      $(".call7").html("High:"+results11+"&#176");

    var results12 = data.query.results.channel.item.forecast[2].low;
      $(".call8").html("Low:"+results12+"&#176");

    var results13 = data.query.results.channel.item.forecast[3].day;
      $(".call9").html(results13+":");

    var results14 = data.query.results.channel.item.forecast[3].text;
      $(".call10").html(results14);

    var results15 = data.query.results.channel.item.forecast[3].high;
      $(".call11").html("High:"+results15+"&#176");

    var results16 = data.query.results.channel.item.forecast[3].low;
      $(".call12").html("Low:"+results16+"&#176");

    var results17 = data.query.results.channel.item.forecast[4].day;
      $(".call13").html(results17+":");

    var results18 = data.query.results.channel.item.forecast[4].text;
      $(".call14").html(results18);

    var results19 = data.query.results.channel.item.forecast[4].high;
      $(".call15").html("High:"+results19+"&#176");

    var results20 = data.query.results.channel.item.forecast[4].low;
      $(".call16").html("Low:"+results20+"&#176");

    var results21 = data.query.results.channel.item.forecast[5].day;
      $(".call17").html(results21+":");

    var results22 = data.query.results.channel.item.forecast[5].text;
      $(".call18").html(results22);

    var results23 = data.query.results.channel.item.forecast[5].high;
      $(".call19").html("High:"+results23+"&#176");

    var results24 = data.query.results.channel.item.forecast[5].low;
      $(".call20").html("Low:"+results24+"&#176");

      f="";
          if (current<=20) {
            f="winter";
            $('body').attr('id', f);
          }

          else if (current>20 && current<=50) {
              f="spring";
              $('body').attr('id', f);
          }
         else if (current>50 && current<=70) {
              f="fall";
              $('body').attr('id', f);
            }
        else if (current>70 && current<=85) {
             f="early";
             $('body').attr('id', f);
          }
         else{
           f="hot"
                $('body').attr("id", f);
           }





    },
    error: function(error){
     alert(message)
     console.log(error,message);}
   });
 });

 $('input.town').keypress(function (e) {
   if (e.which == 13) {
     $('#weather_button').click();
     return false;    //<---- Add this line
   }
 });



 });





// f="";
//     if (current<=70) {
//       f="fall";
//       $('body').attr('id', f);
//
//     }
//     // else{
//     //        $('body').removeAttr("id", f);
//     //   }
//
//     else if (results.includes("Windy") && results2>=80) {
//         f="summer";
//         $('body').attr('id', f);
//
//     }
//
//    else if (results.includes("Scattered Showers") || results.includes("Thunder")) {
//         f="rain";
//         $('body').attr('id', f);
//
//     }
//    else{
//           $('body').removeAttr("id", f);
//      }
