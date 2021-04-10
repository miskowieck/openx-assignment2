const {nearestuser,multititles,distance,countposts} = require("./functions");

test("should return array with strings that appear more than once",()=>{
    let posts = [{title:"abc"},{title:"aaa"},{title:"abb"},{title:"abc"},{title:"aba"},{title:"aaa"}];
    expect(multititles(posts)).toStrictEqual(["abc","aaa"]);
});