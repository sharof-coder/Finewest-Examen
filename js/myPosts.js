const API_POST = 'https://jsonplaceholder.typicode.com/posts';
const API_IMG = 'https://jsonplaceholder.typicode.com/photos';
const cardBox = document.querySelector('.cards');

const getApi = (api_img, api_post) => {
    fetch(api_post)
    .then(ress => ress.json())
    .then(datas => datas.slice(4, 9).map((item) => {
        fetch(api_img)
        .then(res => res.json())
        .then(data => data.slice(4, 9).map((element) => {
            if(item.id === element.id){
                cardBox.innerHTML += `
                    <div class="card">
                        <div class="img-box">
                            <img src="${element.thumbnailUrl}" alt="IMG">
                        </div>
                        <div class="card-text">
                            <a href="#">Business</a>
                            <h2>${item.title}</h2>
                            <p>${item.body}</p>
                        </div>
                    </div>
                    `
            }
        }))
    }))
    
   
}
console.log(getApi(API_IMG,API_POST))