{
    "data": {
        "success": true,
        "completedNumber": 16,
        "outstandingNumber": 14,
        "outstandingTask": [
            {
                "_id": "61954754394edb5f102df95b",
                "category": "server maintainence",
                "startDate": "2021-10-02T02:11:06.000Z",
                "location": "CT",
                "details": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
                "createdBy": "61929c2c4520585983dfa68a",
                "urgent": true,
                "status": "pending",
                "endDate": "2021-11-06T17:09:00.000Z"
            },
            {
                "_id": "61954754394edb5f102df956",
                "category": "error handling",
                "startDate": "2021-10-02T20:14:38.000Z",
                "location": "PACS",
                "details": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
                "createdBy": "61929c2c4520585983dfa68a",
                "urgent": true,
                "status": "pending",
                "endDate": "2021-11-20T13:24:43.000Z"
            },
            {
                "_id": "61954754394edb5f102df968",
                "category": "it support",
                "startDate": "2021-10-05T08:52:49.000Z",
                "location": "Reporting",
                "details": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
                "createdBy": "6194634167fd606bec1ed100",
                "urgent": true,
                "status": "pending",
                "endDate": "2021-11-12T10:39:46.000Z"
            },
            {
                "_id": "61954754394edb5f102df95a",
                "category": "export local film",
                "startDate": "2021-10-12T20:31:51.000Z",
                "location": "CT",
                "details": "Aenean lectus. Pellentesque eget nunc.",
                "createdBy": "61929c2c4520585983dfa68a",
                "urgent": true,
                "status": "pending",
                "endDate": "2021-11-08T07:53:48.000Z"
            },
            {
                "_id": "61954754394edb5f102df96e",
                "category": "server maintainence",
                "startDate": "2021-10-12T21:50:54.000Z",
                "location": "MRI",
                "details": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
                "createdBy": "6194631d67fd606bec1ed0fc",
                "urgent": true,
                "status": "pending",
                "endDate": "2021-11-20T08:32:39.000Z"
            }
        ],
        "user": {
            "_id": "61945f5467fd606bec1ed0f5",
            "username": "admin",
            "name": "hkchadmin",
            "email": "hkch@gmail.com",
            "role": "admin"
        }
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "1988",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "withCredentials": true,
        "method": "get",
        "url": "https://backend-productivity.herokuapp.com/tasks/api/get-home"
    },
    "request": {}
}