# serialize.js
[d]: #project
**[INSTALL][i] | [USAGE][u] | [AUTHOR][auth] | [LICENSE][cpl]**

This is a modification of the Google Project [form-serialize](https://code.google.com/archive/p/form-serialize/). Click the link to find the original piece of software. 

```
window.location.href = "https://example.com/?"+serialize(document.forms[0]);
```

## MOTIVATION
It's still very common not to include any heavy libraries into a JavaScript project. This tries to solve the problem of not being able to serialize forms in [browsers that don't support the FormData API](https://developer.mozilla.org/en-US/docs/Web/API/FormData#Browser_compatibility). 

### INSTALLATION
[i]: #installation 'Installation guide' 

Include the [minified script](https://sk-cdn.net/libraries/serialize/serialize.min.js) in your HTML, this will expose the function `serialize()`:
```html
<script src="https://sk-cdn.net/libraries/serialize/serialize.min.js"></script>
<form id="test">
  <input type="text" name="some" value="Random">
  <input type="text" name="field" value="Values"> 
  <input type="number" name="names" value="123565">
  <input type="password" name="andAPassword" value="andMore">
  <br><br>
  <button type="button" id="serialize">Serialize!</button>
</form>
<hr>
<p id="s">Result: </p>
<script>
document.getElementById("serialize").onclick = () => {
  document.getElementById("s").innerHTML += (serialize(document.forms[0])); 
}
</script>
```
See it in action at [CodePen](https://codepen.io/lucakiebel/pen/VxzxwN?editors=1010)


### USAGE
[u]: #usage 'Product usage'

In most cases, forms need to be serialized to send their data to an API endpoint. Using the `fetch()` API, this is how you would go about accomplishing this:
```html
<script src="https://sk-cdn.net/libraries/serialize/serialize.min.js"></script>
<form>
	<input type="text" name="ID">
	<input type="text" name="Name"> <br>
	<button type="submit">Submit</button>
</form>
<script> 
  document.forms[0].onsubmit = () => { 
    let url = "https://yourDomain.tld/end/point";
    let data = serialize(document.forms[0]); 
    fetch(url + "?" + data)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
    return false; 
  } 
</script>
```

## AUTHOR
[auth]: #author 'Credits & author\'s contacts info '
Original Auhtor of Google Project: biggie4Life

## LICENSE
[cpl]:#contribution--license 'Contribution guide & license info'

MIT License

Copyright (c) 2018 Luca Kiebel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## PRODUCTION STATUS & SUPPORT
[ps]: #production-status--support 'Production use disclaimer & support info'

You should be aware that this project is supported solely by me and provided as is.

<hr>

Go back to the **[project description][d]**
