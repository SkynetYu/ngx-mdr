import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MartixRainingLetterSettings } from './setting.model';

@Component({
  selector: 'ngx-mdr',
  template: `
    <canvas #canvas id="Matrix"></canvas>
  `,
  styles: [
  ]
})
export class NgxMdrComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  @Input() settings!: MartixRainingLetterSettings;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
  }
  
  constructor() { }
  ngAfterViewInit(): void {
    RenderMatrix(this.canvas, this.settings);
  }

  ngOnInit(): void {
  }

}

export function RenderMatrix(canvasRef: ElementRef<HTMLCanvasElement>, settings?: MartixRainingLetterSettings) {

  // Initialize setup
  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const _settings = {
      fontSize: settings && settings.fontSize? settings.fontSize: 16,
      alphabet: settings && settings.alphabet? settings.alphabet: katakana + latin + nums,
      canvasWidth : settings && settings.canvasWidth? settings.canvasWidth: window.innerWidth,
      canvasHeight : settings && settings.canvasHeight? settings.canvasHeight: window.innerWidth,
      backgroundColor: settings && settings.backgroundColor ? settings.backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontColor: settings && settings.fontColor ? settings.fontColor: '#0F0'
  } as MartixRainingLetterSettings;
  
  let fontSize = _settings.fontSize;
  let alphabet = _settings.alphabet;

  const canvas = canvasRef.nativeElement;
  let context = canvas.getContext("2d");

  canvas.width = _settings.canvasWidth;
  canvas.height = _settings.canvasHeight;

  const columns = canvas.width / fontSize;

  const rainDrops: any[] = [];

  for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
  }

  const render = () => {
    if(context) {
      context.fillStyle = _settings.backgroundColor; // black w a tiny bit of alpha
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = _settings.fontColor; // pure green
      context.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
          // randomize the string of characters to render
          const text = alphabet.charAt(
              Math.floor(Math.random() * alphabet.length)
          );
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (
              rainDrops[i] * fontSize > canvas.height &&
              Math.random() > 0.975
          ) {
              rainDrops[i] = 0;
          }
          rainDrops[i]++;
      }
    }
  };

  setInterval(render, 30);
};