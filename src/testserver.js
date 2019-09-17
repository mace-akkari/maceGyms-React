const http = require('http');
const PORT = 8080;

const classes = [
    {
        startTime: 7,
        day: 1,
        description: "Yoga",
        endTime: 8,
        instructor: "Maja"
        
    },
    {
        startTime: 7,
        day: 0,
        description: "Yoga",
        endTime: 8,
        instructor: "Maja"

    },
    {
        startTime: 9,
        day: 4,
        description: "Yoga",
        endTime: 11,
        instructor: "Maja"
    },
    {
        startTime: 7,
        day: 3,
        description: "Boxing",
        endTime: 8,
        instructor: "Mace"
    },
    {
        startTime: 12,
        day: 6,
        description: "Yogalaties",
        endTime: 14,
        instructor: "Pat"
    },
    {
        startTime: 8,
        day: 2,
        description: "Spin",
        endTime: 8,
        instructor: "Bob",
        registered: [
            "Sally",
            "Jim"
        ],
        limit: 10

    },
    {
        startTime: 10,
        day: 5,
        description: "Zumba",
        endTime: 11.5,
        instructor: "Afreido"

    },
    {
        startTime: 13,
        day: 6,
        description: "Yoga",
        endTime: 14,
        instructor: "Maja"

    },
];

const createAppointment = (_, res) => {
    const appointment = {
        startTime: 17,
        day: 1,
        description: "Running",
        endTime: 18,
        instructor: "Maja"

    }
    classes.push(appointment);
    res.statusCode = 204;
    res.end();
}

const route = (url, method) => `${url}-${method}`;

const JSONResponse = (res) => (payload) => res.end(JSON.stringify(payload));

const decodeJSON = async (request) => {
    return new Promise((resolve, reject) => {
        const chunks = [];
        request.on('data', chunk => chunks.push(chunk));
        request.on('end', () => {
            const data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
            resolve(data);
        });
    });
}
const router = (req, res) => {
    const json = JSONResponse(res);
    switch(route(req.url, req.method)) {
        case route("/appointments", "GET"):
            json(classes);
            break;
        case route("/appointment", "GET"):
            json({ "status": "OK" });
            break;
        case route("/appointment", "POST"):
            decodeJSON(req).then(r => console.log(r));
            createAppointment(req, res);
            break;
        default:
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.statusMessage = "Resource not found";
            res.end("Resource not found");
    }
}
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    router(req, res);
});

server.listen(PORT);
console.log(`test server listening on ${PORT}`);