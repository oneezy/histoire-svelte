import { S as SvelteComponentDev, Q as init, R as safe_not_equal, U as dispatch_dev, V as create_slot, W as validate_slots, X as element, Y as attr_dev, Z as null_to_empty, $ as toggle_class, a0 as add_location, a1 as insert_dev, a2 as listen_dev, a3 as update_slot_base, a4 as get_all_dirty_from_scope, a5 as get_slot_changes, a6 as transition_in, a7 as transition_out, a8 as detach_dev, a9 as bubble, aa as binding_callbacks, ab as bind, ac as create_component, ad as mount_component, ae as destroy_component, af as hstEvent, ag as space, ah as text, ai as set_style, aj as append_dev, ak as add_flush_callback, al as set_data_dev, am as set_input_value, an as Logo_square, ao as Logo_dark, ap as useDark, aq as useToggle, ar as markRaw, E as reactive, _ as __vitePreload, d as defineComponent, r as ref, as as watchEffect, o as openBlock, q as createBlock, at as mergeProps, au as resolveDynamicComponent, h as createCommentVNode } from "./vendor.58b77c82.js";
const BaseButton_svelte_svelte_type_style_lang = "";
const file$2 = "C:/Users/oneezy/Desktop/www/9.Forks/histoire-svelte/src/BaseButton.svelte";
function create_fragment$5(ctx) {
  let button;
  let button_class_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  const block = {
    c: function create() {
      button = element("button");
      if (default_slot)
        default_slot.c();
      attr_dev(button, "class", button_class_value = null_to_empty(ctx[1]) + " s-NkP7lIJWdeqh");
      toggle_class(button, "disabled", ctx[0]);
      add_location(button, file$2, 5, 0, 86);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      if (default_slot) {
        default_slot.m(button, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen_dev(button, "click", ctx[4], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[2],
            !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null),
            null
          );
        }
      }
      if (!current || dirty & 2 && button_class_value !== (button_class_value = null_to_empty(ctx2[1]) + " s-NkP7lIJWdeqh")) {
        attr_dev(button, "class", button_class_value);
      }
      if (dirty & 3) {
        toggle_class(button, "disabled", ctx2[0]);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BaseButton", slots, ["default"]);
  let { disabled = false } = $$props;
  let { size = "medium" } = $$props;
  const writable_props = ["disabled", "size"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BaseButton> was created with unknown prop '${key}'`);
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("disabled" in $$props2)
      $$invalidate(0, disabled = $$props2.disabled);
    if ("size" in $$props2)
      $$invalidate(1, size = $$props2.size);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({ disabled, size });
  $$self.$inject_state = ($$props2) => {
    if ("disabled" in $$props2)
      $$invalidate(0, disabled = $$props2.disabled);
    if ("size" in $$props2)
      $$invalidate(1, size = $$props2.size);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [disabled, size, $$scope, slots, click_handler];
}
class BaseButton extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { disabled: 0, size: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BaseButton",
      options,
      id: create_fragment$5.name
    });
  }
  get disabled() {
    throw new Error("<BaseButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value) {
    throw new Error("<BaseButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get size() {
    throw new Error("<BaseButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<BaseButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const BaseButton_story_svelte_svelte_type_style_lang = "";
const file$1 = "C:/Users/oneezy/Desktop/www/9.Forks/histoire-svelte/src/BaseButton.story.svelte";
function create_default_slot_1$3(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Click me!");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$3.name,
    type: "slot",
    source: "(12:2) <BaseButton {disabled} {size} on:click={event => hstEvent('click', event)}>",
    ctx
  });
  return block;
}
function create_default_slot$4(ctx) {
  let basebutton;
  let t0;
  let div;
  let label;
  let input;
  let t1;
  let current;
  let mounted;
  let dispose;
  basebutton = new BaseButton({
    props: {
      disabled: ctx[1],
      size: ctx[2],
      $$slots: { default: [create_default_slot_1$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  basebutton.$on("click", ctx[5]);
  const block = {
    c: function create() {
      create_component(basebutton.$$.fragment);
      t0 = space();
      div = element("div");
      label = element("label");
      input = element("input");
      t1 = text("\r\n      Disabled");
      attr_dev(input, "type", "checkbox");
      attr_dev(input, "class", "s-s7hty-pl5p4e");
      add_location(input, file$1, 16, 6, 384);
      attr_dev(label, "class", "s-s7hty-pl5p4e");
      add_location(label, file$1, 15, 4, 369);
      set_style(div, "margin-top", "6px");
      attr_dev(div, "class", "s-s7hty-pl5p4e");
      add_location(div, file$1, 14, 2, 333);
    },
    m: function mount(target, anchor) {
      mount_component(basebutton, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, label);
      append_dev(label, input);
      input.checked = ctx[1];
      append_dev(label, t1);
      current = true;
      if (!mounted) {
        dispose = listen_dev(input, "change", ctx[6]);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      const basebutton_changes = {};
      if (dirty & 2)
        basebutton_changes.disabled = ctx2[1];
      if (dirty & 4)
        basebutton_changes.size = ctx2[2];
      if (dirty & 128) {
        basebutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      basebutton.$set(basebutton_changes);
      if (dirty & 2) {
        input.checked = ctx2[1];
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(basebutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(basebutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(basebutton, detaching);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$4.name,
    type: "slot",
    source: '(11:0) <Hst.Story title=\\"BaseButton\\">',
    ctx
  });
  return block;
}
function create_controls_slot$2(ctx) {
  let hst_checkbox;
  let updating_value;
  let t0;
  let hst_select;
  let updating_value_1;
  let t1;
  let pre;
  let t2_value = JSON.stringify(
    {
      disabled: ctx[1],
      size: ctx[2]
    },
    null,
    2
  ) + "";
  let t2;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[3](value);
  }
  let hst_checkbox_props = { title: "Disabled" };
  if (ctx[1] !== void 0) {
    hst_checkbox_props.value = ctx[1];
  }
  hst_checkbox = new ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_select_value_binding(value) {
    ctx[4](value);
  }
  let hst_select_props = {
    options: ["small", "medium", "large"],
    title: "Size"
  };
  if (ctx[2] !== void 0) {
    hst_select_props.value = ctx[2];
  }
  hst_select = new ctx[0].Select({ props: hst_select_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_select, "value", hst_select_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t0 = space();
      create_component(hst_select.$$.fragment);
      t1 = space();
      pre = element("pre");
      t2 = text(t2_value);
      attr_dev(pre, "class", "s-s7hty-pl5p4e");
      add_location(pre, file$1, 31, 4, 713);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_select, target, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, pre, anchor);
      append_dev(pre, t2);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        hst_checkbox_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_select_changes = {};
      if (!updating_value_1 && dirty & 4) {
        updating_value_1 = true;
        hst_select_changes.value = ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_select.$set(hst_select_changes);
      if ((!current || dirty & 6) && t2_value !== (t2_value = JSON.stringify(
        {
          disabled: ctx2[1],
          size: ctx2[2]
        },
        null,
        2
      ) + ""))
        set_data_dev(t2, t2_value);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_select.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_select.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_checkbox, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_select, detaching);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(pre);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$2.name,
    type: "slot",
    source: '(22:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      title: "BaseButton",
      $$slots: {
        controls: [create_controls_slot$2],
        default: [create_default_slot$4]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 134) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BaseButton_story", slots, []);
  let { Hst } = $$props;
  let disabled = false;
  let size = "medium";
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BaseButton_story> was created with unknown prop '${key}'`);
  });
  function hst_checkbox_value_binding(value) {
    disabled = value;
    $$invalidate(1, disabled);
  }
  function hst_select_value_binding(value) {
    size = value;
    $$invalidate(2, size);
  }
  const click_handler = (event) => hstEvent("click", event);
  function input_change_handler() {
    disabled = this.checked;
    $$invalidate(1, disabled);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    hstEvent,
    BaseButton,
    Hst,
    disabled,
    size
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("disabled" in $$props2)
      $$invalidate(1, disabled = $$props2.disabled);
    if ("size" in $$props2)
      $$invalidate(2, size = $$props2.size);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    disabled,
    size,
    hst_checkbox_value_binding,
    hst_select_value_binding,
    click_handler,
    input_change_handler
  ];
}
class BaseButton_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BaseButton_story",
      options,
      id: create_fragment$4.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<BaseButton_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<BaseButton_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<BaseButton_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_3$2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("\u{1F697}");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$2.name,
    type: "slot",
    source: '(11:2) <Hst.Variant title=\\"default\\">',
    ctx
  });
  return block;
}
function create_default_slot_2$2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("\u{1F3CE}\uFE0F");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$2.name,
    type: "slot",
    source: '(14:2) <Hst.Variant title=\\"Fast\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("\u{1F69C}");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$2.name,
    type: "slot",
    source: '(17:2) <Hst.Variant title=\\"Slow\\">',
    ctx
  });
  return block;
}
function create_default_slot$3(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let current;
  hst_variant0 = new ctx[0].Variant({
    props: {
      title: "default",
      $$slots: { default: [create_default_slot_3$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new ctx[0].Variant({
    props: {
      title: "Fast",
      $$slots: { default: [create_default_slot_2$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new ctx[0].Variant({
    props: {
      title: "Slow",
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t0 = space();
      create_component(hst_variant1.$$.fragment);
      t1 = space();
      create_component(hst_variant2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_variant1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_variant2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & 2) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & 2) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty & 2) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      transition_in(hst_variant2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      transition_out(hst_variant2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_variant1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_variant2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: `(5:0) <Hst.Story    title=\\"Cars\\"    layout={{ type: 'grid', width: 200 }}    icon=\\"carbon:car\\"    iconColor=\\"gray\\"  >`,
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      title: "Cars",
      layout: { type: "grid", width: 200 },
      icon: "carbon:car",
      iconColor: "gray",
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 2) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Cars_story", slots, []);
  let { Hst } = $$props;
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Cars_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class Cars_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Cars_story",
      options,
      id: create_fragment$3.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<Cars_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<Cars_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Cars_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_3$1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("\u{1F63A}");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$1.name,
    type: "slot",
    source: '(6:2) <Hst.Variant title=\\"Happy\\" source=\\"\u{1F63A}\\">',
    ctx
  });
  return block;
}
function create_default_slot_2$1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("\u{1F639}");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: '(9:2) <Hst.Variant title=\\"Joy\\" source=\\"\u{1F639}\\">',
    ctx
  });
  return block;
}
function create_default_slot_1$1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("\u{1F63B}");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(12:2) <Hst.Variant title=\\"Love\\" source=\\"\u{1F63B}\\">',
    ctx
  });
  return block;
}
function create_default_slot$2(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let current;
  hst_variant0 = new ctx[0].Variant({
    props: {
      title: "Happy",
      source: "\u{1F63A}",
      $$slots: { default: [create_default_slot_3$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new ctx[0].Variant({
    props: {
      title: "Joy",
      source: "\u{1F639}",
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new ctx[0].Variant({
    props: {
      title: "Love",
      source: "\u{1F63B}",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t0 = space();
      create_component(hst_variant1.$$.fragment);
      t1 = space();
      create_component(hst_variant2.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_variant1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_variant2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & 2) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & 2) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty & 2) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      transition_in(hst_variant2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      transition_out(hst_variant2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_variant1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_variant2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: '(5:0) <Hst.Story title=\\"Meow\\">',
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      title: "Meow",
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 2) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Meow_story", slots, []);
  let { Hst } = $$props;
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Meow_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class Meow_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Meow_story",
      options,
      id: create_fragment$2.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<Meow_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<Meow_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Meow_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const NoIframe_story_svelte_svelte_type_style_lang = "";
const file = "C:/Users/oneezy/Desktop/www/9.Forks/histoire-svelte/src/NoIframe.story.svelte";
function create_default_slot$1(ctx) {
  let t0;
  let div0;
  let t1;
  let t2;
  let div1;
  let input;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      t0 = text("No iframe story content\r\n\r\n  ");
      div0 = element("div");
      t1 = text(ctx[1]);
      t2 = space();
      div1 = element("div");
      input = element("input");
      attr_dev(div0, "class", "s-IlcQr_K6FR4M");
      add_location(div0, file, 11, 2, 167);
      attr_dev(input, "class", "s-IlcQr_K6FR4M");
      add_location(input, file, 13, 4, 202);
      attr_dev(div1, "class", "s-IlcQr_K6FR4M");
      add_location(div1, file, 12, 2, 191);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div0, anchor);
      append_dev(div0, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, input);
      set_input_value(input, ctx[1]);
      if (!mounted) {
        dispose = listen_dev(input, "input", ctx[3]);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & 2)
        set_data_dev(t1, ctx2[1]);
      if (dirty & 2 && input.value !== ctx2[1]) {
        set_input_value(input, ctx2[1]);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div0);
      if (detaching)
        detach_dev(t2);
      if (detaching)
        detach_dev(div1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(7:0) <Hst.Story    layout={{ type: 'single', iframe: false }}  >",
    ctx
  });
  return block;
}
function create_controls_slot$1(ctx) {
  let hst_text;
  let updating_value;
  let current;
  function hst_text_value_binding(value) {
    ctx[2](value);
  }
  let hst_text_props = { title: "Content" };
  if (ctx[1] !== void 0) {
    hst_text_props.value = ctx[1];
  }
  hst_text = new ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        hst_text_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text.$set(hst_text_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$1.name,
    type: "slot",
    source: '(17:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      layout: { type: "single", iframe: false },
      $$slots: {
        controls: [create_controls_slot$1],
        default: [create_default_slot$1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 18) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("NoIframe_story", slots, []);
  let { Hst } = $$props;
  let content = "Some content";
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<NoIframe_story> was created with unknown prop '${key}'`);
  });
  function hst_text_value_binding(value) {
    content = value;
    $$invalidate(1, content);
  }
  function input_input_handler() {
    content = this.value;
    $$invalidate(1, content);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, content });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("content" in $$props2)
      $$invalidate(1, content = $$props2.content);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, content, hst_text_value_binding, input_input_handler];
}
class NoIframe_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "NoIframe_story",
      options,
      id: create_fragment$1.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<NoIframe_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<NoIframe_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<NoIframe_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_4(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[2]);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 4)
        set_data_dev(t, ctx2[2]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(17:4) <BaseButton {disabled}>",
    ctx
  });
  return block;
}
function create_default_slot_3(ctx) {
  let basebutton;
  let current;
  basebutton = new BaseButton({
    props: {
      disabled: ctx[1],
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(basebutton.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(basebutton, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const basebutton_changes = {};
      if (dirty & 2)
        basebutton_changes.disabled = ctx2[1];
      if (dirty & 36) {
        basebutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      basebutton.$set(basebutton_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(basebutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(basebutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(basebutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3.name,
    type: "slot",
    source: '(16:2) <Hst.Variant title=\\"Variant 1\\">',
    ctx
  });
  return block;
}
function create_default_slot_2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[2]);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 4)
        set_data_dev(t, ctx2[2]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(23:4) <BaseButton {disabled}>",
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let basebutton;
  let current;
  basebutton = new BaseButton({
    props: {
      disabled: ctx[1],
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(basebutton.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(basebutton, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const basebutton_changes = {};
      if (dirty & 2)
        basebutton_changes.disabled = ctx2[1];
      if (dirty & 36) {
        basebutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      basebutton.$set(basebutton_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(basebutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(basebutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(basebutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(22:2) <Hst.Variant title=\\"Variant 2\\">',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let hst_variant0;
  let t;
  let hst_variant1;
  let current;
  hst_variant0 = new ctx[0].Variant({
    props: {
      title: "Variant 1",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new ctx[0].Variant({
    props: {
      title: "Variant 2",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t = space();
      create_component(hst_variant1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_variant1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & 38) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & 38) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_variant1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(10:0) <Hst.Story>",
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_text;
  let updating_value;
  let t;
  let hst_checkbox;
  let updating_value_1;
  let current;
  function hst_text_value_binding(value) {
    ctx[3](value);
  }
  let hst_text_props = { title: "Content" };
  if (ctx[2] !== void 0) {
    hst_text_props.value = ctx[2];
  }
  hst_text = new ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding));
  function hst_checkbox_value_binding(value) {
    ctx[4](value);
  }
  let hst_checkbox_props = { title: "Disabled" };
  if (ctx[1] !== void 0) {
    hst_checkbox_props.value = ctx[1];
  }
  hst_checkbox = new ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text.$$.fragment);
      t = space();
      create_component(hst_checkbox.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text_changes = {};
      if (!updating_value && dirty & 4) {
        updating_value = true;
        hst_text_changes.value = ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      hst_text.$set(hst_text_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_1 && dirty & 2) {
        updating_value_1 = true;
        hst_checkbox_changes.value = ctx2[1];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(11:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 38) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ShareControls_story", slots, []);
  let { Hst } = $$props;
  let disabled = false;
  let content = "Hello world";
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ShareControls_story> was created with unknown prop '${key}'`);
  });
  function hst_text_value_binding(value) {
    content = value;
    $$invalidate(2, content);
  }
  function hst_checkbox_value_binding(value) {
    disabled = value;
    $$invalidate(1, disabled);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ BaseButton, Hst, disabled, content });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("disabled" in $$props2)
      $$invalidate(1, disabled = $$props2.disabled);
    if ("content" in $$props2)
      $$invalidate(2, content = $$props2.content);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, disabled, content, hst_text_value_binding, hst_checkbox_value_binding];
}
class ShareControls_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ShareControls_story",
      options,
      id: create_fragment.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<ShareControls_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<ShareControls_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ShareControls_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Comp5 = { "icon": "carbon:bookmark", "group": "top", "docsOnly": true, "variants": [] };
let files = [
  { "id": "src-basebutton-story-svelte", "path": ["BaseButton"], "filePath": "src/BaseButton.story.svelte", "story": { "id": "src-basebutton-story-svelte", "title": "BaseButton", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 0, component: BaseButton_story },
  { "id": "src-cars-story-svelte", "path": ["Cars"], "filePath": "src/Cars.story.svelte", "story": { "id": "src-cars-story-svelte", "title": "Cars", "group": null, "layout": { "type": "grid", "width": 200 }, "icon": "carbon:car", "iconColor": "gray", "docsOnly": false, "variants": [{ "id": "src-cars-story-svelte-0", "title": "default", "icon": null, "iconColor": null }, { "id": "src-cars-story-svelte-1", "title": "Fast", "icon": null, "iconColor": null }, { "id": "src-cars-story-svelte-2", "title": "Slow", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 1, component: Cars_story },
  { "id": "src-meow-story-svelte", "path": ["Meow"], "filePath": "src/Meow.story.svelte", "story": { "id": "src-meow-story-svelte", "title": "Meow", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-meow-story-svelte-0", "title": "Happy", "icon": null, "iconColor": null }, { "id": "src-meow-story-svelte-1", "title": "Joy", "icon": null, "iconColor": null }, { "id": "src-meow-story-svelte-2", "title": "Love", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 2, component: Meow_story },
  { "id": "src-noiframe-story-svelte", "path": ["NoIframe"], "filePath": "src/NoIframe.story.svelte", "story": { "id": "src-noiframe-story-svelte", "title": "NoIframe", "group": null, "layout": { "type": "single", "iframe": false }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 3, component: NoIframe_story },
  { "id": "src-sharecontrols-story-svelte", "path": ["ShareControls"], "filePath": "src/ShareControls.story.svelte", "story": { "id": "src-sharecontrols-story-svelte", "title": "ShareControls", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-sharecontrols-story-svelte-0", "title": "Variant 1", "icon": null, "iconColor": null }, { "id": "src-sharecontrols-story-svelte-1", "title": "Variant 2", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 4, component: ShareControls_story },
  { "id": "src-introduction-story-js", "path": ["Introduction"], "filePath": "src\\Introduction.story.js", "story": { "id": "src-introduction-story-js", "title": "Introduction", "group": "top", "layout": { "type": "single", "iframe": true }, "icon": "carbon:bookmark", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "index": 5, component: Comp5 }
];
let tree = [{ "group": true, "id": "top", "title": "", "children": [{ "title": "Introduction", "index": 5 }] }, { "title": "BaseButton", "index": 0 }, { "title": "Cars", "index": 1 }, { "title": "Meow", "index": 2 }, { "title": "NoIframe", "index": 3 }, { "title": "ShareControls", "index": 4 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "C:/Users/oneezy/Desktop/www/9.Forks/histoire-svelte/node_modules/.pnpm/histoire@0.10.0_vite@3.0.7/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte3", "moduleName": "@histoire/plugin-svelte", "setupFn": "setupSvelte3" } }], "outDir": "C:/Users/oneezy/Desktop/www/9.Forks/histoire-svelte/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "top", "title": "" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "logo": { "square": "@histoire/plugin-svelte/assets/histoire-svelte.svg", "light": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg", "dark": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent" }, { "label": "White", "color": "#fff" }, { "label": "Light gray", "color": "#aaa" }, { "label": "Dark gray", "color": "#333" }, { "label": "Black", "color": "#000" }], "sandboxDarkClass": "dark", "routerMode": "history" };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        Object.assign(result.story, {
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        });
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor.58b77c82.js").then((n) => n.b4), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor.58b77c82.js").then((n) => n.b5), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _,
  tree as a,
  clientSupportPlugins as b,
  customLogos as c,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  toggleDark as t
};
