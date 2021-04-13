const axios = require('axios');
const {nearestuser,multititles,distance,countposts,combine} = require("./functions");
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const USERS_URL =  'https://jsonplaceholder.typicode.com/users';


axios.all([
    axios.get(POSTS_URL),
    axios.get(USERS_URL)
  ]).then(axios.spread((response1, response2) => {
    let posts = response1.data;
    let users = response2.data;
    combine(users,posts);
    users.forEach((user)=>{
        console.log("Nearest to "+user.username+" is "+nearestuser(user,users).username);
    });
  })).catch(error => {
    console.log(error);
  });

