const pages=['HOME', 'EXPERIENCE' , 'SPECIAL','EXAMPLES'];
let containerHTML=document.querySelector('.container').innerHTML;
let activePage ;
activePage = document.querySelector('.js-page-button1')
    .addEventListener('click', ()=> {
    containerHTML = '<h1> container1 </h1>';
})
