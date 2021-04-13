const {nearestuser,multititles,distance,countposts,combine} = require("./functions");

let posts = [
    {title:"abc",userId: 2},
    {title:"aaa",userId:1},
    {title:"abb",userId:3},
    {title:"abc",userId:2},
    {title:"aba",userId:4},
    {title:"aaa",userId:1}
];

let users = [
    {id: 1, name: "Leanne Graham", username: "Bret",address: {geo: {lat: "-37.3159",lng: "81.1496"}}},
    {id: 2, name: "Ervin Howell", username: "Antonette",address: {geo: {lat: "-43.9509",lng: "-34.4618"}}},
    {id: 3, name: "Chelsey Dietrich", username: "Kamren",address: {geo: {lat: "-31.8129",lng: "62.5342"}}},
    {id: 4, name: "Kurtis Weissnat", username: "Elwyn.Skiles",address: {geo: {lat: "-37.3159",lng: "81.1496"}}}
];

combine(users,posts);

test("Should return array with strings that appear more than once: ['abc','aaa']",()=>{
    expect(multititles(posts)).toStrictEqual(["abc","aaa"]);
});

test("Should return distance 1807.20",()=>{
    expect(distance(users[0],users[2])).toBeCloseTo(1807.2,0);
});

test("Should return distance 8897.85",()=>{
    expect(distance(users[1],users[3])).toBeCloseTo(8897.85,0);
});

test("Should return distance 8123.66",()=>{
    expect(distance(users[1],users[2])).toBeCloseTo(8123.66,0);
});

test("Should return nearest user with id 3",()=>{
    expect(nearestuser(users[1],users).id).toBe(3);
})

test("Should return nearest user with id 3",()=>{
    expect(nearestuser(users[2],users).id).toBe(1);
})

test("Should return array with posts counts",()=>{
    expect(countposts(users)).toStrictEqual(["Bret napisał(a) 2 postów", "Antonette napisał(a) 2 postów", 
    "Kamren napisał(a) 1 postów", "Elwyn.Skiles napisał(a) 1 postów",])
})
