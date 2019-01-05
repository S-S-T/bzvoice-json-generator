const axios = require('axios');
const fs = require('fs');
const bzUrl = 'stg.api.bazaarvoice.com';
const version = 'apiversion=5.4';
const passkey = 'cafRvoiYDDRNKRPiOwwRfb4snRoHfdFbd9fpsX1JlRJ5M';

const reviewsUrl = `https://${bzUrl}/data/reviews.json?${version}&passkey=${passkey}`;
const reviews = [];
let i = 0

const getBZreviews = async () => {
  const response = await axios.get(reviewsUrl);
  await response.data.Results.map(result => {
    reviews.push(response.data.Results[i += 1]);
    result;
  })
  
  const json = await JSON.stringify({
	bz_reviews: reviews
  }, null, 4);
  
  await fs.writeFile('bzreviews.json', json, 'utf8', err => {
	console.log(err);
  });
};

getBZreviews();
