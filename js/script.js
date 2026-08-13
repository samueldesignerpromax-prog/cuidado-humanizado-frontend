/* ============================================
   JavaScript GLOBAL - CUIDADO HUMANIZADO BATISTA
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ===== MENU MOBILE =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      const icon = this.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = hamburger?.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      }
    });
  });

  // ===== BOTÃO VOLTAR AO TOPO =====
  const btnTopo = document.getElementById('btn-topo');
  if (btnTopo) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        btnTopo.classList.add('show');
      } else {
        btnTopo.classList.remove('show');
      }
    });
    btnTopo.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== ANIMAÇÕES DE SCROLL =====
  const animElements = document.querySelectorAll('.animate-on-scroll');
  if (animElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    animElements.forEach(el => observer.observe(el));
  }

  // ===== HEADER COM SOMBRA AO SCROLL =====
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const pergunta = item.querySelector('.faq-pergunta');
    if (pergunta) {
      pergunta.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  console.log('✅ Cuidado Humanizado Batista - Site carregado.');
});
