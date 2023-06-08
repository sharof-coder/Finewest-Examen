const API_POST = 'https://jsonplaceholder.typicode.com/posts';
const API_IMG = 'https://jsonplaceholder.typicode.com/photos';
const cardBox = document.querySelector('.cards');
const startUpPage = document.querySelector('.startup-box')
const blogPage = document.querySelector('.blogPost-page')

const getApi = (api_img, api_post) => {
    fetch(api_post)
    .then(ress => ress.json())
    .then(datas => datas.slice(4, 7).map((item) => {
        fetch(api_img)
        .then(res => res.json())
        .then(data => data.slice(4, 7).map((element) => {
            if(item.id === element.id){
                cardBox.innerHTML += `
                    <div class="card blogPost-page">
                        <div class="img-box">
                            <img src="${element.thumbnailUrl}" alt="IMG">
                        </div>
                        <div class="card-text blogPost-page">
                            <span>By <a href="#">John Doe</a>   |   Aug 23, 2021 </span>
                            <h3>${item.title}</h3>
                            <p>${item.body}</p>
                        </div>
                    </div>
                    `
            }
        }))
    }))
    
   
}
getApi(API_IMG,API_POST)

startUpPage.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target);
    window.location.href = '../pages/category.html'
})
