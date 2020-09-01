import http from '../util/httpRequestService'

class EntityService {


    routeEntityApi;
    constructor(routeEntityApi) {
        this.routeEntityApi = routeEntityApi;
    }

    async getAll() {
        return await http.get(this.routeEntityApi);
    }

    async getById(id) {
        return await http.get(this.routeEntityApi + '/' + id);
    }

    async insertOrUpdate(obj) {
        return await obj.id ? http.put(this.routeEntityApi, obj) : http.post(this.routeEntityApi, obj);
    }

    async delete(id) {
        return await http.delete(this.routeEntityApi, id)
    }

}


export default EntityService