console.log("Hello World");

document.getElementById('slogan').innerText = "WE HATE OUR CUSTOMERS";

document.getElementById('all').style.backgroundColor = '#2f7884';

document.body.style.fontFamily = 'impact';

document.querySelectorAll('#hot .item').forEach(function(item){ 
    item.style.margin= '10px 20px' 
    item.style.boxShadow = '2px 2px 10px'})