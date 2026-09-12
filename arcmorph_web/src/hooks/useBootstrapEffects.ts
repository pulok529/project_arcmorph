import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as bootstrap from 'bootstrap';

const isValidSelector = (sel: string | null): boolean => {
  if (!sel || !sel.startsWith('#') || sel === '#' || sel === '#!' || sel.length < 2) return false;
  return /^[#][a-zA-Z0-9_\-:]+$/.test(sel);
};

export const useBootstrapEffects = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Initialize Tooltips
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltips = tooltipTriggerList.map((el) => {
      try {
        return new bootstrap.Tooltip(el);
      } catch (e) {
        return null;
      }
    });

    // 2. Initialize Popovers
    const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popovers = popoverTriggerList.map((el) => {
      try {
        return new bootstrap.Popover(el);
      } catch (e) {
        return null;
      }
    });

    // 3. Global Click Delegate for Modals, Dropdowns, Tabs, Accordions, Toasts, Wizards, Card Actions
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Handle data-action="card-toggle" / "card-collapse" with Smooth CSS Height Animation
      const cardToggleBtn = target.closest('[data-action="card-toggle"], [data-action="card-collapse"]') as HTMLElement;
      if (cardToggleBtn) {
        e.preventDefault();
        e.stopPropagation();
        const card = cardToggleBtn.closest('.card') as HTMLElement;
        if (card) {
          const cardBody = card.querySelector('.card-body') as HTMLElement;
          const icon = cardToggleBtn.querySelector('i');
          const isCollapsed = card.classList.contains('card-collapsed');

          if (isCollapsed) {
            // Expand with smooth CSS transition
            card.classList.remove('card-collapsed');
            if (icon) {
              icon.classList.remove('ti-chevron-down');
              icon.classList.add('ti-chevron-up');
            }
            if (cardBody) {
              cardBody.style.display = 'block';
              cardBody.style.overflow = 'hidden';
              cardBody.style.height = '0px';
              cardBody.style.paddingTop = '0px';
              cardBody.style.paddingBottom = '0px';
              cardBody.style.transition = 'height 0.35s ease, padding 0.35s ease, margin 0.35s ease';

              const fullHeight = cardBody.scrollHeight;
              // Trigger reflow
              void cardBody.offsetHeight;

              cardBody.style.height = `${fullHeight}px`;
              cardBody.style.paddingTop = '';
              cardBody.style.paddingBottom = '';

              setTimeout(() => {
                cardBody.style.height = '';
                cardBody.style.overflow = '';
                cardBody.style.transition = '';
              }, 350);
            }
          } else {
            // Collapse with smooth CSS transition
            card.classList.add('card-collapsed');
            if (icon) {
              icon.classList.remove('ti-chevron-up');
              icon.classList.add('ti-chevron-down');
            }
            if (cardBody) {
              const fullHeight = cardBody.offsetHeight;
              cardBody.style.height = `${fullHeight}px`;
              cardBody.style.overflow = 'hidden';
              cardBody.style.transition = 'height 0.35s ease, padding 0.35s ease, margin 0.35s ease';

              // Trigger reflow
              void cardBody.offsetHeight;

              cardBody.style.height = '0px';
              cardBody.style.paddingTop = '0px';
              cardBody.style.paddingBottom = '0px';

              setTimeout(() => {
                cardBody.style.display = 'none';
                cardBody.style.height = '';
                cardBody.style.paddingTop = '';
                cardBody.style.paddingBottom = '';
                cardBody.style.overflow = '';
                cardBody.style.transition = '';
              }, 350);
            }
          }
        }
        return;
      }

      // Handle data-action="card-reload" / "card-refresh"
      const cardReloadBtn = target.closest('[data-action="card-reload"], [data-action="card-refresh"]') as HTMLElement;
      if (cardReloadBtn) {
        e.preventDefault();
        e.stopPropagation();
        const card = cardReloadBtn.closest('.card') as HTMLElement;
        if (card) {
          const existingLoader = card.querySelector('.card-loader-overlay');
          if (!existingLoader) {
            card.style.position = 'relative';
            const loader = document.createElement('div');
            loader.className = 'card-loader-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75 rounded';
            loader.style.zIndex = '10';
            loader.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';
            card.appendChild(loader);
            setTimeout(() => {
              try {
                if (loader && loader.parentElement) {
                  loader.remove();
                }
              } catch (e) {}
            }, 1000);
          }
        }
        return;
      }

      // Handle data-action="card-remove" / "card-close"
      const cardRemoveBtn = target.closest('[data-action="card-remove"], [data-action="card-close"]') as HTMLElement;
      if (cardRemoveBtn) {
        e.preventDefault();
        e.stopPropagation();
        const card = cardRemoveBtn.closest('.card') as HTMLElement;
        if (card) {
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            try {
              if (card && card.parentElement) {
                card.remove();
              }
            } catch (e) {}
          }, 300);
        }
        return;
      }

      // Handle data-wizard-next
      const wizardNextBtn = target.closest('[data-wizard-next], [data-next], .wizard-next') as HTMLElement;
      if (wizardNextBtn) {
        e.preventDefault();
        const wizardContainer = wizardNextBtn.closest('.ins-wizard, .card-body, .card');
        if (wizardContainer) {
          const navLinks = Array.from(wizardContainer.querySelectorAll('.nav-tabs .nav-link, [data-bs-toggle="tab"]')) as HTMLElement[];
          const activeIndex = navLinks.findIndex((l) => l.classList.contains('active'));
          if (activeIndex >= 0 && activeIndex < navLinks.length - 1) {
            const nextLink = navLinks[activeIndex + 1];
            bootstrap.Tab.getOrCreateInstance(nextLink).show();
          }
        }
        return;
      }

      // Handle data-wizard-prev
      const wizardPrevBtn = target.closest('[data-wizard-prev], [data-prev], .wizard-prev') as HTMLElement;
      if (wizardPrevBtn) {
        e.preventDefault();
        const wizardContainer = wizardPrevBtn.closest('.ins-wizard, .card-body, .card');
        if (wizardContainer) {
          const navLinks = Array.from(wizardContainer.querySelectorAll('.nav-tabs .nav-link, [data-bs-toggle="tab"]')) as HTMLElement[];
          const activeIndex = navLinks.findIndex((l) => l.classList.contains('active'));
          if (activeIndex > 0) {
            const prevLink = navLinks[activeIndex - 1];
            bootstrap.Tab.getOrCreateInstance(prevLink).show();
          }
        }
        return;
      }

      // Handle data-bs-toggle="modal"
      const modalBtn = target.closest('[data-bs-toggle="modal"]') as HTMLElement;
      if (modalBtn) {
        const targetSelector = modalBtn.getAttribute('data-bs-target') || modalBtn.getAttribute('href');
        if (isValidSelector(targetSelector)) {
          const modalEl = document.querySelector(targetSelector!);
          if (modalEl) {
            e.preventDefault();
            const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
            modalInstance.show();
          }
        }
        return;
      }

      // Handle data-bs-dismiss="modal"
      const dismissModalBtn = target.closest('[data-bs-dismiss="modal"]') as HTMLElement;
      if (dismissModalBtn) {
        const modalEl = dismissModalBtn.closest('.modal');
        if (modalEl) {
          e.preventDefault();
          const modalInstance = bootstrap.Modal.getInstance(modalEl);
          if (modalInstance) {
            modalInstance.hide();
          } else {
            modalEl.classList.remove('show');
            modalEl.setAttribute('style', 'display: none;');
            document.querySelectorAll('.modal-backdrop').forEach((b) => b?.remove());
            document.body.classList.remove('modal-open');
          }
        }
        return;
      }

      // Handle data-bs-dismiss="alert" and .btn-close inside .alert
      const dismissAlertBtn = target.closest('[data-bs-dismiss="alert"], .alert .btn-close') as HTMLElement;
      if (dismissAlertBtn) {
        const alertEl = dismissAlertBtn.closest('.alert') as HTMLElement;
        if (alertEl) {
          e.preventDefault();
          e.stopPropagation();
          alertEl.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          alertEl.style.opacity = '0';
          alertEl.style.transform = 'scale(0.95)';
          setTimeout(() => {
            try {
              if (alertEl && alertEl.parentElement) {
                alertEl.remove();
              }
            } catch (e) {}
          }, 250);
        }
        return;
      }

      // Handle data-bs-toggle="tab" / .nav-link
      const tabBtn = target.closest('[data-bs-toggle="tab"], .nav-tabs .nav-link') as HTMLElement;
      if (tabBtn) {
        const targetSelector = tabBtn.getAttribute('data-bs-target') || tabBtn.getAttribute('href');
        if (isValidSelector(targetSelector)) {
          e.preventDefault();
          const tabContainer = tabBtn.closest('.nav-tabs, ul, nav');
          if (tabContainer) {
            tabContainer.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
          }
          tabBtn.classList.add('active');

          const tabPane = document.querySelector(targetSelector!);
          if (tabPane) {
            const parentContent = tabPane.closest('.tab-content');
            if (parentContent) {
              parentContent.querySelectorAll('.tab-pane').forEach((p) => p.classList.remove('active', 'show'));
            }
            tabPane.classList.add('active', 'show');
          }
        }
        return;
      }

      // Handle data-bs-toggle="collapse" / .accordion-button using Native Bootstrap.Collapse
      const collapseBtn = target.closest('[data-bs-toggle="collapse"], .accordion-button') as HTMLElement;
      if (collapseBtn) {
        const targetSelector = collapseBtn.getAttribute('data-bs-target') || collapseBtn.getAttribute('href');
        if (isValidSelector(targetSelector)) {
          const collapseEl = document.querySelector(targetSelector!) as HTMLElement;
          if (collapseEl) {
            e.preventDefault();
            e.stopPropagation();

            const collapseInstance = bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false });
            collapseInstance.toggle();
          }
        }
        return;
      }

      // Handle data-bs-toggle="dropdown" and .dropdown-toggle with robust universal toggler
      const dropdownBtn = target.closest('[data-bs-toggle="dropdown"], .dropdown-toggle') as HTMLElement;
      if (dropdownBtn) {
        if ((e as any).__ddHandled) return;
        (e as any).__ddHandled = true;
        e.preventDefault();
        e.stopPropagation();
        
        const parentDropdown = dropdownBtn.closest('.dropdown, .btn-group, .dropup, .dropend, .dropstart') as HTMLElement;
        const dropdownMenu = parentDropdown ? parentDropdown.querySelector('.dropdown-menu') as HTMLElement : (dropdownBtn.nextElementSibling as HTMLElement);

        if (dropdownMenu) {
          const isOpen = dropdownMenu.classList.contains('show');
          
          // Close other open dropdowns
          document.querySelectorAll('.dropdown-menu.show').forEach((m) => {
            if (m !== dropdownMenu) {
              m.classList.remove('show');
              const p = m.closest('.dropdown, .btn-group');
              p?.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
            }
          });

          if (isOpen) {
            dropdownMenu.classList.remove('show');
            dropdownBtn.setAttribute('aria-expanded', 'false');
          } else {
            dropdownMenu.classList.add('show');
            dropdownBtn.setAttribute('aria-expanded', 'true');
          }
        }
        return;
      }



      // Close open dropdowns when clicking anywhere outside
      if (!target.closest('.dropdown-menu') && !target.closest('[data-bs-toggle="dropdown"], .dropdown-toggle, .topbar-item, .topbar-link')) {
        document.querySelectorAll('.dropdown-menu.show').forEach((m) => {
          m.classList.remove('show');
          const p = m.closest('.dropdown, .btn-group');
          p?.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
        });
      }

      // Handle data-bs-dismiss="toast"
      const dismissToastBtn = target.closest('[data-bs-dismiss="toast"]') as HTMLElement;
      if (dismissToastBtn) {
        const toastEl = dismissToastBtn.closest('.toast');
        if (toastEl) {
          e.preventDefault();
          const toastInstance = bootstrap.Toast.getOrCreateInstance(toastEl);
          toastInstance.hide();
        }
        return;
      }
    };

    document.addEventListener('click', handleDocumentClick);

    // Clean up on route unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      tooltips.forEach((t) => t?.dispose());
      popovers.forEach((p) => p?.dispose());
      document.querySelectorAll('.modal-backdrop').forEach((b) => b?.remove());
      document.body.classList.remove('modal-open');
    };
  }, [location.pathname]);
};

