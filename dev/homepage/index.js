import './index.scss';
  
const content = {
    videos: [
        "https://www.youtube.com/watch?v=SR8GqnVY19U&t=340s",
        "https://www.youtube.com/watch?v=g-2_0FOzMYg",
        "https://www.youtube.com/watch?v=ikzaG1VwTIA",
        "https://www.youtube.com/watch?v=RTjOIo_oMTk",
        "https://www.youtube.com/watch?v=fwb3RmJ7k_A",
        "https://www.youtube.com/watch?v=ratolK-yxPQ",
    ],
    animations: [
        "https://dribbble.com/shots/4503757-Sunnie-Sleeping",
        "https://dribbble.com/shots/4309821-Fund-A-Life",
        "https://dribbble.com/shots/4503754-Morphing-Animation",
        "https://dribbble.com/shots/4502461-Mortimer-the-Molar",
        "https://cdn.dribbble.com/users/1785918/screenshots/4502482/brio-bumper-v3.gif",
        "https://dribbble.com/shots/4502478-Bathtime",
    ],
    images:[
        "https://farm2.staticflickr.com/1636/24715328805_70ea7986fe_t.jpg",
        "https://www.flickr.com/photos/138055542@N06/24710712966/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/24347644559/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/39762921640/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/41571122781/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/25676667347/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/40547692981/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/40547693611/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/39139611380/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/40055136775/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/40055136755/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/41348901611/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/25676667527/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/40504902412/in/album-72157690055469520/",
        "https://www.flickr.com/photos/138055542@N06/26700934287/in/album-72157690055469520/",
    ]
}

function youtubeIframe(url) {
    const embedUrl = url.replace("watch?v=", "embed/");
    return '<iframe width="560" height="315" src="' + embedUrl + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
}

$(()=>{
    content.videos.forEach(url => {
        $('.content--videos .iframe-holder').append(youtubeIframe(url));
    });
    content.animations.forEach(url => {
        $('.content--animations').append($('<img/>').attr('src',url));
    });
    content.images.forEach(url => {
        $('.content--images').append($('<img/>').attr('src',url));
    });
    $('.link').click(function(){
        const content = $(this).data('content');
        if(content){
            $('.content').removeClass('visible');
            $(`.content--${content}`).addClass('visible');
            
            // Manage icon color based on which content type is selected:
            const colorIcons = $(this).data('color-icons') && $(this).data('color-icons').split(',') || [];
            $(`.icon`).removeClass('icon--color');
            for(let i = 0; i < colorIcons.length; i++){
                const iconName = colorIcons[i];
                $(`.icon.icon--${iconName}`).addClass('icon--color');
            }
        }
    });
});