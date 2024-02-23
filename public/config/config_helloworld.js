import block_circle from '../sbassets/blocks/shapes_circle/index.js';
import block_plainText from '../sbassets/blocks/common_plainText/index.js';
import block_richText from '../sbassets/blocks/common_richText/index.js';
import block_code from '../sbassets/blocks/common_code/index.js';
const config = {
	"license": "",
	"devKey": "XXXXXX",
    "themeColor": "#7d5828",
	"themeDarkColor": "#101820",
    "assetsLocation": "##BASEADDRESS##/sbeditors",
    "helpUrl":"##BASEADDRESS##/helpDoc/index.html",
    "cleanupAttributes": ["data-settingsobj"],
    "cleanupIds": ["helloworld_utility"],
    "blockSections": [{
        "heading": "Content Editors",
        "blocks": [block_plainText,
            block_richText,
            block_code
        ]},
        {"heading": "Shapes",
        "blocks":[
            block_circle
            ]
        }
        
    ],
    "imageSelections": [],
    "attributeEditors": [
        {
            "id":"ae1",
            "editorHeading": "Circle Attributes",
            "mode": "constant",
            "callback": "circleFunction",
            "controlSections": [
                {
                    "heading": "Circle Container",
                    "type": "object",
                    "target": "data-settingsobj",
                    "controls": [
                        {
                            "heading": "Circle Heading Text",
                            "type": "text",
                            "mode": "text",
                            "attribute": "displaytext",
                            "value": "This is a circle:"
                        },
                        {
                            "heading": "Circle Bottom Text",
                            "type": "text",
                            "mode": "textarea",
                            "attribute": "bottomtext",
                            "value": "This is a long description of a circle..."
                        },
                        {
                            "heading": "Background Image",
                            "type": "image",
                            "attribute": "background",
                            "value": "",
                            "selections": [
                                {
                                    "url": "##BASEADDRESS##/sbassets/blocks/shapes_circle/CircleBackground1.jpg",
                                    "thumbnailUrl": "##BASEADDRESS##/sbassets/blocks/shapes_circle/CircleBackground1_tn.jpg"
                                },
                                {
                                    "url": "##BASEADDRESS##/sbassets/blocks/shapes_circle/CircleBackground2.jpg",
                                    "thumbnailUrl": "##BASEADDRESS##/sbassets/blocks/shapes_circle/CircleBackground2_tn.jpg"
                                },
                                {
                                    "url": "##BASEADDRESS##/sbassets/blocks/shapes_circle/CircleBackground3.jpg",
                                    "thumbnailUrl": "##BASEADDRESS##/sbassets/blocks/shapes_circle/CircleBackground3_tn.jpg"
                                },
                                {
                                    "url": "##BASEADDRESS##/sbassets/blocks/shapes_circle/CircleBackground4.jpg",
                                    "thumbnailUrl": "##BASEADDRESS##/sbassets/blocks/shapes_circle/CircleBackground4_tn.jpg"
                                }
                            ]
                        },
                        {
                            "heading": "Container Border",
                            "type": "slider",
                            "attribute": "cborder",
                            "value": 1,
                            "uom": "px",
                            "min": 1,
                            "max": 15,
                            "selections": [
                                "px",
                                "pt"
                            ]
                        },
                        {
                            "type": "checkset",
                            "value": [],
                            "selections": [
                                {
                                    "label": "Rounded Corners",
                                    "value": "rounded",
                                    "color": "green"
                                },
                                {
                                    "label": "Drop Shadow",
                                    "value": "shadow",
                                    "color": "green"
                                }
                            ],
                            "heading": "Border Options",
                            "attribute": "options"
                        }
                        
                    ]
                },
                {
                    "heading": "Circle Settings",
                    "type": "object",
                    "target": "data-circle",
                    "controls": [
                        {
                            "heading": "Circle Color",
                            "type": "color",
                            "attribute": "circlecolor",
                            "value": "#008800"
                        },
                        {
                            "heading": "Circle Align",
                            "type": "select",
                            "attribute": "align",
                            "value": "",
                            "selections": ["left", "center", "right"]
                        },
                        {
                            "heading": "Show Border",
                            "type": "toggle",
                            "attribute": "border",
                            "mode": "bool",
                            "value": false
                        }
                    ]
                }
            ]
        }
    ]
}

export default config;