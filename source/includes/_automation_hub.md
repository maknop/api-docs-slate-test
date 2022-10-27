# Automation Hub

## Ansible: Collections

> To authorize, use this code:

```go
package main

import (
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
    "os"
)

func main() {
    response, err := http.Get("https://console.redhat.com/api/automation-hub/pulp/api/v3/ansible/collections/")

    if err != nil {
        fmt.Print(err.Error())
        os.Exit(1)
    }

    responseData, err := ioutil.ReadAll(response.Body)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(string(responseData))

}
```

```python
import requests

x = requests.get('https://console.redhat.com/api/automation-hub/pulp/api/v3/ansible/collections/')
```

Upload a collection.

### HTTP Request

`POST /ansible/collections/`

### Query Parameters

No parameters

<aside class="success">
Example success!
</aside>

List collections.

### HTTP Request

`GET /api/automation-hub/pulp/api/v3/ansible/collections/`

### Query Parameters

No parameters

<aside class="success">
Example success!
</aside>

Inspect a collection

### HTTP Request

`GET /api/automation-hub/pulp/api/v3/ansible/collections/{pulp_id}/`

### Query Parameters

No parameters

<aside class="success">
Example success!
</aside>

## Api: Automation-Hub

> To authorize, use this code:

```go
package main

import (
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
    "os"
)

func main() {
    response, err := http.Get("https://console.redhat.com/api/automation-hub/")

    if err != nil {
        fmt.Print(err.Error())
        os.Exit(1)
    }

    responseData, err := ioutil.ReadAll(response.Body)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(string(responseData))

}
```

```python
import requests

x = requests.get('https://console.redhat.com/api/automation-hub/')
```

Inspect a collection

### HTTP Request

`GET /api/automation-hub/`

### Query Parameters

No parameters

<aside class="success">
Example success!
</aside>