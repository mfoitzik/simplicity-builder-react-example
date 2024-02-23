import block_twolCol from '../sbassets/blocks/basic_twoCol/index.js';
import block_headings from '../sbassets/blocks/basic_headings/index.js';
import block_plainText from '../sbassets/blocks/common_plainText/index.js';
import block_richText from '../sbassets/blocks/common_richText/index.js';
import block_code from '../sbassets/blocks/common_code/index.js';


const config = {
	"helpUrl": "##BASEADDRESS##/helpDoc/index.html",
	"assetsLocation": "##BASEADDRESS##/sbeditors",
	"license": "",
	"devKey": "XXXXXX",
	"themeColor": "#136853",
	"themeDarkColor": "#0e4337",
	"cleanupIds": ["scriptSbUtility"],
	"cleanupStrings": ["##BASEADDRESS##"],
	"cleanupAttributes": ["data-custom1", "data-custom2"],
	"blockSections": [{
			"heading": "Content Editors",
			"blocks": [block_plainText,
				block_richText,
				block_code
			]
		},
		{
			"heading": "Headings",
			"blocks": [block_headings]
		},
		{
			"heading": "Inner Layouts",
			"blocks": [block_twolCol]
		}

	],
	"imageSelections": [{
			"url": "##BASEADDRESS##/templates/editorimages/image1.jpg",
			"thumbnailUrl": "##BASEADDRESS##/templates/editorimages/image1_tn.jpg"
		},
		{
			"url": "##BASEADDRESS##/templates/editorimages/image2.jpg",
			"thumbnailUrl": "##BASEADDRESS##/templates/editorimages/image2_tn.jpg"
		},
		{
			"url": "##BASEADDRESS##/templates/editorimages/image3.jpg",
			"thumbnailUrl": "##BASEADDRESS##/templates/editorimages/image3_tn.jpg"
		},
		{
			"url": "##BASEADDRESS##/templates/editorimages/image4.jpg",
			"thumbnailUrl": "##BASEADDRESS##/templates/editorimages/image4_tn.jpg"
		}
	],
	"attributeEditors": [{
			"id": "1",
			"editorName": "twocolatts",
			"editorHeading": "Two Column Section Settings",
			"mode": "constant",
			"callback": "changeCssVariableValue",
			"controlSections": [{
				"heading": "Settings",
				"type": "object",
				"target": "data-parameters",
				"controls": [{
						"heading": "Left Side Width",
						"type": "slider",
						"attribute": "leftWidth",
						"value": 1,
						"uom": "%",
						"min": 1,
						"max:": 100,
						"selections": [
							"%"
						]
					},
					{
						"heading": "Left Side Color",
						"type": "color",
						"attribute": "leftColor",
						"value": "#fbe4c4ff"
					},
					{
						"heading": "Right Side Color",
						"type": "color",
						"attribute": "rightColor",
						"value": "#b8e1e7ff"
					},
					{
						"heading": "Column Gap Width",
						"type": "slider",
						"attribute": "gap",
						"value": 2,
						"uom": "rem",
						"min": 0,
						"max:": 100,
						"selections": [
							"%",
							"px",
							"rem",
							"em"
						]
					},
					{
						"heading": "Column Gap Line Width",
						"type": "slider",
						"attribute": "gapLineWidth",
						"value": 2,
						"uom": "px",
						"min": 0,
						"max:": 100,
						"selections": [
							"%",
							"px",
							"rem",
							"em"
						]
					},
					{
						"heading": "Column Gap Line Color",
						"type": "color",
						"attribute": "gapLineColor",
						"value": "#394f87ff"
					},
					{
						"heading": "Column Padding",
						"type": "slider",
						"attribute": "columnPadding",
						"value": 1,
						"uom": "rem",
						"min": 0,
						"max:": 100,
						"selections": [
							"px",
							"rem",
							"em"
						]
					},
					{
						"heading": "Section Height",
						"type": "select",
						"attribute": "minHeight",
						"value": "100%",
						"selections": [{
								"label": "Full Height",
								"value": "100%"
							},
							{
								"label": "Fit Content",
								"value": "unset"
							}
						]
					},
					{
						"heading": "Bottom Margin",
						"type": "slider",
						"attribute": "bottomMargin",
						"value": 1,
						"uom": "rem",
						"min": 0,
						"max:": 100,
						"selections": [
							"%",
							"px",
							"rem",
							"em"
						]
					}
				]
			}]
		},
		{
			"id": "2",
			"editorName": "atted",
			"editorHeading": "Heading Type Selector",
			"mode": "constant",
			"callback": "changeElementType",
			"controlSections": [
				{
					"heading": "Headings",
					"type": "single",
					"target": "",
					"controls": [
						{
							"heading": "Heading Type",
							"type": "select",
							"attribute": "data-heading",
							"value": "",
							"selections": [
								{"label": "Heading 1", "value":"h1"},
								{"label": "Heading 2", "value":"h2"},
								{"label": "Heading 3", "value":"h3"},
								{"label": "Heading 4", "value":"h4"},
				{"label": "Heading 5", "value":"h5"},
				{"label": "Heading 6", "value":"h6"}
							]
						}
					]
				}
			]
		}
	]
}

export default config;