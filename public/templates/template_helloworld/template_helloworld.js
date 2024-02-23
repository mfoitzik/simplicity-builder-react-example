let template_helloworld = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simplicity Builder&trade; Hello World Template</title>
  <style>
    * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
    }
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height:100vh;
    }
    main {
      background-color: #f4f4f4;
      width: 80%;
      flex: 1;
      padding: 1rem;
    }
    header {
      border: 1px solid red;
      width:100%;
      text-align: center;
      padding: .5rem;
    }
    footer {
      border: 1px solid blue;
      text-align: center;
      width: 100%;
      padding: .5rem;
    }
    .wrapper {
        width:100%;
        border: 2px solid red;
        min-height: 200px;
        padding: 1rem;
      }
      .circle {
        display: inline-block;
        height: 120px;
        width: 120px;
        background-color: green;
        border-radius: 50%;
        border-width: 3px;
        border-color: black;
      }
      .circle.borderon {
        border-style: solid;
      }
      .circle-borderoff {
        border-style: none.
      }
      .wrapper p {
        margin-bottom: 1rem;
        margin-top: 1rem;
      }
      .center {
        text-align: center;
      }
      .left {
        text-align: left;
      }
      .right {
        text-align: right;
      }
      .rounded {
        border-radius: 20px;
      }
      .shadow {
        box-shadow: 5px 10px 8px #888888;
      }
  </style>
</head>
<body>
  <header>
    Header Area
  </header>
  <main id="maincontent" data-sbblock="Main Content Area" data-sbzone="hi">
    
  </main>
  <footer>
    Footer Area
  </footer>
  <script src="##BASEADDRESS##/templates/template_helloworld/circleUtility.js" id="helloworld_utility"><\/script>
  <!--SB-TEMPLATE-END-->
</body>
</html>`;
export default template_helloworld;