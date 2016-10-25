export default class Header{
	constructor(data){

		this.headerWrapper = document.createElement('div');
		this.headerWrapper.className = 'headerWrapper portfolioContent';
		document.body.appendChild(this.headerWrapper);

		this.nameEl = document.createElement('h4');
		this.nameEl.className = 'headerName';
		this.nameEl.innerHTML = data.name;

		this.headerWrapper.appendChild(this.nameEl);

		var linksWrapper = document.createElement('div');
		linksWrapper.className = 'headerLinksWrapper';
		for (var i=0;i<data.links.length;i++){
			var link = data.links[i];

			var linkEl = document.createElement('a');
			linkEl.className = 'headerLink';
			linkEl.target = '_blank';
			linkEl.innerHTML = data.links[i].name;
			linkEl.href = data.links[i].url;

			linksWrapper.appendChild(linkEl);

		}

		this.headerWrapper.appendChild(linksWrapper);

		

	}

	onResize(pos, w, h) {

		this.headerWrapper.style.left = pos[0] + 'px';
		this.headerWrapper.style.top = pos[1] + 'px';
		this.headerWrapper.style.width = w + 'px';
		this.headerWrapper.style.height = h + 'px';

	}
}