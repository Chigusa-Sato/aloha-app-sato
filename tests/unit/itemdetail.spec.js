import ItemDetail from '@/views/ItemDetail.vue';
import Vuex from 'vuex';
//import Vue from 'vue';

import { shallowMount,createLocalVue } from '@vue/test-utils';
//import VueRouter from 'vue-router';
const localVue = createLocalVue()
localVue.use(Vuex)

describe('test ItemDetail Component',()=>{
  let store
  let storeMock
  let wrapper
  beforeEach(()=>{
    storeMock={
      namespaced: true,
      state:{
        items: []
      }
    }
    store=new Vuex.Store({
      modules:{
        items:storeMock
      }
    })

    wrapper=shallowMount(ItemDetail,{store,localVue,stubs: ['router-link','router-view']})
  })


//button要素が存在するか
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

//imgタグが2つあるか
  it('img tag has 2', () => {
    expect(wrapper.findAll('.c-logo').length).toEqual(2)
  }) 

//buttonタグが1つあるか
it('button tag has 1', () => {
  expect(wrapper.findAll('.c-button--default').length).toEqual(1)
}) 


//countPulsが実行されるか
  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('.countPlus')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  //countMinusが実行されるか
  it('button click should decrement the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('.countMinus')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(0)
  })

})


// test('should display the $route.user using a a real router', () => {
//   Vue.use(VueRouter)
//   const $route = {params:{itemid:"1"}}
//   const wrapper = mount(ItemDetail, { globals: { $route } })
//   expect(wrapper.text().trim()).toBe('Lily')
// })








