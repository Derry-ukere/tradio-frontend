/* eslint-disable quotes */
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import {Brand} from './nav/Brand';
import {CloseToggleButton} from './nav/CloseToggleButton';
import {Flag} from './nav/Flag';


let container: Element;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

it('renders  brand logo', () => {
  act(() => {
    render(<Brand  />, container);
  });
  expect(
    container.querySelector("[data-testid='brand']")
  ).toBeTruthy();
});


it('test a button', ()=>{
  const onchange = jest.fn();
  
  act(() => {
    render(<CloseToggleButton ClickHandler ={onchange}  />, container);
  });
  const button = document.querySelector("[data-testid=toggle]");
  expect(button).toBeTruthy();

});

it('renders a flag', () => {
  act(() => {
    render(<Flag  />, container);
  });
  expect(
    container.querySelector("[data-testid='flag']")
  ).toBeTruthy();
});
