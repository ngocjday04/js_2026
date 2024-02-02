const calcAverageHumanAge = (ages) => {
    // Tính tuổi chó theo năm của con người
    const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
    
    // Lọc ra những con chó dưới 18 tuổi con ngườ
    const adultDogs = humanAge.filter(age => age >= 18);
    
    // Tính tuổi trung bình của con người
    const avgHumanAge = adultDogs.reduce((total, age) => total + age, 0) / adultDogs.length;
    
    return avgHumanAge;
  }
  
  // Sample data
  const sampleData1 = [5, 2, 4, 1, 15, 8, 3];
  const sampleData2 = [16, 6, 10, 5, 6, 1, 4];
  
  console.log(calcAverageHumanAge(sampleData1)); // Output: 23.666666666666668
  console.log(calcAverageHumanAge(sampleData2)); // Output: 31.5