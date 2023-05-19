import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('MyComponent', () => {
  let container: HTMLDivElement | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.useFakeTimers(); // Enable fake timers
  });

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
    jest.useRealTimers(); // Restore real timers
  });

  it('renders without crashing', () => {
    act(() => {
      render(<MyComponent />, container);
    });
    // Your assertions here
  });

  it('performs a delayed action', () => {
    act(() => {
      render(<MyComponent />, container);
    });

    act(() => {
      // Simulate a delay of 1000ms
      jest.advanceTimersByTime(1000);
    });

    // Your assertions here
  });
});

