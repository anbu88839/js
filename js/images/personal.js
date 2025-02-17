const profile={
    
    
    
    personal:{

        name:'dheena,mushroom',
        age:20,
        address:'aathukudi',
        gender:'male',


    },
    information:{

        hobbies: ["reading", "swimming", "playing cricket"],
        occupation: "student",

    },

    onlineinformation:{

        contact: "9944779384",
        email: "dheena@gmail.com",
    },


          
                thala1:function(){
                  return `name is:${profile.personal.name} age is:${profile.personal.age}and address is:${profile.personal.address} and age is: ${profile.personal.age}`
                },

                thala2:function(){
                    return `this is:${profile.information}`
                  },

                  thala3:function(){
                    return`this is:${profile.onlineinformation}`
                  },

               
               
          
                }


                console.log(profile.thala1());
              




