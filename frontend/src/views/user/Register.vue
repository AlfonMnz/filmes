<template>
	<div>
		<Card title="Register">
			<RegisterForm></RegisterForm>
		</Card>
	</div>
</template>

<script>
import axios from 'axios';
import RegisterForm from "@/components/Forms/RegisterForm";
import Card from "@/components/Card";

export default {
	name: "Register",
	components: {RegisterForm, Card},
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