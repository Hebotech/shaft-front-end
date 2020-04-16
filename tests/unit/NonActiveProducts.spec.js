import Product from '../../src/components/ui/products/product.vue';
import { mount } from '@vue/test-utils';

describe('Product', () => {
  test('If must show the products from Vuex as a div with img background of the product', () => {
    const wrapper = mount(Product)

    wrapper.find('div').triggger('click')
    expect(wrapper.find('div').classes('active'))
  })
});