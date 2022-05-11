# |TaskList

- [x] Particles animation
- [x] React-router-dom
- [x] Set position css: fixed, relative, absolute
- [x] Animation with scroll and height in blog slider
- [x] Cancel race codition in useEffect
- [x] Cover Svg image to Component

### ::Advance

- [x] Suspense lazy loading to handle loading state animation
- [ ] Responsive CSS with styled-component
- [ ] Page Transition
- [ ] Responsive image with padding bottom here
- [ ] Trip text in blog page
- [ ] Infinite scroll


# Start

- Install

```
npm install
```

- Start project

```
npm start
```

- Library

  - framer-motion: animation
  - normalize.css
  - styled-components
  - tsparticles
  - Add .prettierrc

- Create globalStyle with styled-component

  ```
  src/globalStyles.js
  ```

  Then call it in App component

  ```
  import GlobalStyle from './globalStyles';

  function App() {
      return (
          <>
              <GlobalStyle />
              App Page
          </>
      );
  }

  export default App;

  ```

- Import normalize.css in src/index.js file

```
    import '../node_modules/normalize.css';
```

- Using theme dark or light

  - Creatd components/Themes.js
  - Using ThemeProvider to call this component in src/App.js

  It only effect page when we add component to App.js like the code below, after we add new route.

- Using Router

  - src/index.js page

  ```
  import { BrowserRouter } from 'react-router-dom';

  ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );
  ```

  - src/App.js

  ```
  <GlobalStyle />
  <ThemeProvider theme={darkTheme}>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
      </Switch>
  </ThemeProvider>
  ```

- cover SvG file to react Component

  - [Cover Page](https://react-svgr.com/playground/)
  - Usage: Create component/AllSvgs.js

  ```
      <PowerBtn width={30} height={30} fill='currentColor' />
  ```

- NavLink of react-router-dom like `<a>` tag
- Color inherit to get current color of parent

  ```
  <NavLink style={{color: 'inherit'}} to="/">
      <Github with={25} height={25} fill='currentColor' />
  </NavLink>
  ```

- Main page:

  Using position relative and absolute to set position for all element,
  Then set width and height = 100 view screen with overflow=hidden;

  - Set click on yingyang
  - Set Intro component with animation

    ```
    transition: height 0.5s ease, width 1s ease 0.5s;
    ```

  - Checking click state to set color for text and icons on background black
  - using background-gradient to set div color which make it look like 2 column (black and white)
  - Using motion of 'framer-motion' to intro content

    ```
        <motion.h3 whileHover={{ scale: 1.1 }} whitleTap={{ scale: 0.9 }}>
            Work
        </motion.h3>
    ```

    Mix styled-components with framer-motion:

    ```
    const Box = styled(motion.div)`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    ```

    Then in html, do something look like this:

    ```
    <Box
        initial = {{height: 0}}
        animate={{height: '55vh'}}
        transition={{type: 'spring', duration: 2, delay: 1}}>
    ```

  - transform: Different position of rotate will make different result;
    ```
    	transform: translate(-50%, -50%)  rotate(-90deg);
        diff
        transform: rotate(-90deg) translate(-50%, -50%)  ;
    ```

- Blog page

  - WrapContainer -> set background image, container to contain items
  - Backdrop-filter: blur(2px): css blur for background
  - Combile 2 component css in styled-component

  ```
      const Box = style.div`
          // some css here
      `;
      const Image = styled.div`
          background-image: ${props => `url(${props.img})`};
          width: 100%;
          height: 60%;
          background-size; cover;
          border: 1px solid transparent;
          background-position: center center;

          // combine two styled-component
          ${Box}:hover &{
              border: 1px solid ${props => props.theme.body};
          }

      `;
  ```

  - Scroll animation with event 'scroll' and translateY animation chain

  ```
  	let scrollPosition = window.pageYOffset;
  	let windowSize = window.innerHeight;
  	let bodyHeight = document.body.offsetHeight;

      // end of scroll
      endofScroll = (scrollPosition + windowSize = bodyHeight)
  ```

  Using return to prevent race conditions when featch data with reacthooks
  Detail explaination: https://medium.com/hackernoon/avoiding-race-conditions-when-fetching-data-with-react-hooks-220d6fd0f663

- Skills page

  - Set Fill color for svg in css
    ```
    ${Main}:hover & {
        & >*{
            fill: ${props => props.theme.body};
        }
    }
    ```
  - Using particles in src/subComponents/ParticlesComponent
    Link particles.js: https://vincentgarreau.com/particles.js/

- Works page

  - animation with scroll event + translateX
    ```
    const rotate = () => {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
        yingElement.style.transform = `rotate(${-window.pageYOffset}deg)`;
    }
    ```

- Framer-motion
  To set animation to children, we need to set animation staggerChildren on parent:

  - AnimatePresence: handle when element remove from react tree which will trigger event animate.
    ++ existBeforeEnter: make sure finish previous animate before new component come in;
  - staggerChildren

  ```
  const container = {
      hidden: {opacity: 0},
      show: {
          opacity: 1,
          transition: {
              staggerChildren: 0.5,
              duration: 0.5,
          }
      }
  };

  <Main ref={ref}
                  variants={container}
                  initial='hidden'
                  animate='show'>

  const Main = styled(motion.ul)`
  ```

  - type: 'Spring'

  ```
  const Item = {
      hidden:{
          scale: 0
      },
      show: {
          scale: 1,
          transition: {
              type: 'spring',
              duration: 0.5
          }
      }
  }
  <Box key={id}
          variants={Item}
          >

  const Box = styled(motion.li)`
  ```

- React-spinner + suspense and fallback to handle loading state of component

    [Reference Split Code](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)
    ```
    <Suspense
        fallback={
            <CenterLoading>
                <DotLoader color={'#7ED321'} loading={true} size={150} />
            </CenterLoading>
        }
    >
    ```

### Build a Stunning Portfolio with React JS using Styled-Components and framer-motion for awesome Animations

This repository contains starter code for Portfolio Website in ReactJS. <br />

View Demo👇: <br />
https://react-portfolio-sigma.vercel.app/ <br />

If you want to learn how to create it please follow below tutorial👇: <br />

https://youtu.be/jcohAIaSy2M <br />

### Resources Used in This Project

Design in : https://www.figma.com/ <br />
Svg Icons from :https://fontawesome.com/ <br />
Spaceman 3D Image from : https://www.figma.com/community/plugin/769588393361258724/Vectary-3D-Elements <br />
Audio: You said it Song by Claire Margot <br />
Background Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/news-paper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
