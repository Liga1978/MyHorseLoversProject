const overlayBtn = document.getElementById("overlayBtn");
const overlayView = document.getElementById("overlay");

overlayBtn.addEventListener("click", () => {
    let overlayDiv = document.createElement("div");
    overlayDiv.setAttribute("id","overlay");
    document.body.appendChild(overlayDiv);
    let overlayDivInner = document.createElement("div");
    overlayDivInner.setAttribute("class", "row row-cols-1 g-4");
    overlayDiv.appendChild(overlayDivInner);

    let overlayDivInner2 = document.createElement("div");
    overlayDivInner2.setAttribute("class", "col");
    overlayDivInner.appendChild(overlayDivInner2);

    let overlayDivInner3 = document.createElement("div");
    overlayDivInner3.setAttribute("class", "card text-center border-success");
    overlayDivInner2.appendChild(overlayDivInner3);

    let overlayDivInner4 = document.createElement("div");
    overlayDivInner4.setAttribute("class", "card-body text-success");
    overlayDivInner3.appendChild(overlayDivInner4);

    let overlayDivH = document.createElement("h5");
    overlayDivH.setAttribute("class", "card-title");
    let node = document.createTextNode("JOIN US");
    overlayDivH.appendChild(node);
    let overlayDivp = document.createElement("p");
    overlayDivp.setAttribute("class", "card-text");
    let node2 = document.createTextNode("You are welcome to join us to get all member's benefits and much more.");
    overlayDivp.appendChild(node2);
    let overlayDivA = document.createElement("a");
    overlayDivA.setAttribute("class", "btn btn-success", "href", "/html/index.html");
    overlayDivA.href = "../html/login.html";
    let node3 = document.createTextNode("REGISTER");
    overlayDivA.appendChild(node3);
    overlayDivH.appendChild(overlayDivp);
    overlayDivH.appendChild(overlayDivA);
    overlayDivInner4.appendChild(overlayDivH);
    let overlayView = document.getElementById("overlay");
    overlayView.style.display = "block";   

    overlayView.addEventListener("click", () => {
        overlayView.style.display = "none"
    });
});

document.getElementById('date').innerHTML = new Date().toDateString();