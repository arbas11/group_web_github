function detail(num, str) {
    let artist = document.getElementById(`artistName${num}`);
    let title = document.getElementById(`itemTitle${num}`);
    let image = document.getElementById(`itemImg${num}`);
    let price = document.getElementById(`itemPrice${num}`);
    let mdlDetail = document.getElementById('mdl-detail');
    let mdlTitle = document.getElementById('mdl-title');
    let mdlImage = document.getElementById('mdl-img');
    let mdlPrice = document.getElementById('mdl-price');
    mdlTitle.innerHTML = `${title.innerHTML} by ${artist.innerHTML}`
    mdlImage.innerHTML = image.innerHTML;
    mdlDetail.innerHTML = str;
    mdlPrice.innerHTML = price.innerHTML;
}

let idNum = 10;
const uploadForm = document.getElementById('upload');
uploadForm.addEventListener('submit', function (e) {
    idNum += 1;
    let artist = document.getElementById('artistUpload').value;
    let picture = document.getElementById('imageUpload').value;
    let title = document.getElementById('titleUpload').value;
    let price = document.getElementById('priceUpload').value;
    let description = document.getElementById('descUpload').value;
    console.log(artist, picture, title, price, description)
    let item = document.createElement('div');
    item.classList.add("item-card", "card", "col-lg-3", "col-md-4", "col-sm-6", "col-xs-6");
    item.innerHTML = `<div class='item-header'><span id='artistName${idNum}' class='brand-name'>${artist}</span></div><span id='itemImg${idNum}'><img class='item-images img-fluid card-img-top' src='${picture}' alt='images'></span><span class='item-footer'><span id='itemTitle${idNum}' class='item-name'>${title}</span><span id='itemPrice${idNum}'class='price-tag'>$ ${price},-</span></span><button onclick="detail(${idNum}, '${description}')" type='button' class='btn btn-primary item-btn' data-bs-toggle='modal' data-bs-target='#exampleModal'>Detail</button>`
    let maincontent = document.getElementById('first-card');
    maincontent.insertAdjacentElement('afterend', item);
    e.preventDefault();
})