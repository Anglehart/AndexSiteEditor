import getProductsList from '@/infrastructure/get-products-list.js';

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
            isImagesShow: false,
        }
    },
    methods: {
        onShowMore(){
            this.limit+=10;
            getProductsList(this.offset, this.limit).then(res => {
                this.productsList = res;
            })
        }
    },
    mounted() {
        getProductsList(this.offset, this.limit).then(res => {
            this.productsList = res;
        })
    }
}
