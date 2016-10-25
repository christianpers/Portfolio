export default class Data{
	constructor(){

		this.pageLayout = [
			{
				w: 0,
				settings:{
					header: {
						w: .95,
						h: 100
					},
					content: {
						w: 1,
						h: undefined
					},
					footer: {
						w: 1,
						h: 40
					},
					expanded: {
						w: 1,
						h: undefined
					}
				}
			},
			{
				w: 800,
				settings: {
					header: {
						w: .8,
						h: 100
					},
					content: {
						w: .8,
						h: undefined
					},
					footer: {
						w: 1,
						h: 40
					},
					expanded: {
						w: .5,
						h: undefined
					}
				}
			}
		]


		this.portfolioLayout = [
			{
				w: 300,
				itemsInRow: 1,
			},
			{
				w: 600,
				itemsInRow: 2
			},
			{
				w: 1024,
				itemsInRow: 3
			}
		]


		this.headerData = {
			name: 'Christian Persson / Creative Technologist',
			links: [
				{
					name: 'Github',
					url: 'https://github.com/christianpers'
				},
				{
					name: 'LinkedIn',
					url: 'https://www.linkedin.com/in/christian-persson-488a8324?trk=nav_responsive_tab_profile_pic'
				},
				{
					name: 'Email',
					url: 'mailto:christianperss@gmail.com'
				}
			]
		}
		


		this.data = [];

		var item = {
			img: '../assets/img/portfolio/E-Luminate.jpg',
			descr: 'This installation was showed at the E-Luminate festival in Cambridge in February 2016. The idea on this installation is to use a Kinect to catch a person movemements sitting on a chair. Then these movements are triggering animations which is being projected in the context of a moon. I worked on the move detection from the Kinect to trigger the various animations happening.',
			url: 'http://moonseat.tumblr.com/',
			title: 'MoonSeat',
			type: 'Collaborative',
			tags: ['WebGL', 'GLSL', 'Kinect', 'Javascript', 'Flash', 'Processing', 'Installation']
		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/sonar16.png',
			descr: 'I was part of a team making visuals that reacted to the music being played in the venues for Sonar in Reykjavik. The visuals were being displayed on the Harpa building during the Sonar festival.',
			url: 'https://sonarreykjavik.com/en/2016/',
			title: 'Sonar Reykjavik',
			type: 'Collaborative',
			tags: ['Javascript', 'Canvas', 'Installation']
		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/tretorn.jpg',
			descr: 'This was done with an eggbot robot which we hacked and uploaded our own vector images to and printed on Tretorn tennisballs. This has been used at tennis festivals as an installation for Tretorn.',
			url: '',
			title: 'Tretorn Portrait',
			type: 'Commercial',
			agency: 'Oakwood Creative',
			agencyUrl: 'http://oakwood.se/',
			tags: ['Python', 'Eggbot', 'Inkscape', 'Installation']
		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/hm.jpg',
			descr: 'This is a site for a H&M campaign I did at Oakwood Creative. H&M pushed for a lot of animation on heavy graphics.',
			url: '',
			title: 'H&M Studio A/W 2015',
			type: 'Commercial',
			agency: 'Oakwood Creative',
			agencyUrl: 'http://oakwood.se/',
			tags: ['Javascript','Heavy Loading','Heavy Animations']

		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/webgl_experiments.jpg',
			descr: "This is my WebGL tests which I'm experimenting with whenever I find time for it.",
			url: 'https://tests.christianpers.com/',
			title: 'WebGL Experiments',
			type: 'Personal',
			tags: ['WebGL', 'GLSL','Javascript']
		}
		this.data.push(item);


		var item = {
			img: '../assets/img/portfolio/halo.jpg',
			descr: 'This was a game we made for the release of the latest Halo version. It consisted of small puzzles that you had to get through. The puzzles was developed with a lot of focus on a touchscreen and the mobility of the smartphone. Examples of puzzles were pattern recognition, geolocation, socket connection for a game and using the device orientation API. The first one to complete all the puzzles won an xbox and the Halo game.',
			url: '',
			title: 'Xbox Halo 5 Puzzles',
			type: 'Commercial',
			agency: 'B-reel',
			agencyUrl: 'http://www.b-reel.com',
			tags: ['Javascript','Canvas','Node.js','WebSockets']
		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/musicvideo.jpg',
			descr: 'This is a 3D MusicVideo Room which me and a friend wanted to try out for his latest musicvideo. Its still in progress...',
			url: 'https://mscpindustries.com/Room',
			title: 'WebGL MusicVideo',
			type: 'Collaborative',
			tags: ['WebGL', 'GLSL','Javascript', 'Collada imports']
		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/chopandplay.jpg',
			descr: 'This is a thing I did cause wanted to try out a sequencer and using AudioBuffers from WebAudioAPI.',
			url: 'https://tests.christianpers.com/chopandplay',
			title: 'Chop and Play',
			type: 'Personal',
			tags: ['WebAudioAPI', 'Javascript']
		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/fridgefiller.jpg',
			descr: 'This was a game that was made for Electrolux release of their new fridge called CustomFlex. It consisted of gathering falling fridge items, such as apples, milk cartons. This was done by using DOM Elements to get the native events on touch and click. So you moved fridge boxes around to catch the falling items.',
			url: '',
			title: 'Electrolux CustomFlex',
			type: 'Commercial',
			agency: 'Oakwood Creative',
			agencyUrl: 'http://oakwood.se/',
			tags: ['CSS3 Animations','Javascript']
		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/spotify.jpg',
			descr: '',
			url: '',
			title: 'Spotify Cannes',
			type: 'Commercial',
			agency: 'B-reel',
			agencyUrl: 'http://www.b-reel.com',
			tags: ['Canvas','CSS3 Animations','Javascript']
		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/foodrescue.jpg',
			descr: '',
			url: '',
			title: 'Sainsburys Foodrescue (Google)',
			url: 'https://www.sainsburysfoodrescue.co.uk/',
			type: 'Commercial',
			agency: 'B-reel',
			agencyUrl: 'http://www.b-reel.com',
			tags: ['Canvas','CSS3 Animations','Javascript','Google']
		}
		this.data.push(item);

		var item = {
			img: '../assets/img/portfolio/mercedes.jpg',
			descr: '',
			url: '',
			title: 'Mercedes - Sound with power',
			type: 'Commercial',
			agency: 'B-reel',
			agencyUrl: 'http://www.b-reel.com',
			tags: ['WebAudioAPI','CSS3 Animations','Javascript']
		}
		this.data.push(item);



	}

}