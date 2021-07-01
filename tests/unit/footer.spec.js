import { mount } from "@vue/test-utils";
import Footer from "@/views/Footer.vue";

describe("test Ordercomp Component", function() {
  const wrapper = mount(Footer);
  
  //画面に正しく表示されるか
  it('render text',()=>{
  expect(wrapper.text()).toBe(
    "ラクラクアロハ Copyright © Chigusa Sato."
  );
})
it('render html',()=>{
  expect(wrapper.html()).toContain(
    '<p class="l-footer__text">ラクラクアロハ Copyright © Chigusa Sato.</p>'
  );
})
});


