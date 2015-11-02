(function() {

    'use strict';

    /**
     * [fs description]
     * @type {[type]}
     */
    var fs = require('fs')

    /**
     * [fetch description]
     * @type {[type]}
     */
    var fetch = require('node-fetch')

    /**
     * [config description]
     * @type {Object}
     */
    var config = {

        users: {

            github: function() {

                return ['user', 'user1', function() {

                    return ['user3', new Promise(function(resolve, reject) {

                        fetch('https://api.github.com/users/asacreative').then(function(res) {

                            return res.json();

                        }).then(function(body) {

                            resolve(body);
                        });
                    })]
                }]
            },

            others: ['user4', 'user5', 'user6'],

            strings: new Promise(function(resolve, reject) {

                setTimeout(function() {

                    resolve(['this is new string', 'another new string', new Promise(function(resolve) {

                        setTimeout(function() {

                            resolve(['123', 321, 125123])

                        }, 2000)
                    })])

                }, 1000)
            }),

            directString: 'this is direct string value'

        }

    }

    module.exports = config;

}).call(this)
