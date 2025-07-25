
  if (window.location.hash) {
    history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
  }
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
