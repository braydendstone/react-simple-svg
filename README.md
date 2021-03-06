# React Simple SVG
## Easily access and change the properties of your SVG image, including
- Fill
    - Color
    - Opacity
    - [MORE COMING SOON]
- Stroke
    - Color
    - Width
    - [MORE COMING SOON]
- Basic Animations
    - Overall fade-in
    - Fill fade-in
    - Stroke fade-in
    - [MORE COMING SOON]

## Guide
### Quickstart
1. Import your SVG image as an object

     ```javascript
     import logo from "./logo.svg";
     ```

2. Import the SimpleSVG component

    ```javascript
    import SimpleSVG from 'react-simple-svg'
    ```

3. Pass the SVG object as the ```image``` prop to the SimpleSVG component

    ```xml
    <SimpleSVG image={fire} />
    ```

    You may also pass the image as a child to the SimpleSVG component

    ```xml
    <SimpleSVG>
        {fire}
    </SimpleSVG>
    ```

### Basic Properties
#### Generally, properties will reflex JSS or CSS-in-Javascript syntax
**Property**|**Description**|**Accepts**|**Default**|**Example**
-----|-----|-----|-----|-----
fill|The fill color of the SVG|string|```'inherit'```|```fill="red"```
fillOpacity|The opacity of the SVG fill|float|```'inherit'```|```fillOpacity={0.2}```
stroke|The stroke color for the SVG|string|```'inherit'```|```stroke="red"```
strokeWidth|The width of the SVG stroke|string|```'inherit'```|```strokeWidth="20px"```
width|SVG width|string or number|```'inherit'```|```width="20px"```
height|SVG height|string ornumber|```'inherit'```|```height="20px"```
animation|The name of the animation desired, if only one animation in use|string|```'none'```|```animation='fade-in-stroke'```
duration|The duration of the animation desired, if only one animation in use|string|```'0.5s'```|```duration='2.5s'```
iterationCount|The desired iteration count, if only one animation in use|string or number|```1```|```iterationCount='infinite'```
timingFunction|The desired timing function, if only one animation in use|string|null|```timingFunction='linear'```
animationNames|An array of animation names desired|Array|null|```animationNames={['fade-in-fill', 'fade-in-stroke']}```
animationDurations|An array of animation durations (maps 1 to 1 to animation names)|Array|null (if animation name is present without duration, defaults to '0.5s')|```animationDurations={['0.5s', '3s']}```
animationIterationCounts|An array of animation iteration counts (maps 1 to 1 to animation names)|Array|null (if animation name is present without duration, defaults to '1')|```animationIterationCounts={['infinite','',3]}```
animationTimingFunctions|An array of animation timing functions (maps 1 to 1 to animation names)|Array|null (if animation name is present without duration, defaults to none)|```animationTimingFunctions={['linear','','']}```