module.exports=(sequelize,DataTypes)=>{
    const Event= sequelize.define("Event", {

        organizer:{
            type : DataTypes.STRING ,unique: true , 
            validate: {
             len: [1,20]},
        },

        name:{ 
             type : DataTypes.STRING ,  
             validate: {
                contains: 'event',
                 
                }
        },

        email:{
             type : DataTypes.STRING ,
             validate: {
                 isEmail: true}
        },

        date:{ 
            type : DataTypes.STRING , 
            validate: {
              isAfter: "20211-2-9",}
        },

        numOfSeats:{ 
            type : DataTypes.INTEGER , 
            validate: {
                min: 0,
            }
                
        },

        bookedSeats:{ 
            type : DataTypes.INTEGER , 
            validate: {
                isGreaterThanOtherField(value) {
                    if (parseInt(value) <= parseInt(this.numOfSeats)) {
                      throw new Error('Bar must be greater than otherField.');
                    }
                }
            }
        },

        startDate:{ 
            type : DataTypes.STRING , 
            validate: {
                bothCoordsOrNone() {
                  if ((this.startDate === null) !== (this.endDate === null)) {
                    throw new Error('Either both startDate and endDate, or neither!');
                  }
                }
            }
        },

        endDate:{ 
            type : DataTypes.STRING , 
            validate: {
                bothCoordsOrNone() {
                    if ((this.startDate === null) !== (this.endDate === null)) {
                        throw new Error('Either both startDate and endDate, or neither!');
                    }
                }
            }
        },

        image:{
            type : DataTypes.STRING ,
            validate: {
                isUrl: true,
            }
       },


                


                
        

        
   
     });
   
     
   
     return Event;
   
   
   
   
   
    };