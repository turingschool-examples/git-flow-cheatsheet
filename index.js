var main = document.querySelector('main');

function toggleCollapsed (e) {
  var section = e.path.find( element => element.tagName==="SECTION" );
  if (section) {
    section.classList.replace('collapsed', 'expanded') || section.classList.replace('expanded', 'collapsed');
  }
};

main.addEventListener('click', toggleCollapsed);
