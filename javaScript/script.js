
const header = document.getElementById('header_dom');
const footer = document.getElementById('footer_dom');

header.innerHTML = ('<header class="header_dom"><div class="header_top"><a href="index.html"><img src="images/logo_negative.png" alt="logo image" class="logo"></a><p class="site_name"></p><div class="block"></p></div><label for="hamburger_menu" class="menubox"><i class="fas fa-bars" id="menu_icon"></i></label><input type="checkbox" name="hamburger_menu" id="hamburger_menu" /><nav class="navigation"><ul class="nav_undordered"><li class="nav_item"><a href="index.html">Home</a></li><li class="nav_item"><a href="">Here</a></li><li class="nav_item"><a href="">There</a></li><li class="nav_item"><a href="">Something</a></li><li class="nav_item"><a href="">Nothing</a></li><li class="nav_item"><a href="">Party</a></li></ul></nav>');
footer.innerHTML = '<div class="footer_contentbox"><div class="about"><h2 class="cs_header">Om Oss</h2><ul class="cs_ul"><li class="cs_li"><a href="">Om oss</a></li><li class="cs_li"><a href="">Aktiviteter</a></li><li class="cs_li">Epost:<a href="mailto:place@holder.com">place@holder.com</a></li></ul></div><div class="some"><a class="some_icon" href="https://www.instagram.com/" title="instagram"><i class="fab fa-instagram-square"></i></a></div></div>';

const pagename = document.getElementsByClassName('site_name')[0];
const headingOne = document.getElementById('heading_one');
let firstParagraph = document.getElementsByClassName('paragraph')[0];
let secondParahraph = document.getElementsByClassName('paragraph')[1];

let width = window.screen.width;

if (width <= 450){
    pagename.innerHTML = 'JS PR';
} else{
    pagename.innerHTML = 'JavaScript Practice Range';
}

if (width <= 450){
    headingOne.innerHTML = 'This is my H1 element, screen is small';
    firstParagraph.innerHTML = 'This screen is rather small, but that&#39;s OK. So am I &#128516;';
    secondParahraph.innerHTML = 'This is my second paragraph on small screens. However, I want this to also target the 3rd paragraph. More research is needed.';
} else {
    headingOne.innerHTML = 'Screen is big and this is my H1 element';
    firstParagraph.innerHTML = 'This screen is so big, I feel kinda small.';
    secondParahraph.innerHTML = 'This is the second paragraph on big screens. However, I want this to also target the 3rd paragraph. More research is needed.';
}
