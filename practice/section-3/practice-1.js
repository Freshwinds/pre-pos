'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var a=new Array();
  var k=0;
  for(var i=0;i<collectionA.length;i++)
  {
	  var temp=objectB.value;
	  var falg=0;
	  for(var j=0;j<temp.length;j++)
	  {
		  if(collectionA[i].key==temp[j])
		  {
			  a[k]={key: collectionA[i].key, count: collectionA[i].count-1};
			  k++;
			  falg=1;
		  }
		  
	  }
	  if(falg==0)
	  {
		 
			   a[k]={key: collectionA[i].key, count: collectionA[i].count};
			  k++;
		  
	  }
  }
  return a;
}
