<template>
	<div class="services">
		<h1>{{title}}</h1>

		<div v-for="(call, index) in info" class="tbl-row" :key="index">
			Станция: {{ call.Stantion }}, Телефон: {{ call.Called }}, Время звонка: {{ call.Cvt.DateEnd }}
		</div>
	</div>
</template>
<script>
	import axios from 'axios'

	export default{
		name:'blog',
		data (){
			return{
				title:'services',
				info: null
			}
		},
		mounted (){
			axios
			.get('http://10.39.0.113:8080/find')
			.then(response => (this.info = response.data));
		}
	}
	
</script>

<style scoped>
	
</style>