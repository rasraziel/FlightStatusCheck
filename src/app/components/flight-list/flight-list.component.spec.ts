import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FlightListComponent } from './flight-list.component';

describe('FlightListComponent', () => {
  let component: FlightListComponent;
  let fixture: ComponentFixture<FlightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(FlightListComponent);
    component = fixture.componentInstance;
    jasmine.clock().mockDate(new Date('2022-04-01T01:01:01'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the plane image', () => {
    component.toggleImage();
    expect(component?.bgImage).toEqual('../../../assets/planeLight.png');
    component.toggleImage();
    expect(component?.bgImage).toEqual('../../../assets/plane.png');
  });

  it('should swap airport when swap button is clicked', () => {
    const swapBtn = fixture.debugElement.query(By.css('.swapBtn'));
    const fromAirport = component?.selectedDepartureAirport;
    const toAirport = component?.selectedArrivalAirport;
    swapBtn.triggerEventHandler('click', null);
    const fromAirportAfterSwap = component?.selectedDepartureAirport;
    const toAirportAfterSwap = component?.selectedArrivalAirport;
    expect(fromAirport).not.toBe(fromAirportAfterSwap);
    expect(toAirport).not.toBe(toAirportAfterSwap);
    expect(fromAirport).toBe(toAirportAfterSwap);
    expect(toAirport).toBe(fromAirportAfterSwap);
  });

  it('should select correct filter', () => {
    const event = { target: { value: 'C' } };
    const filterRadio = fixture.debugElement.query(By.css('#cancelled'));
    filterRadio.triggerEventHandler('click', event);
    expect(component.filterSelected).toEqual('C');
  });

  it('should set loading to false when img is loaded', () => {
    (component as any).onImageLoad({});
    expect(component.loading).toBe(false);
  });
});


describe('FlightListComponent2', () => {
  let component: FlightListComponent;
  let fixture: ComponentFixture<FlightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(FlightListComponent);
    component = fixture.componentInstance;
    jasmine.clock().mockDate(new Date('2022-11-01T01:01:01'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
