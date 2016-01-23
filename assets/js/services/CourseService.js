function CourseService(){
	this.courseList=[];

	this.add=function(course){
		this.courseList.push(course);
	}

	this.edit=function(course){
		for(var i=0;i<this.courseList.length;i++){
			var c=this.courseList[i];
			if(course.id==c.id){
				this.courseList[i]=course;
			}
		}	
	}

	this.getAll=function(){
		return this.courseList;
	}

	this.getById=function(id){

		/*$.each(this.courseList,function(i,o){
			if(o.id==id)
			{
				return o;
			}
		});*/
		for(var i=0;i<this.courseList.length;i++){
			var course=this.courseList[i];
			if(course.id==id){
				return course;
			}
		}
		return null;
	}

	this.delete=function(id){
		for(var i=0;i<this.courseList.length;i++){
			var course=this.courseList[i];
			if(course.id==id){
				this.courseList.splice(i,1);
				return true;
			}
		}
		return false;
			
	}
}