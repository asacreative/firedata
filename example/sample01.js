/*
 * @Author: abi
 * @Date:   2015-10-22 11:41:03
 * @Last Modified by:   Ridwan Abadi
 * @Last Modified time: 2015-10-22 18:23:23
 */

(function() {

    'use strict';

    /**
     * [fs description]
     * @type {[type]}
     */
    var fs = require('fs')

    /**
     * [config description]
     * @type {Object}
     */
    var config = {

        alquran: {

            arabic: function() {

                return ['test', 'test1', function() {

                    return 'test3'
                }]
            },

            indonesia: ['ind1', 'ind2', 'ind4']

        }

    }

    module.exports = config;

}).call(this)
