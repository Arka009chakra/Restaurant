   
async function fun(){
let name1=document.getElementById("t1").value;
let price=document.getElementById("t2").value;
    await fetch('http://localhost:5500/menu',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({
            name:name1,price
        })
         
      
    }).then(function(response){
        return response.json();
    }).then(function(data){
        alert("Item Added");
    }).catch(function(error){
        alert("Something Went Wrong!!");
    })
}