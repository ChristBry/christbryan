/** ========================== typing animatio======= */
var typed = new Typed(".typing",{
    strings:["IT Manager","Information System manager","Network Administration","Business Intelligent","Project Manager","IT Aviation"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* Animation */
const ratio1 = .1
const ratio2 = .9
var options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio1,
  };

  var optionsProgress = {
    root: null,
    rootMargin: "0px",
    threshold: ratio2,
  };
  
  /*animation de la page */
  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio1) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
        }
    });
  }
  
  var observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
  });

  /* animation parcours */
  const handleIntersectCourse = function (entries, observerCourse) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio1) {
            entry.target.classList.add("revealCourse-visible")
            observerCourse.unobserve(entry.target)
        }
    });
  }

  var observerCourse = new IntersectionObserver(handleIntersectCourse, options);
    observerCourse.observe(document.querySelector('.revealCourse'))

  /* animation services */
  const handleIntersectService = function (entries, observerService) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio1) {
            entry.target.classList.add("revealService-visible")
            observerService.unobserve(entry.target)
        }
    });
  }

  var observerService = new IntersectionObserver(handleIntersectService, options);
    document.querySelectorAll('.revealService').forEach(function (s) {
      observerService.observe(s)
    })

  /*animation pour le pourcentage */
  const handleProgress = function (entries, observerProgress) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio2) {
        entry.target.classList.add("revealProgress-visible")
        observerProgress.unobserve(entry.target)
      }
    });
  }

  var observerProgress = new IntersectionObserver(handleProgress, optionsProgress);
    document.querySelectorAll('.revealProgress').forEach(function (p) {
      observerProgress.observe(p)
    })

  /* fenetre modale services */
  let modal = null

  const openModal = function (e) {
    e.preventDefault()
    const target = document.querySelector('.modal')
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
  }

  const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = 'none'
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal = null
  }

  const stopPropagation = function (e) {
    e.stopPropagation()
  }

  document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
  })

  window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      closeModal(e)
    }
  })