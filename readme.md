Frame Inputs jQuery Plugin
==========================
By Marco Salazar de Leon (http://github.com/marceux)

This plug-in displays text per frames of associated gfycats.

Example Code:
-------------

HTML
```html
<div id="demoGfy" class="gfyitem" data-title=true data-autoplay=false data-controls=true data-expand=false data-id="LegalInnocentEastrussiancoursinghounds"></div>
<span class="inputs"></span>
```

JS
```js
var gfyObj = gfyCollection.get()[0];

var frameData = [
  {
    frame: 1,
    input: 'Text'
  }
];

$('.inputs').frameinputs({
  'gfycat': gfyObj,
  'frameData': frameData
});
```

And voila, you're done!