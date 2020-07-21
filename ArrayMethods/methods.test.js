const MyArray=require('./methods')

describe('array',()=>{
    
    let arr//=[1,2,3,4,5]
    let array// = new MyArray(arr)
    let _Array//=[].concat(arr)
    let length
    
    


    const num=5

    

    beforeEach(()=>{ 
        arr=[1,2,3,4,5,6,7,8,9]
        _Array=[].concat(arr)
        array = new MyArray(arr)
        length=_Array.length
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
         expect(array.onSplice(2,3,2,2)).toEqual(_Array) 
    })

    test('onSlice',()=>{

        expect(array.onSlice).toBeDefined() 
        expect(array.onSlice(-2,-1).length).toBe(1)      
    })
    
    test('onConcat',()=>{      
        expect(array.onConcat).toBeDefined()
        const expected = _Array
        expect (array.onConcat(_Array).length).toEqual(18) 
        expect(array.onConcat(_Array)).toEqual(expect.arrayContaining(expected));   
    })
    
    
    
    test('onIndexOf',()=>{ 
         
        expect(array.onIndexOf).toBeDefined()
        expect(array.onIndexOf("not value")).toBe(-1)
        expect(array.onIndexOf(num)).toBe(num-1) 
    })
    
    test('onIncludes',()=>{      
        expect(array.onIncludes).toBeDefined() 
        expect(array.onIncludes("not value")).toBeFalsy()
        expect(array.onIncludes(num)).toBeTruthy()

    })

    test('onReverse',()=>{      
        expect(array.onReverse).toBeDefined()
        _Array.reverse()
        expect(array.onReverse()).toEqual(_Array)
    })

    test('onForEach',()=>{      
        expect(array.onForEach).toBeDefined()
        const mockCallback = jest.fn(x => num + x)
        array.onForEach(mockCallback)
        expect(mockCallback.mock.calls.length).toBe(length)
        expect(mockCallback.mock.results[0].value).toBe(num+_Array[0])

    })
    test('onMap',()=>{      
        expect(array.onMap).toBeDefined()
        let res = _Array.map(x => num + x)
        expect(array.onMap(x => num + x)).toEqual(res)


    })
    test('onFind',()=>{      
        expect(array.onFind).toBeDefined()

    })
    test('onFilter',()=>{      
        expect(array.onFilter).toBeDefined()
       

    })  
    test('onReduce',()=>{      
        expect(array.onReduce).toBeDefined() 

    })

})