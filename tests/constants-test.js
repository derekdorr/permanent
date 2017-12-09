import test from 'tape';
import {
    BOOL_FALSE,
    BOOL_TRUE,
    INT_NEGATIVE_ONE,
    INT_ONE,
    INT_ZERO,
    NULL,
    STR_BOOLEAN,
    STR_CREATE,
    STR_DELETE,
    STR_EMPTY,
    STR_FALSE,
    STR_FUNCTION,
    STR_GET,
    STR_METHOD_DELETE,
    STR_METHOD_GET,
    STR_METHOD_POST,
    STR_METHOD_PUT,
    STR_NUMBER,
    STR_OBJECT,
    STR_POST,
    STR_PUT,
    STR_READ,
    STR_STRING,
    STR_TRUE,
    STR_UNDEFINED,
    STR_UPDATE,
    UNDEF,
} from '../src';

test('Tests - Booleans', t => {
    t.equal(BOOL_TRUE, true, 'BOOL_TRUE is correct');
    t.equal(BOOL_FALSE, false, 'BOOL_FALSE is correct');
    t.end();
});

test('Tests - Integers', t => {
    t.equal(INT_NEGATIVE_ONE, -1, 'INT_NEGATIVE_ONE is correct');
    t.equal(INT_ONE, 1, 'INT_ONE is correct');
    t.equal(INT_ZERO, 0, 'INT_ZERO is correct');
    t.end();
});

test('Tests - Null', t => {
    t.equal(NULL, null, 'NULL is correct');
    t.end();
});

test('Tests - Request Strings', t => {
    t.equal(STR_CREATE, 'create', 'STR_CREATE is correct');
    t.equal(STR_DELETE, 'delete', 'STR_DELETE is correct');
    t.equal(STR_GET, 'get', 'STR_GET is correct');
    t.equal(STR_METHOD_DELETE, 'DELETE', 'STR_METHOD_DELETE is correct');
    t.equal(STR_METHOD_GET, 'GET', 'STR_METHOD_GET is correct');
    t.equal(STR_METHOD_POST, 'POST', 'STR_METHOD_POST is correct');
    t.equal(STR_METHOD_PUT, 'PUT', 'STR_METHOD_POST is correct');
    t.equal(STR_POST, 'post', 'STR_POST is correct');
    t.equal(STR_PUT, 'put', 'STR_PUT is correct');
    t.equal(STR_READ, 'read', 'STR_READ is correct');
    t.equal(STR_UPDATE, 'update', 'STR_UPDATE is correct');
    t.end();
});

test('Tests - Type Strings', t => {
    t.equal(STR_BOOLEAN, 'boolean', 'STR_BOOLEAN is correct');
    t.equal(STR_FUNCTION, 'function', 'STR_FUNCTION is correct');
    t.equal(STR_NUMBER, 'number', 'STR_NUMBER is correct');
    t.equal(STR_OBJECT, 'object', 'STR_OBJECT is correct');
    t.equal(STR_STRING, 'string', 'STR_STRING is correct');
    t.equal(STR_UNDEFINED, 'undefined', 'STR_UNDEFINED is correct');
    t.end();
});

test('Tests - Other Strings', t => {
    t.equal(STR_EMPTY, '', 'STR_EMPTY is correct');
    t.equal(STR_FALSE, 'false', 'STR_FALSE is correct');
    t.equal(STR_TRUE, 'true', 'STR_TRUE is correct');
    t.end();
});

test('Tests - Undefined', t => {
    t.equal(UNDEF, undefined, 'UNDEF is correct');
    t.end();
});
