const axios = require('axios');

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const USERS_URL =  'https://jsonplaceholder.typicode.com/users';


function combine(posts,users){

}

let posts = [];
let users = [];

function countposts(users){
    let ans = [];
    users.forEach((user)=>{
        ans.push(user.username+" napisał(a) "+user.posts.length+" postów");
    });
    return ans;
}



function multititles(posts){
    let ans = [];
    let titles = posts.map((post)=>post.title);
    titles.sort();
    for(let i=0;i<titles.length;i++){
        multi=true;
        if(i+1<titles.length && titles[i]===titles[i+1]){
            multi=false;
        }
        if(i-1>=0 && titles[i]===titles[i-1]){
            multi=false;
        }
        if(multi){
            ans.push(titles[i]);
        }
    }
    return ans;
}

axios.all([
    axios.get(POSTS_URL),
    axios.get(USERS_URL)
  ]).then(axios.spread((response1, response2) => {
    posts = response1.data;
    users = response2.data;
    users.forEach((user)=> user.posts=[]);
    posts.forEach((post)=>{
        users[post.userId-1].posts.push(post);
    });
    countposts(users);
    multititles(posts);
  })).catch(error => {
    console.log(error);
  });

