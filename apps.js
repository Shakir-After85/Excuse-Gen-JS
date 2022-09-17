import '../style/index.css';
import 'bootstrap';

window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () =>{
   document.querySelector('#excuse').innerHTML = generateExcuse();
    });

}

let generateExcuse = () => {
   


    let who = ['The snake','My job','Her cat','My bird'];
    let action = ['jumped','fired','shredded','broke'];
    let what = ['in my boot', 'me', 'the couch', 'the window'];
    let when = ['last night','said I was stealing boxes','when I finished eating','last night','while I was praying'];

    let whoIndex= Math.floor(Math.random() * who.lenght);
    let actionIndex= Math.floor(Math.random() * action.lenght);;     
    let whatIndex= Math.floor(Math.random() * what.lenght);;
    let whenIndex = Math.floor(Math.random() * when.lenght);;

    return who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];
}

