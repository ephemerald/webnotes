curl -X POST
  -H "Authorization: Key c5252b97ae09413a81fdf8a541a96de9"
  -H "Content-Type: application/json"
  -d '  {
     "inputs": [
       {
          "data": {
             "image": {
                "url": "https://i.imgur.com/IEYInUL.jpg"
              }
          }
       }
     ]
}'
https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs
