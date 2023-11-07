const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
gallery.style.display = "flex";
gallery.style.flexDirection = "row";
gallery.style.flexWrap = "wrap";
let htmlStr = '';

for (let i = 0; i < images.length; i++){
  htmlStr += `<li style="flex: 0 0 calc(33.33% - 10px); margin:5px; list-style:none;"><img style="width:100%;" src="${images[i].url}" alt="${images[i].alt}"}></li>`

}

gallery.insertAdjacentHTML('beforeend', htmlStr);


