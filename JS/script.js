// function calculator(){
//     let btn =document.querySelectorAll('button')
//     let input = document.querySelector('input')
//     let clear = document.querySelector('.clear')
//     let equal = document.querySelector('.equal')

//      btn.forEach( function(button){
//         button.addEventListener('click',function(e){
//             let value= e.target.dataset.num
//             input.value += value
//         })
//         // if (!button.classList.contains('equal') && !button.classList.contains('clear')) {
//         //     input.value += value;
//         // }
//      });
//      if(equal){
//      equal.addEventListener('click', function () {
//         if (input.value !== '') {
//             try {
//                 input.value = eval(input.value);
//             } catch {
//                 input.value = 'خطأ'; 
//             }
//         }
//     }); 
// } 
//     if(clear){
//      clear.addEventListener('click' , function(e){
//         input.value = ""
//      })
// }}
// calculator()


function calculator() {
    let btns = document.querySelectorAll('button'); 
    let input = document.querySelector('input'); 
    let clear = document.querySelector('.clear'); 
    let equal = document.querySelector('.equal'); 


    btns.forEach(function(button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;

            
            if (!button.classList.contains('equal') && !button.classList.contains('clear')) {
                let lastChar = input.value.slice(-1);

                
                if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(value)) {
                    return;
                }

                input.value += value;
            }
        });
    });
    if (equal) {
        equal.addEventListener('click', function () {
            if (input.value !== '') {
                try {
                  
                    input.value = input.value.trim();
                    let lastChar = input.value.slice(-1);
                    if (["+", "-", "*", "/"].includes(lastChar)) {
                        input.value = 'خطأ';
                        return;
                    }
                    input.value = eval(input.value); 
                } catch {
                    input.value = 'error';
                }
            }
        });
    }

    
    if (clear) {
        clear.addEventListener('click', function () {
            input.value = '';
        });
    }
}


calculator();
