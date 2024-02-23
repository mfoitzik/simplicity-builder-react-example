const coreHtml = `<section class="twocol" data-sbblock="Two Column Section" data-sbsettings="1" data-sbzone="ho" data-parameters='{"leftWidth":"50%","leftColor":"#fbe4c4ff","rightColor":"#b8e1e7ff","gap":"2rem","gapLineWidth":"2px","gapLineColor":"#394f87ff","columnPadding":"1rem","minHeight":"100%","bottomMargin":"1rem"}' data-styleid="twocolumn-stylevars">
<h2 class="twocol-heading" data-sbblock="Heading" data-heading="h2" data-sbeditor="plaintext" data-sbsettings="4">Two-Column Section Heading</h2>
<div class="twocol-left" data-sbblock="Rich Text" data-sbeditor="richtext">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere maxime reprehenderit consectetur saepe, ea iusto nam? Nihil, totam sapiente!</p>
</div>
<div class="twocol-right" data-sbblock="Rich Text" data-sbeditor="richtext">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis unde libero enim molestias amet obcaecati atque voluptas recusandae aspernatur incidunt.</p>
</div>
</section>
<style id="twocolumn-stylevars">
  :root {
      --twocol-leftside-width: 1fr;
      --twocol-leftside-backgroundColor: #fbe4c4;
      --twocol-rightside-width: 1fr;
      --twocol-rightside-backgroundColor: #b8e1e7;
      --twocol-gap: 2rem;
      --twocol-gap-line-width: 2px;
      --twocol-gap-line-color: #394f87;
      --twocol-padding: 1rem;
      --twocol-min-height: 100%;
      --twocol-margin-bottom: 1rem;
  }
  .twocol {
      display: grid;padding-bottom:20px;
      grid-template-columns: var(--twocol-leftside-width) var(--twocol-rightside-width);
      grid-template-rows: auto 1fr;
      min-height:var(--twocol-min-height);
      column-gap: var(--twocol-gap);
      box-sizing:border-box;
      position:relative;
      margin-bottom: var(--twocol-margin-bottom);
  }
  .twocol-heading {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 3;
      margin-top: 1rem;
      margin-bottom: 1rem;
  }
  .twocol-left {
      background-color: var(--twocol-leftside-backgroundColor);
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
      padding: var(--twocol-padding);
      position: relative;
  }
  .twocol-left:after {
      content:"";
      position:absolute;
      top:0;
      right:calc(((var(--twocol-gap) / 2) * -1) - (var(--twocol-gap-line-width) /2));
      height:100%;
      width:var(--twocol-gap-line-width);
      background:var(--twocol-gap-line-color);
  }
  .twocol-right {
      background-color:var(--twocol-rightside-backgroundColor);
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      padding: var(--twocol-padding);
  }
  @media (max-width:780px) {
      main {
          margin-left:.5rem;
          margin-right:.5rem;
      }
      .twocol {
          column-gap: 0;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          row-gap: 2rem;
      }
      .twocol-heading {
          grid-row-start: 1;
          grid-row-end: 2;
          margin-top: 1rem;
          margin-bottom: 1rem;
      }
      .twocol-left {
          grid-column-start: 1;
          grid-column-end: 3;
          position:relative;
          margin-top:-2rem;
      }
      .twocol-left:after {
          content:"";
          position:absolute;
          top:calc(100% + (var(--twocol-gap) / 2) - (var(--twocol-gap-line-width) /2));
          left:0;
          height:var(--twocol-gap-line-width);
          width:100%;
          background:var(--twocol-gap-line-color);
      }
      .twocol-right {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 3;
          grid-row-end: 4;
      }
  }
</style>

`
const block_twoCol = {
    "icon": "<img src=\"##BASEADDRESS##/templates/icons/layout-split.svg\" />",
    "label": "2-Col Layout",
    "tooltipHeading": "Two Column Layout",
    "tooltipImage": "##BASEADDRESS##/templates/icons/TwoColumnBlockImage.png",
    "tooltipText": "A responsive two-column layout. Can be used to fill an entire page or as a section of a page.",
    "dragImage": "##BASEADDRESS##/templates/icons/TwoColumnBlockImage.png",
    "html": encodeURIComponent(coreHtml)
}

export default block_twoCol;