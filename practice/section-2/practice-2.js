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
	     if(String(collection[i]).charAt(1)=='-')
		  {
			  var x=Number(collection[i].charAt(2))
			   obj[len]={key:collection[i].charAt(0), count:x};
			 len++;
			 i++;
		  }
		else
		{
	    obj[len]={key:collection[i],count:num};
	    i+=num;
	   i--;
	    len++;
		}
	 }
 return obj;
}
