/*===============================
=            Imports            =
===============================*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import reducers from './reducers';
/*=====  End of Imports  ======*/


/*=================================
=            constants            =
=================================*/
const API_KEY = 'AIzaSyCJnvgg8h0B047qefXV8znhT4orbrzBvso';


/*=====  End of constants  ======*/

/* initialize app */
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('motivation');
	}

	videoSearch(searchTerm) {
		YouTubeSearch({key: API_KEY, term: searchTerm}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {

		return (
			<div>
				<SearchBar onSearchTermChanged={searchTerm => this.videoSearch(searchTerm)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos} 
					onVideoClicked={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}/>
			</div>
		);
	}
}

ReactDOM.render(
    <App />
  , document.querySelector('#react-video-app'));
