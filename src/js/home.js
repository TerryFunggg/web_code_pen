import '../css/home.css';

fetch("./showcase.json")
.then(res => res.json()).then(function(showcase){
    if(showcase === null || showcase === undefined) return;
    appendCard(showcase);
}).catch(e => {
    console.log(e);
})


function appendCard(showcase){
    let html = '';
    showcase.map(function(item){
        html = `
<div class="showcase">
    <a href="./${item.html}">
    <img src="./img/${item.img}" alt="">
    </a>
</div>`
    });
    // TODO: limit?
    document.querySelector('main').innerHTML = html;
}