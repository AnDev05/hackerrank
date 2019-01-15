function list(names){
    let result = names.map((item)=>{
        return item.name;
    }).join(', ');
    
}