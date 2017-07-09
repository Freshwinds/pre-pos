'use strict';

function countSameElements(collection) {
	var obj=new Array();
	var len=0;
	for(var i=0;i<collection.length;i++)
	{
		var num=0;
	   for(var k=0;k<collection.length;k++)
	   {
		   if(collection[k]==collection[i])
			   num=num+1;
	   }
	   
	   obj[len]={key:collection[i],count:num};
	   i+=num;
	   i--;
	   len++;
	 }
 
 return obj;
}
