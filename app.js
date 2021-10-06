$(".header-menu").click(function(){
    $(".sidebar").toggleClass("active");
})

$(".close-btn").click(function(){
    $('.sidebar').removeClass('active');
})