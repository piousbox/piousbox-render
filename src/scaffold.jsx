import './index.html'
import 'babel-core/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Newsitems, NewsitemGallery } from './index'

class Scaffold extends React.Component {
  render () {
    let newsitems = [
      { item_type: 'gallery',
        name: 'test-name-8',
      }
    ]
    let newsitemGallery = {
      "created_at": "2018-07-23T18:27:06.589Z",
      "descr": "",
      "description": "",
      "name": "just a test gallery again i guess",
      "id": "5b561dfa717c7605f5b98889",
      "item_type": "gallery",
      "galleryname": "20180501",
      "photos": [
        {
          "mini_url": "https://s3.amazonaws.com/ISh-development-2/photos/mini/5aec90b068d044e21c97a26a/2017_selfie_1.jpg?1525452975",
          "thumb_url": "https://s3.amazonaws.com/ISh-development-2/photos/thumb/5aec90b068d044e21c97a26a/2017_selfie_1.jpg?1525452975",
          "small_url": "https://s3.amazonaws.com/ISh-development-2/photos/small/5aec90b068d044e21c97a26a/2017_selfie_1.jpg?1525452975",
          "large_url": "https://s3.amazonaws.com/ISh-development-2/photos/large/5aec90b068d044e21c97a26a/2017_selfie_1.jpg?1525452975",
          "original_url": "https://s3.amazonaws.com/ISh-development-2/photos/original/5aec90b068d044e21c97a26a/2017_selfie_1.jpg?1525452975"
        },
        {
          "mini_url": "https://s3.amazonaws.com/ISh-development-2/photos/mini/5b561de5717c7605f5b98884/Screen_Shot_2018-07-22_at_10.13.30_PM.png?1532370402",
          "thumb_url": "https://s3.amazonaws.com/ISh-development-2/photos/thumb/5b561de5717c7605f5b98884/Screen_Shot_2018-07-22_at_10.13.30_PM.png?1532370402",
          "small_url": "https://s3.amazonaws.com/ISh-development-2/photos/small/5b561de5717c7605f5b98884/Screen_Shot_2018-07-22_at_10.13.30_PM.png?1532370402",
          "large_url": "https://s3.amazonaws.com/ISh-development-2/photos/large/5b561de5717c7605f5b98884/Screen_Shot_2018-07-22_at_10.13.30_PM.png?1532370402",
          "original_url": "https://s3.amazonaws.com/ISh-development-2/photos/original/5b561de5717c7605f5b98884/Screen_Shot_2018-07-22_at_10.13.30_PM.png?1532370402"
        },
        {
          "mini_url": "https://s3.amazonaws.com/ISh-development-2/photos/mini/5b561de8717c7605f5b98885/july25-event.png?1532370406",
          "thumb_url": "https://s3.amazonaws.com/ISh-development-2/photos/thumb/5b561de8717c7605f5b98885/july25-event.png?1532370406",
          "small_url": "https://s3.amazonaws.com/ISh-development-2/photos/small/5b561de8717c7605f5b98885/july25-event.png?1532370406",
          "large_url": "https://s3.amazonaws.com/ISh-development-2/photos/large/5b561de8717c7605f5b98885/july25-event.png?1532370406",
          "original_url": "https://s3.amazonaws.com/ISh-development-2/photos/original/5b561de8717c7605f5b98885/july25-event.png?1532370406"
        },
        {
          "mini_url": "https://s3.amazonaws.com/ISh-development-2/photos/mini/5b561de8717c7605f5b98886/july25-event2.png?1532370406",
          "thumb_url": "https://s3.amazonaws.com/ISh-development-2/photos/thumb/5b561de8717c7605f5b98886/july25-event2.png?1532370406",
          "small_url": "https://s3.amazonaws.com/ISh-development-2/photos/small/5b561de8717c7605f5b98886/july25-event2.png?1532370406",
          "large_url": "https://s3.amazonaws.com/ISh-development-2/photos/large/5b561de8717c7605f5b98886/july25-event2.png?1532370406",
          "original_url": "https://s3.amazonaws.com/ISh-development-2/photos/original/5b561de8717c7605f5b98886/july25-event2.png?1532370406"
        }
      ]
    }

    return (
      <div style={{ background: 'black', minHeight: '500px' }} >
        <BrowserRouter >
          { /* <Newsitems newsitems={newsitems} /> */ }
          <NewsitemGallery item={newsitemGallery} link={"/some-path"}/>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render( <Scaffold />, document.getElementById('app') )
