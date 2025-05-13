

let nums1 = [1 , 3 , 2 , 5];
let nums2 = [5 , 5 , 6 , 7];
let nums3 = [...nums1 , ...nums2];
console.log(nums3);
console.log(nums3[6]);
// spread operator will spread the elements in the array
console.log(Math.max(...nums1));

const arr = []
let obj1 = {
    name : "sourav",
    email : "souravpanigrahi78@gmail.com",
    address: "india"
}
let obj2 = {
    name : "sourav1",
    email : "souravpanigrahi78@gmail.com1",
    address: "india1"
}
arr.push(obj1);
arr.push(obj2);

console.log(arr);

console.log("------------------");

// from object i want to get a specific index and update it.

function updateObjectAtIndex(arr , index , updatedFields) {
    if(index > arr.length - 1) {
        return arr;
    }
    let arr1 = {...arr[index] , ...updatedFields};
    arr[index] = arr1;
    return arr;
}

console.log(updateObjectAtIndex(arr , 0 , {name : "sourav11"}));
