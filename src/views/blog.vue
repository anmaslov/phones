<template>
	<section class="blog">
		<el-col :span="24" class="toolbar">
			<el-form :inline="true" :model="filters">
				<el-form-item label="По телефону">
					<el-input v-model="filters.phone" placeholder="Исходящий"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getCalls">Применить</el-button>
				</el-form-item>
			</el-form>
		</el-col>


		<el-table :data="calls" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<el-table-column prop="Stantion" label="Станция" min-width="100" sortable>
			</el-table-column>
			<el-table-column prop="Cvt.DateEnd" label="Дата" width="100" :formatter="formatDate" sortable>
			</el-table-column>
			<el-table-column prop="Cvt.DateEnd" label="Время" width="90" :formatter="formatTime" sortable>
			</el-table-column>
			<el-table-column prop="Cvt.DateDiff" label="Длительность" width="150" sortable>
			</el-table-column>
			<el-table-column prop="Tp" label="Статус звонка" width="150" sortable>
			</el-table-column>
			<el-table-column prop="Called" label="Входящий" min-width="150" sortable>
			</el-table-column>
			<el-table-column prop="Phone" label="Исходящий" min-width="150" sortable>
			</el-table-column>
		</el-table>

		<el-col :span="24" class="toolbar">
			<el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="limit" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

	</section>
</template>

<script>
	import axios from 'axios'
			//H - исходящий
			//I - входящий
	export default{
		data (){
			return{
				filters: {
					phone: ''
				},
				calls: [],
				total: 0,
				page: 1,
				limit: 20,
				listLoading: false,
			}
		},
		methods: {
			formatDate: function (row) {
				let d = new Date(row.Cvt.DateEnd);
				return d.getDate() + "." + (d.getMonth()+1) + "." + d.getFullYear();
			},
			formatTime: function (row) {
				let d = new Date(row.Cvt.DateEnd);
				return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getCalls();
			},
			getCalls() {
				let para = {
					limit: this.limit,
					skip: this.limit * (this.page - 1),
					phone: this.filters.phone
				};
				this.listLoading = true;
				axios.get('http://10.39.0.113:8080/find', { params: para })
				.then((res) => {
					this.total = 123;
					this.calls = res.data;
					this.listLoading = false;
				});
			},
		},
		mounted() {
			this.getCalls();
		},
		components: {
			
		}
	}
</script>

<style scoped>

</style>