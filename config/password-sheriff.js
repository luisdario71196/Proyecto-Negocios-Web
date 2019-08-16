// Importar password-sheriff
var PasswordPolicy = require('password-sheriff').PasswordPolicy;

// Referecia al modelo que se va a validar
const Usuario = require('../models/Usuario');


// Create a length password policy
const lengthPolicy = new PasswordPolicy({ length: { minLength: 8 } });

// will throw as the password does not meet criteria
lengthPolicy.assert('hola123');

// returns false if password does not meet rules
assert.equal(false, lengthPolicy.check('hello123'));

// explains the policy
const explained = lengthPolicy.explain();

assert.equal(1, explained.length);

// easier i18n
assert.equal(`/crear_cuenta/${Usuario.password}`, explained[0].code);
assert.equal('Tu contraseña debe tener 8 caracteres de longiutd', format(explained[0].message, explained[0].format));


FooRule.prototype.explain = function (options) {
    return {

        code:  `/crear_cuenta/${Usuario.password}`,
        message: 'Tu contraseña no cumple con los siguentes parametros',
        format: [options.count]
    };
};

module.exports =  PasswordPolicy;

