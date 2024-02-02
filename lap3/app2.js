function checkDogs(sJulia, dogsKate) {

    //tạo một bản sao nông của mảng chó của Julia
    const juliaDogs = dogsJulia.slice();
// xóa phần tử đầu tiên và cuối cùng khỏi mảng chó của Julia
    // (giả sử họ ở độ tuổi mèo)
    juliaDogs.shift();
    juliaDogs.pop();

    // tạo một mảng mới chứa cả chó của Julia và Kate
    const allDogs = juliaDogs.concat(dogsKate);

    // kiểm tra tuổi của mỗi con chó và in tin nhắn
    allDogs.forEach((age, i) => {
        if (age >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy, and is ${age} years old.`);
        }
    });
}

// test data 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);

// test data 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);