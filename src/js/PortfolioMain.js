import Data from '../js/portfolio/Data';
import PortfolioItem from '../js/portfolio/PortfolioItem';
import PortfolioExpanded from '../js/portfolio/PortfolioExpanded';
import Header from '../js/portfolio/Header';

export default class PortfolioMain{
	constructor(){

		
		this.opacityIsSet = false;
		this.currentHeight = undefined;



		this.contentWrapper = document.createElement('div');
		this.contentWrapper.className = 'contentWrapper portfolioContent';
		this.contentWrapper.style.opacity = 0;


		document.body.appendChild(this.contentWrapper);

		this.data = new Data();
		this.portfolioLayout = this.data.portfolioLayout;
		this.pageLayout = this.data.pageLayout;

		this.header = new Header(this.data.headerData);

		this.portfolioContents = document.body.querySelectorAll('.portfolioContent');

		this.portfolioItems = [];

		for (var i=0;i<this.data.data.length;i++){

			var portfolioItem = new PortfolioItem(this.contentWrapper, this.data.data[i], this.onItemClick, this);
			this.portfolioItems.push(portfolioItem);

		}

		this.portfolioExpanded = new PortfolioExpanded(this.onExpandedClose, this);

		// this.timestamp = Date.now();
		// setTimeout(() => { 
		// 	this.timestamp = Date.now();
		// 	this.takeScreenshot();
			
		// },2000);

	}

	

	onExpandedClose(){

		for (var item of this.portfolioContents){
			item.style.opacity = 1;
		}
		this.portfolioExpanded.hide();
	}

	onItemClick(portfolioItem) {

		this.portfolioExpanded.show(portfolioItem);

		for (var item of this.portfolioContents){
			item.style.opacity = 0;
		}

	}

	update() {

		for (var item of this.portfolioItems){
			if (item.imageLoaded) continue;

			item.update();
		}

	}

	render() {


	}

	onResize(w,h, winW){



		var pageLayout = null;
		for (var i=0;i<this.pageLayout.length;i++){
			if (w > this.pageLayout[i].w)
				pageLayout = this.pageLayout[i].settings;
		}

		if (!pageLayout) return;

		this.portfolioExpanded.onResize(winW,h, pageLayout.expanded);

		var headerW = pageLayout.header.w * w;
		var headerH = pageLayout.header.h;

		var contentW = pageLayout.content.w * w;


		var rowAmount = undefined;
		for (var i=0;i<this.portfolioLayout.length;i++){
			if (w > this.portfolioLayout[i].w)
				rowAmount = this.portfolioLayout[i].itemsInRow;
		}

		if (!rowAmount) return;


		var rowIdx = 0;
		var itemW = Math.floor(contentW / rowAmount);
		for (var i=0;i<this.portfolioItems.length;i++){

			var portfolioItem = this.portfolioItems[i];
			if ((i % rowAmount) == 0){
				if (i > 0)
					rowIdx++;

			}

			var pos = {};
			if (w == winW)
				pos.x = ((w - contentW)/2) + i % rowAmount * itemW;
			else
				pos.x = ((winW - contentW)/2) + i % rowAmount * itemW;
			pos.y = rowIdx * 300;
			
			portfolioItem.onResize(pos, itemW);

		}



		this.header.onResize([(winW-headerW) / 2,0], headerW, headerH);

		this.contentWrapper.style.top = headerH + 'px';
		this.contentWrapper.style.height = (rowIdx+1) * 320 + 'px';

		this.currentHeight = headerH + (rowIdx+1) * 320;

		if (!this.opacityIsSet){
			this.opacityIsSet = true;
			setTimeout( () => {
				this.contentWrapper.style.opacity = 1;
			},300);
			
		}

	}

}