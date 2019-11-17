import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Item from './Item.vue';

describe('Item', function() {
  it('should display todo item', function() {
    const wrapper = shallowMount(Item, {
      propsData: {
        todo: { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: false }
      }
    });

    expect(wrapper.find('label').text()).to.eql('Demo');
  });

  it('should mark todo item as completed', function() {
    const wrapper = shallowMount(Item, {
      propsData: {
        todo: { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: true }
      }
    });

    expect(wrapper.find('li').classes()).to.contain('completed');
  });

  it('should notify about delete button', function() {
    const wrapper = shallowMount(Item, {
      propsData: {
        todo: { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: false }
      }
    });

    wrapper.find('.destroy').trigger('click');

    expect(wrapper.emitted().remove).to.have.lengthOf(1);
    expect(wrapper.emitted().remove[0]).to.eql(['e2bb892a-844a-47fb-a2b3-47f491af9d88']);
  });
});
