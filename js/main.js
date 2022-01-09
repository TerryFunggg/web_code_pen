fetch("./showcases.json")
.then(res => res.json()).then(function(showcases){
    if(showcases === null || showcases === undefined) return;
    console.log(showcases);
    appendCard(showcases);
}).catch(e => {
    console.log(e);
})


function appendCard(showcases){
    if(showcases === undefined || showcases.length < 1) return;

    let html = '';
    showcases.map(function(item){
        html = `
<div class="showcase">
    <a href="./showcases${item.html}">
    <img class='object-cover h-full' src="./img/${item.img}" alt="">
    </a>
</div>`
document.querySelector('main').innerHTML += html;
    });
    // TODO: limit?
    
}
