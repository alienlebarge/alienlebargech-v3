const grid = document.querySelector('.o-grid');
observeGrid(grid);

function observeGrid(gridNode) {
  // Feature detect ResizeObserver
  if ('ResizeObserver' in window) {
    // Get the min value from data-min="[min]"
    const min = gridNode.dataset.min;
    // Create a proxy element to measure and convert
    // the `min` value (which might be em, rem, etc) to `px`
    const test = document.createElement('div');
    test.style.width = min;
    gridNode.append(test);
    const minToPixels = test.offsetWidth;
    test.remove();

    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        // Get the element's current dimensions
        const cr = entry.contentRect;
        // `true` if the container is wider than the minimum
        const isWide = cr.width > minToPixels;
        // Toggle the class conditionally
        gridNode.classList.toggle('aboveMin', isWide);
      }
    });

    ro.observe(gridNode);
  }
}
