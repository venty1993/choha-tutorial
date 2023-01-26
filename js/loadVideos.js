const content = 'coffee';
const main = document.querySelector('main')

const coffee = [
    {
        name:"민트모카",
        url:"https://www.youtube.com/embed/uDW1E4RKbHg"
    },
    {
        name:"테스트인크라",
        url:"https://www.youtube.com/embed/CMElEwsUhj4"
    },
]

coffee.forEach(element => {
    makeArticle(element);
});

function makeArticle(target) {

    const createArticle = document.createElement('article');
    createArticle.classList.add('menu-in-youtube');
    
    const createH2 = document.createElement('h2');
    createH2.classList.add('menu-title');
    
    const h2Text = document.createTextNode(target.name);
    createH2.appendChild(h2Text);
    
    const createIframe = document.createElement('iframe');
    createIframe.setAttribute('frameborder','0');
    createIframe.setAttribute('src',target.url);
    
    createArticle.appendChild(createH2);
    createArticle.appendChild(createIframe);
    
    main.appendChild(createArticle); 
}