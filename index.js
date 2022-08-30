const theRunner = document.getElementById('activator');
const toustify = document.getElementById('bang');
const body = document.getElementById('my-body');
toustify.style.display = 'none';
const createNewModal = () => {
   toustify.style.display = 'flex';
   body.style.backgroundColor = "rgb(196, 196, 196)" ;
   toustify.children[1].addEventListener('click', () => {
   toustify.style.display = 'none'; 
   body.style.backgroundColor = "transparent" ;}); 
   }
   body.addEventListener('click', (e) => {e.preventDefault;
     if (e.target != toustify && e.target != theRunner) {
        toustify.style.display = 'none';
        body.style.backgroundColor = "transparent" ;
     }
});
theRunner.addEventListener('click', createNewModal);