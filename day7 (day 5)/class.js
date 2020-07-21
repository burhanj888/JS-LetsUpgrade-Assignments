class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.luCoins = 0;
        this.role = role;
    }

    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }

   removeCourse(user,course){
    user.courses.pop(course);
    console.log(user);
    }
}

let user1 = new User('dev',20,'dev@gmail.com')
let user2 = new User('ham',21,'ham@gmai.com')
let mod = new Moderator('bj',20,'bj@gmail.com','Moderator');
let admin = new Admin('burhan',20,'bu@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});


admin.addCourse(user1,'Javascript');
admin.addCourse(user2,'Python');



user1.login().getDetails().logout();
user2.login().getDetails().logout();
mod.addCoins();
mod.addCoins();
mod.removeCoins();
console.log(mod.luCoins);

