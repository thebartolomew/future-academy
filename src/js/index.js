Fancybox.bind()


$('.age__faculty').on('click', 'div:not(.active)', function(){

    $(this).addClass('active').siblings().removeClass('active')
    .closest('div.age__video-block').find('div.age__video').removeClass('active').eq($(this).index()).addClass('active');

    

})


console.log(document.querySelector('.age__video-block'));