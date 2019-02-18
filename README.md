# react-scrollspy

[Demo](https://codesandbox.io/s/v0xw0719p5)

## Install

```sh
$ yarn add @chasemccoy/react-scrollspy
```


## Usage

Wrap the `ScrollSpy` component around a collection of anchor tags that link to headers on the page. The component will look for headers within any container with the `data-scrollspy` attribute, and apply a class onto the anchor tag that matches that header.

```jsx
import ScrollSpy from '@chasemccoy/react-scrollspy'

const TableOfContents = props => (
  <ScrollSpy>
    <a href='#header-1'>Header 1</a>
    <a href='#header-2'>Header 2</a>
    <a href='#header-3'>Header 3</a>
  </ScrollSpy>
)

// elsewhere...

<div data-scrollspy>
  <h1 id='header-1'>Header 1</h1>
  <h1 id='header-2'>Header 2</h1>
  <h1 id='header-3'>Header 3</h1>
</div>
```

By default, the component will apply a class name of `active` to the anchor tag. You can customize this with the `activeClassName` prop. 

## Props

### `activeClassName: string`

Class name to apply to the anchor element that matches the closest visible header within the container. 

## Development

```sh
$ git clone https://github.com/chasemccoy/react-scrollspy.git
$ cd react-scrollspy
$ yarn
$ yarn build
```