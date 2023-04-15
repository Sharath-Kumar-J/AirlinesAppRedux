// import moxios from 'moxios';
// import { Saga } from '../component/Redux/Saga';
import axios from 'axios';

const res = "https://api.instantwebtools.net/v1/airlines";

describe('Test API', () => {
    it("ack", () => {
        const result = axios.get(res);
        console.log(result)
        expect(result).toBeDefined()
    })
})