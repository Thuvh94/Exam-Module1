function findElement(num,arr) {
    let position = []
    if (num ==="")
        alert('Hãy nhập lại');
        return;
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i])
            position.push(i);
    }
    return position;
}
