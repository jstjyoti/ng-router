
export class AuthService {
    // server and login logout etc connection with backend
    // Simulation

    loggedIn = false;

    isAuthenticated() {
        const promise = new  Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        });
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}

