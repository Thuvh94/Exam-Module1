function countVowel(string) {
    if (string.length==0)
        alert("Hãy nhập lại chuỗi ký tự");
    let vowelList = ["a","i","u","e","o","y"];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
            if(vowelList.indexOf(string[i])>=0)
                count++;
    }
    if(count ===0)
        return false;
    return count;
}