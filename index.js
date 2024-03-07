// let arrMatrix = [["hello", "goodbye", "hello", "alpha"], ["alpha", "bravo"]];

// //

// const filterWord = () => {
//     let result = [];

// 	for (let index = 0; index < arrMatrix.length; index++ ){
//         result.push([...new Set(arrMatrix[index])])
//     }

//     const newArr = result.flat();

//     const obj = {}

//     for(let value of newArr){
//         if(obj[value]){
//             obj[value] += 1
//         }else{
//             obj[value] = 1
//         }
//     }

//     return Object.keys(obj).filter(item => {
//         return obj[item] === 1
//     })

// }

// console.log(filterWord())

/**
    viết một chương trình tạo ra 1 số lớn nhất từ các phần tử number trong 1 array có
    vd: [1, 10, 11] => 11110, [1, 10, 11, 19] => 1911110, [12, 7, 16] => 71612
 */

// input give a array [12,7,16,4]

// process: lap qua mảng so sánh từng số. lấy .lengt() tách từng phần tử ra tránh trường hợp số có nhiều đơn vị
// so sánh phần tử đầu thằng náo lớn hơn return thằng đó

// output return bigest number form arr 741612

const arrayNum = [ 12, 17, 16, 14, 1077, 1009];

const bigestNum = (arr) => {

  const result = arr.map(String).sort((bf, next) => {
    return next + bf - (bf + next);
  });

  return result.join("");
};


console.log(bigestNum(arrayNum))
