"use strict"

function cargaPagina(){

    function stopLoading(){
        let contenedor = document.querySelector("#contenedor_carga");
        contenedor.style.visibility = "hidden";
    }

    function loading(){
        let contenedor = document.querySelector("#contenedor_carga");
        contenedor.style.visibility = "visible";
        setTimeout(function(){
            stopLoading();
        }, 3000);
    }
    
    loading();
    
    let end = new Date('12/17/2020 9:30 AM');

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;

    function showRemaining() {
        let now = new Date();
        let distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.querySelector('.clock').innerHTML = 'EXPIRED!';
            return;
        }

        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        document.querySelector('.clock').innerHTML = days + ' dias, ';
        document.querySelector('.clock').innerHTML += hours + ' horas, ';
        document.querySelector('.clock').innerHTML += minutes + ' minutos y ';
        document.querySelector('.clock').innerHTML += seconds + ' segundos';
    }

    timer = setInterval(showRemaining, 1000);

    let acc = document.querySelectorAll(".btnAcordeon");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    window.onscroll=function() {
        let pos=window.pageYOffset || document.documentElement.scrollTop;
        if(pos < 1900){
            let ele=document.querySelector(".formMove");
            ele.style.transform = "translateX("+ pos * 0.7 +"px)";
        }
    }

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        let dots = document.querySelectorAll(".dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }    
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000);
    }

    function toggleMenu (event) {
        this.classList.toggle('is-active');
        document.querySelector( ".menuppal" ).classList.toggle("is_active");
        event.preventDefault();
    }
    
    let  menu = document.querySelector('.hamburger');
    menu.addEventListener('click', toggleMenu, false);

    document.querySelector(".menuHome").addEventListener("click", function(){            
        loading();
        document.querySelector( ".menuppal" ).classList.toggle("is_active");
        document.querySelector( ".hamburger" ).classList.toggle("is-active");
        window.scroll(0, 660);
    });
    document.querySelector(".menuCalendario").addEventListener("click", function(){          
        loading();
        document.querySelector( ".menuppal" ).classList.toggle("is_active");
        document.querySelector( ".hamburger" ).classList.toggle("is-active");       
        window.scroll(0, 1600);
    });
    document.querySelector(".menuFormulario").addEventListener("click", function(){  
        loading();
        document.querySelector( ".menuppal" ).classList.toggle("is_active");
        document.querySelector( ".hamburger" ).classList.toggle("is-active");
        window.scroll(0, 2060);
    });

    let btn = document.querySelector('.buttonF');
    btn.addEventListener('click', () => {
        btn.classList.remove('animate')
        setTimeout(() => btn.classList.add('animate'), 100)
    });
}


document.addEventListener("DOMContentLoaded", cargaPagina);

