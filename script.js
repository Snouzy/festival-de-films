$(document).ready(function(){
    //Navbar
    $('.sidenav').sidenav();
    
    //Slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider,{
        indicators: false,
        height: 750,
        transition: 500,
        interval: 6000
    });

    //Zoom sur image
    const gallery = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(gallery,{});
    
    //Slider de réservation
    const sliderReservation = document.getElementById('test-slider');
    noUiSlider.create(sliderReservation, {
        start: [1, 10],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
            'min': 0,
            'max': 100
        },
        format: wNumb({
            decimals: 0
        })
    });
    
    const rangeDiv = document.querySelector('.range-div');
    console.log(rangeDiv);
    
});