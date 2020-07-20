const MyPromise=require('./promise')

describe('promise',()=>{

    let promise
    let executor

    const Result=2
    const errorResult="error"

    beforeEach(()=>{
        executor=jest.fn((resolve)=>{setTimeout(()=>{resolve(Result)},150)})
        promise = new MyPromise(executor)
    })
    
    test('should exist typeof func',()=>{
        expect(MyPromise).toBeDefined()
        expect(typeof MyPromise).toBe('function')
    })

    test('should have then,catch,finally',()=>{


        expect(promise.then).toBeDefined()
        expect(promise.catch).toBeDefined()
        expect(promise.finally).toBeDefined()
    })

    test('call executor emmidiatly (callbac)',()=>{


        expect(executor).toHaveBeenCalled()
    })

    test('chain', async()=>{
        const result = await promise.then(num=>num).then(num=>num*2)
        expect(result).toBe(Result*2)
    })

    test ('catch error',()=>{
        const errorExecutor=(_,reject)=>{
            setTimeout(()=>{
                reject(errorResult)
            },150)
        }
        const errorPromise = new MyPromise(errorExecutor)

        return new Promise((resolve)=>{
            errorPromise.catch(error=>{
                expect(error).toBe(errorResult)
                resolve()
            })
        })
    })

    test('call finally',async()=>{
        const finallyFn=jest.fn(()=>{})
        await promise.finally(finallyFn)
        expect(finallyFn).toHaveBeenCalled()
    })
})