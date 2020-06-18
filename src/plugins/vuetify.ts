import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi",
    },
    theme: {
        themes: {
            light: {
                primary: "#2F4475",
                secondary: "#FFD141",
                accent: "#FF5C08",
                error: "#F52200",
                info: "#17A9E1",
                success: "#A9CC66",
                warning: "#F2D22E"
            }
        }
    }
});
