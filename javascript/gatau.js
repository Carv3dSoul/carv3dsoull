fetch("about.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("about-section").innerHTML = data;
    });