let arr = [1, 1, 2];
// let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const remove_Duplicat_Number = () => {

    /*     if (arr.length === 0) return 0;
    
        let i = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                i++;
                arr[i] = arr[j]; // overwrite duplicate
            }
            console.log('🚀 ~ i:', i);
        }
        return i + 1; // new length */


    let newArr = [...new Set(arr)];

    for (let i = 0; i < newArr.length; i++) {
        arr[i] = newArr[i]
    }

    return newArr.length;

}


console.log(remove_Duplicat_Number());
console.log('🚀 ~ arr:', arr);