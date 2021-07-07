
//fetching data

var leaderdata = 
    [
        {
            "imagePath":"images/image1.jpg",
            "name": "Hugo Silva",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        },
        {
            "imagePath":"images/image1.jpg",
            "name": "Imanol Arias",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        },
        {
            "imagePath":"images/image1.jpg",
            "name": "Javier Bardem",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        }
    ]
    
    document.write('<ul>');
    for (x in leaderdata) {
        document.write('<li class="leader-data"><div><img src="'+leaderdata[x].imagePath+'"/>');
        document.write('<h6>'+leaderdata[x].name+'</h6>');
        document.write('<p>'+leaderdata[x].desc+'</p></div></li>');
    }
    document.write('</ul>');     



    //navigation bar
    var height = $('.navigation ul').outerHeight();
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('collapsed');
        if($('.navbar-toggle').hasClass('collapsed')) {
            console.log('close ul');
            $('.navigation ul').css({'display':'none','transition':'all 1s ease-in-out'});
        }
        else {
            console.log('open ul');
            $('.navigation ul').css({'display':'block','transition':'all 1s ease-in-out'});
        }
    });