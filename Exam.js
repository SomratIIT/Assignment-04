// Problem 01

 function calculateTax(income, expenses) {
 let Tax;
    if(income<0 || expenses<0)
    {
        return 'Invalid Input';
    }
    else if(income>expenses)
    {
        return Tax=(income-expenses)*.2;
    }
    else if(income==expenses)
    {
        return '0';
    }

}


//Problem 02

function sendNotification(email) {
  let new1= email.split(' ');
  if(new1[1]=='@')
  {
  return new1[0]+' sent you an email from '+new1[2];}
  else{
    return 'Invalid Email';
  }
} 


// Problem 03

 function checkDigitsInName(name) {
 let number=['0','1','2','3','4','5','6','7','8','9'];
for(let i =0; i< name.length;i++)
{

   if(name.includes(number[i]))
   {
       return true;
   }
   else{
    return false;
   }
}

} 


// Task 04

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


 // Task 05

    function  waitingTime(waitingTimes  , serialNumber) {
    let Sum=0,AvgTime,RemTime;
      if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid input';
      }
for(let i=0;i<waitingTimes.length;i++)
{
         Sum = Sum +waitingTimes[i];
         AvgTime =Math.floor( Sum / waitingTimes.length); 
}
return RemTime = AvgTime*(serialNumber-1-waitingTimes.length);

}






