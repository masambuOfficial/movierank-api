'use strict';

/**
 * top-five router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::top-five.top-five');
