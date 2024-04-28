<script>
	export let data;
	let videos = data.videos;

	function handleClick(videoId) {
		console.log("Opening YouTube video with ID:", videoId);
		const url = `https://www.youtube.com/watch?v=${videoId}`;
		window.open(url, '_blank');
	}
</script>
<div>
	{#if videos.length > 0}
		<div class="video-gallery">
			{#each videos as video}
				<div class="video-item" on:click={() => handleClick(video.id.videoId)}>
					<img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
					<p>{video.snippet.title}</p>
				</div>
			{/each}
		</div>
	{:else}
		<p>No videos found.</p>
	{/if}
</div>
