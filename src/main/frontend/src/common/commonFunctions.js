export function isStateOkWithObject(returnObject) {
    if(returnObject && returnObject.status && returnObject.status === "200") {
        return true;
    }
}