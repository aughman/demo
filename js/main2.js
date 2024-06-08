// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXhX5inofoQXlHjltM7ZweDnbhDWpO38A",
    authDomain: "altproject-2166c.firebaseapp.com",
    projectId: "altproject-2166c",
    storageBucket: "altproject-2166c.appspot.com",
    messagingSenderId: "54512690477",
    appId: "1:54512690477:web:57d1594de3ab1b3e381fa4"
  };

// khởi tạo firebase
firebase.initializeApp(firebaseConfig)
let userInfo = firebase.database().ref("UserInfo");


function getInputValue(id){
    return document.getElementById(id).value;
}

function submitForm(event){
    event.preventDefault();
    let userNameSignIn = getInputValue('userNameSignIn');
    let passwordSignIn = getInputValue('passwordSignIn');
    // console.log(name, email);
    saveUserInfo(userNameSignIn, passwordSignIn)

    document.getElementById("contactForm").reset(); 
    document.getElementById("userNameSignIn").focus(); 
}


function saveUserInfo(userNameSignIn, passwordSignIn){
    let newUserInfo = userInfo.push();
    newUserInfo.set({
        userNameSignIn: name,
        passwordSignIn: email
    })
}

function getUser(data){
    if(data){
        let userData = data.val();
        let userDataArray = Object.keys(userData)
        let containerContent = document.getElementById('containerContent')
        containerContent.innerHTML = "";
        for (let i = 0; i < userDataArray.length; i++) {
            let eachUser = userDataArray[i];
            console.log(userData[eachUser]);
            let content = userDataArray[i]
            console.log(content);
            let card = `
                <div>
                    <h3>${userData[eachUser].userNameSignIn}</h3>
                    <p>${userData[eachUser].passwordSignIn}</p>
                    <button>Edit</button>
                    <button onclick="deleteUser('${eachUser}')">Delete</button>
                </div>
            `
            containerContent.innerHTML += card
        }
    } else {
        console.log("data not found!!!");
    }
}

function deleteUser(key){
    firebase.database().ref("UserInfo/" + key).remove()
}

// display data
userInfo.on("value", getUser)

document.getElementById('contactForm').addEventListener("submit", submitForm)


