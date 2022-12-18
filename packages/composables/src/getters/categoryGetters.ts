import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import type { Category } from '@vue-storefront/medusa-api';

function getCategories(categories: Category[]): any {
  return categories.map((category: Category) => ({
    label: category.title,
    slug: category.handle
  }))
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTree(category: Category): AgnosticCategoryTree {
  return {
    label: '',
    slug: '',
    items: [],
    isCurrent: false
  };
}

export const categoryGetters: CategoryGetters<Category> = {
  getCategories,
  getTree
};
