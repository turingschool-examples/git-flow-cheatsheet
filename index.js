var main = document.querySelector('main');
var toggler = document.querySelector('#expand-collapse-toggler');

function replaceClassName (section) {
    section.classList.replace('collapsed', 'expanded') || section.classList.replace('expanded', 'collapsed');
}

function toggleCollapsed (e) {
  var section = e.path.find( element => element.tagName==="SECTION" );
  if (section) {
    replaceClassName(section)
  }
};

function toggleAll (e) {
  var allSections = document.querySelectorAll('section');
  var toggleStatus = document.querySelector('#toggle-status');
  allSections.forEach(section => replaceClassName(section));
  if (e.target.checked) {
    toggleStatus.innerText = "Collapse"
  } else {
    toggleStatus.innerText = "Expand"
  }
};


toggler.addEventListener('change', toggleAll);

main.addEventListener('click', toggleCollapsed);
