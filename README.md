# firedata
---

# Description
Firedata is a json builder that support asynchronous operation. The value of the keys can be scalar, function and promise.

# Requirements
- node v0.12 or newer

# Installation
npm :
```bash
npm install -g firedata
```

manual :
```bash
git clone https://github.com/asacreative/firedata
cd firedata
npm install
npm link
```

# Usage

```
firedata path/to/config.js path/to/output.json
```

# Example

```javascript
(function() {

    'use strict';

    var fs = require('fs')

    var fetch = require('node-fetch')

    var config = {

        users: {

            github: function() {

                return ['user', 'user1', function() {

                    return ['user3', new Promise(function(resolve, reject) {

                        fetch('https://api.github.com/users/asacreative').then(function(res) {

                            return res.json();

                        }).then(function(body) {

                            resolve(body);
                        });
                    })]
                }]
            },

            others: ['user4', 'user5', 'user6'],

            strings: new Promise(function(resolve, reject) {

                setTimeout(function() {

                    resolve(['this is new string', 'another new string', new Promise(function(resolve) {

                        setTimeout(function() {

                            resolve(['123', 321, 125123])

                        }, 2000)

                    })])

                }, 1000)
            }),

            directString: 'this is direct string value'
        }
    }

    module.exports = config;

}).call(this)
```

# Result

```json
{
    "users": {
        "github": ["user", "user1", ["user3", {
            "login": "asacreative",
            "id": 2607052,
            "avatar_url": "https://avatars.githubusercontent.com/u/2607052?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/asacreative",
            "html_url": "https://github.com/asacreative",
            "followers_url": "https://api.github.com/users/asacreative/followers",
            "following_url": "https://api.github.com/users/asacreative/following{/other_user}",
            "gists_url": "https://api.github.com/users/asacreative/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/asacreative/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/asacreative/subscriptions",
            "organizations_url": "https://api.github.com/users/asacreative/orgs",
            "repos_url": "https://api.github.com/users/asacreative/repos",
            "events_url": "https://api.github.com/users/asacreative/events{/privacy}",
            "received_events_url": "https://api.github.com/users/asacreative/received_events",
            "type": "Organization",
            "site_admin": false,
            "name": "Asacreative",
            "company": null,
            "blog": "http://www.nomoring.com",
            "location": "Indonesia",
            "email": "info@asacreative.com",
            "hireable": null,
            "bio": "Saas Startup",
            "public_repos": 1,
            "public_gists": 0,
            "followers": 0,
            "following": 0,
            "created_at": "2012-10-20T15:22:19Z",
            "updated_at": "2015-10-11T12:24:56Z"
        }]],
        "others": ["user4", "user5", "user6"],
        "strings": ["this is new string", "another new string", ["123", 321, 125123]],
        "directString": "this is direct string value"
    }
}
```

all path is relative to current directory

# TODO
- Add more detailed README

# License

MIT
