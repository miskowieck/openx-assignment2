
function countposts(users){ //returns how many posts each user wrote
    let ans = [];
    users.forEach((user)=>{
        ans.push(user.username+" napisał(a) "+user.posts.length+" postów");
    });
    return ans;
}

function combine(users,posts){
    users.forEach((user)=> user.posts=[]);
    posts.forEach((post)=>{
        users[post.userId-1].posts.push(post);
    });
}

function distance(user1,user2) { //calculate distance between two users, result in kilometers
    let lat1 = user1.address.geo.lat;
    let lat2 = user2.address.geo.lat;
    let lon1 = user1.address.geo.lng;
    let lon2 = user2.address.geo.lng;
    let p = Math.PI/180    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a)); 
  }

function multititles(posts){ //returns array of titles that appear more than once
    let ans = [];
    let titles = {};
    posts.forEach((post)=>{
        titles[post.title] = titles[post.title]===undefined ? 0 : titles[post.title]+1;
    });
    for (const [key, value] of Object.entries(titles)) {
        if(value>0) ans.push(key);
    }
    return ans;
}

function nearestuser(user,users){ //finds the nearest user of given user
    let dist = null;
    let nearest = null;
    users.forEach((us)=>{
        let disttemp = distance(us,user);
        if(us.id!=user.id){
            if(dist===null || dist>disttemp){
                dist = disttemp;
                nearest = us;
            }
        }
    });
    return nearest;
}

exports.nearestuser = nearestuser;
exports.multititles = multititles;
exports.distance = distance;
exports.countposts = countposts;
exports.combine = combine;