class loader {

  constructor(containerLoad, colorLoad = 'white', bgColor = 'black') {
    this.containerLoad = document.querySelector(containerLoad);
    this.colorLoad = colorLoad;
    this.bgColor = bgColor;
    this.addStyleAdom();
    this.addLoaderDom();
    this.eventLoad();
  }

  addStyleAdom() {
    let style =
    `
    <style data-load>
    body {
      paddind: 0px;
      margin: 0px;
      overflow: hidden;
    }
    .loader-js {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0px;
      left: 0px;
      background: ${this.bgColor};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: white;
    }

    .loader-js__loading {
      width: 100px;
      height: 100px;
      border-top: solid 1px ${this.colorLoad};
      border-left: solid 1px ${this.colorLoad};
      border-radius: 50%;
      animation: load .5s linear infinite;
    }

    @keyframes load {
      to {
        transform: rotate(360deg)
      }
    }

    .loader-js__text {
      font-family: monospace;
      animation: textLoad .3s alternate infinite;
      opacity: 0;
    }

    @keyframes textLoad {
      to {
        opacity: 1;
      }
    }

    </style>
    `;

    document.head.innerHTML += style;

  }

  addLoaderDom() {
    let loaderDom =
    `
    <div class="loader-js">
      <div class="loader-js__loading"></div>
      <h4 class="loader-js__text">loading...</h4>
    </div>

    `;

    document.body.innerHTML += loaderDom;

  }

  domLoad() {
    let style = document.querySelector('[data-load]');
    let loader = document.querySelector('.loader-js');

    loader.style.opacity = 0;
    style.remove();
    loader.remove();

  }

  eventLoad() {
    window.addEventListener('load', this.domLoad);
  }


}
