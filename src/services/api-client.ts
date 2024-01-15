
import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '94109855249541e2842f72fb88f36c09'
    }
});

export {CanceledError};

