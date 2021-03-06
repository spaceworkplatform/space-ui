---
title: Button
lang: en-US
---

# Button

## Basic example

```html
<s-button variant="primary">Primary button</s-button>
<s-button variant="secondary">Secondary button</s-button>
<s-button size="lg">Large button</s-button>
```

## VueRouter compatibility

This button is compatible with `vue-router`, you just need to define the `to` prop and if the `router-link` or `nuxt-link` component is available it will render the component.

## Events

| Event   | Arguments                   | Description   |
|---    |---                      |---      |
| focus   | FocusEvent                  | Emitted when the button is focused  |
| blur    | FocusEvent                  | Emitted when the button is blurred  |
| click   | MouseEvent                  | Emitted when the button is clicked  |

## Props

| Name | Type | Default | Accepted Values |
|--|--|--|--|
| rounded | boolean | false | true, false |
| size | string | md | xs, sm, md, lg, xl |
| color | string | white | any |
| text-color | string | black | any |
| outline | boolean | false | true, false
| label | string | any | any |

*Note:* when the `href` is set it changes the tagname to `a`

## RouterLink Props

This button is compatible with `vue-router`, you just need to define the `to` prop and if the `router-link` or `nuxt-link` component is available it will render it.

In that case the valid props are the following:

| Property    | Type        | Default value | Accepted values |
|---          |---          |---      |--- |
| to          | String / Object      | undefined      | Valide `router-link` locatiion |
| replace   | Boolean     | false     | true, false |
| append   | Boolean     | false     | true, false |
| activeClass   | String     | 'router-link-active'     | _Any string_ |
| exact   | Boolean     | false     | true, false |
| exactActiveClass   | String     | 'router-link-active'     | _Any string_ |

## Classes related props

| Property          | Description                       |
|---                |---                            |
| baseClass         | Base button class (never changes)                      |
| defaultClass      | Classes for the default button variant   |
| primaryClass      | Classes for the primary button variant   |
| secondaryClass    | Classes for the secondary button variant   |
| tertiaryClass     | Classes for the tertiary button variant   |
| successClass      | Classes for the success button variant   |
| dangerClass       | Classes for the danger button variant   |
| warningClass      | Classes for the warning button variant   |
| disabledClass     | Classes for the disabled button variant (Added to the variant) |
| defaultSizeClass  | Classes for the default size button (Added to the variant) |
| largeSizeClass    | Classes for the large size button (Added to the variant) |
| smallSizeClass    | Classes for the small size button (Added to the variant) |


## Default theme settings

<<< @/src/themes/default/SButton.js

* Remember that in order to change the default settings you can [change default theme](/#_2-2-or-better-yet-create-your-own-theme) or use the props: 

```vue
<s-button variant="primary"
>Hello 😎</s-button>
```

### The result:
<s-button variant="primary"
>Hello 😎</s-button>
