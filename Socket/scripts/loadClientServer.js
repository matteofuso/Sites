const clientServerContent = {
  title: "L’architettura Client - Server",
  sections: [
    {
      title: "Come funziona l’architettura Client-Server?",
      description: `L’architettura <strong>Client Server</strong> è uno dei modelli principali utilizzato dalla maggior parte dei servizi
                    internet in circolazione.
                    Questo prevede l’utilizzo di due moduli, un Client ed un Server.
                    Il ruolo principale del client è quello di inviare richieste al server per accedere ad un servizio.
                    Quest’ultimo procederà alla <strong>elaborazione</strong> della richiesta per poi fornire risorse o servizi.
                    Dal punto di vista logico, entrambi gli attori sono degli applicativi che si mettono in
                    comunicazione
                    tramite una <a href=socket.html">socket</a>, in particolare il server utilizza la primitiva di listen per aspettare la
                    connessione del client che invierà poi una serie di richieste da rispondere.
                    Un'alternativa all’architettura client-server è quella <a href="glossario.html#Peer-To-Peer">peer-to-peer</a>, dove ogni nodo funge
                    contemporaneamente sia da client che da server.`,
      image: "images/client-server.png",
    },
    {
      title: "Perché è necessaria la divisione dei ruoli?",
      description: `L’architettura <strong>Client Server</strong> è uno dei modelli principali utilizzato dalla maggior parte dei servizi
                    internet in circolazione.
                    Questo prevede l’utilizzo di due moduli, un Client ed un Server.
                    Il ruolo principale del client è quello di inviare richieste al server per accedere ad un servizio.
                    Quest’ultimo procederà alla <strong>elaborazione</strong> della richiesta per poi fornire risorse o servizi.
                    Dal punto di vista logico, entrambi gli attori sono degli applicativi che si mettono in
                    comunicazione
                    tramite una <a href=socket.html">socket</a>, in particolare il server utilizza la primitiva di listen per aspettare la
                    connessione del client che invierà poi una serie di richieste da rispondere.
                    Un'alternativa all’architettura client-server è quella <a href="glossario.html#Peer-To-Peer">peer-to-peer</a>, dove ogni nodo funge
                    contemporaneamente sia da client che da server.`,
    },
  ],
  advantages: {
    title: "I vantaggi dell’architettura Client-Server",
    description:
      "I vantaggi dell’utilizzo di questa architettura sono notevoli, vediamone alcuni:",
    list: [
      {
        title: "Semplicità di manutenzione",
        description: `Dato che le informazioni di un applicativo sono contenute in un <strong>numero
                            ridotto</strong> di server, è necessario modificare le informazioni qui per aggiornare i dati in
                            migliaia di
                            client.`,
      },
      {
        title: "Scalabilità",
        description: `Man mano che il numero di <strong>client cresce</strong>, è sufficiente aumentare la capacità dei
                            server, applicando quello che viene definito <a href="glossario.html#Load-Balancing">load balancing</a>, permettendo di crescere senza
                            compromettere le prestazioni.`,
      },
      {
        title: "Centralizzazione dei dati",
        description: `Centralizzare i dati permette di <strong>facilitare la gestione</strong> di essi,
                            eliminando la possibilità di avere <strong>duplicati</strong> in posizioni diverse, con anche informazioni
                            differenti. Questo permette inoltre di aggiornare un dato in un unico punto e renderlo
                            immediatamente disponibile a tutti i client.`,
      },
      {
        title: "Sicurezza migliorata",
        description: `Non distribuendo tutti i dati a tutti i client, solo le informazioni
                            necessarie al funzionamento del client sono condivise, permettendo di aumentare la sicurezza
                            dei
                            dati immagazzinati nel server. L'accesso dei dati può essere protetto da accessi non
                            autorizzati e
                            <a href="glossario.html#Crittografare">crittografato</a>.`,
      },
    ],
    image: "images/server-room.jpg",
  },
};