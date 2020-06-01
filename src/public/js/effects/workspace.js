function showContent(n){
    var div = document.querySelector("[data-content='" + n + "']");
    div.style.display = 'block';
}

window.addEventListener('load', function(){
    var $btn = document.getElementsByClassName("btn btn-primary");

    for(var bt of $btn){ 
        bt.addEventListener('click', function(){
            hide("content card");
            showContent(this.getAttribute('data-btn-content'));

        });
    }

});




