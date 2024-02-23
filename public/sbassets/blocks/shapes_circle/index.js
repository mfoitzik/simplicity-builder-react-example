const block_circle = {
    "icon": "<img src=\"##BASEADDRESS##/sbassets/blocks/shapes_circle/circle.svg\" />",
    "label": "Circle Shape",
    "tooltipHeading": "Circle Shape",
    "tooltipImage": "##BASEADDRESS##/sbassets/blocks/shapes_circle/circle-sample.jpg",
    "tooltipText": "Simple circle shape for demonstration.",
    "dragImage": "##BASEADDRESS##/sbassets/blocks/shapes_circle/circle-sample.jpg",
    "html": encodeURIComponent(`<div data-sbblock="Circle Shape" data-sbzone="ho" class="wrapper" data-sbsettings="ae1" data-settingsobj='{"displaytext":"This is a circle:", "background":"", "cborder":"1px", "bottomtext":"This is a long description of a circle...", "options":[]}' data-circle='{"align":"left", "circlecolor":"#008800", "border":false}'>
    <h1>This is a circle:</h1>    
    <div class="cwrap">
        <div class="circle borderoff"></div>
    </div>
    <p>This is a long description of a circle...</p>
    </div>`)
}

export default block_circle;