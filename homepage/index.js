import './index.scss';
  
$(()=>{
    $('.link').click(function(){
        const content = $(this).data('content');
        if(content){
            $('.content').removeClass('visible');
            $(`.content--${content}`).addClass('visible');
        }
    });
});