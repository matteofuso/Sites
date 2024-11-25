const glossario = [
  [
    {
      term: "Socket",
      definition:
        "Un socket è un punto di comunicazione tra due processi. In particolare, un socket è un file speciale che rappresenta un canale di comunicazione tra due processi. Un processo può scrivere dati su un socket o leggere dati da un socket. I socket possono essere utilizzati per comunicare tra processi su una singola macchina o tra processi su macchine diverse.",
      Link: "socket.html",
    },
    {
      term: "Server",
      definition:
        "Un server è un computer o un programma che fornisce servizi ad altri programmi o dispositivi, noti come client. I server possono fornire una vasta gamma di servizi, tra cui la condivisione di file, l'accesso a pagine Web, l'elaborazione di dati e altro ancora.",
      Link: "server.html",
    },
    {
      term: "Database",
      definition:
        "Un database è un sistema organizzato per la raccolta, la gestione e l'archiviazione dei dati. I database consentono di conservare informazioni in modo strutturato, facilitando l'accesso, la modifica e l'analisi dei dati stessi.",
      Link: "database.html",
    },
    {
      term: "API",
      definition:
        "Un API (Application Programming Interface) è un insieme di regole e definizioni che consente a diversi software di comunicare tra loro. Le API permettono di integrare funzionalità e servizi esterni nelle applicazioni.",
      Link: "api.html",
    },
  ],
  [
    {
      term: "Client",
      definition:
        "Un client è un computer o un programma che accede ai servizi forniti da un server. I client possono accedere ai servizi di un server tramite una rete o tramite un'interfaccia utente.",
      Link: "client.html",
    },
    {
      term: "Frontend",
      definition:
        "Il frontend si riferisce alla parte dell'applicazione con cui gli utenti interagiscono direttamente. Include elementi come layout, design, e interfacce utente sviluppate usando tecnologie come HTML, CSS e JavaScript.",
      Link: "frontend.html",
    },
    {
      term: "Backend",
      definition:
        "Il backend si riferisce alla parte dell'applicazione che gestisce la logica, il database e le operazioni lato server. È responsabile dell'elaborazione dei dati, della gestione delle richieste e della comunicazione con il frontend.",
      Link: "backend.html",
    },
    {
      term: "Framework",
      definition:
        "Un framework è un insieme di strumenti e librerie che forniscono una struttura di base per lo sviluppo di applicazioni. Facilita lo sviluppo standardizzando il codice e offrendo soluzioni predefinite per problemi comuni.",
      Link: "framework.html",
    },
  ],
];
const scrollspyTarget = document.getElementById("scrollspyTarget");
const scrollspy = document.querySelector("#scrollspy div");

glossario.forEach((group) => {
  const groupTitle = document.createElement("h2");
  groupTitle.textContent = group[0].term[0].toUpperCase();
  groupTitle.id = groupTitle.textContent;
  scrollspyTarget.appendChild(groupTitle);

  const spyTitle = document.createElement("a");
  spyTitle.href = `#${groupTitle.textContent}`;
  spyTitle.textContent = groupTitle.textContent;
  spyTitle.classList = "nav-link";

  const spyContainer = document.createElement("div");
  group.forEach((item) => {
    const glossaryContainer = document.createElement("div");
    const glossaryTitle = document.createElement("h5");
    const glossaryDefinition = document.createElement("p");
    glossaryContainer.id = `glossario-${item.term}`;
    glossaryTitle.innerHTML = `${item.term} <a href="${item.Link}"><i class="bi bi-link-45deg"></i></a>`;
    glossaryDefinition.textContent = item.definition;
    glossaryContainer.appendChild(glossaryTitle);
    glossaryContainer.appendChild(glossaryDefinition);
    scrollspyTarget.appendChild(glossaryContainer);
    
    const spyItem = document.createElement("a");
    spyItem.href = `#glossario-${item.term}`;
    spyItem.textContent = item.term;
    spyItem.classList = "nav-link ms-3 my-1";
    spyContainer.appendChild(spyItem);
  });
  scrollspy.appendChild(spyTitle);
  scrollspy.appendChild(spyContainer);
});
