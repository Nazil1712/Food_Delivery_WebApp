# React 
- Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Food Delivery App

- Header
- Logo
- Nav Items
- Body
- Search
- RestaurantContainer
- RestaurantCard
  - Img
  - Name of Res, Star Rating, cuisine, delery tie
- Footer
- Copyright
- Links
- Address
- Contact 
- Two types of Export/Import

- Default Export/Import
- export default Component; import Component from "path";
- 
- Named Export/Import
- export const Component; import {Component} from "path";


# React Hooks
(Normal JS utility functions)

useState() - Superpowerful State Variables in react
useEffect()


# 2 types Routing in web apps
- Client Side Routing
- Server Side Routing


# React Class Component LifeCycle
<img src="./img/React_LifeCycle.png"/> 


<h2>LifeCycle in UserClass2.js</h2>
<h3>Mounting phase</h3>
<p>Constructor(with default data)</p>
<p>render(with default data)</p>
      <p>DOM is updated</p>
      <p>ComponentDidMount() is called
            (In which there is this.setState() is there which will trigger render(with updated values))</p>
<hr/>

<h3>Updating phase</h3>
<p>render(with update value[API DATA])</p>
<p>DOM is updated</p>
<p>ComponentDidUpdate() is called</p>
<hr/>


<h3>UnMounting Phase</h3>
<p>When we will move to Other page like contact, cart etc. then componentWillUnmount() will be called</p>



# For large Web Apps
- For large Web Apps We make small bundles of our files, This thing have different name in market :-
      - Chunking
      - Code Splitting
      - Lazy Loading
      - Dynamic loading
      - On demand loading
      - Dynamic import 


# Different popular ways to add CSS
- Tailwind CSS
- Sass and SCSS
- Style Components
- Material UI
- Bootstrap
- Chakra UI
- Ant Design etc..



