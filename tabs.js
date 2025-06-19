    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.bottom-nav .nav-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.target;
          document.querySelector('.page.active')?.classList.remove('active');
          document.querySelector('.nav-btn.active')?.classList.remove('active');
          document.getElementById(target)?.classList.add('active');
          btn.classList.add('active');
        });
      });
    });