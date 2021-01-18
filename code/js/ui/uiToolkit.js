//CREATE DOM ELEMENTS
function new_element(type,id,classes,inner){
    let e = document.createElement(type);
    
    if(!toolkit.isEmpty(id)) e.id = id;
    if(!toolkit.isEmpty(inner)) e.innerHTML = inner;
    if(!toolkit.isEmpty(classes)) 
        for (let i = 0; i < classes.length; i++) 
            e.classList.add(classes[i]);

    return e;
}
