'use strict';

/**
 * top-five service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-five.top-five');
