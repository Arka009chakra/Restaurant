async function funn(){
await fetch('http://localhost:5500/getdata')

    .then(function(response){
        return response.json();
    }).then(function(data){
     data.forEach(menus => {
        const markup =`<div class="menuitem"><div>${menus.name}</div>${menus.price}</div></div>`
        document.querySelector('.list').insertAdjacentHTML('beforeend',markup);
     });
    })
    .catch(function(error){
        console.log("error")
    })
   
}
window.onload=funn;