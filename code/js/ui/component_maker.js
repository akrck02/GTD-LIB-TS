
//MAKE A NEW COMPONENT
function new_component(type,classes,id,options,append,show,hide,events){
    let element = document.createElement(type);
    let component = 
    {
        element:    document.createElement('div'),
        events:     {},
        append:     function(){},
        show:       function(){},
        hide:       function(){}
    }

    if(element != undefined) component.element = element;
    if(append != undefined)  component.append = append;
    if(show != undefined)    component.show = show;
    if(hide != undefined)    component.hide = hide;
    if(id != undefined)      element.id = id;

    if(events != undefined) events.forEach(e => component.events.add(e));
    if(options != undefined) 
        for (const key in options) 
                element.setAttribute(key,options[key]);
        
    
    if(classes != undefined) classes.forEach(cl => element.classList.add(cl));

    return component;
} 

function change_parameter(element,variable,value){
    element.style.setProperty("--"+variable,value);
}

