document.getElementById("mybtn").addEventListener("click", function() {
    let mycup = document.getElementById("chapter").value;
    console.log(mycup);
    if (mycup !== "") {
       const newBTN = document.createElement("button");
       newBTN.innerHTML ="\u274c";

       const newLI = document.createElement("li");
       newLI.textContent = mycup;
       newLI.appendChild(newBTN);


        document.getElementById("favs").appendChild(newLI);

        document.getElementById("chapter").value = "";
    }

});