<template>
	<v-container>
		<v-row>
			<v-col>
				<v-card elevation="24">
					<v-card-title class="justify-center">
						<h1>Register form</h1>
					</v-card-title>
					<v-card-text>
						<v-form ref="form">
							<v-text-field v-model="email" label="Correo electrónico" type="email"></v-text-field>
							<v-text-field v-model="username" label="Nombre de usuario"></v-text-field>
							<v-text-field v-model="password" label="Contraseña" type="password"></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions class="justify-center">
						<v-btn color="info" @click="register">Register</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from 'axios';

export default {
	name: "Register",
	data: function () {
		return {
			email: '',
			password: '',
			username: '',
		}
	},
	methods: {
		register: async function () {
			try {
				let response = await axios.post('http://localhost:3000/api/user/register', {
					email: this.email,
					password: this.password,
					username: this.username
				});
				console.log(response.data);
			} catch (e) {
				console.log(e)
			}
		}
	}
}
</script>

<style scoped>

</style>