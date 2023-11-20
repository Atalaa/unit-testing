/* Unit Testing: Setting Up Data with beforeEach Challenge
*   
* 1. Add a new describe for the fullName
* 2. Fully test the fullName get
* 3. Use a nested beforeEach
*/ 

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
    });
    
    //Default values
    describe('default values', () => {
        it('first name defaults to empty', () => {
            // assert
            expect(model.firstName).toBe('');
        });
    
        it('last name defaults to empty', () => {
            // assert
            expect(model.lastName).toBe('');
        });
    
        it('middle name defaults to empty', () => {
            // assert
            expect(model.middleName).toBe('');
        }); 
    });
    
    //Fullname display
    describe('full name',() => {
        beforeEach(() => {
            model = new User({firstName: 'Aata', lastName: 'Rchidi'});
        });
        
        it('with middle name', () => {
            //arrange
            model.middleName = 'S';
            
            //act
            const result = model.fullName;   
            
            //assert
            expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
            
        })
        
        it('without middle name', () => {
            //arrange
            model.middleName = '';
            
            //act
            const result = model.fullName;   
            
            //assert
            expect(result).toBe(`${model.firstName} ${model.lastName}`);
            
        })
    })
});