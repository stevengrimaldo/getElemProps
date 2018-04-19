const sections = document.querySelectorAll('section');

const getElemProps = el => {
  // Height, Left, Top, Width of element
  const { height, left, top, width } = el.getBoundingClientRect();

  // Offset from bottom of window
  const bottom = window.innerHeight - (top + height);

  // Offset from right of window
  const right = window.innerWidth - (left + width);

  // Return dimensions and positions
  return {
    bottom,
    height,
    left,
    right,
    top,
    width
  };
};

const getProps = () => {
  for (const section of sections) {
    const props = getElemProps(section);

    console.log(props);
  }
};

window.addEventListener('load', getProps, false);
window.addEventListener('resize', getProps, false);
