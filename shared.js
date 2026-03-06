// shared.js — Common JS for all pages of winsemius.eu

(function () {
  'use strict';

  // ──────────────────────────────────────────────
  // Dark mode — system preference
  // ──────────────────────────────────────────────
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    document.body.classList.toggle('dark', e.matches);
  });

  // ──────────────────────────────────────────────
  // Mobile menu toggle
  // ──────────────────────────────────────────────
  window.toggleMenu = function () {
    var navLinks = document.getElementById('navLinks');
    var hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  };

  window.closeMenu = function () {
    var navLinks = document.getElementById('navLinks');
    var hamburger = document.querySelector('.hamburger');
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  };

  // ──────────────────────────────────────────────
  // Smooth scrolling for same-page anchor links
  // ──────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    });
  });

  // ──────────────────────────────────────────────
  // Back-to-top button
  // ──────────────────────────────────────────────
  var backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ──────────────────────────────────────────────
  // Active navigation — page-based detection
  // ──────────────────────────────────────────────
  var currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (link) {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });

  // ──────────────────────────────────────────────
  // Legacy hash redirects (only on index.html)
  // ──────────────────────────────────────────────
  if (currentPage === 'index.html' || currentPage === '') {
    var hashRedirects = {
      '#funding': 'funding.html',
      '#services': 'services.html',

      '#insights': 'insights.html',
      '#resources': 'insights.html'
    };
    var hash = location.hash;
    if (hash && hashRedirects[hash]) {
      location.replace(hashRedirects[hash]);
    }
  }

  // ──────────────────────────────────────────────
  // 3D Flip card — touch support
  // ──────────────────────────────────────────────
  var isTouchDevice = window.matchMedia('(hover: none)').matches;

  if (isTouchDevice) {
    document.querySelectorAll('.flip-card').forEach(function (card) {
      card.addEventListener('click', function () {
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
      });
    });
  }

  // ──────────────────────────────────────────────
  // Flip card auto-height — measure both faces
  // ──────────────────────────────────────────────
  function setFlipCardHeights() {
    document.querySelectorAll('.flip-card').forEach(function (card) {
      var inner = card.querySelector('.flip-card-inner');
      var front = card.querySelector('.flip-card-front');
      var back = card.querySelector('.flip-card-back');
      if (!inner || !front || !back) return;

      // Reset height to measure natural sizes
      inner.style.minHeight = '';
      var frontH = front.scrollHeight;
      var backH = back.scrollHeight;
      var maxH = Math.max(frontH, backH);
      inner.style.minHeight = maxH + 'px';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setFlipCardHeights);
  } else {
    setFlipCardHeights();
  }
  window.addEventListener('resize', setFlipCardHeights);

  // ──────────────────────────────────────────────
  // Console Easter Egg
  // ──────────────────────────────────────────────
  console.log(
    '░░░███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n' +
    '░█████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n' +
    '░░░░█████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n' +
    '██░██░░░░░░████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n' +
    '███░░░░░░░░░░░███░░░░░░░░░░░░░░░░░░░░░░░░░░░\n' +
    '███░░░░░░░░░░░░████░░░░░░░░░░░░░░░░░░░░░░░░░\n' +
    '██░░░░░░░░░░░░░░█████░░░░░░████████░░░░░░░░░\n' +
    '░█░░░░░░░░░░░░░░░██████████████████████░░░░░\n' +
    '░█░░░░░░░░░░░░░░░██████████░░░░░░░░███████░░\n' +
    '░█░░░░░░░░░░░░░░░█████████░░░░░░░░░░░███░░█░\n' +
    '░█░░░░░░░░░░░░░░░████████░░░░░░░░░░░░░░██░░█\n' +
    '░█░░░░░░░░░░░░░░░████████░░░░░░░░░░░░░░██░█░\n' +
    '░█░░░░░░░░░░░░░░░██░░░░██░░░░░░░░░░░░░░████░\n' +
    '░░█░░░░░░░░░░░░░██░░░░░░░░░░░░░░░░░░░░░████░\n' +
    '░░█░░░░░░░░░░░░░█░░░░░░░█░░░░░░░░░░░░░░███░░\n' +
    '░░░█░░░░░░░░░░░██░░░░░░░█░░░░░░░░░░░░░░███░░\n' +
    '░░░░█░░░░░░░░░░█░░░░░░░░█░░░░░░░░░░░░░░██░░░\n' +
    '░░░░░██░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░██░░░\n' +
    '░░░░░░░███████░░░░░░░░░░░█░░░░░░░░░░░░░█░░░░\n' +
    '░░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░░██░░░░\n' +
    '░░░░░░░░░░░░░░░░░░░░░░░░░░██░░░░░░░░░░█░░░░░\n' +
    '░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░░░░░░░█░░░░░░\n' +
    '░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░░░░█░░░░░░░\n' +
    '░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░░░░░░░░\n' +
    '\nWINSEMIUS GROUP - EU Defence Funding & Consortium Building\n' +
    'Contact: info@winsemius.eu\n' +
    'Developers welcome: Check our GitHub for opportunities'
  );

})();
