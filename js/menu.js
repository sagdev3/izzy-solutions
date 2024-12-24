(function(){

    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');
    const opcion1 = document.querySelector('.n1');
    const opcion2 = document.querySelector('.n2');
    const opcion3 = document.querySelector('.n3');
    const opcion4 = document.querySelector('.n4');

    openButton.addEventListener('click',()=>{
        menu.classList.add('nav_link--show');
    });

    closeMenu.addEventListener('click',()=>{
        menu.classList.remove('nav_link--show');
    });

    opcion1.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });
    opcion2.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });
    opcion3.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });
    opcion4.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });



})();