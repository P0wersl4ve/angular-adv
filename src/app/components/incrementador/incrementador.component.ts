import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    // console.log("leyenda", this.leyenda);
    // console.log("progreso", this.porcentaje);
    
    
  }

  ngOnInit() {
    // console.log("progreso", this.porcentaje);
  }

  onChange( newValue: number ) {

    //let elementoHTML: any = document.getElementsByName('porcentaje')[0];
    //console.log(elementoHTML.value);
    

    console.log(newValue);

    if(newValue >= 100){
      this.porcentaje = 100;
    }else if(newValue <= 0){
      this.porcentaje = 0;
    }else{
      this.porcentaje = newValue;
    }

    //elementoHTML.value = this.porcentaje;

    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );
  
  }

  cambiarValor( valor: number ) {

    if(this.porcentaje >= 100 && valor > 0){
      this.porcentaje = 100;
      return;
    }
      
    
    if(this.porcentaje <= 0 && valor < 0){
      this.porcentaje = 0;
      return
    }

    this.porcentaje += valor;

    this.cambioValor.emit( this.porcentaje );

    this.txtProgress.nativeElement.focus();
  }

}
