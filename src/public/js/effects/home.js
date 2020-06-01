
function hide(propriedade){
    var $elementos = document.getElementsByClassName(propriedade);
    var $elementosContentCard = document.getElementsByClassName("content card");
    var $elementosContentItem = document.getElementsByClassName("content-item");
    var i = $elementos.length;
    var x = $elementosContentCard.length;
    var y = $elementosContentItem.length;

    while(x--){

        if($elementosContentCard[x].style.display = 'none'){
            $elementosContentCard[x].style.display = 'block';
        }
          
    }

    while(y--){
        $elementosContentItem[y].style.display = 'none';          
    }

    while(i--){
        $elementos[i].style.display = 'none';
    }

}

function show(n){
    var div = document.querySelector("[data-me='" + n + "']");
    div.style.display = 'block';
}

window.addEventListener('load', function(){
    var $links = document.getElementsByClassName("links-menu");

    for(var el of $links){ 
        el.addEventListener('click', function(){
            hide("view");
            show(this.getAttribute('data-div'));

        });
    }

});