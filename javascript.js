// console.log("I am making digital clock")
setInterval(function () {
  var d=new Date();
  var hour=d.getHours();
  var minute=d.getMinutes();
  var second=d.getSeconds();
  var date=d.getDate();
  var month=d.getMonth();
  var year=d.getFullYear();
  var display=window.innerWidth;

  // hour= d.setHours(13);
  // console.log(hour);
  // hour= 20;
  if(hour>=5&&hour<12)
  {
    if(display<600)
    {
      document.body.style.backgroundImage = "url('morning.jpg')";
      document.getElementById("wishes").style.color = "#000";
      document.getElementById("time").style.color = "#000";
      document.getElementById("date").style.color = "#000";

    }
    else
    {document.body.style.backgroundImage = "url('nature.jpg')";
     }
    document.getElementById("wishes").innerHTML="Good Mornig, it's";
    // document.body.style.backgroundsize=cover;
    // document.body.style.backgroundSize="cover";

  }
  if(hour>=12&&hour<17)
  {
    if(display<600)
    {
      document.body.style.backgroundImage = "url('lonely_noon.jpg')";
      document.getElementById("wishes").style.color = "#000";
      document.getElementById("time").style.color = "#000";
      document.getElementById("date").style.color = "#000";

     // document.getElementsByTagName("h1").style.color = "#000";
     // document.getElementsByTagName("h2").style.color = "#000";
      }
    else
    {
      document.body.style.backgroundImage = "url('afternoon.jpg')";
      document.getElementById("wishes").style.color = "#fff";
      document.getElementById("time").style.color = "#fff";
      document.getElementById("date").style.color = "#fff";
}
    document.body.style.backgroundSize = "cover";
    document.getElementById("wishes").innerHTML="Good Afternoon, it's";
  }
  if(hour>=17&&hour<19)
  {
    if(display<600)
    {document.body.style.backgroundImage = "url('evening2.jpg')";}
    else
    {document.body.style.backgroundImage = "url('evening.jpg')";}

    document.getElementById("wishes").innerHTML="Good Evening, it's";
  }
  if(hour>=19&&hour<25)
  {
    if(display<600)
    {document.body.style.backgroundImage = "url('night_city_lights.jpg')";}
    else
    {document.body.style.backgroundImage = "url('evening.jpg')";}

    document.getElementById("wishes").innerHTML="Good Evening, it's";
  }
  if(hour>=00&&hour<5)
  {

      if(display<600)
      {document.body.style.backgroundImage = "url('night_city_lights.jpg')";}
      else
      {document.body.style.backgroundImage = "url('evening.jpg')";}

    document.getElementById("wishes").innerHTML="Good Evening, it's";
  }
  if(hour>12){
    hour=hour%12;
  }
  if(hour<10)
  {
    hour= "0"+hour;
  }

  if(second<10)
  {
    second= "0"+second;
  }
  if(minute<10)
  {
    minute= "0"+minute;
  }

  // console.log(date);
   // console.log(month);
  // console.log(year);
  // var hrot= hour/ 12 * 360 + minute/60 * 30;
  // var mrot= minute / 60 * 360 + second/ 60 * 6;
  // var srot= second/60 * 360;
  // console.log(hour);
  // console.log(mrot);
  // console.log(srot);
  // console.log(hour);
  var changetime = hour+":"+ minute +":"+ second;
  var changedate = date+"/"+(month+1)+"/"+year;
  document.getElementById("time").innerHTML=changetime;
  document.getElementById("date").innerHTML=changedate;

  // console.log(change);

},);
