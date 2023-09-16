import { mount } from "@vue/test-utils";
import Ordercomp from "@/views/Ordercomp.vue";

test("test Ordercomp Component", function() {
  const wrapper = mount(Ordercomp,{
    stubs: ['router-link'],
  });
  
  //画面に正しく表示されるか
  expect(wrapper.text()).toBe(
    "ご注文が完了しました！ 注文内容は注文履歴で確認できます。 履歴を確認する"
  );
});
