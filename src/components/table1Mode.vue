<template>
    <div>
            <table1
             :operates="operate"
             :tableData="tableData"
             :tdArr="tdArr"
             @info="info"
             @edit="edit"
             ></table1>
    </div>
</template>

<script>
    import table1 from './table1.vue'
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }], //需要向table填写的数据
                tdArr: [{lable: '时间', prop: 'date', width: '180'},
                    {lable: '姓名', prop: 'name', width: '280'},
                    {lable: '姓名', prop: 'name', width: '280'}],
                    //td 显示的列
                operate: [{lable: '查看', type: 'primary', clickFun: 'info', size: "small"},
                    {lable: '编辑', type: 'primary', clickFun: 'edit', size: "small"},
                    {lable: '编辑', type: 'primary', clickFun: 'edit', size: "small"}],
                //操作的方法

                tableLoading:false
            }
        },
        components: {
            table1
        },
        methods: {
            info(index, row) {
                console.log('info--',index, row);
            },
            edit(index, row){
                console.log('edit----',index, row);
            },
            delete(index, row){
                console.log('delete----',index, row);
            }
        }
    }
</script>