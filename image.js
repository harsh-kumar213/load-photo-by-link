document.querySelector(".add").addEventListener("click", function(){
let a = document.querySelector("#input_link").value;
addImage(a);
})




    
    addImage = async (link)=>{
        return new Promise((resolve,reject)=>{
        let img = document.createElement("img");
        img.type = "img/html";
        img.setAttribute("src", link);
    
        document.body.querySelector("#image").appendChild(img);

        img.onload= ()=>{
            resolve("your image is added");
        }
        img.onerror=()=>{
            reject(new Error("error in link"));
        }
    })
}
addImage.then((value)=>{
    alert(value);
})
addImage.catch((value)=>{
    alert(value);
})
