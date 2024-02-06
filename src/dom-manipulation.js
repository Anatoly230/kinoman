
function getParentElement(element, parentClass) {
    while (!element.classList.contains(parentClass)) {
        element = element.parentElement;
        if (element === null) {
            return null;
        }
    }
    return element;
}

export { getParentElement };