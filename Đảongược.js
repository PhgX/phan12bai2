function reverse() {
    let arr = [-3,5,1,3,2,10];
    let arr1 = new Array();   
    for (let i=0; i<arr.length; i++) {
    //   arr1.concat(arr[arr.length - 1 - i]);    
      arr1[i] = arr[arr.length - 1 - i];   
    }
    document.write(arr1);
}