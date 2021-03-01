<template>
	<div>
		<Card title="Login">
			<form class="form_main">
				<label class="form_label" for="email">Email</label>
				<input class="form_input" type="text" id="email" name="email">
				<label class="form_label" for="password">Contraseña</label>
				<input class="form_input" type="text" id="password" name="password">
			</form>
		</Card>
	</div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import Card from "@/components/Card";

export default {
	name: "Login",
	components: {Card},
	data: function () {
		return {
			email: '',
			password: '',
			loading: true
		}
	},
	methods: {
		login: async function () {
			try {
				let response = await axios.post(process.env.VUE_APP_URL_API + '/api/user/login', {
					email: this.email,
					password: this.password
				});
				
				//Setting the UserData in the storage
				this.$store.commit('setUserData', response.data.data);
				
				//Redirecting to Home
				this.$router.push('home');
			} catch (e) {
			
			}
			
		}
	},
	mounted() {
		
		//If user is logged redirect to HomePage
		if (Object.keys(this.$store.state.userData).length !== 0) {
			this.$router.push('/');
		}
	},
}

</script>

<style scoped>
.form_main {
	display: flex;
	flex-direction: column;
	align-content: space-around;
	height: inherit;
}

.form_label {
	color: black;
	font-size: 15px;
	text-align: center;
}

.form_input {
	border: 1px solid #424242;
	border-radius: .25rem;
}

</style>