export default class PortfolioExpanded{
	constructor(closeCallback, callbackScope){

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

		this.closeCallback = closeCallback;
		this.callbackScope = callbackScope;
		this.isShowing = false;

		this.dims = {w: undefined, h: undefined};

		this.el = document.createElement('div');
		this.el.className = 'expandedWrapper';

		this.headers = [];
		

		this.closeBtn = document.createElement('a');
		this.closeBtn.className = 'closeBtn';
		this.closeBtn.innerHTML = 'Close';
		this.closeBtn.addEventListener('click', (e) => {
			e.preventDefault();
			this.closeCallback.call(this.callbackScope);
		});
		this.el.appendChild(this.closeBtn);

		// this.imgWrapper = document.createElement('div');
		// this.imgWrapper.className = 'imgWrapper';

		// this.el.appendChild(this.imgWrapper);

		this.contentWrapper = document.createElement('div');
		this.contentWrapper.className = 'innerWrapper';

		var titleHeader = document.createElement('span');
		titleHeader.className = 'sectionTitle';
		titleHeader.innerHTML = 'Title:';
		this.contentWrapper.appendChild(titleHeader);
		this.titleHeader = titleHeader;
		this.headers.push(titleHeader);

		this.titleEl = document.createElement('h3');
		this.titleEl.className = 'title';

		this.contentWrapper.appendChild(this.titleEl);

		var descrHeader = document.createElement('span');
		descrHeader.className = 'sectionTitle';
		descrHeader.innerHTML = 'Description:';
		this.contentWrapper.appendChild(descrHeader);
		this.headers.push(descrHeader);
		this.descrHeader = descrHeader;
		this.descrEl = document.createElement('p');
		this.descrEl.className = 'descr';

		this.contentWrapper.appendChild(this.descrEl);

		var agencyHeader = document.createElement('span');
		agencyHeader.className = 'sectionTitle';
		agencyHeader.innerHTML = 'Agency:';
		this.contentWrapper.appendChild(agencyHeader);
		this.headers.push(agencyHeader);
		this.agencyHeader = agencyHeader;
		this.agency = document.createElement('a');
		this.agency.className = 'agency';
		this.agency.target = "_blank";

		this.contentWrapper.appendChild(this.agency);
		
		var urlHeader = document.createElement('span');
		urlHeader.className = 'sectionTitle';
		urlHeader.innerHTML = 'Url:';
		this.contentWrapper.appendChild(urlHeader);
		this.headers.push(urlHeader);
		this.urlHeader = urlHeader;
		this.urlEl = document.createElement('a');
		this.urlEl.className = 'url';
		this.urlEl.target = "_blank";

		this.contentWrapper.appendChild(this.urlEl);

		var tagHeader = document.createElement('span');
		tagHeader.className = 'sectionTitle';
		tagHeader.innerHTML = 'Tags:';
		this.contentWrapper.appendChild(tagHeader);
		this.headers.push(tagHeader);
		this.tagHeader = tagHeader;
		this.tagUl = document.createElement('ul');
		this.tagUl.className = 'tags';
		this.contentWrapper.appendChild(this.tagUl);

		this.el.appendChild(this.contentWrapper);

		this.setTopHideTimer = null;

		document.body.appendChild(this.el);

		this.hide();

	}

	show(data) {

		
		if (this.isShowing) return;
		this.isShowing  = true;

		for (var header of this.headers){
			header.style.display = 'block';
		}

		if (!data.title)
			this.titleHeader.style.display = 'none';

		if (!data.descr)
			this.descrHeader.style.display = 'none';

		if (!data.agency){
			this.agencyHeader.style.display = 'none';
		}

		if (!data.url)
			this.urlHeader.style.display = 'none';

		if (!data.tags)
			this.tagHeader.style.display = 'none';

		this.titleEl.innerHTML = data.title;
		this.descrEl.innerHTML = data.descr;
		// if (data.agency){
			this.agency.innerHTML = data.agency;
			this.agency.href = data.agencyUrl;
		// }

		this.urlEl.href = data.url;
		this.urlEl.innerHTML = data.url;

		while (this.tagUl.firstChild) {
		  this.tagUl.removeChild(this.tagUl.firstChild);
		}
		
		for (var item of data.tags){
			var tag = document.createElement('li');
			tag.className = 'tagItem';

			tag.innerHTML = item;
			this.tagUl.appendChild(tag);
		}
		
		// this.imgWrapper.style.backgroundImage = 'url('+data.img.src+')';
		this.el.style.display = 'block';
		
		var top  = window.pageYOffset || document.documentElement.scrollTop;
		this.el.style.top = - (this.dims.h - top) + 'px';
		// this.el.style.display = 'block';
		// debugger;
		this.el.style[this.transformProp] = 'translate(0, '+this.dims.h+'px)';
		document.body.style.overflow = 'hidden';

	}

	hide(e) {

		// this.el.style.display = 'none';
		this.el.style[this.transformProp] = 'translate(0, 0)';
		this.isShowing = false;
		var top  = window.pageYOffset || document.documentElement.scrollTop;

		clearTimeout(this.setTopHideTimer);
		this.setTopHideTimer = setTimeout(() => {
			this.el.style.top = - (this.dims.h + top) + 'px';
			this.el.style.display = 'none';
		},500);
		

		document.body.style.overflow = 'visible';

	}

	onResize(w,h, settings) {

		this.dims.w = w;
		this.dims.h = h;

		var top  = window.pageYOffset || document.documentElement.scrollTop;
		this.el.style.top = - (this.dims.h - top) + 'px';

		this.el.style.width = w + 'px';
		this.el.style.height = h + 'px';

		this.contentWrapper.style.width = settings.w * w - 40 + 'px';

		// this.imgWrapper.style.height = h * .8 + 'px';

	}

}