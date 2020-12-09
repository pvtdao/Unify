//JS here
$(".single-item").slick({
    // dots: true,
    infinite: true,
    arrows: true,
});

document.addEventListener('DOMContentLoaded', event => {
    const buttonMenu = document.querySelector('#btn-menu')
    const nav = document.querySelector('.header__nav')
    const btnColor = document.querySelectorAll('#btn-menu div');
    const btnColorArr = Array.from(btnColor)
    
    const test = document.querySelector('.header + .hero + .skill')
    console.log(test);

    const header = document.querySelector('.header')
    
    window.addEventListener('scroll' ,function(){
        if(this.scrollY > 850){
            header.classList.add("sticky");
        }
        else{
            header.classList.remove("sticky");
        }
    })

    buttonMenu.onclick = function(){
        nav.classList.toggle('active')
        btnColorArr.forEach(element => element.classList.toggle('changeColor'))
        var bodyCannotScroll = document.querySelector('body');
        bodyCannotScroll.classList.toggle('cannotScroll')
    }
    
    
})

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
