export default class Infrastructure {
    static user = {
        refreshToken() {
            return import("@/infrastructure/user/refresh-token").then((module) => {
                return module.refreshToken(getMetaDataGrpc(), tokenObj.refreshToken);
            });
        },
    }
}
