const form = document.querySelector('.form')
const email = document.querySelector('.email')
const pass = document.querySelector('.pass')
const btn = document.querySelector('.add')
const err= document.querySelector('h4')
const b = document.querySelector("button");
const input = document.querySelector('.input-login')
const block1 = document.querySelector('.block1')
const btn23 = document.querySelector('.btn23')




    function all() {
    if (input.value === '' &&  email.value === '' && pass.value === ''){
        alert('заполните все поля')
        return block1.innerHTML = ``
    }else if (input.value === ''){
        alert('заполните поле name')
    }else if (email.value === ''){
        alert('заполните поле email')
    }else if (pass.value === ''){
        alert('заполните поле img url')
    }
    block1.innerHTML += `
           <div style="margin-bottom: 30px;" class="we">
            <div style="background: transparent; border-radius: 10px; border: 3px solid #0448a2; width: 700px; height: 100px;display: flex;align-items: center;gap: 100px">
                <div
                    style=" margin-left: 10px; height: 100px;display: flex;justify-content: center;align-items: center">
                    <img style="width: 100px; margin-right: 10px;" src="${pass.value}" alt=""></div>
                <div style="color: white; display: flex;align-items: center;flex-direction: column;">
                    <h5>name:${input.value}  </h5>
                    <h5>email:${email.value}</h5>
                </div>
                <button style="border: 1px solid black;" class="del-btn btn bg-transparent ">Delete
                </button
            </div>
        </div>
`

        input.value = ''
        email.value = ''
        pass.value = ''
    }




    btn23.addEventListener('click',(e)=>{
      all()
    })


block1.addEventListener('click',(e)=>{
    if (e.target.classList.contains("del-btn")) {
        e.target.parentNode.remove()
    }
})




const showDialog = () => {
    document.getElementById('dialog').classList.add('show')
    // const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    // const body = document.body;
    // // body.style.position = 'fixed';
    // body.style.top = `-${scrollY}`;
};
const closeDialog = () => {
    // const body = document.body;
    // const scrollY = body.style.top;
    // body.style.position = '';
    // body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('dialog').classList.remove('show');
}
// window.addEventListener('scroll', (e) => {
//     document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
//
// });






