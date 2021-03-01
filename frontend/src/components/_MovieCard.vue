<template>
	<v-card :loading="loading" class="mx-auto my-12" max-width="374">
		<template slot="progress">
			<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
		</template>
		
		<v-img height="250" :src=urlImg+Movie.poster_path></v-img>
		
		<v-card-title>{{ Movie.title }}</v-card-title>
		
		<v-card-text>
			<div class="my-2 subtitle-1">
				<i class="fas fa-clock"></i> {{ Movie.release_date | formatDate() }}
			</div>
			<div class="description">{{ Movie.overview }}</div>
		</v-card-text>
		
<!--		<v-divider class="mx-4"></v-divider>-->
<!--		-->
<!--		<v-card-title>Tonight's availability</v-card-title>-->
		
<!--		<v-card-text>-->
<!--			<v-chip-group v-model="selection" active-class="deep-purple accent-4 white&#45;&#45;text" column>-->
<!--				<v-chip>5:30PM</v-chip>-->
<!--				-->
<!--				<v-chip>7:30PM</v-chip>-->
<!--				-->
<!--				<v-chip>8:00PM</v-chip>-->
<!--				-->
<!--				<v-chip>9:00PM</v-chip>-->
<!--			</v-chip-group>-->
<!--		</v-card-text>-->
<!--		-->
<!--		<v-card-actions>-->
<!--			<v-btn color="deep-purple lighten-2" text @click="reserve">-->
<!--				Reserve-->
<!--			</v-btn>-->
<!--		</v-card-actions>-->
	</v-card>
</template>

<script>
export default {
	name: "MovieCard",
	props: {
		Movie: {
			title: String,
			
		}
		
	},
	data: () => ({
		loading: false,
		selection: 1,
		urlImg: process.env.VUE_APP_IMG_URL
	}),
	
	methods: {
		reserve() {
			this.loading = true
			
			setTimeout(() => (this.loading = false), 2000)
		},
	},
}
</script>

<style scoped>
.description {
	width: 100%;
	-webkit-line-clamp: 3;
	height: 3rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>