var elements = [];
let inputText = document.querySelector(".note");

window.onload = function(){
    if(JSON.parse(localStorage.getItem("storeNotes")) != null){
        elements = JSON.parse(localStorage.getItem("storeNotes"));
        console.log("note:" + elements);
        display();
    }
};
    
function addFunction(){
    if(document.querySelector('.note').value.trim() != ""){
        elements.push(document.querySelector('.note').value.trim());
        if(localStorage.getItem("storeNotes")  == null){
            localStorage.setItem("storeNotes", JSON.stringify(elements));
        }else{
            localStorage.setItem("storeNotes", JSON.stringify(elements));
        }
        console.log(localStorage.getItem("storeNotes"));

        
        //input text must be filled
       
     
    }
    if (inputText.value === '') {
        alert("You must write something!");
    }
    display();
    inputText.value = "";
}


function display(){
    document.querySelector('.todo-container').innerHTML = "";
    for(var i=0; i<elements.length; i++)
        document.querySelector('.todo-container').innerHTML +=
        "<div class='element'>" +
        elements[i] + 
        '<button class="dell" onclick="del()"><i class="fas fa-trash"><i></button>'
        "</div>";
}

//delete
function del(index){
    elements.splice(index, 1);
    if(localStorage.getItem("storeNotes")  == null) {
        localStorage.setItem("storeNotes", JSON.stringify(elements));
        elements.remove();
    }else{
        localStorage.setItem("storeNotes", JSON.stringify(elements));
    }
    console.log();
    display();
}