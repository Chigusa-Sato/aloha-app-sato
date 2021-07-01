import Search from '@/components/home/seach.vue';
import Vuex from 'vuex'
import { shallowMount,createLocalVue } from '@vue/test-utils';


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

    wrapper=shallowMount(Search,{store,localVue, stubs: ['router-link'],})
  })

  //button要素が存在するか
  it('has a button', () => {
    expect(wrapper.contains('img')).toBe(true)
  })


})


