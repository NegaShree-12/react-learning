//array
const numbers=[1,2,3,4];
const doubled=numbers.map((number)=>{
    return number*2;
})
console.log(doubled);

//array of objects

const users=[
    {name:"Neha",age:20},
    {name:"Shree",age:20},
    {name:"jana",age:15}
];

const names=users.map(user=>user.name);
console.log(names);

//add 1
const nums=[1,2,3,4];
const addition=nums.map((num)=>{
    return num+1;
});
console.log(addition);

//convert string

const strings=nums.map(num=>"Number"+num);
console.log(strings);

