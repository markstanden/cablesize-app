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

   /* Get the form data */
   const formElement =
      document.querySelector<HTMLFormElement>(
         "#cable-info-form",
      )!;

   const formDataAsRequestParams = new URLSearchParams(
      // as any required as URLSearchParams can't handle files, which may be in FormData
      new FormData(formElement) as any,
   );

   /* pass to the function */
   const response = await fetch(
      "/.netlify/functions/calc",
      {
         method: "POST",
         body: formDataAsRequestParams,
      },
   ).then(res => res.json());

   /* Display the response */
   mainContent.innerHTML = response.message;
}

/* Allowable volt drop
               BS7671 TABLE 4Ab – Voltage drop
                                    Lighting       Other uses
(i)   Low voltage installations
      supplied directly from           3 %            5 %
      a public low voltage
      distribution system

(ii)  Low voltage installation         6 %            8 %
      supplied from private
      LV supply (*)

*/
