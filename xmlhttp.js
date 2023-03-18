const contain = document.getElementsByClassName('contain');

const req = new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/name/india');
req.send();

req.addEventListener('load',function(){
    const [data,data1] = JSON.parse(this.responseText);

    // console.log(data.flags);
    const htmldoc = `
    <div>
        <img src="${data.flag}" alt="" srcset="">
        <h1>${data.capital}<h1>
    </div>
    `;
    contain.insertAdjacentHTML('afterbegin', htmldoc);

})