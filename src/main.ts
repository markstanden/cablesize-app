import "./style.css";

const form = document.querySelector<HTMLFormElement>(
   "#cable-info-form",
)!;

form.addEventListener("submit", e => onFormSubmit(e), {
   once: false,
});

async function onFormSubmit(
   event: SubmitEvent,
): Promise<void> {
   event.preventDefault();
   const mainContent =
      document.querySelector<HTMLDivElement>(
         "#main-content",
      )!;

   event;
   var params = { lat: 35.696233, long: 139.570431 }; // or:

   url.search = new URLSearchParams(params).toString();

   fetch(url);

   const response = await fetch(
      "/.netlify/functions/calc",
   ).then(res => res.json());

   mainContent.innerHTML = response.message;
}
