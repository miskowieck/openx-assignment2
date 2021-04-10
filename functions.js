function countposts(users){
    let ans = [];
    users.forEach((user)=>{
        ans.push(user.username+" napisał(a) "+user.posts.length+" postów");
    });
    return ans;
}

function distance(lat1, lon1, lat2, lon2) {
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

function multititles(posts){
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

function nearestuser(user,users){
    let dist = null;
    let nearest = null;
    users.forEach((us)=>{
        let disttemp = distance(us.address.geo.lat,us.address.geo.lng,user.address.geo.lat,user.address.geo.lng);
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