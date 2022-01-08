import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QrComponent implements OnInit {

  public folder: string = "QR"

  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  
  constructor(private barcodeScanner: BarcodeScanner) { } 

  ngOnInit() {
    this.generateDefault();
  }

  // Llenar qr con datos de ejemplo
  generateDefault(){
    this.scannedData = {
      cancelled: "Cancelled",
      format: "Formato",
      text: "Texto"
    }
  }

  // Escanear código de barras
  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: false,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Pon un código qr o de barras enfrente',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      if(barcodeData){
        console.log('Barcode data', barcodeData);
        this.scannedData = barcodeData;
      }
      else{
        this.generateDefault();
      }
    }).catch(err => {
      console.log('Error', err);
    });

  } 


  createBarcode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData).then((encodedData) => {
      console.log(encodedData);
      this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }
}
