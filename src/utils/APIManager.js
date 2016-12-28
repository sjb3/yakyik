'use strict';

import superagent from 'superagent';

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
      cb(null, response.body )
    })
  },

  post: () => {

  },

  put: () => {

  },

  delete: () => {

  }

}
