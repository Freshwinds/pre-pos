'use strict';

function collectSameElements(collectionA, collectionB) {
  var obj=new Array();
  var m=0;
  for(var i=0;i<collectionA.length;i++)
  {
	  for(var j=0;j<collectionB.length;j++)
	  {
		  for(var k=0;k<collectionB[j].length;k++)
		  {
			  if(collectionB[j][k]==collectionA[i])
			  {
				obj[m]=collectionA[i];
				m++;
			  }
		  }
	  }
  }
  return obj;
}
