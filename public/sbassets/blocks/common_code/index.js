const block_code = {
    "icon": "<img src=\"##BASEADDRESS##/templates/icons/code.svg\" />",
    "label": "Code",
    "tooltipHeading": "Code Block",
    "tooltipImage": "##BASEADDRESS##/templates/icons/code-sample.png",
    "tooltipText": "The code editor allows full access to the blocks inner HTML. Inline scripting can be input by the user.",
    "dragImage": "##BASEADDRESS##/templates/icons/code-sample.png",
    "html": encodeURIComponent(`<div data-sbblock="Code" data-sbzone="hovo" data-sbeditor="code">Code</div>`)
}

export default block_code;