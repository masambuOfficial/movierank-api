'use strict';

/**
 * documentary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::documentary.documentary');
