/*!
 * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict
    //논문 코드
    fetch('js/paper.json')
        .then(response => response.json())
        .then(data => {
            let html = []
            for (let i = 0; i < data.length; i++) {
                html.push('<div class="year">' + data[i].year + '</div>');
                for (let j = 0; j < data[i].categories.length; j++) {
                    html.push('<div class="to">' + '<strong>' + data[i].categories[j].category + '</strong>' + ' (' + data[i].categories[j].subcategory + ')</div>');
                    html.push('<div class="pub_content"><br/><p>');
                    for (let z = 0; z < data[i].categories[j].papers.length; z++) {

                        html.push('<span class="paper-subject">' + data[i].categories[j].papers[z].paper + '</span><br>');
                        html.push(data[i].categories[j].papers[z].name);
                        html.push(', ' + data[i].categories[j].papers[z].pub + '<br>');
                        if (data[i].categories[j].papers[z].link !== "") {
                            html.push('<a href="' + data[i].categories[j].papers[z].link + '">[link]</a>');
                        }
                        if (data[i].categories[j].papers[z].originalcode !== "") {
                            html.push('<a href="' + data[i].categories[j].papers[z].originalcode + '">[original code]</a>');
                        }
                        if (data[i].categories[j].papers[z].domainbedcode !== "") {
                            html.push('<a href="' + data[i].categories[j].papers[z].domainbedcode + '">[domainbed code]</a>');
                        }
                        html.push('</p>')
                        if (z < data[i].categories[j].papers.length - 1) {
                            html.push('</br>')
                        }
                    }
                    html.push('</div>')
                }
                $(".paper_list").html(html.join(''))
            }
        })

    fetch('js/people.json')
        .then(response => response.json())
        .then(data_ => {
            let html_ = []
            console.log(data_.card[1].subcard[2].position);
            for (let i = 0; i < data_.card.length; i++) { //메인카드 : 교수님 학생
                for (let j = 0; j < data_.card[i].subcard.length; j++) { //서브카드 :(교수님) (석사, 학부연구생, 졸업생)
                    html_.push('<div class="container"><div class="text-center">');
                    if (data_.card[i].maintype === "professer") { // 교수님 카드
                        html_.push('<h2 class="section-heading text-uppercase">People</h2>');
                        html_.push('<br><h3 class="section-subheading text-muted">' + data_.card[i].subcard[j].position + '</h3></div><hr>');
                        html_.push('<div class="card mb-3" style="max-width: 100%;"><div class="row g-0">');
                    } else if (data_.card[i].maintype === "student") { // 학생
                        html_.push('<br><h3 class="section-subheading text-muted">' + data_.card[i].subcard[j].position + '</h3></div><hr>');
                        html_.push('<div class="row">');
                    }
                    for (let k = 0; k < data_.card[i].subcard[j].contents.length; k++) {
                        if (data_.card[i].subcard[j].position === "Principal Investigator") { // 교수님 카드 처리
                            html_.push('<div class="col-md-4">');
                            html_.push('<img  src="' + data_.card[i].subcard[j].contents[k].img_link + '" height="100%" width="100%"></div>');
                            html_.push('<div class="col-md-8"><div class="card-body"><br><br>');
                            html_.push('<h2 class="card-title">' + data_.card[i].subcard[j].contents[k].name + '</h2><hr>')
                            html_.push('<p class="card-text">' + data_.card[i].subcard[j].contents[k].rank + '<br>' + data_.card[i].subcard[j].contents[k].department + '<br>');
                            html_.push(data_.card[i].subcard[j].contents[k].email + '<br>' + data_.card[i].subcard[j].contents[k].number + '</p><hr>');
                            html_.push('<p class="card-text">' + data_.card[i].subcard[j].contents[k].ph_d);
                            html_.push(' (Adviser: Professor <a href="' + data_.card[i].subcard[j].contents[k].adviserlink + '">' + data_.card[i].subcard[j].contents[k].adviser_professor + '</a>)<br/>');
                            html_.push(data_.card[i].subcard[j].contents[k].ms + ' <br/><br/>');
                            html_.push('<strong>Experience</strong><br/>');
                            html_.push(data_.card[i].subcard[j].contents[k].experience_1 + '<br/>' + data_.card[i].subcard[j].contents[k].experience_2 + '<br/>');
                            html_.push('</p> </div>')
                        }
                        else if (data_.card[i].maintype === "student") { //학생 카드 처리
                            html_.push('<div class="cm col-lg-3 col-md-4 mb-6">');
                            html_.push('<div class="card h-100">');

                            if (data_.card[i].subcard[j].contents[k].img_link !== "") { // 사진 필요한 경우
                                html_.push('<img class="card-img-top imgchange" src="' + data_.card[i].subcard[j].contents[k].img_link + '" alt="">')
                            }
                            html_.push('<div class="card-body"> <h3 class="card-title">' + data_.card[i].subcard[j].contents[k].name + '</h3><hr>')
                            html_.push('<p class="card-text"><strong>')

                            if (data_.card[i].subcard[j].contents[k].description_type === "Research Areas") { // reserch area인 경우
                                html_.push(data_.card[i].subcard[j].contents[k].description_type)
                                html_.push('<br>')
                            }
                            html_.push('</strong><small>')

                            for (let l = 0; l < data_.card[i].subcard[j].contents[k].description.length; l++) {
                                if (data_.card[i].subcard[j].contents[k].description[l].area !== '') {
                                    html_.push(data_.card[i].subcard[j].contents[k].description[l].area + '<br>')
                                }
                            }
                            if (data_.card[i].subcard[j].contents[k].intern !== "") { // 인턴인 경우
                                html_.push('Intern@'+data_.card[i].subcard[j].contents[k].intern)
                            }
                            else if (data_.card[i].subcard[j].position === "Graduate Students") {
                                html_.push('<br>')
                            }
                            html_.push('</small>');

                            html_.push('</p></div>');
                            if (data_.card[i].subcard[j].contents[k].email !== "") { // email이 필요한 경유
                                html_.push('<div class="card-footer">');
                                html_.push('<div class="row align-items-center">');
                                html_.push('<div class="col-lg-9 text-lg-left"><small class="text-muted">' + data_.card[i].subcard[j].contents[k].email + '</small></div>');
                                html_.push('<div class="col-lg-3 text-lg-right">');
                                html_.push('<a class="btn btn-light btn-social mx-2" href="' + data_.card[i].subcard[j].contents[k].github_link + '">')
                                html_.push('<span style="font-size:1.5em;"><i class="far fa-address-card"></i></span></a>');
                                html_.push('</div></div></div>');
                            }
                            html_.push('</div></div>')
                        }
                    }
                    html_.push('</div></div>')
                    if (data_.card[i].maintype === "professer") {
                        html_.push('</div></div></div>');
                    }
                }
                if (data_.card[i].maintype === "professer") {
                    html_.push('</div>');
                }
            }
            $(".people_card").html(html_.join(''))

            $(".imgchange").mouseover(function() {
                $(this).attr("src", $(this).attr("src").replace("black", "color"));
            });
            $(".imgchange").mouseout(function() {
                $(this).attr("src", $(this).attr("src").replace("color", "black"));
            });
        })
})(jQuery); // End of use strict
//    html_[0].shift(); 맨 처음 놈들 다 빼줘야 함
