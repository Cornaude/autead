import React from 'react';

const ScrollComponent = () => {

  const scrollToView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <button onClick={() => scrollToView('section1')}>Go to Section 1</button>
      <button onClick={() => scrollToView('section2')}>Go to Section 2</button>

      <div id="section1" style={{ height: '500px', marginTop: '50px', border: '1px solid black' }}>
        Section 1
      </div>

      <div id="section2" style={{ height: '500px', marginTop: '50px', border: '1px solid black' }}>
        Section 2
      </div>

      <div style={{ height: '1000px' }}></div> {/* Spacer for scrolling */}
    </div>
  );
};

export default ScrollComponent;
