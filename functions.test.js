const {nearestuser,multititles,distance,countposts,combine} = require("./functions");

let posts = [{title:"abc"},{title:"aaa"},{title:"abb"},{title:"abc"},{title:"aba"},{title:"aaa"}];
let users = [{}]


test("should return array with strings that appear more than once",()=>{
    expect(multititles(posts)).toStrictEqual(["abc","aaa"]);
});

