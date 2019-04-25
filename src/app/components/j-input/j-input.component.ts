import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'j-input',
  templateUrl: './j-input.component.html',
  styleUrls: ['./j-input.component.css']
})
export class JInputComponent implements OnInit {

  private _label: string = 'Label';  
  @Input('label')
  set label(label) {
    this._label = label;
  }

  get label() {
    return this._label;
  }

  private _type: string = 'text';
  @Input('type')
  set type(type) {
    this._type = type;
  }

  get type() {
    return this._type;
  }

  private _readonly: boolean = false;
  @Input('readonly')
  set readonly(readonly) {
    this._readonly = readonly;
  }

  get readonly() {
    return this._readonly;
  }

  private _showLeftHint: boolean = false;
  @Input('showLeftHint')
  set showLeftHint(showLeftHint) {
    this._showLeftHint = showLeftHint;
  }

  get showLeftHint() {
    return this._showLeftHint;
  }

  private _messageLeftHint: string = '';
  @Input('messageLeftHint')
  set messageLeftHint(messageLeftHint) {
    this._messageLeftHint = messageLeftHint;
  }

  get messageLeftHint() {
    return this._messageLeftHint;
  }

  private _showRigthHint: boolean = false;
  @Input('showRigthHint')
  set showRigthHint(showRigthHint) {
    this._showRigthHint = showRigthHint;
  }

  get showRigthHint() {
    return this._showRigthHint;
  }

  private _rigthValue: string = '0';
  @Input('rigthValue')
  set rigthValue(rigthValue) {
    this._rigthValue = rigthValue;
  }

  get rigthValue() {
    return this._rigthValue;
  }

  private _value: string = '';

  constructor() { }

  ngOnInit() {
  }

}
