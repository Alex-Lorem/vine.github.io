window.onload = function () {
    let inner = document.querySelector('.preloader__percents');
    let wine_moving = document.querySelector('.preloader__wine--hidden');
    let square_falling = document.querySelector('.preloader__square');
   
    window.setTimeout(function () {
         
        var w = 0,
        t = setInterval(function() {
                w = w + 1;
                inner.textContent = w+'%';

                if (w === 100){
                    clearInterval(t);
                }
            }, 20);
      wine_moving.classList.add('moving');
    
      window.setTimeout(function () {square_falling.classList.add('falling');
       window.setTimeout(function () {document.body.classList.add('loaded')
        window.setTimeout(function () {
        document.body.classList.add('loaded_hiding')},1000)},1000);},2500)
    }, 2000);
     
    $('#collection').click(e =>{ 
        e.preventDefault();
        if($('.collection').hasClass('collection--active')){
            $('.collection').removeClass('collection--active');
            $('.collection__wrapper').removeClass('wrapper--active');
            $('.left__list').removeClass('list--active');
            $('.collection__right').removeClass('right--active');
        } else{
        $('.collection').addClass('collection--active');
        $('.collection__wrapper').addClass('wrapper--active');
        $('.left__list').addClass('list--active');
        $('.collection__right').addClass('right--active');
        }
    });
    
    
    
    //slick
    $('.reviews__container').slick({
        dots:true,
        
    });
    
    //select
    
    
    const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}
    
    
    
  }