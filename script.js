/* Code for hovering over nav tabs */
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const currentUrl = window.location.href;
  
    navLinks.forEach(link => {
      if (link.href === currentUrl) {
        link.setAttribute('aria-current', 'page');
        link.classList.add('bg-blue-700', 'text-white', 'md:bg-transparent', 'md:text-purple-700', 'dark:bg-blue-600', 'md:dark:bg-transparent', 'md:dark:text-blue-500');
      } else {
        link.removeAttribute('aria-current');
        link.classList.remove('bg-blue-700', 'text-white', 'md:bg-transparent', 'md:text-blue-700', 'dark:bg-blue-600', 'md:dark:bg-transparent', 'md:dark:text-blue-500');
      }
    });
  });
  