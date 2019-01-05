const axios = require('axios');
const fs = require('fs');
const bzUrl = 'stg.api.bazaarvoice.com';
const version = '5.4';
const passkey = 'cafRvoiYDDRNKRPiOwwRfb4snRoHfdFbd9fpsX1JlRJ5M';

const reviewsUrl = `https://${bzUrl}/data/reviews.json?apiversion=${version}?passkey=${passkey}`;
const reviews = [];
var reviewJson = {};


const getBZreviews = async () => {
  const response = await axios.get(reviewsUrl);
  await response.data.reviews.map(review => {
    reviews.push(review.id);
      const json = await JSON.stringify({
        bz_reviews: reviewJson
      });
      await fs.writeFile('bzreviews.json', json, 'utf8', err => {
        console.log(err);
      });
    }
  )};

getBZreviews();