<template>
	<div class="main">
		<Navbar></Navbar>
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
	name: 'App',
	
	components: {
		Navbar
	},
	
	data: () => ({
		//
	}),
};
</script>
<style scoped>

</style>
