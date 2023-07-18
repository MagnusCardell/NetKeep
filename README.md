# NetKeep

NetKeep is a decentralized, p2p storage system that allows for secure collaboration and data exchange directly between browsers. Using sessionStorage (and local file storage) and encryption, NetKeep ensures data remains secure, private, and owned by you.

# Project Goals
The primary goals of NetKeep are:

- Decentralized Storage: Use the sessionStorage API to store data locally in the browser, providing a fast and user-friendly storage solution that maintains user privacy.

- Peer-to-Peer Collaboration: Implement a P2P network that allows users to exchange and synchronize data directly, without the need for a centralized server.

- Secure Data Exchange: All data sent between peers is encrypted to ensure privacy and data integrity.

- Fallback Strategy: When the sessionStorage limit is about to be exceeded, prompt the user to save the data as a file, allowing for larger amounts of data to be stored and shared.

- User-Friendly Interface: Provide an intuitive and easy-to-use interface for users to interact with the storage service and collaborate with others.
