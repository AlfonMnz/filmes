<template>
	<div>
		<form class="form_main">
			<fieldset class="form_field">
				<input class="form_input" v-model="email" autocomplete="off" type="text">
				<span class="form_span">Email</span>
			</fieldset>
			<fieldset class="form_field">
				<input class="form_input" v-model="password" autocomplete="off" type="password">
				<span class="form_span">Contraseña</span>
			</fieldset>
			<fieldset class="form_field">
				<button type="button" class="form_button" v-on:click="login">Log In</button>
			</fieldset>
		</form>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "LoginForm",
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
				console.log(response);
				
				//Setting the UserData in the storage
				this.$store.commit('setUserData', response.data.data);
				
				//Redirecting to Home
				this.$router.push('home');
			} catch (e) {
			
			}
			
		}
	},
}
</script>

<style scoped>
.form_main {
	display: flex;
	flex-direction: column;
	align-content: space-around;
	justify-content: space-evenly;
	height: 300px;
	position: relative;
}

.form_input {
	border-bottom: 1px solid #5ddef4;
	position: relative;
	/*border-radius: .25rem;*/
	padding: .25rem;
	margin: 0 1.25rem;
	width: 90%;
	color: rgb(209, 205, 199);
}

.form_input:focus {
	border-bottom: 2px solid #5ddef4;
	outline: none;
	
}

.form_field {
	position: relative;
	outline: none;
	border: none;
	display: flex;
	justify-content: center;
}

.form_span {
	position: absolute;
	top: 10px;
	left: 40px;
	color: rgb(209, 205, 199);
	font-size: 16px;
	
}

.form_input:focus + .form_span {
	transform: translate(0px, -25px);
	transition-duration: 0.5s;
	color: #006db3;
	font-size: 14px;
}
.form_input:valid + .form_span {
	transform: translate(0px, -25px);
	transition-duration: 0.5s;
	color: #006db3;
	font-size: 14px;
}

.form_input + .form_span {
	transform: translate(0px, 0px);
	transition-duration: 0.5s;
}

.form_button {
	background-color: #006db3;
	width: 15%;
	height: 30px;
	color: whitesmoke;
	border: 1px solid #1c9bec;
	border-radius: .25rem;
	margin-bottom: 3%;
}


</style>