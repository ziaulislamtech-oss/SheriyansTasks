// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SHEET TOW QUESTIONS STARTS HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ------SECTION 1-------


// let laptop={
    //     brand: 'Lenove thinkpade',
    //     price : 40000,
    //     start: function(){
        //         console.log('laptop started')
        //     },
        //     increaseBy10: function(){
            //         this.price = this.price*1.10
            //         return this.price
            //     }

// }
// if  i need 10 laptop of same structure  but diffrent data, i would need to create their object individually  which would be time consuming

// ---------------------------------------------



 // ------SECTION 2-------
 //  class Employee{
    //     constructor(name,salary){
        //         this.name = name;
        //         this.salary = salary
        //     }
        //     showDetailed(){
            //         console.log(this.name + '-' + this.salary)
//     }
//  }
//  let employee1 = new Employee('Muhammad',5000000);
//  let employee2 = new Employee('Anwar',5000000);
//  let employee3 = new Employee('Zia-Ul-Islam',5000000);
//  employee1.showDetailed()
//  employee2.showDetailed()
//  employee3.showDetailed()

//   because class is a blue print of all the object that contain similar structure, we can create many copoies of object  from it with differnt data that makes our code cleaner

// ------------------------------------------------

// ------SECTION 3-------

// class BankAccount{
    //     constructor(accountHolderName,balance){
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
//     depositAmount(moneyDeposited){
//        if(moneyDeposited){
//          this.balance = this.balance+moneyDeposited
//        }
//         return this.balance
        
//     }
// }
// let bankAccount1 = new BankAccount('Zia-Khan',500);
// let bankAccount2 = new BankAccount('Mubashir',400);
// console.log(bankAccount1.depositAmount(100))
// console.log(bankAccount2.depositAmount())

//  ass we know these two object are excate copies of class BankAccount that contain all data from it. the 2nd amounted do not get affected becuase the changes were made in the copy of bankAccount1 not bankAccount 2

//    ---------------------------------------


// ------SECTION 4-------

//  let profile={
    //     userName: 'mubashir',
//     method : function(){
    //         console.log(this.userName)
    //     }
    //  }
    // //  profile.method();
    //  let storedMethod = profile.method.bind(profile)
    
    // storedMethod()
    // let obj={
//     Name : 'zia-Ul-Islam',
//     Age : 22,
//     method : function(){
//        return this
//     }

// }

// -----------------------------------

// ------SECTION 5-------

// function Vehicle(type,wheel){
    //     this.type = type;
    //     this.wheel = wheel
    
    // }
    // Vehicle.prototype.describe = function(){
        //     console.log(`This ${this.type} has ${this.wheel} wheels`)
// }

// let car = new Vehicle('car',4)
// let bike = new Vehicle('bike',2)
// let reksha = new Vehicle('reksha',3)
// let truck = new Vehicle('truck',6)


// prototype approaache is better becuase prototype is a shared memory with all object of the same class that help in  taking less memory space

// ---------------------------------------




// ------------------SECTION 6: call Method Practice

// function showBrand(){
//     console.log(this.brand)
// }
// let obj1 = {
//     brand : 'JJ poshak'
// }
// let obj2 = {
//     brand : 'kk Poshak'
// }
// showBrand.call(obj1)
// showBrand.call(obj2)
// showBrand()

// without using call method  the value of this is widow and in window there is no variable of name brand so we get undefine so the call extend our funciton to that object that is being called and we access the variable

//  -----------------------------------------

//  ---------------SECTION 7: Apply Method Practice-------------------------

function introduce(city,role){
    console.log(`your name is ${this.name} your live in ${this.city} you are ${this.role}`)
}
let obj1 = {
    name : 'zia-khan',
    
}