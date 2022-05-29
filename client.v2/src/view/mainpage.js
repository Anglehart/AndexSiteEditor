import getProductsList from '@/infrastructure/get-products-list.js';
import getParser from '@/infrastructure/product-price-parser.js';
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
            parserResult: [],
            urls: "https://spb.rusgeocom.ru/products/lazernaya-ruletka-rgk-d100\n" +
                "https://spb.rusgeocom.ru/products/lazernyj-dalnomer-rgk-dl50g\n" +
                "https://spb.rusgeocom.ru/products/lazernaya-ruletka-rgk-d30-new",
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
        },
        handleGetParser(){
            const arr = this.urls.split('\n');
            arr.forEach(el => {
                getParser(el).then(res => {
                    this.parserResult.push(Number(res.substring(0, res.indexOf("р")).replace(/\s/g, '')));
                })
            })
        }
    },
    created() {
        SocketioService.setupSocketConnection();
    },
    beforeUnmount() {
        SocketioService.disconnect();
    },
}
