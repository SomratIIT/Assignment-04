function calculateFinalScore(obj) {
    let total;
if(typeof obj != 'object')
{
    return 'Invalid Input';
}
if(obj.isFFamily == true)
{
     total = obj.testScore + obj.schoolGrade + 20;
    if(total>80)
    {
      return true;
    }
    
}
else if((obj.testScore + obj.schoolGrade)<80 || obj.isFFamily == false)
    {
        return false;
    }
}
const person1 = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false
};

const final = calculateFinalScore(person1);
console.log(final);