const location1=document.querySelector("#location");

  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  function successCallback(position){
    console.log(position);
    location1.innerHTML="Your latitude is "+position.coords.latitude +" Your longitude is "+position.coords.longitude
  };
  
  function errorCallback(error){
    console.log(error);
    location1.innerHTML="sorry not able to find your latitude and longitude"
  };
  