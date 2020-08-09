import "./main.scss"
document.getElementById('addBtn').addEventListener('click' ,performAddition);
 function performAddition() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  button.innerHTML = 'Click me';
  element.appendChild(button);
    let firstNumber = Number(document.getElementById("n1").value);
    let secondNumber = Number(document.getElementById("n2").value);
    let result = document.getElementById("result");
    let addition = firstNumber + secondNumber;
    result.innerText=addition;
    // button.onclick = e => import('dependencymodule/src/Button')
    // .then(
    //   module=>{
    //     console.log(module);
    //     module.Button();
    //   }
    // ).catch( err => console.log(err));
    button.onclick=e=> import('dependencymodule/src/assets/webpack.png').then(
      module=>{
        console.log(module);
        const myIcon = new Image();
  myIcon.src = module.default;

  element.appendChild(myIcon);
  return element;
      }
    )  
        
          return element;
        }
        document.body.appendChild(performAddition());


