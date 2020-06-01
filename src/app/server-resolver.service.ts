import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { ServersService } from './servers/servers.service';

interface Server {
    id: number;
    name: string;
    status: string;
}

export class ServerResolver implements Resolve<Server> {

    constructor(private sS: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | Server {
        return this.sS.getServer(+route.params['id']);
    }
}