import './style.css';

const form = document.querySelector<HTMLFormElement>(
   '#cable-info-form',
)!;

form.addEventListener('submit', e => onFormSubmit(e), {
   once: true,
});

function onFormSubmit(event: Event): void {
   event.preventDefault();
   const mainContent =
      document.querySelector<HTMLDivElement>(
         '#main-content',
      )!;
   mainContent.innerHTML = `
      <div style="font-size:5rem">Just stick a 10mm² in.</div>
   `;
}
