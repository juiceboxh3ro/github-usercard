/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function myFollowers(obj) {
  // create elements
  const card = document.createElement('div'),
  avatar = document.createElement('img'),
  cardInfo = document.createElement('div'),
  
  name = document.createElement('h3'),
  userName = document.createElement('p'),
  userLoc = document.createElement('p'),
  userProf = document.createElement('p'),
  userProfLink = document.createElement('a'),
  
  followers = document.createElement('p'),
  following = document.createElement('p'),
  bio = document.createElement('p');

  // create structure
  card.append(avatar);
  card.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(userName);
  cardInfo.append(userLoc);
  cardInfo.append(userProf);
  userProf.appendChild(userProfLink);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);

  // add classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // apply text and attributes
  avatar.src = obj.avatar_url;
  name.textContent = obj.name;
  userName.textContent = obj.login;
  userLoc.textContent = `Location: ${obj.location}`;
  userProfLink.textContent = `Profile ${obj.html_url}`;
  userProfLink.href = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Followers: ${obj.following}`;

  return card;
}

const cardDeck = document.querySelector('.cards');

axios.get('https://api.github.com/users/juiceboxh3ro')
.then(response => {
  console.log(response);
  
  const myData = response.data;

  cardDeck.append(myFollowers(myData));
})
.catch(error => {
  console.log(error);
})

axios.get('https://api.github.com/users/juiceboxh3ro/followers')
.then(response => {
  console.log(response);
  response.data.map(item => {
    cardDeck.append(myFollowers(item));
  })
})
.catch(error => {
  console.log(error);
})

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
