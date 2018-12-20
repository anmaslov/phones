<template>
	<section class="blog">
		<el-button round="true">Button</el-button>
		
		<h1>{{title}}</h1>
		<div class="row">
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<h3>Vus.js</h3>
					</div>
					<div class="card-body">
						
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

	export default{
		name:'blog',
		data (){
			return{
				title:'Blog'
			}
		},
		components: {
			
		}
	}
</script>

<style scoped>
	
</style>