const baseURL = "https://opentdb.com/api.php?amount=20&category=15";

function getData(cb) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", );
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function writeToDocument(type) {
    getData(type, function() {
        document.getElementById('data').innerHTML = data;
    });
}
