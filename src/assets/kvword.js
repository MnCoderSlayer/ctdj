const people = [
    {type_name: '党员类型', type: 'select'},
    {people_name: '姓名', type: 'input'},
    {people_gender: "性别", type: 'select'},
    {people_race: "族别", type: 'select'},
    {people_birthday: "出生日期", type: 'date'},
    {people_residence: "籍贯", type: 'select'},
    {people_culture: "学历", type: 'select'},
    {people_enter_party_time: "入党时间", type: 'date'},
    {people_enter_work_time: "工作时间", type: 'date'},
    {people_jobname: "现任职务", type: 'input'},
    {depart_id: "部门id", type: 'text'},
]
import {nation,province} from './staticData'
const selectArr = {
    type_name:[{label:'普通党员',value:'2'},{label:'支部书记',value:'1'}],
    people_race:nation,
    people_gender:[{label:'男',value:'男'},{label:'女',value:'女'}],
    people_residence:province,
    people_culture:[{label:'高中及以下',value:'高中及以下'},{label:'本科',value:'本科'},{label:'硕士',value:'硕士'},{label:'博士及以上',value:'博士及以上'}]
}

export {
    people,selectArr
}