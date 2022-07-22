// Info about API
const url ='https://api.github.com/users/octocat'

// Selecting page element
const infieldField = document.querySelector('.input');
const responseField = document.querySelector('#user-id');
const searchInfo = document.querySelector('#search');
// Asynchronous function
const gitHubUser = async () => {
    const searchUser = infieldField.value;
    const endpoint = `${url}`;
    try {
        const response = await fetch(endpoint, {cache: 'no-cache'} )
    if (response.ok) {
        return await response.json();
    }
    }catch(error) {
        console.log(error);
    }

}

// Display search
const displaySearch = () => {
    
gitHubUser().then((res) => {
    responseField.innerHTML = `The ${res.login}`;
   
}); 
   

}

const textColour =  document.body.style.color ='white';
searchInfo.addEventListener('click', displaySearch, textColour);
console.log(searchInfo);