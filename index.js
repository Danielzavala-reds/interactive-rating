const btnContainer = document.querySelector('.btn-container');
const descriptionContainer = document.querySelector('.description-container');
const star = document.querySelector('.star-circle');
const title = document.querySelector('.title');
const h1 = document.querySelector('h1');
const sumbitAndP = document.querySelector('#contentPandSumbit')
const pChange = document.querySelector('.description')
// console.log(btnSubmit);
const btnSubmit = document.querySelector('#btn-submit');
const buttons = document.querySelectorAll('.btn-circle')
// console.log(buttons);

let rate = null;

const btnSelected = (e) => {
     rate = e.target.value;
}

const submit = () => {
    star.remove();
    const img = document.createElement('img');
    img.src = './assets/images/illustration-thank-you.svg'
    title.classList.add('title-container')
    title.append(img);
    
    h1.remove();
    
    const result = document.createElement('small');
    result.innerHTML = `You selected ${rate} out of 5`;
    descriptionContainer.append(result)
    descriptionContainer.classList.add('desc-container')
    result.classList.add('colorP')

    pChange.remove();

    btnContainer.innerHTML = `<h1> Thank you! </h1>`
    
    const pCreate = document.createElement('p');
    pCreate.innerHTML = ` We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! `
    pCreate.classList.add('createP')
    sumbitAndP.append(pCreate);
    btnSubmit.remove()
};



for (const button of buttons){
    button.addEventListener('click', btnSelected);
}

btnSubmit.addEventListener('click', submit);



