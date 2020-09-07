function countMinus(arr) {
    if (arr.length==0)
        alert("Mảng rỗng");
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<0)
            count++;
    }
    if(count===0)
        return false;
    return count;
}
