---
title: Insights Advisor API v1.0.0
language_tabs:
  - go: Go
  - http: HTTP
  - javascript: JavaScript
  - javascript--node: Node.JS
  - python: Python
  - ruby: Ruby
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="insights-advisor-api">Insights Advisor API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The API of the Advisor project in Insights

Base URLs:

* <a href="https://console.redhat.com/">https://console.redhat.com/</a>

* <a href="https://cloud.redhat.com/">https://cloud.redhat.com/</a>

<h1 id="insights-advisor-api-kcs">kcs</h1>

## kcs_list

<a id="opIdkcs_list"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://console.redhat.com/api/insights/v1/kcs/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://console.redhat.com/api/insights/v1/kcs/ HTTP/1.1
Host: console.redhat.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://console.redhat.com/api/insights/v1/kcs/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://console.redhat.com/api/insights/v1/kcs/', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://console.redhat.com/api/insights/v1/kcs/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/insights/v1/kcs/`

Looks for all active rules with KCS solutions

Returns a list of dicts of the C.R.C rule URL and its KCS solution number

<h3 id="kcs_list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_ids|query|array[string]|false|Display the rule urls for the given list of comma separated KCS solution node_ids|

> Example responses

> 200 Response

```json
[
  {
    "rule_url": "http://example.com",
    "node_id": "string"
  }
]
```

<h3 id="kcs_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<h3 id="kcs_list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Kcs](#schemakcs)]|false|none|[Pairings of C.R.C rule URL and its KCS solution number (node_id)]|
|» rule_url|string(uri)|true|none|Rule URL on C.R.C.|
|» node_id|string|true|none|KCS solution number|

<aside class="success">
This operation does not require authentication
</aside>

## kcs_retrieve

<a id="opIdkcs_retrieve"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://console.redhat.com/api/insights/v1/kcs/{node_id}/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://console.redhat.com/api/insights/v1/kcs/{node_id}/ HTTP/1.1
Host: console.redhat.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://console.redhat.com/api/insights/v1/kcs/{node_id}/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://console.redhat.com/api/insights/v1/kcs/{node_id}/', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://console.redhat.com/api/insights/v1/kcs/{node_id}/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/insights/v1/kcs/{node_id}/`

Gets active rule(s) for a particular KCS solution (node_id)

Returns a list of C.R.C rule url(s) for that KCS solution

<h3 id="kcs_retrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "http://example.com"
]
```

<h3 id="kcs_retrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<h3 id="kcs_retrieve-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="insights-advisor-api-rulecategory">rulecategory</h1>

## rulecategory_list

<a id="opIdrulecategory_list"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://console.redhat.com/api/insights/v1/rulecategory/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://console.redhat.com/api/insights/v1/rulecategory/ HTTP/1.1
Host: console.redhat.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://console.redhat.com/api/insights/v1/rulecategory/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://console.redhat.com/api/insights/v1/rulecategory/', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://console.redhat.com/api/insights/v1/rulecategory/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/insights/v1/rulecategory/`

Rules are divided into categories, the usual being Availability,
Stability, Security and Performance.

Categories are listed in decreasing order of importance.

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="rulecategory_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<h3 id="rulecategory_list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RuleCategory](#schemarulecategory)]|false|none|none|
|» id|integer|true|read-only|none|
|» name|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## rulecategory_retrieve

<a id="opIdrulecategory_retrieve"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://console.redhat.com/api/insights/v1/rulecategory/{id}/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://console.redhat.com/api/insights/v1/rulecategory/{id}/ HTTP/1.1
Host: console.redhat.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://console.redhat.com/api/insights/v1/rulecategory/{id}/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://console.redhat.com/api/insights/v1/rulecategory/{id}/', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://console.redhat.com/api/insights/v1/rulecategory/{id}/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/insights/v1/rulecategory/{id}/`

Rules are divided into categories, the usual being Availability,
Stability, Security and Performance.

Categories are listed in decreasing order of importance.

<h3 id="rulecategory_retrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this rule category.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string"
}
```

<h3 id="rulecategory_retrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[RuleCategory](#schemarulecategory)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="insights-advisor-api-status">status</h1>

## status_retrieve

<a id="opIdstatus_retrieve"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://console.redhat.com/api/insights/v1/status/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://console.redhat.com/api/insights/v1/status/ HTTP/1.1
Host: console.redhat.com

```

```javascript

fetch('https://console.redhat.com/api/insights/v1/status/',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests

r = requests.get('https://console.redhat.com/api/insights/v1/status/')

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'https://console.redhat.com/api/insights/v1/status/',
  params: {
  }

p JSON.parse(result)

```

`GET /api/insights/v1/status/`

Provide a simple list of URLs contained here.

A list of statistics views.

<h3 id="status_retrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|No response body|None|

<aside class="success">
This operation does not require authentication
</aside>

## status_live_retrieve

