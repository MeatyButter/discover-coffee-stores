export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

export const toTitleCase = (str) => {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}