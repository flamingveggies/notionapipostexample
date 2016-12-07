var button = document.getElementById("corgi");
var text = document.getElementById("query");


button.addEventListener("click", function() {
    if (text.value < 0 || text.value > 10) {
        alert("Pick a number between 0 and 10.");
        return;
    }
    
    var url = "https://app.usenotion.com/api/v1/report";
    var key = "1c448d68fdbbd567290b391d";
    var data = {
        "ingredient_id": "kku5NQULJeEDC3MYLDipYg7j",
        "value": document.getElementById("query").value,
        "date": new Date().toISOString().slice(0,10)
    };
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        console.log(xhr.statusText);
        console.log(xhr.responseText);
    });
    xhr.open("POST", url);
    xhr.setRequestHeader("Authorization", key);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
});

/*

curl -H "Authorization: 1c448d68fdbbd567290b391d" \
  -H "Content-Type: application/json" \
  -d '{"ingredient_id": "kku5NQULJeEDC3MYLDipYg7j", "value": 10, "date": "2016-12-06"}' \
  https://app.usenotion.com/api/v1/report

*/
