const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// --CHECK-- TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.defferedPrompt = event;
    butInstall.style.visibility = 'visible';

});

// --CHECK-- TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPrompt = window.defferedPrompt;

    if(!eventPrompt){
        return;
    }
    eventPrompt.prompt();
    window.defferedPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// --CHECK-- TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt = null;
});
