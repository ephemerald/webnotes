console.log('hello');

var url = "https://api.clarifai.com/v2/models/e9576d86d2004ed1a38ba0cf39ecb4b1/outputs";

function process(img) {
  console.log('processing', img.src);
  var data = {
    "inputs": [
      {
        "data": {
          "image": {
            "url": img.src
          }
        }
      }
    ]
  };

  data = JSON.stringify(data);

  $.ajax({
    type: "POST",
    url: url,
    dataType: "json",
    data: data,
    headers: {
      "Authorization" :"Key c5252b97ae09413a81fdf8a541a96de9",
      "Content-Type" :"application/json"
    },
    success: function(response) {
      console.log('done', img.src);
      if (response.outputs[0].data.concepts[0].name === "sfw") {
        var sfwVal = response.outputs[0].data.concepts[0].value;
      } else if (response.outputs[0].data.concepts[0].name === "nsfw") {
        var nsfwVal = response.outputs[0].data.concepts[0].value;
      }
      if (sfwVal > 0.5) {
        // console.log(imgArray);
        // images[i]= document.images[i].src;
        // Document object (web page)
        //   .images =>
        // for each image in here, throwinto api call
        var currentHeight = img.height + "px";
        var currentWidth = img.width + "px";
        // console.log(currentHeight);
        // console.log(currentWidth);
        img.style.height = currentHeight;
        img.style.width = currentWidth;
        img.src = "https://i.imgur.com/IEYInUL.jpg";
      }
    }
  });
}

window.onload = function() {
  var imgArray = document.getElementsByTagName('img');
  console.log(imgArray);

  for (var j = 0; j < imgArray.length; j++) {
    process(imgArray[j]);
  }

  return;
}
