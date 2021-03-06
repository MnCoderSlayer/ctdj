// o => original
//只针对kvword格式
function createTableArr(oJsonArr,row) {
    let outArr = [];
    oJsonArr.forEach(value=>{
        let json = {};
        for(let k in value){
            if(k!='type'){
                json.label = value[k];
                json.value = row[k] == null? '无': row[k];
                json.type = value['type'];
                json.key = k;
            }
        }
        outArr.push(json)
    })
    return outArr;
}


function createTableToForm(oJsonArr) {
    let outArr = [];
    oJsonArr.forEach(value=>{
        let json = {};
        for(let k in value){
            if(k!='type'){
                json.label = value[k];
                json.value = null;
                json.type = value['type'];
                json.key = k;
            }
        }
        outArr.push(json)
    })
    return outArr;
}



//select数据处理
function selectDataShow(selectProps, selectArr,cell) {
    selectProps.forEach(v => {
        if (cell.key == v) {
            selectArr[v].forEach(value => {
                if (value.value == cell.value) {
                    cell.value = value.label;
                }
            });
        }
    })
}





module.exports.createTableArr = createTableArr;
module.exports.createTableToForm = createTableToForm;
module.exports.selectDataShow = selectDataShow;