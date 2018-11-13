import {SpectronMain2} from '../../js/test/SpectronMain2';
import {Messenger} from '../../js/electron/messenger/Messenger';
import {FilePaths} from '../../js/util/FilePaths';

SpectronMain2.create().run(async state => {

    state.window.loadURL(`file://${__dirname}/content.html`);

    const src = FilePaths.join(__dirname, "content.js");

    const message = {
        type: 'require',
        src
    };

    Messenger.postMessage({window: state.window, message});

});

