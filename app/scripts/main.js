//JS here

const animationDuration = 2000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( animationDuration / frameDuration );
const easeOutQuad = t => t * ( 2 - t );

const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	const counter = setInterval( () => {
		frame++;
		const progress = easeOutQuad( frame / totalFrames );
		const currentCount = Math.round( countTo * progress );

		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

const runAnimations = () => {
	const countupEls = document.querySelectorAll( '.num' );
	countupEls.forEach( animateCountUp );
};

$('.why').waypoint(function() {
    runAnimations()
});

document.addEventListener('DOMContentLoaded', event => {
    const buttonMenu = document.querySelector('#btn-menu')
    const nav = document.querySelector('.header__nav')
    const btnColor = document.querySelectorAll('#btn-menu div');
    const btnColorArr = Array.from(btnColor)

    const header = document.querySelector('.header')
    
    window.addEventListener('scroll' ,function(){
        if(this.scrollY > 850){
            header.classList.add("sticky");
        }
        else{
            header.classList.remove("sticky");
        }

        if(this.scrollY > 850){
            document.querySelector('.scroll-top').classList.add("show");
        }else{
            document.querySelector('.scroll-top').classList.remove("show");
        }
    })

    buttonMenu.onclick = function(){
        nav.classList.toggle('active')
        btnColorArr.forEach(element => element.classList.toggle('changeColor'))
        var bodyCannotScroll = document.querySelector('body');
        bodyCannotScroll.classList.toggle('cannotScroll')
    }
    
    document.querySelector('.scroll-top').onclick = function(){
        $('html').animate({scrollTop: 0});
    }
    

    
})

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
