// Phuket Hotel demo site: room filters and promo-code copy buttons
document.querySelectorAll('.filter').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var f = btn.dataset.filter;
    document.querySelectorAll('.filter').forEach(function (b) {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    document.querySelectorAll('.room').forEach(function (card) {
      var tags = card.dataset.tags.split(' ');
      card.hidden = !(f === 'all' || tags.indexOf(f) >= 0);
    });
  });
});

document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var label = btn.querySelector('span');
    var done = function () {
      label.textContent = 'Copied';
      setTimeout(function () { label.textContent = 'Copy'; }, 2000);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(btn.dataset.code).then(done, done);
    } else {
      done();
    }
  });
});
