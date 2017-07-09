'use strict';

function collectSameElements(collectionA, objectB) {
 var obj=new Array();
 var k=0;

  for(var i=0;i<collectionA.length;i++)
  {
	  var t1=collectionA[i].key;
	  var temp=objectB.value;
	  for(var j=0;j<temp.length;j++)
	  {
		  if(t1==temp[j])
		  {
			  obj[k]=t1;
			  k++;
		  }
	  }
  }
  return obj;
}
