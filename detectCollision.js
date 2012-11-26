/////////////////第二版的O(logn)算法，二维线段树算法

function detectCollision(obj)
{
	if(obj.x2-obj.x1 <= 10 && obj.z2-obj.z1 <= 10){
	    if(isInBox(obj)) return 1; //撞上箱子
		else return 0;  //在道路上
	}
	var tmpx,tmpz;
	
	//线段树取整操作
	if( ((obj.x1+obj.x2)/2)%10!=0 ){
		tmpx = (obj.x1+obj.x2)/2-5;
	}
	else{
	    tmpx = (obj.x1+obj.x2)/2;
	}
	if( ((obj.z1+obj.z2)/2)%10!=0 ){
	    tmpz = (obj.z1+obj.z2)/2-5;
	}
	else{
	    tmpz = (obj.z1+obj.z2)/2;
	}
	
	var p1 = {"x":tmpx,"z":tmpz};
	var p2 = {"x":tmpx,"z":obj.z1};
	var p3 = {"x":obj.x2,"z":tmpz};
	var p4 = {"x":tmpx,"z":obj.z2};
	var p5 = {"x":obj.x1,"z":tmpz};
	
	//检测点落在哪个区域
	
    if(isInRect(obj.x0,obj.z0,obj.x1,obj.z1,p1.x,p1.z)){
	    detectCollision({"x0":obj.x0,"z0":obj.z0,"x1":obj.x1,"z1":obj.z1,"x2":p1.x,"z2":p1.z});
	}
	
	else if(isInRect(obj.x0,obj.z0,p2.x,p2.z,p3.x,p3.z)){
	    detectCollision({"x0":obj.x0,"z0":obj.z0,"x1":p2.x,"z1":p2.z,"x2":p3.x,"z2":p3.z});
	}
	
	else if(isInRect(obj.x0,obj.z0,p5.x,p5.z,p4.x,p4.z)){
	    detectCollision({"x0":obj.x0,"z0":obj.z0,"x1":p5.x,"z1":p5.z,"x2":p4.x,"z2":p4.z});
	}
	
	else if(isInRect(obj.x0,obj.z0,p1.x,p1.z,obj.x2,obj.z2)){
	    detectCollision({"x0":obj.x0,"z0":obj.z0,"x1":p1.x,"z1":p1.z,"x2":obj.x2,"z2":obj.z2});
	}
	
	else{
	    return 1;
	}
}


function isInRect(x0,z0,x1,z1,x2,z2){
    if(x0>x1 && x0<x2 && z0>z1 && z0<z2){
	    return 1;
	}
	else{
	    return 0;
	}
}

function isInBox(obj){
    if(obj.x1%20==0 && obj.z1%20==0){
	    return 1;
	}
	else{
	    return 0;
	}
}
////////////////