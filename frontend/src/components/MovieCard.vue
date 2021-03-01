<template>

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
		urlImg: process.env.VUE_APP_IMG_URL,
	})
}
</script>
<style scoped>
.description {
	width: 100%;
	-webkit-line-clamp: 1;
	height: 3rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>