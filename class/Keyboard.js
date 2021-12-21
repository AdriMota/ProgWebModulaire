export default class Keyboard {
    constructor(useCode = true) {
        window.addEventListener('keydown', evt => this.#onKeyDown(evt));
        window.addEventListener('keyup', evt => this.#onKeyUp(evt));
        
        this.keysPressed = new Set();
        this.actionsOnKeyPressed = new Map();

        this.codeOrKey = useCode ? 'code' : 'key';
    }

    // # -> méthode privée
    #onKeyDown(evt) {
        const key = evt[this.codeOrKey];
        this.keysPressed.add(key);

        if (this.actionsOnKeyPressed.has(key)) {
            let callbacks = this.actionsOnKeyPressed.get(key);
            callbacks.forEach(callback => callback());
        }
    }

    onKeyDown(key, callback) {
        let actions;

        if (this.actionsOnKeyPressed.has(key)) {
            actions = this.actionsOnKeyPressed.get(key);
        } else {
            actions = [];
        }

        actions.push(callback);

        this.actionsOnKeyPressed.set(key, actions);
    }

    // # -> méthode privée
    #onKeyUp(evt) {
        const key = evt[this.codeOrKey];
        this.keysPressed.delete(key);
    }

    isKeyDown(key) {
        return this.keysPressed.has(key);
    }

    isKeysDown(...keys) {
        return keys.every(key => this.isKeyDown(key));
    }    
      
}