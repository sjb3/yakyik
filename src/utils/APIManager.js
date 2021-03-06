'use strict';

import superagent from 'superagent';
// import axios from 'axios';

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

      cb(null, response.body)
    })

    // axios
    // .get(url)
    // .then((response) => {
    //   const confirmation = response.tate.confirmation
    //   if(confirmation != 'success') return ( response.data.message, response.data)
    // })
    // .catch((err) => {
    //   console.log('error', err);
    //   return;
    // })
  },

  post: (url, body, cb) => {
    superagent
    .post(url)
    .send(body)
    .set('', 'application/json')
    .end((err, response) => {
      if(err) return cb(err, null)

      const confirmation = response.body.confirmation
      if(confirmation != 'success'){
        cb({message: response.body.message}, null)
        return;
      }
      cb(null, response.body)
    })
  },

  put: () => {

  },

  delete: () => {

  }

}
