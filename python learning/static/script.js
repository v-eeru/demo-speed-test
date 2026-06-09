const button = document.getElementById("startBtn");
const loader = document.getElementById("loader");

button.addEventListener("click", () => {

    loader.style.display = "block";

    button.disabled = true;

    fetch("/speedtest")
    .then(response => response.json())
    .then(data => {

        document.getElementById("download").innerHTML =
            data.download + " Mbps";

        document.getElementById("upload").innerHTML =
            data.upload + " Mbps";

        document.getElementById("ping").innerHTML =
            data.ping + " ms";

        loader.style.display = "none";
        button.disabled = false;

    })
    .catch(error => {

        alert("Something went wrong!");

        loader.style.display = "none";
        button.disabled = false;

        console.log(error);

    });

});