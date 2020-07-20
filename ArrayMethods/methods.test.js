const MyArray=require('./methods')

describe('array',()=>{
    
    let arr//=[1,2,3,4,5]
    let array// = new MyArray(arr)
    let _Array//=[].concat(arr)
    


    const num=10

    

    beforeEach(()=>{ 
        arr=[1,2,3,4,5,6,7,8,9]
        _Array=[].concat(arr)
        array = new MyArray(arr)
    })

    test('push',()=>{
         _Array.push(num)
         expect(array.onPush).toBeDefined()
         expect(array.onPush(num)).toEqual(_Array)
    })
    test('pop',()=>{
        _Array.pop()
        expect(array.onPop).toBeDefined()
        expect(array.onPop()).toEqual(_Array)
    })
    test('splice',()=>{
       
         _Array.splice(2,3,2,2)
         expect(array.onSplice).toBeDefined()
         console.log(_Array)
         array.onSplice(2,3,2,2)
         console.log(array)
         //expect(array.onSplice(2,3,2,2)).toEqual(_Array)
        

       
    })

})