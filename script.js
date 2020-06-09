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
    obj = obj.tree[0].children
    obj.map((item) => {
        result = item.children
        result.map((item) => {
            array.push(item.path)
        })
    })
    console.log(array)

}

