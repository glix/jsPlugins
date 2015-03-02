# jquery.passwordGenerator
With this plugin you can easily generate different password with very high level of security.
## Install
```javascript
<script src="jquery.min.js"></script>
<script src="../jquery.passwordGenerator.min.js"></script>
```
or 
```javascript
bower install passwordgenerator
```
## Usage
```javascript
$(selector).passwordGenerator();
```
## Configuration
```javascript
{
    upperCase: boolean, // default: true;
    lowerCase: boolean, // default: true;
    numbers: boolean, // default: true;
    punctuation: boolean, // default: true;
    size: number, // default: 8
    wrapperClass: "", // default: "generatorWrapper";
    button: {
        isVisible: boolean, // default: true;
        text: "" // default: "New Password";
    }
}
```
## Demo
<a href="http://codepen.io/mel/full/kzJho" target="_blank">codepen.io/mel/full/kzJho</a>
## License
March 2014 <br />
passwordGenerator 1.1.0 <br />
@author Mario Vidov <br />
@url <a href="http://vidov.it" target="_blank">www.vidov.it</a> <br />
@twitter  <a href="http://twitter.com/MarioVidov" target="_blank">MarioVidov</a> <br />
MIT license
