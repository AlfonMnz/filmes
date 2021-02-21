export default class EpisodeEntity {
	constructor() {
	}

	makeEpisode(episodeData) {
		if (!episodeData.vote_count) episodeData.vote_count = 0;
		return episodeData;
	}
}