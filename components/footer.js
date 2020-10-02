var footer = document.getElementById('footer');
var copyrightText = document.getElementById('copyright');

copyrightText.innerHTML = '<p class="fl_left">' +
                            'Copyright &copy;2020 - All Rights Reserved -' + '<a href="#">' +
                                'TDS GRAPHICS' +
                            '</a>' + 
                          '</p>'
;
                          
footer.innerHTML = '<div class="one_quarter first">' +
                        '<h6 class="heading">Thinking Made Visble</h6>' +
                        '<p class="btmspace-30">TDS Graphics social media platforms:</p>' +

                        '<ul class="faico clear">' +
                            '<li><a class="faicon-facebook" target="_blank" href="https://facebook.com/tdsgraphx/"><i class="fa fa-facebook"></i></a></li>' +
                            '<li><a class="faicon-instagram" target="_blank" href="https://instagram.com/tds_graphx/"><i class="fa fa-instagram"></i></a></li>' +
                            '<li><a class="faicon-github" target="_blank" href="https://github.com/tdsgraphx/"><i class="fa fa-github"></i></a></li>' +
                            '<li><a class="faicon-whatsapp" target="_blank" href="https://wa.me/message/GCYYZ5E7MKYGH1"><i class="fa fa-whatsapp"></i></a></li>'+
                        '</ul>' +
                    '</div>' +

                    '<div class="one_quarter">' +
                        '<h6 class="heading">Contact Details</h6>' +
                        '<ul class="nospace linklist contact">' +
                    '<li><i class="fa fa-map-marker"></i>' +
                        '<address>' +
                        '800664 Plessislear, Piertemaritzburg, 3201' +
                        '</address>' +
                    '</li>' +
                    '<li><i class="fa fa-phone"></i> +27 67 610 2608</li>' +
                    '<li><i class="fa fa-whatsapp"></i> +27 68 269 5349</li>' +
                    '<li><i class="fa fa-envelope-o"></i> info@tdsgraphics.co.za</li>' +
                    '</ul>' +
                    '</div>'
;

document.getElementById('newsletter-form').addEventListener('submit', saveValues);

var mailTo = 'designer@tdsgraphics.co.za';
var mailPass = 'password';
var smtpServer = ' ';
var emailHost = ' ';

function saveValues(e) {

    var firstName = document.getElementById('name').value;
    var emailAddress = document.getElementById('email').value;

    var sendEmail = ` 
        About Email : NEWSLETTER SUBSCRIPTION
        New Email from : ${emailAddress};
        New Subscription by ${firstName};
    `;

    // show info to confirm
    alert(`THIS IS WHAT YOUR EMAIL LOOKS LIKE
    
        ${sendEmail}
    `);
}

var setEmailVars = {

    name : firstName,
    email : emailAddress,
    
}

// '<div class="one_quarter">' +
// '<h6 class="heading">Newsletter Sign Up</h6>' +
// '<p class="btmspace-30">Weekly tips for managing your business online</p>' +
// '<form id="newsletter-form" method="post" action="#">' +
// '<fieldset>' +
//     '<legend>Newsletter:</legend>' +
//     '<input class="btmspace-15" id="name" type="text" value="" placeholder="Name">' +
//     '<input class="btmspace-15" id="email" type="text" value="" placeholder="Email">' +
//     '<button type="submit" value="submit">Submit</button>' +
// '</fieldset>' +
// '</form>' +
// '</div>