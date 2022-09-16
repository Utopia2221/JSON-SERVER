const { response } = require("express");

var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

var obj = {
    id:'',
    att:'',
    data:''
};
var data_ = new Date();
document.querySelector('#reg').addEventListener('click', async() => {
    obj.id = document.querySelector("#nome").value;
    obj.att = document.querySelector("#att").value;
    obj.data = data_.getDate() + '/' + (data_.getMonth()+1) + '/' + data_.getFullYear();
 
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(obj),
      redirect: 'follow'
    };
    
   await fetch("http://localhost:3000/arr", requestOptions)
      .then(() => alert('Registrazione effettuata'))
      .catch(() => alert('Errore nella ragistrazione'));
}) 

document.querySelector('#reg2').addEventListener('click', async() => {
    let nome = document.querySelector('#v_nome').value;
    await fetch("http://localhost:3000/arr/" + nome, requestOptions)
      .then(response => response.json())
      .then((response) => console.log(response))
      .catch(() => alert('Errore nella ragistrazione'));
});