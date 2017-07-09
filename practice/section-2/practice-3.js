'use strict';

function countSameElements(collection) {
	var obj=new Array();
	var len=0;
    for(var i=0;i<collection.length;i++)
	{
		var num=0;
		var x;
	   if(collection[i].length==1)
	   {
		   num=num+1;
		   x=collection[i];
	   }
		else
		{
			num=num+Number(collection[i].charAt(2));
			x=collection[i].charAt(0);
		}
	   var cnt=0;
	   for(var k=i+1;k<collection.length;k++)
	   {
		   if(collection[k].length==1&&collection[k]==x)
		   {
			    num=num+1;
				cnt++:
		   }
		   else
		   {
			   if(collection[k].length>1)
			   {
				   if(collection[k].charAt[0]==x)
				   { 
			          num+=Number(collection[k].charAt[2]);
					 cnt++;
				   }
			   }
		   }
	   }
	   obj[len]={key:x,count:num};
	   i+=cnt;
	   i--;
	   len++;
	}		
    return obj;

}
