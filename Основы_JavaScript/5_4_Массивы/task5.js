    function getMaxSubSum(arr) {

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          break
        }
        if ((i == arr.length - 1) && (arr[arr.length - 1] < 0)) {
          return 0;
        }
      }
      
      let result = []

      for (let i = 0; i < arr.length; i++) {

        for (let j = arr.length-1; j >= i; j--) {

          let sum = 0

          for (let k = i; k <= j ; k++) {
            sum += arr[k]
          }
          result.push(sum)
        }    
      }
      // return result.sort((a, b) => b - a )[0] < 0 ? 0 : result.sort((a, b) => b - a )[0]  // Самое простое решение
      return result.sort((a, b) => b - a )[0]
    }

    console.log((getMaxSubSum([-1, 2, 3, -9])))          // 5
    console.log((getMaxSubSum([2, -1, 2, 3, -9])))       // 6
    console.log((getMaxSubSum([-1, 2, 3, -9, 11])))      // 11
    console.log((getMaxSubSum([-2, -1, 1, 2])))          // 3
    console.log((getMaxSubSum([100, -9, 2, -3, 5])))     // 100
    console.log((getMaxSubSum([1, 2, 3])))               // 6
    console.log((getMaxSubSum([-1, -2, -3])))            // 0
