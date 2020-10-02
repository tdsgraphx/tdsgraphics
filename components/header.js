var header = document.getElementById('header');

// var headerBackground = document.getElementById('header-background');
// headerBackground = style.backgroundImage('../images/demo/backgrounds/banner_image.jpg');

header.innerHTML = '<div id="logo" class="fl_left">' +
                    '<img src="../images/demo/tds.png" alt="logo" />' +
                    '<h1><a href="index.html">TDS GRAPHICS</a></h1>' +
                    '</div>' +

                    '<nav id="mainav" class="fl_right">' +
                    '<ul class="clear">' +
                    '<li><a href="../index.html">Home</a></li>' +
                    '<li><a class="drop" href="#">About</a>' +
                        '<ul>' +
                        '<li><a href="../pages/history.html">Brief History</a></li>' +
                        '<li><a target="_blank" href="https://thabisonjabulomjwara.vercel.app/">Designer</a></li>' +
                        '<li><a href="../pages/gallery.html">Gallery</a></li>' +
                        '<li><a title="Link Disabled" href="#">Partnerships</a></li>' +
                        '</ul>' +
                    '</li>' +
                    '<li><a class="drop" href="#">Downloads</a>' +
                        '<ul>' +
                        '<li><a target="_blank" href="https://thabisonjabulomjwara.vercel.app/">Portfolio</a></li>' +
                        '<li><a target="_blank" title="Link Disabled" href="#">Product Catalog</a></li>' +
                        '</ul>' +
                    '</li>' +
                        '<li><a href="../pages/services.html">Services</a></li>' +
                    '</ul>' +
                    '</nav>'
;