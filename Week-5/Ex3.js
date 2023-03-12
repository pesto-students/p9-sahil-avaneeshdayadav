
console.log("Set implementation");
function hasDuplicates(arr)
{

  const setObject = new Set(arr);
  if (setObject.size === arr.length)
  {
      return false
  }
  else
  {
     return true;
  }
    
}

console.log(hasDuplicates([1,2,3,1]));

