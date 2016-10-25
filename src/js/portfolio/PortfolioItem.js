export default class PortfolioItem{
	constructor(wrapperEl, portfolioData, callback, callbackScope){

		this.transformProp = (function(){
		  var testEl = document.createElement('div');
		  if(testEl.style.transform == null) {
		    var vendors = ['Webkit', 'Moz', 'ms'];
		    for(var vendor in vendors) {
		      if(testEl.style[ vendors[vendor] + 'Transform' ] !== undefined) {
		        return vendors[vendor] + 'Transform';
		      }
		    }
		  }
		  return 'transform';
		})();

		this.wrapperEl = wrapperEl;

		
		this.clickCallback = callback;
		this.callbackScope = callbackScope;

		this.imageSilentLoaded = false;
		this.imageLoaded = false;
		this.currentScale = 1;
		this.lastScaleTimestamp = Date.now();

		this.title = portfolioData.title;
		this.img = undefined;
		this.descr = portfolioData.descr;
		this.url = portfolioData.url;
		this.tags = portfolioData.tags;
		this.agencyUrl = portfolioData.agencyUrl;
		this.agency = portfolioData.agency == undefined ? "" : portfolioData.agency;

		this.el = document.createElement('div');
		this.el.className = 'portfolioItem';

		this.contentWrapper = document.createElement('div');
		this.contentWrapper.className = 'wrapper';

		this.titleEl = document.createElement('h4');
		this.titleEl.className = 'title';
		this.titleEl.innerHTML = portfolioData.title;
		this.contentWrapper.appendChild(this.titleEl);

		this.typeEl = document.createElement('h5');
		this.typeEl.className = 'type';
		this.typeEl.innerHTML = portfolioData.type + ' project';
		this.contentWrapper.appendChild(this.typeEl);

		

		this.el.appendChild(this.contentWrapper);

		if (portfolioData.img){

			var imgEl = new Image();
			imgEl.addEventListener('load', () => {
				this.onImageLoaded(imgEl);
			});
			imgEl.src = portfolioData.img;
			this.img = imgEl;
		}

		this.wrapperEl.appendChild(this.el);

		

	}

	onClick() {

		// this.clickCallback()
		this.clickCallback.call(this.callbackScope, this);
	}

	onImageLoaded(img) {

		// this.imageLoaded = true;
		this.imageSilentLoaded = true;
		
		this.el.style[this.transformProp] = 'scale('+1+', '+1+')';

		this.contentWrapper.addEventListener('click', () => {
			this.onClick();
		});

		this.el.style.backgroundImage = 'url('+img.src+')';

		// this.el.style.opacity = 1;
		setTimeout(() => {
			this.contentWrapper.style.display = 'block';
		},200);

		setTimeout(() => {
			this.imageLoaded = true;
		},1000);
		

	}

	update() {

		if (this.imageSilentLoaded) return;

		this.el.style.backgroundColor = 'rgba('+Math.floor(Math.random() * 255)+','+Math.floor(Math.random() * 255)+',200,.7)';

		var now = Date.now();
		var diff = now - this.lastScaleTimestamp;
		if (diff >= 1000){
			this.lastScaleTimestamp = now;
			if (this.currentScale < 1)
				this.currentScale = 1;
			else
				this.currentScale = .9;

			this.el.style[this.transformProp] = 'scale('+this.currentScale+', '+this.currentScale+')';
		

		}
		
	}


	onResize(pos, w) {



		this.el.style.left = pos.x + 'px';
		this.el.style.top = pos.y + 'px';
		this.el.style.width = w + 'px';
		this.el.style.height = '300px';

		

	}

}