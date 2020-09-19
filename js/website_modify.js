console.log("Hello World");

document.getElementById('slogan').innerText = "WE HATE OUR CUSTOMERS";

document.getElementById('all').style.backgroundColor = '#2f7884';

document.body.style.fontFamily = 'impact';

document.querySelectorAll('#hot .item').forEach(function(item){ 
    item.style.margin= '10px 20px' 
    item.style.boxShadow = '2px 2px 10px'})

    var newsletterEl = document.createElement('li');
    newsletterEl.classList = 'nav-item dropdown menu-large';
    var navLinkEl = document.createElement('a')
    navLinkEl.classList = 'nav-link';
    navLinkEl.innerText = 'Newsletter';
    navLinkEl.style.cursor = 'pointer';
    newsletterEl.appendChild(navLinkEl);
    document.querySelectorAll('#navigation .navbar-nav.mr-auto')[0].appendChild(newsletterEl);

    
    