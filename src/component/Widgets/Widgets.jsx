import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';

export default function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets_inputs">
<SearchIcon className='widgets_searchicon' />
    <input type="text" placeholder='Search Twitter' />
      </div>
      <div className='widgets_WidgetsContainer'>
        <h2>What's happening</h2>
      </div>
    </div>
  )
}
