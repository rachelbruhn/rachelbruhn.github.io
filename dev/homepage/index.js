import './index.scss';
  
$(()=>{
    $('.link').click(function(){
        const content = $(this).data('content');
        if(content){
            $('.content').removeClass('visible');
            $(`.content--${content}`).addClass('visible');
            
            // Manage icon color based on which content type is selected:
            const colorIcons = $(this).data('color-icons').split(',');
            $(`.icon`).removeClass('icon--color');
            for(let i = 0; i < colorIcons.length; i++){
                const iconName = colorIcons[i];
                $(`.icon.icon--${iconName}`).addClass('icon--color');
            }
        }
    });
});