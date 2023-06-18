'use strict';

/**
 * state-authority service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::state-authority.state-authority');
