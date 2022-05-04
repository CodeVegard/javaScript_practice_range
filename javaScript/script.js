
document.getElementById('header_dom').innerHTML = ('<header class="header_dom"><div class="header_top"><a href="index.html"><img src="images/logo_negative.png" alt="logo image" class="logo"></a><p id="site_name"></div><div class="block"></p></div><label for="hamburger_menu" class="menubox"><i class="fas fa-bars" id="menu_icon"></i></label><input type="checkbox" name="hamburger_menu" id="hamburger_menu" /><nav class="navigation"><ul class="nav_undordered"><li class="nav_item"><a href="index.html">Home</a></li><li class="nav_item"><a href="">Here</a></li><li class="nav_item"><a href="">There</a></li><li class="nav_item"><a href="">Something</a></li><li class="nav_item"><a href="">Nothing</a></li><li class="nav_item"><a href="">Party</a></li></ul></nav>');

document.getElementById('footer_dom').innerHTML = '<div class="footer_contentbox"><div class="about"><h2 class="cs_header">Om Oss</h2><ul class="cs_ul"><li class="cs_li"><a href="">Om oss</a></li><li class="cs_li"><a href="">Aktiviteter</a></li><li class="cs_li">Epost:<a href="mailto:place@holder.com">place@holder.com</a></li></ul></div><div class="some"><a class="some_icon" href="https://www.instagram.com/" title="instagram"><i class="fab fa-instagram-square"></i></a></div></div>';

const pagename = document.getElementById('site_name');

let width = window.screen.width;


siteNameRewrite = function() {
    if (width <= 450) {
        document.getElementById('content').style.display = 'none';
    }
}

if (width <= 450){
    console.log('hello');
    pagename.innerHTML = 'JS PR';
}
