let template_basic = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Layout -Simple I</title>
    <link href="##BASEADDRESS##/templates/template_basic/styles/main.css" rel="stylesheet" />
</head>
<style>
    
</style>
<body>
    <a href="#maincontent" class="skiplink" tabindex="1"
      >Skip to main content</a
    >
    <header>

        <img src="##BASEADDRESS##/templates/template_basic/images/logo-mycompany-hz.png" class="logo" />
        <nav>
            <button class="menu-toggle" id="menu-toggle" aria-expanded="false"><span class="screen-reader-text">Menu</span>
                <svg class="icon icon-menu-toggle" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100">
                    <g class="svg-menu-toggle">
                        <path class="line line-1" d="M5 13h90v14H5z"/>
                        <path class="line line-2" d="M5 43h90v14H5z"/>
                        <path class="line line-3" d="M5 73h90v14H5z"/>
                    </g>
                </svg>
            </button>
            <ul>
                <li>
                    <a href="#">HOME</a>
                </li>
                <li data-sbblock="Code" data-sbzone="hovo" data-sbeditor="code">
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <button type="button" aria-expanded="false" aria-controls="submenu5">PRODUCTS <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="199.404px" height="199.404px" viewBox="0 0 199.404 199.404" style="enable-background:new 0 0 199.404 199.404;"
                        xml:space="preserve">
                   <g>
                       <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695 	"/>
                   </g>
                   </svg></button>
                    <ul id="submenu5" aria-hidden="true">
                        <li>
                            <a href="#">PRODUCT 1</a>
                        </li>
                        <li>
                            <a href="#">PRODUCT 2</a>
                        </li>
                        <li>
                            <a href="#">PRODUCT 3</a>
                        </li>
                        <li>
                            <a href="#">PRODUCT 4</a>
                        </li>
                        <li>
                            <a href="#">PRODUCT 5</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" data-sbblock="Code" data-sbzone="hovo" data-sbeditor="code">F.A.Q.</a>
                </li>
                <li>
                    <a href="#">CONTACT</a>
                </li>
            </ul>
            <ul class="nav-right">
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <title>X Logo</title>
                    <desc>Link to MyCompany X Page</desc>
                    <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </a>
                </li>
            </ul>
        </nav>
    </header>

    <main id="maincontent" data-sbblock="Main Content Area" data-sbzone="hi">

    </main>

    <footer>
        &copy; <span id="footerYearText"></span> My Company, Inc.<script>const thisYear = new Date().getFullYear();const yearEl = document.getElementById("footerYearText");yearEl.innerText = thisYear;<\/script>
    </footer>
    <script src="##BASEADDRESS##/templates/template_basic/js/menu.js"><\/script>
      <script type="module" id="scriptSbUtility">
        import { changeElementType } from '##BASEADDRESS##/sbassets/js/simplicityUtilities.js';
        function changeCssVariableValue(stylesheetID, variableName, variableValue) {
            var r = document.querySelector(':root');
            r.style.setProperty(variableName, variableValue);
            const vstyle = document.getElementById(stylesheetID);
            if (vstyle && vstyle.sheet.cssRules){
              let newCssText = '';
                for (const element of vstyle.sheet.cssRules) {
                    if (element.selectorText != ':root') {
                        newCssText += element.cssText + '\\n';
                    } else {
                        if (element.style) {
                            const props = [...element.style]
                            .map((propName) => [
                            propName.trim(),
                            element.style.getPropertyValue(propName).trim()
                            ]);
                            let tempRootStyle = ':root {\\n';
                            props.forEach((prop) => {
                                let outProp = prop[1];
                                if (prop[0] == variableName) {
                                  outProp = variableValue;
                                }
                                tempRootStyle += prop[0] + ": " + outProp + ";\\n";
                            });
                            newCssText += tempRootStyle + '}\\n';
                        }
                    }
                }
                vstyle.innerHTML = newCssText;
            }
        }
        window.addEventListener('message', (event) => {
            if (event.data.command === 'run') {
              switch(event.data.function) {
                case 'changeElementType':
                  const head = document.getElementById(event.data.id);
                  const getHeadingType = head.getAttribute('data-heading');
                  changeElementType(head, getHeadingType);
                  window.parent.postMessage(
                    {
                      command: 'registerElement',
                      content: event.data.id,
                    },
                    '*'
                  );
                  break;
                case 'changeCssVariableValue':
                const el = document.getElementById(event.data.id);
                  const obj = JSON.parse(el.getAttribute('data-parameters'));
                  const styleid =el.getAttribute('data-styleid');
                  for (let key of Object.keys(obj)) {
                      let outKey = '';
                      switch(key) {
                        case 'leftWidth':
                          outKey = '--twocol-leftside-width';
                          let rightWidth = 100 - parseInt(obj[key]) + 'fr';
                          obj[key] = parseInt(obj[key]) + 'fr';
                          changeCssVariableValue(styleid, '--twocol-rightside-width', rightWidth);
                          break;
                        case 'leftColor':
                          outKey = '--twocol-leftside-backgroundColor';
                          break;
                        case 'rightColor':
                          outKey = '--twocol-rightside-backgroundColor';
                          break;
                        case 'gap':
                          outKey = '--twocol-gap';
                          break;
                        case 'gapLineWidth':
                          outKey = '--twocol-gap-line-width';
                          break;
                        case 'gapLineColor':
                          outKey = '--twocol-gap-line-color';
                          break;
                        case 'columnPadding':
                          outKey = '--twocol-padding';
                          break;
                        case 'bottomMargin':
                          outKey = '--twocol-margin-bottom';
                          break;
                        case 'minHeight':
                          outKey = '--twocol-min-height';
                          break;
                      }
                      changeCssVariableValue(styleid, outKey, obj[key]);
                  }
                  break;
              }
            }
          })
      <\/script>
<!--SB-TEMPLATE-END-->
</body>
</html>`;
export default template_basic;