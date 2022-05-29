import { io } from 'socket.io-client';
import store from '@/store'

class SocketioService {
    socket;
    constructor() {}
    setupSocketConnection() {
        this.socket = io('http://localhost:3000');
        this.socket.on('toggle images response', (data) => {
            store.commit('setImagesStatus', {
                data
            });
        });
    }
    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
    toggleImages(data) {
        this.socket.emit('toggle images request', data);
    }
}

export default new SocketioService();
