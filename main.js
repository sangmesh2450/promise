const initiatePromise = async function(){
    var response = await fetch("https://random.dog/woof.json");
    var data = await response.json();
    displayPicture(data);
}

initiatePromise();

function displayPicture(data){
    let btn = document.getElementsByTagName("button");
    btn[0].addEventListener("click",(e)=>{
        let img = document.createElement("img");
        console.log(data);
        img.src=data.url;
        let div = document.getElementsByClassName("row");
        div[0].append(img);
    })
}