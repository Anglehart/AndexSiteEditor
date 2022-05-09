import getProductsList from '@/infrastructure/get-products-list.js';
import SocketioService from '@/services/socketio.service.js';
import { mapGetters } from 'vuex';

export default {
    name: 'MainPage',
    props: {
        msg: String
    },
    data() {
        return {
            productsList: [],
            offset: 0,
            limit: 10,
        }
    },
    computed: {
        ...mapGetters([
            'getImagesStatus',
        ])
    },
    methods: {
        onShowMore(){
            this.limit+=10;
            getProductsList(this.offset, this.limit).then(res => {
                this.productsList = res;
            })
        },
        toggleImages() {
            SocketioService.toggleImages(!this.getImagesStatus);
        }
    },
    created() {
        SocketioService.setupSocketConnection();
    },
    beforeUnmount() {
        SocketioService.disconnect();
    },
    mounted() {
        getProductsList(this.offset, this.limit).then(res => {
            this.productsList = res;
        })
    },
    watch: {

    }
}
