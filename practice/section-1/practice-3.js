'use strict';

function collectSameElements(collectionA, objectB) {
  var obj=new Array();
  var k=0;
  for(var i=0;i<collectionA.length;i++)
  {
	  var temp=objectB.value;
	  for(var j=0;j<temp.length;j++)
	  {
		  if(collectionA[i]==temp[j])
		  {
			  obj[k]=collectionA[i];
			  k++;
		  }
	  }
  }
  return obj;
}
