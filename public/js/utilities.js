
//Binary search to search through arrOfX and arrOfY in food.js... both of these arrays are already sorted and
//so to search in logN time : 

function binarySearch(arr,target,low,high){
    let mid = Math.floor( low + (high - low )/2);
    if(arr[mid]==target){
        return mid;
    }
    if(arr[mid]>target){
        return binarySearch(arr,target,low,mid-1);
    }
    else{
        return binarySearch(arr,target,mid+1,high);
    }
}