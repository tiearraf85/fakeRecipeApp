# React + Vite + SASS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup

### Using this template

Clone it and rename the destination folder, to you new project name, in one step.

_(Note: Be sure to change `project-name` to the actual name of your project in the call below.)_

```bash
git clone  git@gitlab.lowell.perseverenow.org:persevere-01/resources/react-vite-template.git project-name
```

### Install dependencies

```bash
 npm install --registry http://192.168.1.49:4873
```

## Running the project

### Starting your project

Switch into the project folder ...

```bash
cd project-name
```

Then enter ...

```bash
npm run dev
```

### Open your web app in the browser

Navigate to the specified URL in the browser (e.g. http://localhost:5173/).

### Stopping the project

Just hit `ctrl+c` to stop running your React project.

## Using Font Awesome Icons

### Docs 

[See the Docs](https://docs.fontawesome.com/v5/web/use-with/react/)

### Avaiable Icons
We have the following icon packages available: 

- @fortawesome/free-solid-svg-icons
- @fortawesome/free-regular-svg-icons
- @fortawesome/free-brands-svg-icons

### Font Awesome Icon usage

To use these with React, first import the `FontAwesomeIcon` component. Then import any icons you'd like to use.
Then just add the FontAwesomeIcon to the jsx and pass it the name of the icon you want via the icon prop.

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div>
      <h3>How to use font-awesome in react</h3>
      <FontAwesomeIcon icon={faPenNib} size="3x" />
      <FontAwesomeIcon icon={faEnvelope} pulse />
      <FontAwesomeIcon icon={faCoffee} spin />
    </div>
  )
}

export default IconPage
```

#### Sizing 

```jsx
<FontAwesomeIcon icon="coffee" size="xs" />
<FontAwesomeIcon icon="coffee" size="lg" />
<FontAwesomeIcon icon="coffee" size="6x" />
```

Note that icon size can be controlled with the CSS `font-size` attribute, and FontAwesomeIcon’s `size` prop determines icon size relative to the current `font-size`.

#### Rotating Icons

```jsx
<FontAwesomeIcon icon="coffee" rotation={90} />
<FontAwesomeIcon icon="coffee" rotation={180} />
<FontAwesomeIcon icon="coffee" rotation={270} />
```

#### Animating Icons 

```jsx
<FontAwesomeIcon icon="spinner" spin />
<FontAwesomeIcon icon="spinner" pulse />
```

#### Adding Classes Yourself

You can add classes for your own project purposes and styling to any component using the className property.

```jsx
<FontAwesomeIcon icon="spinner" className="highlight" />
```
