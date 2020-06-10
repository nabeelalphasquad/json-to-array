var obj

fetch("./response.json")
    .then(response => response.json())
    .then(data => {
        obj = data
        showData();
    })


function showData() {
    var result
    var array = []
    var i = 0
    obj = obj.tree[0].children
    while (i < obj.length) {
        result = obj[i].children
        for (j = 0; j < result.length; j++) {
            temp = result[j].path
            array.push(temp)
        }
        i++
    }
    console.log(array)
}