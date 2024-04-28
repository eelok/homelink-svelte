import { config } from 'dotenv';
config();

async function fetchYouTubeVideos({ fetch, url }) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		if (data.items) {
			return data.items;
		} else {
			console.error('No videos found or error in fetching videos.');
			return [];
		}
	} catch (error) {
		console.error('Error fetching videos:', error);
		return [];
	}
}
export async function load({ fetch }) {
	const apiKey = process.env.API_KEY;
	const channelId = process.env.CHANNEL_ID;
	const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20&type=video`;
	const videos = await fetchYouTubeVideos({ fetch, url });
	console.log('videos:', videos);
	return {
			videos
	};
}
