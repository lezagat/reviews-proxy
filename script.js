import { check } from "k6";
import http from "k6/http";


export  let options = {
  vus:225,        //virtual users
  rps:225,       //request per second
  duration:"3m"    //duration of the test
}

export default function() {
  var id = Math.ceil(Math.random() * 10000000);
    let res = http.get(`http://54.153.13.94:4000/api/restaurants/${id}/reviews`); //send get request to proxy server 
    check(res, {
        "is status 200": (r) => r.status === 200,
        "transaction time ok": (r) => r.timings.duration < 2000,
    });
};

//original module server must be opened as well as the proxy server