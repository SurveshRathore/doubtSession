const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Hello",
    lastName: "World"
  }
  
  
  console.log(person.fullName.apply(person1, ["delhi", "india"]));