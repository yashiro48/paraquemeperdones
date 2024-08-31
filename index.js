const yes = document.querySelector('#yes');


yes.addEventListener('click',function () {
    alert ('La pagina cree que has tomado la mejor decision, pagina esta feliz ♥')})

    const nop=document.querySelector('#nop');

    nop.addEventListener('mouseover', function(){
        const randomX =parseInt(Math.random()+100);
        const randomY =parseInt(Math.random()*100)
        nop.style.setProperty('top',randomY +'%');
        nop.style.setProperty('left',randomX+'%');
        nop.style.setProperty('transform'`translate(-${randomX}%,-${randomY}%)`);
    })

    function mostrarIcono(){document.getElementById("milcono").classList.add("mostrar");}
    function ocultarIcono(){document.getElementById("milcono").classList.remove("mostrar");}
    


    setInterval(() => {mostrarIcono();
    setTimeout(() =>{ocultarIcono();},500);},1000);