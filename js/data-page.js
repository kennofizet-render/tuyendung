var data = {"news":[
        {"author":"Lorem ipsum", "image":"images/courses-image1.jpg", "time":" 5 / 10 / 2018","clock":"10H", "name":"Lorem ipsum dolor sit amet.", "title_sub":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"author":"Lorem ipsum", "image":"images/courses-image2.jpg", "time":" 5 / 10 / 2018","clock":"10H", "name":"Lorem ipsum dolor sit amet.", "title_sub":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"author":"Lorem ipsum", "image":"images/courses-image3.jpg", "time":" 5 / 10 / 2018","clock":"10H", "name":"Lorem ipsum dolor sit amet.", "title_sub":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"author":"Lorem ipsum", "image":"images/courses-image4.jpg", "time":" 5 / 10 / 2018","clock":"10H", "name":"Lorem ipsum dolor sit amet.", "title_sub":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"author":"Lorem ipsum", "image":"images/courses-image5.jpg", "time":" 5 / 10 / 2018","clock":"10H", "name":"Lorem ipsum dolor sit amet.", "title_sub":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"author":"Lorem ipsum", "image":"images/courses-image1.jpg", "time":" 5 / 10 / 2018","clock":"10H", "name":"Lorem ipsum dolor sit amet.", "title_sub":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"author":"Lorem ipsum", "image":"images/courses-image2.jpg", "time":" 5 / 10 / 2018","clock":"10H", "name":"Lorem ipsum dolor sit amet.", "title_sub":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"author":"Lorem ipsum", "image":"images/courses-image3.jpg", "time":" 5 / 10 / 2018","clock":"10H", "name":"Lorem ipsum dolor sit amet.", "title_sub":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      ],"reviews":[
        {"name": "Lorem ipsum","rule":"Lorem ipsum dolor","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam","star":5},
        {"name": "Lorem ipsum","rule":"Lorem ipsum dolor","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam","star":5},
        {"name": "Lorem ipsum","rule":"Lorem ipsum dolor","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam","star":5},
        {"name": "Lorem ipsum","rule":"Lorem ipsum dolor","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam","star":5},
        {"name": "Lorem ipsum","rule":"Lorem ipsum dolor","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam","star":5},
        {"name": "Lorem ipsum","rule":"Lorem ipsum dolor","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam","star":5},
        {"name": "Lorem ipsum","rule":"Lorem ipsum dolor","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam","star":5},
      ]
    };



 for (var i = 0; i < data.news.length; i++) {
 var new_html = "<div class='col-md-4 col-sm-4'><div class='item'><div class='courses-thumb'><div class='courses-top'><div class='courses-image'><img src='"+data.news[i].image+"' class='img-responsive' alt=''></div><div class='courses-date'><span><i class='fa fa-calendar'></i> "+data.news[i].time+"</span><span><i class='fa fa-clock-o'></i> "+data.news[i].clock+"</span></div></div><div class='courses-detail'><h3><a href='#'>"+data.news[i].name+"</a></h3><p>"+data.news[i].title_sub+"</p></div><div class='courses-info'><div class='courses-author'><img src='images/author-image2.jpg' class='img-responsive' alt=''><span>"+data.news[i].author+"</span></div><div class='courses-price free'><a href='#'><span>Read</span></a></div></div></div></div></div>"
      $('#news-project-our-render').append(new_html);
 }
 for (var i = 0; i < data.reviews.length; i++) {
 var review_html = "<div class='col-md-4 col-sm-4'><div class='item'><div class='tst-image'><img src='images/tst-image1.jpg' class='img-responsive' alt=''></div><div class='tst-author'><h4>"+data.reviews[i].name+"</h4><span>"+data.reviews[i].rule+"</span></div><p>"+data.reviews[i].content+"</p><div class='tst-rating'><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i></div></div></div>";
      $('#review-user-render').append(review_html);
 }
 