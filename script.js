// Info about API
const url ='https://api.github.com/users/octocat'

// Selecting page element
const infieldField = document.querySelector('.input');
const responseField = document.querySelector('#user-id');
const searchInfo = document.querySelector('#search');
const joinInfo = document.querySelector('#join');
const loginInfo = document.querySelector('#login');
const repoInfo = document.querySelector('#repos-number');
const followersInfo = document.querySelector('#followers-number');
const followingInfo = document.querySelector('#following-number');   
const locationInfo = document.querySelector('#user-location');
const websiteInfo = document.querySelector('#user-website');
const twitterInfo = document.querySelector('#user-twitter');
const companyInfo = document.querySelector('#user-company');
const profileInfo = document.querySelector('#profile-bio');


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

    responseField.innerHTML = `${res.name}`;  
    joinInfo.innerHTML = `${'Joined '+ res.created_at.slice(0,9)}`;
    loginInfo.innerHTML = `${'@'+ res.login}`;
    repoInfo.innerHTML = `${res.public_repos}`;
    followersInfo.innerHTML = `${res.followers}`;
    followingInfo.innerHTML = `${res.following}`;
    locationInfo.innerHTML = `${res.location}`;
    websiteInfo.innerHTML = `${res.blog}`;
    twitterInfo.innerHTML = `${res.twitter_username}`;
    companyInfo.innerHTML = `${res.company}`;
    profileInfo.innerHTML = `${res.bio}`;
}); 
}

// Event listener function

searchInfo.addEventListener('click', displaySearch);

console.log(searchInfo);

