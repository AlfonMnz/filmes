<template>
	<div>
		<Card title="Login">
			<LoginForm></LoginForm>
		</Card>
	</div>
</template>

<script>

import router from "@/router";
import Card from "@/components/Card";
import LoginForm from "@/components/Forms/LoginForm";

export default {
	name: "Login",
	components: {Card, LoginForm},
	mounted() {
		
		//If user is logged redirect to HomePage
		if (Object.keys(this.$store.state.userData).length !== 0) {
			this.$router.push('/');
		}
	},
}

</script>

