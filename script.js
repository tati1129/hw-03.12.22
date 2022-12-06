// Необходимо реализовать интерфейс, с полем ввода (textarea). При обновлении страницы текст должен сохраняться в поле ввода. 
// Реализуйте данное приложение через textarea и событие input.



const text_input = document.querySelector('.text_input');
const btn = document.querySelector('.btn_clear');


text_input.value = localStorage.getItem('textIn');
text_input.addEventListener('input', (event) => {
    const value = event.target.value;
    // console.log(event.target.value);
    localStorage.setItem('textIn', value);
    // console.log(event.target.name);
})

btn.addEventListener('click', ()=>{
    text.value = '';
    localStorage.setItem('textIn', '')
})

