let success = document.getElementById('success');
let error = document.getElementById('error');
let invalid = document.getElementById('invalid');
let successMsg = ' <i class="fa-solid fa-circle-check"></i>Successfuy submitted';
let errorMsg = ' <i class="fa-solid fa-circle-xmark"></i>Please fix the error';
let invalidMsg = ' <i class="fa-solid fa-circle-exclamation"></i>Invalid input , check again';


let toastBox = document.getElementById("toastBox");
 

success.addEventListener('click',()=>{
    let toast = document.createElement('div');
    toast.classList.add('successToast');
    toast.innerHTML = successMsg ;
    toastBox.appendChild(toast);
    setTimeout(()=>{
        toast.remove();
    },5000);
})

error.addEventListener('click',()=>{
    let toast = document.createElement('div');
    toast.classList.add('errorToast');
    toast.innerHTML = errorMsg ;
    toastBox.appendChild(toast);
    setTimeout(()=>{
        toast.remove();
    },5000);

})


invalid.addEventListener('click',()=>{
let toast = document.createElement('div');
toast.classList.add('invalidToast');
toast.innerHTML = invalidMsg ;
toastBox.appendChild(toast);
setTimeout(()=>{
    toast.remove();
},5000);
})



















