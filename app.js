// Create a new repo - Done
// Clone it -Done
// Create a branch called loops off of master -Done
// Complete each of the following exercises:
// Use a do...while loop to console.log the numbers from 1 to 1000.
/************************************************
            let numbers = '';
            let i = 0;

            do {
            i = i + 1;
            numbers = numbers + i;
            } while (i < 1000);

            console.log(numbers);
 */

// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"
// Create a function that logs out the keys of the object using Object.keys(). -done 
/*************************************************************
        //const byKeys = (thingy) => { return Object.keys(thingy) };
 */
// Create a function that logs out the keys and values of the object using Object.entries(). -done
//***************************************************************************
        //const byEntries = (thingy) => { return Object.entries(thingy) };

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database. -Done
// ***********************************************************************************
/*let person = [{ 
    first: 'Mary', 
    last: 'Smith', 
    birthDate: 'Jan 5, 1983',
    gender: 'female' },
     { 
    first: 'Mark', 
    last: 'Nears', 
    birthDate: 'Oct 17, 1987',
    gender: 'male' }, 
     { 
    first: 'Brando', 
    last: 'Williams', 
    birthDate: 'Nov 22, 1988',
    gender: 'male' },
     { 
    first: 'Tara', 
    last: 'Moses', 
    birthDate: 'July 4, 1990',
    gender: 'female' 
    }];

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
// Use .map() to map over the arrayOfPersons and console.log() their information.
// ***********************************************************************************
//         const persons = person.map(function(person){
//              console.log(person);
// });


// Use .filter() to filter the persons array and console.log only males in the array.
/********************************************************
          person.filter(men => men.gender =='male');

 */
// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
/********************************************************/
        function canVote(birthDate) { 
            return person.birthDate <= Jan 1, 1990; 
        } 

        function func() { 
            var filtered = person.filter(canVote); 
            document.write(filtered); 
        } 
        console'log(func());

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
/*********************************************************/
        person.filter(oldFolks => oldFolks.birthDate <= 'Jan 1,1990')
        console.log;

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// BONUS - .filter() out the people in the array who are younger than 21.


