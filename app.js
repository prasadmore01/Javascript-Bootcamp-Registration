
let users = []

let addUser = () =>{
    let name = document.getElementById('name');
    let mail = document.getElementById('email');

    let userExist = users.filter((data)=>{
        return data.email == mail.value
    })

    let usersobj = {
        name: name.value,
        email: mail.value
    }

    if(userExist.length == 0){
        users.push(usersobj)
    } 
    else {
        window.alert('User Already Exist')
    }
    console.log(users)
}


