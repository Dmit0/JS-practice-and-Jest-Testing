class Lodash {
    
    chank(mas,k){
        let firstMas=[];
        let secondmas=[];
        if(k===0){return []}
        else if(k===1){
            for(let i=0;i<mas.length;i++){
                firstMas.push([mas[i]])
             }
            return firstMas
        }
        else if(k>1) {
            for(let i=0;i<mas.length;){
                for(let j=0;j<k;j++){
                    if(mas[i]!=undefined){
                        secondmas.push(mas[i]);i++;
                    }   
                 }
                firstMas.push(secondmas)
                secondmas=[];
             }
        return firstMas
        }
    }
    
    pick(obj,mas){
        let newObj={};
        for(let key of Object.keys(obj)){
            for(let i=0;i<mas.length;i++){
                if(key == mas[i]){  
                 newObj[key]=obj[key]
                }
            }
        }
    return newObj
    }
    
    zip(...args){
        let nowmas=[]
        let allmass=[]
        for(let k=allmass.length,i=0,j=0;k<args.length;i++){               
                nowmas.push(args[i][j])
                if(nowmas.length==args.length){
                    j++;
                    i=-1;
                    allmass.push(nowmas);
                    nowmas=[]
                }
                if(allmass.length==args[0].length){
                    return allmass
                }
        }

    }
    
    flatten(mas){
        let newmas=[]
        for(let i=0;i<mas.length;i++){
            if(Array.isArray(mas[i])){
                for(let j=0;j<mas[i].length;j++){
                    newmas.push(mas[i][j])
                }
            }
            else{newmas.push(mas[i])}
        }
        return newmas
    }

    
    flatten_deep(mas){
        
        let _ = new Lodash

        let newmas=[]
        let flag=false;
        for(let i=0;i<mas.length;i++){
            
            if(Array.isArray(mas[i])){
                for(let j=0;j<mas[i].length;j++){
                    newmas.push(mas[i][j])
                    flag=true
                }
            }
            else if(!Array.isArray(mas[i])){
                newmas.push(mas[i])
                
            }
            if(i===mas.length-1 && !Array.isArray(mas[i]) && flag===false){
                //console.log(mas)
                return mas
            }
        }
        
        _.flatten_deep(newmas)
    }
    
    countBy(array,fn){
        return array.reduce((obj,item)=>{
            const key = typeof fn==='function' ?fn(item):item[fn]
            if(!obj[key]){
                obj[key]=0
            }
            obj[key]++
            return obj
        },{})
    }
    
    groupBy(array,fn){
        return array.reduce((obj,item)=>{
            const key = typeof fn==='function' ?fn(item):item[fn]
            if(!obj[key]){
                obj[key]=[]
            }
            obj[key].push(item)
            return obj
        },{})
    }
}


module.exports=Lodash



