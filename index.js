/**
 * decodes a URI encoded query string and returns it as an object
 * @param {string} queryString 
 * @returns {object} 
 */
export function parse (queryString) {
    const decodedURL = decodeURIComponent(queryString)
    const parsedEntries = decodedURL.slice(1)
        .split('&')
        .map((queryFields) => {
            let [key, value] = queryFields.split('=')
            if (value.includes(',')) {
                value = value.split(',')
            }
            return [key, value]
        })
    return Object.fromEntries(parsedEntries)
}

/**
 * accepts an object and returns a URI encoded query string 
 * @param {object} queryStringObject 
 * @returns {string}
 */
export function stringify (queryStringObject) {
    const queryString = "?" + Object.entries(queryStringObject)
        .map((queryFields) => {
            let [key, value] = queryFields
            if (Array.isArray(value)) {
                value = value.join(',')
            }
            return [key, value].join('=')
        })
        .join('&')
    return encodeURIComponent(queryString)
}

//console.log(parse("%3Fq%3Dmy%20search%20query%26from%3D20%26size%3D10%26division%3DHR%2CACCOUNTING"))