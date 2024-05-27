import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    Trailer: Attribute.String;
    ref: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'link.link': LinkLink;
    }
  }
}
