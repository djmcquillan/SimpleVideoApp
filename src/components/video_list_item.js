import React from 'react';

const VideoListItem = ({video, onVideoClicked}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;

	return (
		<li className='list-group-item' onClick={() => onVideoClicked(video)}>
			<div className='video-list media'>
				<div classNme='media-left'>
						<img className='media-object' src={imageUrl} />
				</div>
				<div className='media-body'>
					<div className='media-heading'>{videoTitle}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;