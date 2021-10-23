import "./style.css";

const form = document.querySelector<HTMLFormElement>(
   "#cable-info-form",
)!;

form.addEventListener("submit", e => onFormSubmit(e), {
   once: false,
});

async function onFormSubmit(event: Event): Promise<void> {
   event.preventDefault();
   const mainContent =
      document.querySelector<HTMLDivElement>(
         "#main-content",
      )!;

   const response = await fetch(
      "./netlify/functions/hello",
   ).then(async res => {
      console.log(res.body);

      console.log(await res.json());
   });

   mainContent.innerHTML = `
      <div style="font-size:5rem">${response}</div>
   `;
}
