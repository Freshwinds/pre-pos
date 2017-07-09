'use strict';

function createUpdatedCollection(collectionA, objectB) {
 var obj=new Array();
	var len=0;
	for(var i=0;i<collectionA.length;i++)
	{
		var num=0;
	   for(var k=0;k<collectionA.length;k++)
	   {
		   if(collectionA[k]==collectionA[i])
			   num=num+1;
		   
	   }
	   if(String(collectionA[i]).charAt(1)=='-')
		  {
			  var x=Number(collectionA[i].charAt(2))
			   obj[len]={key:collectionA[i].charAt(0), count:x};
			 len++;
			 i++;
		  }
		else
		{
	   obj[len]={key:collectionA[i],count:num};
	   i+=num;
	   i--;
	   len++;
		}
	 }
	 var a=new Array();
     var k=0;
    for(var i=0;i<obj.length;i++)
  {
	  var temp=objectB.value;
	  var falg=0;
	  for(var j=0;j<temp.length;j++)
	  {
		  if(obj[i].key==temp[j])
		  {
			  a[k]={key:obj[i].key, count: obj[i].count-parseInt(obj[i].count/3)};
			  k++;
			  falg=1;
		  }
		  
	  }
	  if(falg==0)
	  {
		 
			   a[k]={key: obj[i].key, count: obj[i].count};
			  k++;
		  
	  }
  }
  return a;
}
