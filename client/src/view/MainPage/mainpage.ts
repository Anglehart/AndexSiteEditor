import getProductsList from '@/infrastructure/get-products-list';
import getParser from '@/infrastructure/product-price-parser';
//import SocketioService from '@/services/socketio.service';
import {mapActions, mapGetters, mapMutations} from 'vuex';
import CardPage from '@/view/CardPage/CardPage.vue';

export default {
    name: 'MainPage',
    components: {
        CardPage,
    },
    props: {
    },
    data() {
        return {
            productsList: [] as Array<any>,
            offset: 0 as number,
            limit: 10 as number,
            parserResult: [] as Array<any>,
            currentCard: {} as object,
            isCardShow: false as boolean,
            urls: "https://spb.rusgeocom.ru/products/lazernaya-ruletka-rgk-d100\n" +
                "https://spb.rusgeocom.ru/products/lazernyj-dalnomer-rgk-dl50g\n" +
                "https://spb.rusgeocom.ru/products/lazernaya-ruletka-rgk-d30-new",
        }
    },
    computed: {
        ...mapGetters([
            'getImagesStatus',
        ]),
        ...mapActions([
            'changeImageStatus',
        ])
    },
    methods: {
        onShowMore(){
            this.limit+=10;
            getProductsList(this.offset, this.limit).then(res => {
                this.productsList = res;
            })
        },
        // toggleImages() {
        // //     SocketioService.toggleImages(!this.getImagesStatus);
        //     this.changeImageStatus;
        // },
        handleGetParser(){
            const arr = this.urls.split('\n');
            arr.forEach(el => {
                getParser(el).then(res => {
                    this.parserResult.push(Number(res.substring(0, res.indexOf("р")).replace(/\s/g, '')));
                })
            })
        },
        showCardHandler(item) {
            this.currentCard = item;
            this.isCardShow = true;
            document.querySelector('body').style.overflowY = 'hidden';
        },
        returnHandler() {
            this.isCardShow = false;
            document.querySelector('body').style.overflowY = 'auto';
        }
    },
    created() {
        this.onShowMore()
    },
    beforeUnmount() {
        //SocketioService.disconnect();
    },
}
