/** ========================== typing animatio======= */
var typed = new Typed(".typing",{
    strings:["Dev Fullstack MERN","IT Manager","DataBase Administrator","Project Manager",],
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

  /* Scroll */
    const ratio = 0.6;
    const activate = function (elem) {
    const id = elem.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)
    if (anchor === null) {
      return null
    }
      anchor.classList.add('active')
  }

  const remove = function (elem) {
    const id = elem.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)
    if (anchor === null) {
      return null
    }
      anchor.classList.remove('active')
  }

  /**
   * 
   * @param {IntersectionObserverEntry[]} entries 
   * @param {IntersectionObserver} observer 
   */
  const callback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        activate(entry.target)
      } else {
        remove(entry.target)
      }
    })
    
  }

  const spies = document.querySelectorAll('[data-spy]')

  if (spies.length > 0) {
    const y = Math.round(window.innerHeight * ratio)
    const observer = new IntersectionObserver(callback, {
      rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })
    spies.forEach(function (spy) {
      observer.observe(spy)
    })
  }