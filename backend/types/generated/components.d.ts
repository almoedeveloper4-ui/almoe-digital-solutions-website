import type { Schema, Struct } from '@strapi/strapi';

export interface BrandCards extends Struct.ComponentSchema {
  collectionName: 'components_brand_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrandCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_brand_case_studies';
  info: {
    displayName: 'Case Study';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrandContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_brand_content_blocks';
  info: {
    displayName: 'Content Block';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrandGallery extends Struct.ComponentSchema {
  collectionName: 'components_brand_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String;
  };
}

export interface BrandHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_brand_hero_slides';
  info: {
    displayName: 'Hero Slide';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrandTabs extends Struct.ComponentSchema {
  collectionName: 'components_brand_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    Content: Schema.Attribute.Text & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_header_navigation_items';
  info: {
    displayName: 'Navigation Item';
  };
  attributes: {
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String;
    menuType: Schema.Attribute.Enumeration<['Link', 'Brands', 'Products']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Link'>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'brand.cards': BrandCards;
      'brand.case-study': BrandCaseStudy;
      'brand.content-block': BrandContentBlock;
      'brand.gallery': BrandGallery;
      'brand.hero-slide': BrandHeroSlide;
      'brand.tabs': BrandTabs;
      'header.navigation-item': HeaderNavigationItem;
    }
  }
}
