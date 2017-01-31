/**
 * Perform callback function after window render is complete
 *
 * @export
 * @param {any} callback
 * @param {any} [win=window] (for unit testing)
 */
export function afterRenderIsComplete(callback, win = window) {
    win.requestAnimationFrame(callback);
}

export function scrollToBottom(elementId, doc = document) {
    const node = doc.getElementById(elementId);
    if (node) {
        node.scrollTop = node.scrollHeight;
    }
}

export function setFocusToFirstInputInForm(formId, doc = document) {
    let firstInput = null;
    const form = doc.getElementById(formId);

    if (form) {
        for (let child of form) {
            if (isFocusableInput(child)) {
                firstInput = child;
                break;
            }
        }

        if (firstInput) {
            firstInput.focus();
        }
    }

    return firstInput;
}

export function isFocusableInput(elem) {
    let meetsCriteria = false;

    switch (elem.tagName.toLowerCase()) {
        case 'input':
        case 'select':
        case 'textarea':
            meetsCriteria = !elem.disabled && !elem.hidden && !elem.readonly;
            break;
    }

    return meetsCriteria;
}
