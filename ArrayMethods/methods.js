class MyArray{

    constructor(arr){
        this.array=arr
    }

    onPush(num){
        let length=this.array.length
        this.array[length] = num
        return this.array
    }
    
    onPop(){
        this.array.length=this.array.length-1
        return this.array
    }
    
    onSplice(index,deletCount,...elems){
        
        if(index>0){
            if(deletCount && elems.length>0){
                
                let arr=[].concat(this.array)
                
                if(elems.length===deletCount){
                for(let i=index,j=0;i<elems.length+index;i++){
                    console.log(elems[j])
                    this.array[i]=elems[j]
                    j++
                    
                }}
                if(elems.length>deletCount){
                    this.array.length=this.array.length+elems.length-deletCount
                    let newEl = index+elems.length
                    
                    for(let i=index,j=0;i<this.array.length;i++){
                        
                        if(i<newEl && j<elems.length){
                            this.array[i]=elems[j]
                            j++  
                        }
                        else if(i>=newEl) {
                            this.array[i]=arr[i-1]     
                        }
                    }
                }
                else{
                    let newEl = index+elems.length
                    for(let i=index,j=0;i<this.array.length;i++){
                        if(i<newEl){
                            this.array[i]=elems[j]
                            j++  
                            
                        }  
                    else if(i>=newEl){
                        this.array[i]=this.array[i+deletCount-elems.length]   
                    }}
                    this.array.length=this.array.length-(deletCount-elems.length)
                }
            console.log(this.array)
        }
            
            else if(deletCount){
                for(let i=index;i<this.array.length-deletCount;i++){                  
                        this.array[i]=this.array[i+deletCount] 
                    } 
                    this.array.length=this.array.length-deletCount
                    console.log(this.array)
                    return this.array
            }
        
            this.array.length=index
            return this.array
            }             
}
    
    onSlice(start,end=0){
        if(start>0 && end>=0){
            for(let i=start,j=0;i<this.array.length;i++){
            this.array[j]=this.array[i]
            j++
        }
        if(end!=0){
            if(end-start>0) {this.array.length=end-start }  
            else return this.array=''                 
        }
        else {
            this.array.length=this.array.length-start
        }
        console.log(this.array)
        return this.array
        }
        else if(start<0&&end<=0){
            for(let i=this.array.length + start,j=0;i<this.array.length;i++){
                this.array[j]=this.array[i]
                j++
            }
            if(end!=0){
                if(start<end) {this.array.length=end+Math.abs(start)}  
                else return this.array=''                 
            }
            else {
                this.array.length=Math.abs(start)
            }
            console.log(this.array)
            return this.array
        }
    }
    
    onConcat(...args){
        for(let i=0;i<args.length;i++){
            if(Array.isArray(args[i])){
                for(let j=0;j<args[i].length;j++){
                    console.log(args[i][j])
                    this.array.push(args[i][j])
                }
            }else{
                this.array.push(args[i])
            }
        }
        console.log(this.array)
        
    }

    
    onForEach(fn,thisArg){
        for(let i=0;i<this.array.length;i++){
            //fn.call(thisArg, this.array[i]);
            fn.call(thisArg,this.array[i])
        }
    }
    
    onMap(fn, thisArg){
        let result = []
        for (let i = 0; i < this.array.length; i++) {
            result.push(fn.call(thisArg,this.array[i]));
        }
        return result;
        
    }
    
    onIndexOf(item,from=0){
        for (let i=0+from;i<this.array.length;i++){
            if(this.arry[i]===item){
                return i
            }
        }
        return -1;
    }

    lastIndexOf(item, from=0){
        for(let i=this.array.length-0;i<=0;i++){
            if(this.arry[i]===item){
                return i
            }
        }
        return -1;
    }

    includes(item, from=0){
        for (let i=0+from;i<this.array.length;i++){
            if(this.arry[i]===item){
                return true
            }
        }
        return false;
    }
    
    onFind(fn){
        for(let i=0;i<this.array.length;i++){
            if (fn.call(thisArg,this.array[i])) {
                return this.array[i]
          }
        }
        return undefined
    }
    
    onFilter(fn, thisArg){
        console.log(this.array)
        let result=[]
        for(let i=0;i<this.array.length;i++){
            if (fn.call(thisArg,this.array[i])) {
                result.push(this.array[i]);
          }
        }
        return result
    }
    
    onReverse(){
        for(let i=this.array.length,j=0;i<=0;i--){
            this.array[j]=this.array[i]
            j++
        }
    }

    onReduce(fn,startValue){
        let result = startValue;
        for (let i = 0; i < this.array.length; i++) {
            result = fn(result,arr[i])
        }
        console.log(result)
        return result
    }   

}


module.exports=MyArray





