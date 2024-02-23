const config = {
  "helpUrl": "https://www.mifo.com/testhelp.html",
  "license": "8D71e8e696c5add87bdf44669ed9e1ec0984cce3be4b4ab3e284c2fc095c01ca9ec171d549aa68a",
  "themeColor": "#136853",
  "themeDarkColor": "#0e4337",
"cleanupIds": ["tsid1","tsid2"],
"cleanupStrings": ["https://www.simplicityblocks.com/","https://www.mifo.com/"],
"cleanupAttributes": ["data-custom1","data-custom2"],
"allowedDomains":"*",
  "blockSections": [
      {
          "heading": "Content EditorsXYZ",
          "blocks": [
              {
                  "icon":"<img src=\"https://simplicityblocks.com/public/icons/plaintext.png\" />",
                  "label": "Plain Text",
                  "tooltipHeading":"Plain Text Block",
                  "tooltipImage":"https://simplicityblocks.com/public/icons/plaintext-sample.png",
                  "tooltipText":"Plain text editor that allows for text editing only. No HTML or formatting.",
                  "dragImage":"https://simplicityblocks.com/public/icons/plaintext-sample.png",
                  "html":"<div data-sbblock=\"Plain  Text\" data-sbzone=\"hovo\" data-sbeditor=\"plaintext\">Plain Text</div>"
              },
              {
                  "icon":"<img src=\"https://simplicityblocks.com/public/icons/richtext.png\" />",
                  "label": "Rich Text",
                  "tooltipHeading":"Rich Text Block",
                  "tooltipImage":"https://simplicityblocks.com/public/icons/richtext-sample.png",
                  "tooltipText":"The rich text editor allows for editing and formatting text, inserting images, linking, etc.",
                  "dragImage":"https://simplicityblocks.com/public/icons/richtext-sample.png",
                  "html":"<div data-sbblock=\"Rich  Text\" data-sbzone=\"hovo\" data-sbeditor=\"richtext\">Rich Text</div>"
              }
          ]
      },
      {
          "heading": "Headings",
          "blocks": [
              {
                  "icon":"<img src=\"https://simplicityblocks.com/public/icons/h1.png\" />",
                  "label": "Heading",
                  "tooltipHeading":"HTML Heading",
                  "tooltipImage":"https://simplicityblocks.com/public/icons/HeadingBlockImage.png",
                  "tooltipText":"An HTML heading that can be configured from H1 through H6. Defaults to H1.",
                  "dragImage":"https://simplicityblocks.com/public/icons/HeadingBlockImage.png",
                  "html":"<h1 data-sbblock=\"Heading\" data-sbzone=\"ho\" data-sbeditor=\"plaintext\" data-sbsettings=\"4\" data-heading=\"h1\">Heading Text</h1>"
              }
          ]
      }

  ],
  "imageSelections" : [{"url":"https://www.mifo.com/testimages/image1.jpg","thumbnailUrl":"https://www.mifo.com/testimages/image1_tn.jpg"},
      {"url":"https://www.mifo.com/testimages/image2.jpg","thumbnailUrl":"https://www.mifo.com/testimages/image2_tn.jpg"},
      {"url":"https://www.mifo.com/testimages/image3.jpg","thumbnailUrl":"https://www.mifo.com/testimages/image3_tn.jpg"},
      {"url":"https://www.mifo.com/testimages/image4.jpg","thumbnailUrl":"https://www.mifo.com/testimages/image4_tn.jpg"}],
  "attributeEditors": [
      {
          "id": "1",
          "editorName": "atted",
          "editorHeading": "My Custom Editor 1",
          "mode": "constant",
          "callback": "testcallback",
          "controlSections": [
              {
                  "heading": "Section 1",
                  "type": "object",
                  "target": "data-testobj",
                  "controls": [
                      {
                          "heading": "My Text Selection",
                          "type": "text",
                          "mode": "textarea",
                          "attribute": "data-test1",
                          "value": "hi mike"
                      },
                      {
                          "heading": "My Toggle Switch",
                          "type": "toggle",
                          "attribute": "att2",
                          "mode": "bool",
                          "value": false
                      },
                      {
                          "heading": "My Image Selector xyz123456",
                          "type": "image",
                          "attribute": "att7",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image4.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image4_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              }
                          ]
                      },
                      {
                          "heading": "My Slider",
                          "type": "slider",
                          "attribute": "data-test2",
                          "value": 0,
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
                          "heading": "My Select",
                          "type": "select",
                          "attribute": "att4",
                          "value": "",
                          "selections": [
                              "selection1",
                              "selection2",
                              "selection3",
                              "selection4"
                          ]
                      },
                      {
                          "heading": "My Check Set",
                          "type": "checkset",
                          "attribute": "att5",
                          "value": [],
                          "selections": [
                              {
                                  "label": "Battery too low", "value": "bat"
                              },
                              {
                                  "label": "Friend request",
                                  "value": "friend",
                                  "color": "#aa00bb"
                              },
                              {
                                  "label": "Picture uploaded",
                                  "value": "upload",
                                  "color": "red"
                              }
                          ]
                      },
                      {
                          "heading": "My Color Picker",
                          "type": "color",
                          "attribute": "att6",
                          "value": "#dd2255ee"
                      }
                  ]
              },
              {
                  "heading": "Section 2",
                  "type": "single",
                  "target": "",
                  "controls": [
                      {
                          "type": "text",
                          "value": "hi mike",
                          "selections": [],
                          "heading": "My Text Selection",
                          "attribute": "data-att1b"
                      },
                      {
                          "type": "toggle",
                          "selections": [],
                          "mode": "bool",
                          "value": false,
                          "heading": "My Toggle Switch",
                          "attribute": "att2b"
                      },
                      {
                          "type": "image",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image4.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image4_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              }
                          ],
                          "heading": "My Image Selector xyz",
                          "attribute": "att7b"
                      },
                      {
                          "type": "slider",
                          "value": 0,
                          "uom": "px",
                          "min": 0,
                          "max:": 100,
                          "selections": [
                              "%",
                              "px",
                              "rem",
                              "em"
                          ],
                          "heading": "My Slider",
                          "attribute": "data-att3b"
                      },
                      {
                          "type": "select",
                          "value": "",
                          "selections": [
                              "selection1",
                              "selection2",
                              "selection3",
                              "selection4"
                          ],
                          "heading": "My Select",
                          "attribute": "att4b"
                      },
                      {
                          "type": "checkset",
                          "value": [],
                          "selections": [
                              {
                                  "label": "Battery too low",
                                  "value": "bat"
                              },
                              {
                                  "label": "Friend request",
                                  "value": "friend",
                                  "color": "#0000ff"
                              },
                              {
                                  "label": "Picture uploaded",
                                  "value": "upload",
                                  "color": "red"
                              }
                          ],
                          "heading": "My Check Set",
                          "attribute": "att5b"
                      },
                      {
                          "type": "color",
                          "value": "#dd2255ee",
                          "selections": [],
                          "heading": "My Color Picker",
                          "attribute": "att6b"
                      },
                      {
                          "type": "image",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image1xxxxxxx.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image1_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image2.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image2_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image3.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image3_tn.jpg"
                              }
                          ],
                          "heading": "My Image Selector",
                          "attribute": "att8b"
                      }
                  ]
              }
          ]
      },
      {
          "id": "2",
          "editorName": "atted",
          "editorHeading": "My Custom Editor 2",
          "mode": "constant",
          "callback": "testcallback",
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
              },
      {
                  "heading": "Section 1",
                  "type": "object",
                  "target": "data-testobj",
                  "controls": [
                      {
                          "heading": "My Text Selection",
                          "type": "text",
                          "mode": "textarea",
                          "attribute": "data-test1",
                          "value": "hi mike"
                      },
                      {
                          "heading": "My Toggle Switch",
                          "type": "toggle",
                          "attribute": "att2",
                          "mode": "bool",
                          "value": false
                      },
                      {
                          "heading": "My Image Selector xyz123456",
                          "type": "image",
                          "attribute": "att7",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image4.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image4_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              }
                          ]
                      },
                      {
                          "heading": "My Slider",
                          "type": "slider",
                          "attribute": "data-test2",
                          "value": 0,
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
                          "heading": "My Select",
                          "type": "select",
                          "attribute": "att4",
                          "value": "",
                          "selections": [
                              "selection1",
                              "selection2",
                              "selection3",
                              "selection4"
                          ]
                      },
                      {
                          "heading": "My Check Set",
                          "type": "checkset",
                          "attribute": "att5",
                          "value": [],
                          "selections": [
                              {
                                  "label": "Battery too low", "value": "bat"
                              },
                              {
                                  "label": "Friend request",
                                  "value": "friend",
                                  "color": "#aa00bb"
                              },
                              {
                                  "label": "Picture uploaded",
                                  "value": "upload",
                                  "color": "red"
                              }
                          ]
                      },
                      {
                          "heading": "My Color Picker",
                          "type": "color",
                          "attribute": "att6",
                          "value": "#dd2255ee"
                      }
                  ]
              },
              {
                  "heading": "Section 2",
                  "type": "single",
                  "target": "",
                  "controls": [
                      {
                          "type": "text",
                          "value": "hi mike",
                          "selections": [],
                          "heading": "My Text Selection",
                          "attribute": "data-att1b"
                      },
                      {
                          "type": "toggle",
                          "selections": [],
                          "mode": "bool",
                          "value": false,
                          "heading": "My Toggle Switch",
                          "attribute": "att2b"
                      },
                      {
                          "type": "image",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image4.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image4_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image5.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image5_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image6.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image6_tn.jpg"
                              }
                          ],
                          "heading": "My Image Selector xyz",
                          "attribute": "att7b"
                      },
                      {
                          "type": "slider",
                          "value": 0,
                          "uom": "px",
                          "min": 0,
                          "max:": 100,
                          "selections": [
                              "%",
                              "px",
                              "rem",
                              "em"
                          ],
                          "heading": "My Slider",
                          "attribute": "data-att3b"
                      },
                      {
                          "type": "select",
                          "value": "",
                          "selections": [
                              "selection1",
                              "selection2",
                              "selection3",
                              "selection4"
                          ],
                          "heading": "My Select",
                          "attribute": "att4b"
                      },
                      {
                          "type": "checkset",
                          "value": [],
                          "selections": [
                              {
                                  "label": "Battery too low",
                                  "value": "bat"
                              },
                              {
                                  "label": "Friend request",
                                  "value": "friend",
                                  "color": "#0000ff"
                              },
                              {
                                  "label": "Picture uploaded",
                                  "value": "upload",
                                  "color": "red"
                              }
                          ],
                          "heading": "My Check Set",
                          "attribute": "att5b"
                      },
                      {
                          "type": "color",
                          "value": "#dd2255ee",
                          "selections": [],
                          "heading": "My Color Picker",
                          "attribute": "att6b"
                      },
                      {
                          "type": "image",
                          "value": "",
                          "selections": [
                              {
                                  "url": "https://www.mifo.com/testimages/image1xxxxxxx.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image1_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image2.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image2_tn.jpg"
                              },
                              {
                                  "url": "https://www.mifo.com/testimages/image3.jpg",
                                  "thumbnailUrl": "https://www.mifo.com/testimages/image3_tn.jpg"
                              }
                          ],
                          "heading": "My Image Selector",
                          "attribute": "att8b"
                      }
                  ]
              }
          ]
      },
      {
          "id": "4",
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
      },
      {
          "id": "5",
          "editorName": "twocolatts",
          "editorHeading": "Two Column Section Settings",
          "mode": "constant",
          "callback": "changeCssVariableValue",
          "controlSections": [
              {
                  "heading": "Settings",
                  "type": "object",
                  "target": "data-parameters",
                  "controls": [
                      {
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
            "selections": [
              {"label": "Full Height", "value":"100%"},
                              {"label": "Fit Content", "value":"unset"}
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
              }
          ]
      }
  ]
}
function getConfig() {
  return config;
}
export default getConfig;
