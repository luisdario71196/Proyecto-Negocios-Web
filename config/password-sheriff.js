// Importar password-sheriff
var PasswordPolicy = require('password-sheriff').PasswordPolicy;

// Referecia al modelo que se va a validar
const Usuario = require('../models/Usuario');


// Create a length password policy
var lengthPolicy = new PasswordPolicy({ length: { minLength: 6 } });

// will throw as the password does not meet criteria
lengthPolicy.assert('hello');

// returns false if password does not meet rules
assert.equal(false, lengthPolicy.check('hello'));

// explains the policy
var explained = lengthPolicy.explain();

assert.equal(1, explained.length);

// easier i18n
assert.equal('lengthAtLeast', explained[0].code);
assert.equal('At least 6 characters in length',
    format(explained[0].message, explained[0].format));


FooRule.prototype.explain = function (options) {
    return {
    

        code: 'foo',
        message: 'Foo should be present at least %d times.',
        format: [options.count]
    };
};

