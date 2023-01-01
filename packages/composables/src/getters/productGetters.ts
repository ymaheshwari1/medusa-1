import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { Product, ProductFilter } from '@vue-storefront/medusa-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product: Product): string {
  return product.title;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product: Product): string {
  return product.handle;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: Product): AgnosticPrice {
  return {
    regular: 0,
    special: 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  return [
    {
      small: product.images[0].url,
      normal: product.images[1].url,
      big: product.images[1].url
    }
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product: Product): string {
  return product.thumbnail;
}

function getFilterIds(product: Product, filters: ProductFilter): Array<string> {
  return filters.reduce((optionIds, filter) => {
    const option = product.options.find((option) => option.title.toLowerCase() === filter)
    if(option?.values?.length > 0) {
      optionIds.push(option.id)
    }
    return optionIds;
  }, []);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(product: Product, filters: ProductFilter): Product {
  console.log('filters', filters)

  if(product.variants.length <= 0) {
    return product;
  }

  const filterIds = getFilterIds(product, filters);

  const variant = product.variants.find((variant) => {
    variant.options.find((option) => {
      filterIds.includes(option.option_id)
    })
  })

  console.log(product)
  return product;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(products: Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  return filterByAttributeName.reduce((optionsIds, attribute) => {
    const option = products.options.find((option) => option.title.toLowerCase() === attribute)
    if(option?.values?.length > 0) {
      optionsIds[attribute] = Array.from(new Set(option.values.map((option) => option.value)))
    }
    return optionsIds;
  }, {});
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product: Product): string {
  return product.description;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: Product): string[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(product: Product): string {
  return product.id;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: Product): number {
  return 0;
}

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getCategoryIds,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating
};
