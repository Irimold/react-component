<p align="center">
    <a href="https://design-sys.irimold.web.id" rel="noopener" target="_blank">
        <img width="150" height="auto" src="https://irimold.web.id/images/logo.png" alt="Irimold Logo"/>
    </a>
</p>

<h1 align="center">Irimold React Component Library</h1>
<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Irimold/react-component/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@irimold/react-component/latest.svg)](https://www.npmjs.com/package/@irimold/react-component)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9149/badge)](https://www.bestpractices.dev/projects/9149)

</div>

This library contains commonly used components by Irimold, targetted for ReactJS.

## Installation

Using NPM
```
npm i @irimold/react-component
```

After that you can import the CSS
```js
import "@irimold/react-component/style"
```
Or if you are using Tailwind, you can add the existing preset to your tailwind.config.js
```js
...
import { 
    IrimoldTailwindContent, 
    IrimoldTailwindPreset
} from "@irimold/react-component/tailwindcss-config"

/** @type {import('tailwindcss').config} */
export default {
    ...
    content: [
        ...
        IrimoldTailwindContent,
        ...
    ],
    presets: [
        ...
        IrimoldTailwindPreset,
        ...
    ],
    ...
}
```

## Changelog
The [changelog](https://github.com/Irimold/react-component/blob/main/CHANGELOG.md) is regularly updated to reflect what's changed in each new release.

## License
This project is licensed under the term of the [MIT license](https://github.com/Irimold/react-component/blob/main/LICENSE).

## Security
For details of supported versions and contact details for reporting security issues, please refer to the [security policy](https://github.com/Irimold/react-component/security/policy).