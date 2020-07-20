class MyPromise{

    constructor(executor){
        
        this.queue=[]
        this.errorHeandler=()=>{}
        this.finallyHandler=()=>{}
        try{
            executor.call(null,this.onResolve.bind(this),this.OnReject.bind(this))
        }
        catch(e){
            this.errorHeandler(e)
        } finally{
            this.finallyHandler()
        }     
    }

    onResolve(data){
        this.queue.forEach(callback=>{
            data = callback(data)
        })
        this.finallyHandler()
    }
    OnReject(error){
        this.errorHeandler(error)
        this.finallyHandler()
    }

    then(fn){
        this.queue.push(fn)
        return this
    }  
    
    catch(fn){
        this.errorHeandler=fn
        return this
    }
    
    finally(fn){
        this.finallyHandler=fn
        return this
    }
}
module.exports=MyPromise