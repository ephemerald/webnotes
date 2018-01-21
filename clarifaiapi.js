const Clarifai = require('clarifai');

// initialize with api key
const app = new Clarifai.App({
 apiKey: 'c5252b97ae09413a81fdf8a541a96de9'
});

console.log('hello');

app.models.predict(Clarifai.NSFW_MODEL, "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg").then(
  function(response) {
      console.log(response);
      console.log(response.outputs[0].data);
      // if (nsfw > 0.5) {
      //       var doggoIndex = Math.floor(Math.random() * doggoArray.length);
      //       iamges[i].src = doggoArray[doggoIndex];
      });
    