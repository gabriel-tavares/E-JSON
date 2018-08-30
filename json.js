var url = "https://jsonplaceholder.typicode.com/todos/";

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log("OK");
            callback(JSON.parse(xmlHttp.responseText));
        } else {
            callback(xmlHttp.readyState);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

httpGetAsync(url, function (response) {

    for (var i = 0; i < response.length; i++) {
        var tagContainer = document.createElement("DIV");
        tagContainer.setAttribute("class", "col-md-4");
        var tagCard = document.createElement("DIV");
        tagCard.setAttribute("class", "card box-shadow");
        var tagTitle = document.createElement("H2");
        tagTitle.setAttribute("class", "h2-title");
        var textTitle = document.createTextNode(response[i].title);

        if (response[i].completed === true) {
            var tagIcon = document.createElement("i");
            tagIcon.setAttribute("class", "material-icons");
            var tagIconTitle = document.createTextNode("done"); 
            tagIcon.appendChild(tagIconTitle);
        } else {
            var tagIcon = document.createElement("i");
            tagIcon.setAttribute("class", "material-icons");
            var tagIconTitle = document.createTextNode("highlight_off"); 
            tagIcon.appendChild(tagIconTitle);
        }
        
        tagTitle.append(textTitle);
        tagCard.append(tagTitle, tagIcon);
        tagContainer.append(tagCard);

        document.getElementById("content").append(tagContainer);
    }

})