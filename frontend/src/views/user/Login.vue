<template>
	<v-container>
		<v-row class="text-center" justify="center">
			<v-col md="4">
				<v-card elevation="24">
					<v-card-title class="justify-center">
						<h1 class="text-center">Login view</h1>
					</v-card-title>
					<v-card-text>
						<v-form ref="form">
							<v-text-field v-model="email" label="Correo electrónico"></v-text-field>
							<v-text-field v-model="password" label="Contraseña" type="password"></v-text-field>
						</v-form>
						<!-- <v-text-field color="success" loading="loading" disabled></v-text-field>-->
					</v-card-text>
					<v-card-actions class="justify-center">
						<v-btn color="info" @click="login">Login</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
	name: "Login",
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

</style>