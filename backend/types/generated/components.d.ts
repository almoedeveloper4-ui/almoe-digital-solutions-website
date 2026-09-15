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

export interface BrandCta extends Struct.ComponentSchema {
  collectionName: 'components_brand_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    PrimaryButtonLink: Schema.Attribute.String;
    PrimaryButtonText: Schema.Attribute.String;
    SecondaryButtonLink: Schema.Attribute.String;
    SecondaryButtonText: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface BrandExpertise extends Struct.ComponentSchema {
  collectionName: 'components_brand_expertise';
  info: {
    displayName: 'Expertise';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Text: Schema.Attribute.String;
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
    buttonText: Schema.Attribute.String;
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

export interface ProductAccessory extends Struct.ComponentSchema {
  collectionName: 'components_product_accessories';
  info: {
    displayName: 'Accessory';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductDatasheet extends Struct.ComponentSchema {
  collectionName: 'components_product_datasheets';
  info: {
    displayName: 'Datasheet';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductFeature extends Struct.ComponentSchema {
  collectionName: 'components_product_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductHighlight extends Struct.ComponentSchema {
  collectionName: 'components_product_highlights';
  info: {
    displayName: 'Highlight';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductSpecification extends Struct.ComponentSchema {
  collectionName: 'components_product_specifications';
  info: {
    displayName: 'Specification';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'brand.cards': BrandCards;
      'brand.case-study': BrandCaseStudy;
      'brand.content-block': BrandContentBlock;
      'brand.cta': BrandCta;
      'brand.expertise': BrandExpertise;
      'brand.gallery': BrandGallery;
      'brand.hero-slide': BrandHeroSlide;
      'brand.tabs': BrandTabs;
      'header.navigation-item': HeaderNavigationItem;
      'product.accessory': ProductAccessory;
      'product.datasheet': ProductDatasheet;
      'product.feature': ProductFeature;
      'product.highlight': ProductHighlight;
      'product.specification': ProductSpecification;
    }
  }
}
