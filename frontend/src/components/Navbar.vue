<template>
	<nav class="nav">
		
		<ul class="nav_list">
			<div class="nav_list_element_brand">
				<a href="javascript:void(0)">
					Movie rewind
				</a>
			</div>
			<!--			<li class="nav_list_element_brand nav_list_element">-->
			<!--				<a href="javascript:void(0)">-->
			<!--					Movie rewind-->
			<!--				</a>-->
			<!--			</li>-->
			<li class="nav_list_element">
				<a href="">
					Home
				</a>
			</li>
			<li class="nav_list_element">
				<a href="">
					Movie
				</a>
			</li>
			<li class="nav_list_element">
				<a href="">
					Serie
				</a>
			</li>
			<li class="nav_list_element nav_list_element_login">
				<a href="">
					Log in
				</a>
			</li>
		</ul>
	</nav>
</template>
<script>

export default {
	name: "Navbar",
	data: function () {
		return {
			logged: false
		}
	},
	computed: {
		userData: function () {
			return this.$store.state.userData;
		}
	},
};
</script>
<style scoped>
.nav {
	display: flex;
	align-items: center;
	width: 100%;
	height: 5rem;
	background-color: #424242;
}

.nav_list_element_brand > a {
	color: white;
	font-size: 25px;
}

.nav_list_element_brand {
	padding-left: 1%;
}

.nav_list {
	display: flex;
	align-items: center;
	flex-direction: row;
	width: 100%;
	justify-content: flex-start;
}

.nav_list_element > a {
	color: white;
	padding: 20px;
	
}
.nav_list_element.nav_list_element_login {
	margin-left: auto;
	padding-left: 0%;
	margin-right: 3%;
}

.nav_list_element {
	height: 100%;
	padding-left: 10%;
}
</style>