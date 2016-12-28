'use strict';

import superagent from 'superagent';
import axios from 'axios';

export default {
  get: (url, params, cb) => {

    superagent
    .get('url')
    .query(params)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if(err){
        cb(err, null)
        return
      }

      const confirmation = response.body.confirmation
      if(confirmation != 'success'){
        cb({message: response.body.message}, null)
        return;
      }

      cb(null, response.body )
    })
    // axios
    // .get(url)
    // .then((response) => {
    //   response.data
    // })
    // .catch((err) => {
    //   console.log('error', err);
    //   return;
    // })
  },

  post: () => {

  },

  put: () => {

  },

  delete: () => {

  }

}