<a id="opIdstatus_live_retrieve"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://console.redhat.com/api/insights/v1/status/live/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://console.redhat.com/api/insights/v1/status/live/ HTTP/1.1
Host: console.redhat.com

```

```javascript

fetch('https://console.redhat.com/api/insights/v1/status/live/',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests

r = requests.get('https://console.redhat.com/api/insights/v1/status/live/')

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'https://console.redhat.com/api/insights/v1/status/live/',
  params: {
  }

p JSON.parse(result)

```

`GET /api/insights/v1/status/live/`

Is the Advisor API live and serving requests?

This returns a dictionary with properties defining the status of the
components Advisor relies on.

At the moment this is the same as the Readiness check (see `/ready/`).
In the future it may include other checks if we need to, but the
properties of `/ready/` will always be included.

<h3 id="status_live_retrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|No response body|None|

<aside class="success">
This operation does not require authentication
</aside>

## status_ready_retrieve

<a id="opIdstatus_ready_retrieve"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://console.redhat.com/api/insights/v1/status/ready/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://console.redhat.com/api/insights/v1/status/ready/ HTTP/1.1
Host: console.redhat.com

```

```javascript

fetch('https://console.redhat.com/api/insights/v1/status/ready/',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests

r = requests.get('https://console.redhat.com/api/insights/v1/status/ready/')

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'https://console.redhat.com/api/insights/v1/status/ready/',
  params: {
  }

p JSON.parse(result)

```

`GET /api/insights/v1/status/ready/`

Is the Advisor API ready to serve requests?

This returns a dictionary with properties defining the status of the
components Advisor relies on.

* 'django' should always be True.  If Django isn't ready, you can't
  get this information :-)
* 'database' is True when a database access returns successfully with
  valid information.
* 'rbac' is True when we can make a request to the RBAC API and get
  a valid response.
* 'advisor' is True if all of the above are True.

<h3 id="status_ready_retrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|No response body|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="insights-advisor-api-systemtype">systemtype</h1>

## systemtype_list

<a id="opIdsystemtype_list"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://console.redhat.com/api/insights/v1/systemtype/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://console.redhat.com/api/insights/v1/systemtype/ HTTP/1.1
Host: console.redhat.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://console.redhat.com/api/insights/v1/systemtype/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://console.redhat.com/api/insights/v1/systemtype/', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://console.redhat.com/api/insights/v1/systemtype/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/insights/v1/systemtype/`

*List all system types*

List all system types by role and product code

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "role": "string",
    "product_code": "string"
  }
]
```

<h3 id="systemtype_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<h3 id="systemtype_list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SystemType](#schemasystemtype)]|false|none|[RHN-based system types classified by role and product code.]|
|» id|integer|true|read-only|none|
|» role|string|true|none|none|
|» product_code|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## systemtype_retrieve

<a id="opIdsystemtype_retrieve"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://console.redhat.com/api/insights/v1/systemtype/{id}/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://console.redhat.com/api/insights/v1/systemtype/{id}/ HTTP/1.1
Host: console.redhat.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://console.redhat.com/api/insights/v1/systemtype/{id}/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://console.redhat.com/api/insights/v1/systemtype/{id}/', headers = headers)

print(r.json())

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://console.redhat.com/api/insights/v1/systemtype/{id}/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /api/insights/v1/systemtype/{id}/`

*Retrieve a system type*

Retrieve details of a single system type

<h3 id="systemtype_retrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this system type.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "role": "string",
  "product_code": "string"
}
```

<h3 id="systemtype_retrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[SystemType](#schemasystemtype)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Kcs">Kcs</h2>
<!-- backwards compatibility -->
<a id="schemakcs"></a>
<a id="schema_Kcs"></a>
<a id="tocSkcs"></a>
<a id="tocskcs"></a>

```json
{
  "rule_url": "http://example.com",
  "node_id": "string"
}

```

Pairings of C.R.C rule URL and its KCS solution number (node_id)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule_url|string(uri)|true|none|Rule URL on C.R.C.|
|node_id|string|true|none|KCS solution number|

<h2 id="tocS_RuleCategory">RuleCategory</h2>
<!-- backwards compatibility -->
<a id="schemarulecategory"></a>
<a id="schema_RuleCategory"></a>
<a id="tocSrulecategory"></a>
<a id="tocsrulecategory"></a>

```json
{
  "id": 0,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|name|string|true|none|none|

<h2 id="tocS_SystemType">SystemType</h2>
<!-- backwards compatibility -->
<a id="schemasystemtype"></a>
<a id="schema_SystemType"></a>
<a id="tocSsystemtype"></a>
<a id="tocssystemtype"></a>

```json
{
  "id": 0,
  "role": "string",
  "product_code": "string"
}

```

RHN-based system types classified by role and product code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|read-only|none|
|role|string|true|none|none|
|product_code|string|true|none|none|

