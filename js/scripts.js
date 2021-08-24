/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {   
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);



    //논문 코드
    fetch('js/paper.json')
    .then(response => response.json())
    .then(data => {
      let html = []
      for(var i=0; i<data.length; i++){
        html.push('<div class="year">'+data[i].year+'</div>');
        for(var j=0; j<data[i].categories.length; j++){
            html.push('<div class="to">'+'<strong>'+data[i].categories[j].category+'</strong>'+' ('+data[i].categories[j].subcategory+')</div>');
            html.push('<div class="pub_content"><br/><p>');
            for(var z=0; z<data[i].categories[j].papers.length; z++){

                html.push('<span class="paper-subject">'+data[i].categories[j].papers[z].paper +'</span><br>');
                html.push(data[i].categories[j].papers[z].name);
                html.push(', '+data[i].categories[j].papers[z].pub+'<br>');
                html.push('<a href="'+data[i].categories[j].papers[z].link+'">[link]</a>');
                if (data[i].categories[j].papers[z].originalcode !=""){
                    html.push('<a href="'+data[i].categories[j].papers[z].originalcode+'">[original code]</a>');
                };
                if (data[i].categories[j].papers[z].domainbedcode !=""){
                    html.push('<a href="'+data[i].categories[j].papers[z].domainbedcode+'">[domainbed code]</a>');
                };
                html.push('</p>')
                if (z <data[i].categories[j].papers.length -1){
                    html.push('</br>')
                }                
            }
            html.push('</div>')
        }
        $(".paper_list").html(html.join(''))
      }
    }
)

fetch('js/people.json')
.then(response => response.json())
.then(data_ => {
    let html_ = []
    console.log(data_.card[1].subcard[2].position);
    for(var i=0; i<data_.card.length; i++){    //메인카드 : 교수님 학생
        for(var j=0; j<data_.card[i].subcard.length; j++){    //서브카드 :(교수님) (석사, 학부연구생, 졸업생)
            html_.push('<div class="container"><div class="text-center">'); 
            if(i == 0){ // 교수님 카드
                html_.push('<h2 class="section-heading text-uppercase">People</h2>');
            }
            html_.push('<br><h3 class="section-subheading text-muted">'+ data_.card[i].subcard[j].position+ '</h3></div><hr>');
            if (i==0){ // 교수님 카드
                html_.push('<div class="card mb-3" style="max-width: 100%;"><div class="row g-0">');
            }
            else{ // 학생
                html_.push('<div class="row">');
            }
            for(var k=0; k<data_.card[i].subcard[j].contents.length; k++){
                if (i==0){ // 교수님 카드 처리
                    html_.push('<div class="col-md-4">');
                    html_.push('<img  src="'+data_.card[i].subcard[j].contents[k].img_link+'" height="100%" width="100%"></div>');
                    html_.push('<div class="col-md-8"><div class="card-body"><br><br>');
                    html_.push('<h2 class="card-title">'+data_.card[i].subcard[j].contents[k].name+'</h2><hr>')
                    html_.push('<p class="card-text">'+data_.card[i].subcard[j].contents[k].rank+'<br>'+data_.card[i].subcard[j].contents[k].Department+'<br>');
                    html_.push(data_.card[i].subcard[j].contents[k].email+'<br>'+data_.card[i].subcard[j].contents[k].number+'</p><hr>');
                    html_.push('<p class="card-text">'+data_.card[i].subcard[j].contents[k].fromD);
                    html_.push(' (Adviser: Professor <a href="'+data_.card[i].subcard[j].contents[k].adviserlink+'">'+data_.card[i].subcard[j].contents[k].AdviserProfessor+'</a>)<br/>');
                    html_.push(data_.card[i].subcard[j].contents[k].formM+' <br/><br/>');
                    html_.push('<strong>Experience</strong><br/>');
                    html_.push(data_.card[i].subcard[j].contents[k].experience1+'<br/>'+data_.card[i].subcard[j].contents[k].experience2+'<br/>');
                    html_.push('</p> </div>')                    
                }
                if (i==1){ //학생 카드 처리
                    html_.push('<div class="cm col-lg-3 col-md-4 mb-6">');
                    html_.push('<div class="card h-100">');  
                    if(data_.card[i].subcard[j].position != 'Alumni'){ //졸업생 제외처리
                        html_.push('<img class="card-img-top imgchange" src="'+data_.card[i].subcard[j].contents[k].img_link +'" alt="">')
                    }

                    html_.push('<div class="card-body"> <h3 class="card-title">'+data_.card[i].subcard[j].contents[k].name+'</h3><hr>')
                    html_.push('<p class="card-text"><strong>')
                    if(data_.card[i].subcard[j].position != 'Alumni'){
                        html_.push(data_.card[i].subcard[j].contents[k].description_type)
                        html_.push('</strong><br><small>')
                    }
                    else{
                        html_.push('</strong><small>')
                    }
                    for (var l=0; l<data_.card[i].subcard[j].contents[k].description.length; l++){
                        if (data_.card[i].subcard[j].contents[k].description[l].Area != ''){
                            html_.push(data_.card[i].subcard[j].contents[k].description[l].Area +'<br>')
                        }
                    } 
                    html_.push('</small></p></div>');
                    if(data_.card[i].subcard[j].position != 'Alumni'){ //졸업생 제외처리
                        html_.push('<div class="card-footer">');
                        html_.push('<div class="row align-items-center">');
                        html_.push('<div class="col-lg-9 text-lg-left"><small class="text-muted">'+ data_.card[i].subcard[j].contents[k].email+'</small></div>');                        
                        html_.push('<div class="col-lg-3 text-lg-right">');
                        html_.push('<a class="btn btn-light btn-social mx-2" href="'+data_.card[i].subcard[j].contents[k].githublink+'">')
                        html_.push('<span style="font-size:1.5em;"><i class="far fa-address-card"></i></span></a>');
                        html_.push('</div></div>');
                    }
                    html_.push('</div></div></div>')                                   
                }
            }
            html_.push('</div></div>')
            if(i==0){
                html_.push('</div></div></div>');
            }
        }
        if(i==0){
            html_.push('</div>');
        }
    }
    $(".people_card").html(html_.join(''))    
    
    $(".imgchange").mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace("black","color"));
    });
    $(".imgchange").mouseout(function() {
        $(this).attr("src", $(this).attr("src").replace("color","black"));
    });
}
)
})(jQuery); // End of use strict
//    html_[0].shift(); 맨 처음 놈들 다 빼줘야 함