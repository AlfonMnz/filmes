<template>
	<div class="tmp"> <!-- TODO: Remove this div -->
		<div class="card_main">
			<div class="card_title">
				<h3>{{ title }}</h3>
			</div>
			<div class="card_body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		title: {
			type: String
		},
	}
}
</script>

<style scoped>
.card_main {
	border: 2px solid transparent;
	background-color: #363B3D;
	width: 30%;/* TODO: Remove this style*/
	border-radius: .25rem;
	height: 300px;/* TODO: Remove this style*/
	
}
.card_title {
	text-align: center;
	color: rgb(209, 205, 199);
}
.card_body {
	height: 100%;
}
/* TODO: Remove this class*/
.tmp {
	display: flex;
	justify-content: center;
	margin-top: 15px;
}
</style>