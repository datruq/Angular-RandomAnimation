import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { trigger, state, style, animate, transition, group } from '@angular/animations';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [
		trigger(
			'enterAnimation', [	
				/*roundOut*/
				state('active', style({
					transform: 'scale(1)'
				})),
				state('round', style({
					transform: 'scale(1)'
				})),
				transition('* => round',
					[animate(900, style({ transform: 'skewX(20deg)' })),
					animate(900, style({ transform: 'scaleX(1)' }))
					]),			
				/*Rotate*/
				state('active', style({
					transform: 'scale(1)'
				})),
				state('rotate', style({
					transform: 'scale(1)'
				})),
				transition('* => rotate',
					[animate(900, style({ transform: 'rotateX(180deg)' })),
					animate(900, style({ transform: 'scaleY(1)' }))
					]),
				/*hinge*/
				state('active', style({
					transform: 'scale(1)'
				})),
				state('hinge', style({
					transform: 'scale(1)'
				})),
				transition('* => hinge',
					[animate(500, style({ transform: 'matrix(1, -0.3, 0, -0.5, 0, 0)' })),
					animate(900, style({ transform: 'scaleY(1)' }))
					]),

				/*crazyTime*/
				state('active', style({
					transform: 'scale(1)'
				})),
				state('crazyTime', style({
					transform: 'scale(1)'
				})),
				transition('* => crazyTime',
					[animate(600, style({ transform: 'skew(50deg, 10deg)' })),
					animate(600, style({ transform: 'skew(10deg, 50deg)' })),
					animate(600, style({ transform: 'skew(50deg, 10deg)' }))
					])				
			]
		)
	],
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public appSubscribe: Subscription = new Subscription();
	public randomEye;
	public randomNose;
	public randomMouth;
	public randomColor;
	public animate = 'active';
	constructor(
		public appService: AppService) {
		let faces = this.appService.getImg();
		let timer = Observable.timer(0, 2000);
		timer.subscribe(() => {
			this.randomEye = faces.face.eyes[this.getRandom()];
			this.randomNose = faces.face.nose[this.getRandom()];
			this.randomMouth = faces.face.mouth[this.getRandom()];
			this.randomColor = faces.face.color[this.getRandom()];
		});

	}

	getRandom() {
		return Math.floor(Math.random() * 8);
	}

	roundOut() {
		this.animate = (this.animate === 'round' ? 'active' : 'round');
	}

	rotate() {
		this.animate = (this.animate === 'rotate' ? 'active' : 'rotate');
	}

	hinge() {
		this.animate = (this.animate === 'hinge' ? 'active' : 'hinge');
	}

	crazyTime() {
		this.animate = (this.animate === 'crazyTime' ? 'active' : 'crazyTime');
	}

	bye() {
		this.animate = (this.animate === 'bye' ? 'active' : 'bye');
	}




}
