import test from 'ava';
import {parse, stringify} from './index.js'

test('parse converts querystring to object', (t) => {
    const stubQueryString = "%3Fq%3Dmy%20search%20query%26from%3D20%26size%3D10%26division%3DHR%2CACCOUNTING"
    const response = parse(stubQueryString)
    const expected = {
        q: 'my search query',
        from: '20',
        size: '10',
        division: [ 'HR', 'ACCOUNTING' ]
      }
    t.deepEqual(response, expected)
})

test('stringify converts object to query string', (t) => {
    const stubObject = {
        q: 'my search query',
        from: '20',
        size: '10',
        division: [ 'HR', 'ACCOUNTING' ]
      }
    const response = stringify(stubObject)
    const expected = "%3Fq%3Dmy%20search%20query%26from%3D20%26size%3D10%26division%3DHR%2CACCOUNTING"
    t.deepEqual(response, expected)
})