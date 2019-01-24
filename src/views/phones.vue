<template>

	<el-table :data="items" style="width: 100%" border v-loading="listLoading" :row-class-name="tableRowClassName">
		
		<el-table-column prop="Id" label="Код" width="100" sortable>
		</el-table-column>

		<el-table-column prop="Description" label="Описание" min-width="350">
		</el-table-column>
		
		<el-table-column prop="Ip" label="Ip адрес" width="180">
		</el-table-column>

		<el-table-column prop="Port" label="Порт">
		</el-table-column>
	</el-table>

</template>
<script>

	import { getPhoneList } from '../api/index';

	export default{
		name:'blog',
		data (){
			return{
				filters: {
					enabled: '',
				},
				listLoading: false,
				items: []
			}
		},
		methods: {
			getPhones() {
				this.listLoading = true;
				getPhoneList({}).then((res) => {
					this.items = res.data.Data;
					this.listLoading = false;
				});
			},
			tableRowClassName(row) {
				if (row.row.Enabled == false) {
					return 'disabled-row'
				}
				else return '';
			}
		},
		mounted (){
			this.getPhones();
		}
	}
	
</script>

<style>
.disabled-row {
	background: rgb(252, 195, 195) !important;
}
</style>