/**
 * actions / index.js
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import { CONST, SET, } from '../constants'
import config from 'config'

const getNewsitems = (args={}) => {
  return (dispatch, getState) => {
    let state = getState()
    let body = { access_token: args.currentUser.accessToken }
    console.log('+++ action getNewsitems():', body)

    fetch(config.endpoint, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    }).then(r => r.json()).then(_data => {
      // console.log('+++ got data:', _data)
      dispatch({ type: SET.newsitems, newsitems: _data.site.newsitems })
    })
  }
}

export default {
  getNewsitems,
}
