
let users = []

let userReg = document.getElementById('regUsers')
let userTable = () =>{
    userReg.innerHTML=''
    for(let i = 0 ; i<users.length;i++){

        let div = document.createElement('div');
        let name = document.createElement('div');
        let email = document.createElement('div');

        div.classList.add('registered')

        name.innerText = users[i].name;
        email.innerText = users[i].email;

        userReg.appendChild(div)
        div.appendChild(name)
        div.appendChild(email)
    }



}


let addUser = () =>{
    let name = document.getElementById('name');
    let mail = document.getElementById('email');

    let userExist = users.filter((data)=>{
        return data.email == mail.value
    })

    let usersobj = {
        'name': name.value,
        'email': mail.value
    }

    if(userExist.length == 0){
        users.push(usersobj)
        userTable();
    } 
    else {
        window.alert('User Already Exist')
    }
    console.log(users)
}


