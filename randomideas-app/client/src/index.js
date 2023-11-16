//import '@fortawesome/fontawesome-free/css/all.css';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import Modal from './components/Modal';
import './css/style.css';

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
