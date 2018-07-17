export function isPromise(funct){
    if('then' in funct && 'catch' in funct)
        return true;
    return false;  
}