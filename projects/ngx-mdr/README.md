# Matrix Digital Rain Effect for Angular

React Matrix Digital Rain Effect gives you your favorite Matrix movie screen effect in the form of a React component. The source originates from an October 2021 blog article written by Adam Nagy, ["Matrix raining code effect using JavaScript"](https://dev.to/javascriptacademy/matrix-raining-code-effect-using-javascript-4hep).

## Preview


## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v8/commands/npm-install) to install .

```bash
npm i ngx-mdr -s
```

```typescript
// in app.module.ts
import { NgxMdrModule } from 'ngx-mdr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    NgxMdrModule // import NgxMdrModule in here
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
## Usage
Optional 1:
```typescript
// in app.component.html
<ngx-mdr [settings]="settings"></ngx-mdr>

// in app.component.ts
import { MartixRainingLetterSettings } from 'ngx-mdr/lib/setting.model';

export class AppComponent implements {
  settings: MartixRainingLetterSettings = {
    canvasWidth: window.innerWidth,
    canvasHeight: window.innerHeight
  } as MartixRainingLetterSettings;
  ...
}
```

Optional 2:
```typescript
// in app.component.html
<canvas #canvas></canvas>

// in app.component.ts
import { RenderMatrix } from 'ngx-mdr';
import { MartixRainingLetterSettings } from 'ngx-mdr/lib/setting.model';
export class AppComponent implements, AfterViewInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  settings: MartixRainingLetterSettings = {
    canvasWidth: window.innerWidth,
    canvasHeight: window.innerHeight
  } as MartixRainingLetterSettings;

  ngAfterViewInit(): void {
    // call RenderMatrix() to render
    RenderMatrix(this.canvas, this.settings);
  }
}

```

## Settings
| Parameter      | Usage         | Type  |
| --------------:|--------------:| -----:|
| fontColor      | the text color of the rain | string|
| backgroundColor| the background color of the canvas | string|
| canvasWidth    | the width of the canvas      | number|
| canvasHeight   | the height of the canvas      | number|
| alphabet       | the text of the rain      | string|
| fontSize       | the text size of the rain     | number|

## Angular version
This library was generated with Angular CLI version 13.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author
Thanks in advance
Chiu Ho Yu

## License
[MIT](https://choosealicense.com/licenses/mit/)