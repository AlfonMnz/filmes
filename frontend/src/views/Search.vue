<template>
	<v-container>
		<v-row>
			<v-col md="3">
				<MovieCard :movie="movie"></MovieCard>
			</v-col>
			<v-col md="3">
				<MovieCard :movie="movie"></MovieCard>
			</v-col>
			<v-col md="3">
				<MovieCard :movie="movie"></MovieCard>
			</v-col>
			<v-col md="3">
				<MovieCard :movie="movie"></MovieCard>
			</v-col>
			<v-col md="3">
				<MovieCard :movie="movie"></MovieCard>
			</v-col>
			<v-col md="3">
				<MovieCard :movie="movie"></MovieCard>
			</v-col>
			<v-col md="3">
				<MovieCard :movie="movie"></MovieCard>
			</v-col>
			<v-col md="3">
				<MovieCard :movie="movie"></MovieCard>
			</v-col>
			<v-col md="3">
				<MovieCard :movie="movie"></MovieCard>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import MovieCard from "@/components/MovieCard";

export default {
	name: "Search",
	components: {
		MovieCard
	},
	data() {
		return {
			movie: {
				adult: false,
				backdrop_path: "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
				belongs_to_collection: null,
				budget: 63000000,
				genres: [
					{
						id: 18,
						name: "Drama"
					}
				],
				homepage: "http://www.foxmovies.com/movies/fight-club",
				id: 550,
				imdb_id: "tt0137523",
				original_language: "en",
				original_title: "Fight Club",
				overview: "Un joven sin ilusiones lucha contra su insomnio, consecuencia quizás de su hastío por su gris y rutinaria vida. En un viaje en avión conoce a Tyler Durden, un carismático vendedor de jabón que sostiene una filosofía muy particular: el perfeccionismo es cosa de gentes débiles; en cambio, la autodestrucción es lo único que hace que realmente la vida merezca la pena. Ambos deciden entonces formar un club secreto de lucha donde descargar sus frustaciones y su ira que tendrá un éxito arrollador.",
				popularity: 42.781,
				poster_path: "/1yWmCAIGSVNuTOGyz9F48W9g1Ux.jpg",
				production_companies: [
					{
						id: 508,
						logo_path: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
						name: "Regency Enterprises",
						origin_country: "US"
					},
					{
						id: 711,
						logo_path: "/tEiIH5QesdheJmDAqQwvtN60727.png",
						name: "Fox 2000 Pictures",
						origin_country: "US"
					},
					{
						id: 20555,
						logo_path: "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
						name: "Taurus Film",
						origin_country: "DE"
					},
					{
						id: 54051,
						logo_path: null,
						name: "Atman Entertainment",
						origin_country: ""
					},
					{
						id: 54052,
						logo_path: null,
						name: "Knickerbocker Films",
						origin_country: "US"
					},
					{
						id: 25,
						logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
						name: "20th Century Fox",
						origin_country: "US"
					},
					{
						id: 4700,
						logo_path: "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
						name: "The Linson Company",
						origin_country: "US"
					}
				],
				production_countries: [
					{
						iso_3166_1: "DE",
						name: "Germany"
					},
					{
						iso_3166_1: "US",
						name: "United States of America"
					}
				],
				release_date: "1999-10-15",
				revenue: 100853753,
				runtime: 139,
				spoken_languages: [
					{
						english_name: "English",
						iso_639_1: "en",
						name: "English"
					}
				],
				status: "Released",
				tagline: "Caos, travesuras y jabón",
				title: "El club de la lucha",
				video: false,
				vote_average: 8.4,
				vote_count: 21147
			}
		}
	}
}
</script>

<style scoped>

</style>