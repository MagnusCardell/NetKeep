class NetKeep {
    constructor() {
        this.peerConnection = new RTCPeerConnection();
    }

    connect() {
        // TODO: Implement connection logic
    }

    storeData(key, data) {
        try {
            sessionStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to sessionStorage', e);
        }
    }

    loadData(key) {
        try {
            return JSON.stringify(sessionStorage.getItem(key));
        } catch (e) {
            console.error('Error loading from sessionStorage', e);
        }
    }
}

module.exports = NetKeep;