export default function createPointer(className, objectId) {
    const pointer = {
        __type: 'Pointer',
        className: className,
        objectId: objectId,
    }

    return pointer;
}