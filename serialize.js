/**
MIT License
Copyright (c) 2018 Luca Kiebel
https://github.com/lucakiebel/serialize.js
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
*/
function serialize(form, spaceToPlus = false) {
  if (!form || form.nodeName !== "FORM") {
    return;
  }
  let i, j, k, q = [];
  for (i = form.elements.length - 1; i >= 0; i = i - 1) {
    if (form.elements[i].name === "") {
      continue;
    }
    switch (form.elements[i].nodeName) {
      case 'INPUT':
        switch (form.elements[i].type) {
          case 'text':
          case 'hidden':
          case 'password':
          case 'email':
          case 'number':
          case 'button':
          case 'reset':
          case 'submit':
            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
            break;
          case 'checkbox':
          case 'radio':
            if (form.elements[i].checked) {
              q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
            }
            break;
          case 'file':
            break;
        }
        break;
      case 'TEXTAREA':
        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value))
        break;
      case 'SELECT':
        switch (form.elements[i].type) {
          case 'select-one':
            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
            break;
          case 'select-multiple':
            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
              if (form.elements[i].options[j].selected) {
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
              }
            }
            break;
        }
        break;
      case 'BUTTON':
        switch (form.elements[i].type) {
          case 'reset':
          case 'submit':
          case 'button':
            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
            break;
        }
        break;
    }
  }
  if (spaceToPlus === true) {
    for(k=0; k<q.length; k++) {
      q[k] = q[k].replace("%20", "+");
    }
  }
  return q.join("&");
}
