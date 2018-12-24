<template>
	<section class="blog">
		<el-col :span="24" class="toolbar">
			<el-form :inline="true" :model="filters" size="small">
				<el-col :span="24">
					<el-form-item label="Период">
						<el-date-picker
							v-model="filters.dates"
							firstDayOfWeek="5"
							type="daterange"
							format="dd.MM.yyyy"
							value-format="yyyy-MM-dd"
							range-separator="-"
							start-placeholder="Дата с"
							end-placeholder="Дата по"
							:picker-options="pickerOptions">
							</el-date-picker>
					</el-form-item>

					<el-form-item label="Станция">
						<el-select v-model="filters.stantion" placeholder="Укажите станцию">
							<el-option
								v-for="item in stantion.items"
								:key="item.Id"
								:label="item.Description"
								:value="item.Id">
								</el-option>
						</el-select>
					</el-form-item>
					
					<el-form-item label="Тип звонка">
						<el-select v-model="filters.tp" placeholder="Тип звонка">
							<el-option label="На городские" value="H"></el-option>
							<el-option label="Станция - Станция" value="I"></el-option>
							<el-option label="Внутри станции" value="J"></el-option>
						</el-select>
					</el-form-item>
				</el-col>

				<el-col :span="24">
					<el-form-item label="Звонивший">
						<el-input v-model="filters.called" placeholder="Звонивший"></el-input>
					</el-form-item>
					<el-form-item label="Телефон">
						<el-input v-model="filters.phone" placeholder="Кому"></el-input>
					</el-form-item>


					<el-form-item>
						<el-button type="primary" v-on:click="getCalls">Применить</el-button>
					</el-form-item>
				</el-col>
			</el-form>
		</el-col>


		<el-table :data="calls" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<el-table-column prop="Stantion" label="Станция" width="80">
			</el-table-column>
			<el-table-column prop="Cvt.DateEnd" label="Дата" width="100" :formatter="formatDate">
			</el-table-column>
			<el-table-column prop="Cvt.DateEnd" label="Время" width="90" :formatter="formatTime">
			</el-table-column>
			<el-table-column prop="Cvt.DateDiff" label="Длительность" width="150">
			</el-table-column>
			<el-table-column prop="Tp" label="Тип звонка" width="150">
			</el-table-column>
			<el-table-column prop="Called" label="Исходный" min-width="150">
			</el-table-column>
			<el-table-column prop="Phone" label="Кому" min-width="150">
			</el-table-column>
		</el-table>

		<el-col :span="24" class="toolbar">
			<el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="limit" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

	</section>
</template>

<script>

	import { getCallList, getPhoneList } from '../api/index';
			//H - исходящий
			//I - входящий
	export default{
		data (){
			return{
				filters: {
					phone: '',
					called: '',
					stantion: '',
					tp: '',
					dates: [],
				},
				stantion: {
					loading: false,
					items: []
				},
				calls: [],
				total: 0,
				page: 1,
				limit: 20,
				listLoading: false,
				pickerOptions: {
					firstDayOfWeek: 1
				}
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
				let param = {
					limit: this.limit,
					skip: this.limit * (this.page - 1),
					phone: this.filters.phone,
					called: this.filters.called,
					stantion: this.filters.stantion,
					tp: this.filters.tp
				};
				if (this.filters.dates) {
					param["start"] = this.filters.dates[0]
					param["end"] = this.filters.dates[1]
				}

				this.listLoading = true;
				getCallList(param).then((res) => {
					this.total = res.data.Count;
					this.calls = res.data.Data;
					this.listLoading = false;
				});
			},
			getPhones() {
				getPhoneList({}).then((res) => {
					this.stantion.items = res.data.Data;
				});
			}
		},
		mounted() {
			this.getCalls();
			this.getPhones();
		},
		components: {
			
		}
	}
</script>

<style scoped>

</style>