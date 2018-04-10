import { shallow, createLocalVue, mount } from "@vue/test-utils";
import Vuex from 'vuex';
import NewTodo from "@/components/NewTodo.vue";
// import { expect } from 'chai'

import * as all from "../unit/setup.js";

const localVue = createLocalVue()

localVue.use(Vuex)

describe("NewTodo.vue", () => {
  let methods;
  let store;

  beforeEach(() => {
    methods = {
      newTodoAdded: jest.fn()
    },
    store = new Vuex.Store({
      state: {},
      methods
    })
  });

  it("calls newTodoAdded() when keyup.enter hit.", () => {
    // time to try and test some vuex stuff and see if the methods are called when expected.
    const wrapper = shallow(NewTodo, { methods , localVue})
    const input = wrapper.find(".md-input");
    input.trigger('keyup.enter')
    expect(methods.newTodoAdded).toHaveBeenCalled()
  });

  it("calls newTodoAdded() when keyup.enter hit.", () => {
    // time to try and test some vuex stuff and see if the methods are called when expected.
    const wrapper = shallow(NewTodo, { methods , localVue})
    const input = wrapper.find(".md-input");
    input.trigger('keydown.space')
    expect(methods.newTodoAdded).not.toHaveBeenCalled()
  });

  it("renders props.placeholderMsg when passed", () => {
    const msg = "Add a Todo";
    const wrapper = shallow(NewTodo, {
      propsData: { placeholderMsg: msg }
    });
    expect(wrapper.vm._props.placeholderMsg).toMatch(msg);
  });

  it("renders newTodo as empty string", () => {
    const wrapper = shallow(NewTodo, {});
    expect(wrapper.vm.newTodo).toMatch("");
  });

  it("has the expected html structure", () => {
    const wrapper = shallow(NewTodo);
    expect(wrapper.element).toMatchSnapshot();
  });

  // it("has the expected html structure", () => {
  //   const wrapper = mount(NewTodo);
  //   expect(wrapper.element).toMatchSnapshot();
  // });

  // it("renders newTodo as test string ", () => {
  //   const wrapper = shallow(NewTodo, {
  //     propsData: { newTodo: "test string" }
  //   });
  //   expect(wrapper.vm.newTodo).toMatch("test string");
  // });
});
