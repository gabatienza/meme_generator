document.addEventListener("DOMContentLoaded",function() {
    var button = document.querySelector("#submit");
    var imageArea = document.querySelector(".img_area");
    var form = document.querySelector("form")
    
    form.addEventListener("submit", function() {
        var inputImage = document.querySelectorAll("input")[0];
        var inputTopText = document.querySelectorAll("input")[1];
        var inputBottomText = document.querySelectorAll("input")[2];
        
        if (inputImage.value === "") {
            alert("Please put an image url");
        } else {
            var meme = document.createElement("div");
            meme.className = "meme";
            
            var imgDiv = document.createElement("div");
            var image = document.createElement("img");
            
            
            image["src"] = inputImage["value"];

            var topTextDiv = document.createElement("div");
            topTextDiv["innerText"] = inputTopText["value"];
            topTextDiv.style.position = "absolute";
            topTextDiv.style.top = 0;
            topTextDiv.className = "textmeme";
            

            var bottomTextDiv = document.createElement("div");
            bottomTextDiv["innerText"] = inputBottomText["value"];
            bottomTextDiv.style.position = "absolute";
            bottomTextDiv.style.bottom = 0;
            bottomTextDiv.className = "textmeme";
            

            imgDiv.appendChild(image);

            meme.appendChild(imgDiv);
            meme.appendChild(topTextDiv);
            meme.appendChild(bottomTextDiv);
            imageArea.appendChild(meme)
            
            
            resetInputs();

        }  
    });

    imageArea.addEventListener("mouseover", function() {
        var allMemes = document.querySelectorAll(".meme")
        if (event.target.className === "meme") {
            var memeTarget = event.target;
            var cancelButton = document.createElement("button");
            cancelButton.style.position = "absolute";
            cancelButton.right = 0;
            cancelButton.innerText = "Cancel";
            event.target.appendChild(cancelButton);
            
            cancelButton.addEventListener("click", function() {
                memeTarget.remove();
            });

        }
    });
    




    function resetInputs() {
        var inputs = document.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i]["value"] = ""
        }
        button.value = "Submit"
    }
    






})