//Write a recursive function that counts how many sheep jumps over the fence. 
//The function should display the number along with the message 
//"Another sheep jump over the fence" until no more sheep are left.

/* 
Input: 3
Output:
3 - Another sheep jump over the fence
2 - Another sheep jump over the fence
1 - Another sheep jump over the fence
 */

 const countSheep = num => {
    //base case
    if(num === 0) {
        return 'Hey Im here';
    }

    //recursive call
    return `${num} - Another sheep jump over the fence\n` + countSheep(num - 1);
    // return  countSheep(num - 1) + `${num} - Another sheep jump over the fence\n`; //wait untill you finish everything in the recursion function, then concatinate the string

    //countSheep(3) 3 - Another sheep jump over the fence
    //countSheep(2) 2 - Another sheep jump over the fence
    //countSheep(1) 1 - Another sheep jump over the fence
    //countSheep(0) ends recursiveness
 }

console.log(countSheep(3));