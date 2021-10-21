import { Page } from './Page';
import './style.css';
import header from './html/header.ts.html';
import cableInfoForm from './html/cable-info-form.ts.html';
import footer from './html/footer.ts.html';

const pageContents = new Page(cableInfoForm).render();

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
${header}
${pageContents}
${footer}
`;
