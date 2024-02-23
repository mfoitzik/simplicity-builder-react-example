// this function receives a reference to an element and changes the element type
// For example, change an h1 to an h2
// it iterates through all existing attributes on the input element and adds them to the new element
export function changeElementType(inputElement, newType) {
    const newEl = document.createElement(newType);
    newEl.innerHTML = inputElement.innerHTML;
    const origAtts = inputElement.attributes;
    for(let i = origAtts.length - 1; i >= 0; i--) {
        newEl.setAttribute(origAtts[i].name, origAtts[i].value);
    }
    inputElement.insertAdjacentElement('afterend', newEl);
    inputElement.remove();
}

//In the context of SimplicityBuilder this function needs to:
//update the CSS variable value - that is the easy part
//update the actual style element that holds the variable so the change is reflected when 
//saving the document.

export function changeCssVariableValue(stylesheetID, variableName, variableValue) {
    var r = document.querySelector(':root');
    r.style.setProperty(variableName, variableValue);
    const vstyle = document.getElementById(stylesheetID);
    if (vstyle && vstyle.sheet.cssRules){
        let newCssText = '';
        for (const element of vstyle.sheet.cssRules) {
            if (element.selectorText != ':root') {
                newCssText += element.cssText + '\n';
            } else {
                if (element.style) {
                    const props = [...element.style]
                    .map((propName) => [
                    propName.trim(),
                    element.style.getPropertyValue(propName).trim()
                    ]);
                    let tempRootStyle = ':root {\n';
                    props.forEach((prop) => {
                        let outProp = prop[1];
                        if (prop[0] == variableName) {
                            outProp = variableValue;
                        }
                        tempRootStyle += prop[0] + ": " + outProp + ";\n";
                    });
                    newCssText += tempRootStyle + '}\n';
                }
            }
        }
        vstyle.innerHTML = newCssText;
    }
}