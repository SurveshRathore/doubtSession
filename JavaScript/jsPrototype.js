function sample(id,name){
    
        this.id = id;
        this.name = name;
}

sample.prototype.lastName = "Hi";

sample.prototype.fullName = function()
{
    return this.name + " " + this.lastName;
}



var sam1 = new sample(12, "hello")
console.log(sam1.fullName());
console.log("Id is: " +sam1.id + " Full name: " +sam1.fullName());