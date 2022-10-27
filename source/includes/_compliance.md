# Compliance

## Benchmarks

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
    response, err := http.Get("https://console.redhat.com/api/compliance/benchmarks/")

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

x = requests.get('https://console.redhat.com/api/compliance/benchmarks/')
```

This endpoint lists all benchmarks.

### HTTP Request

`GET /api/compliance/benchmarks`

### Query Parameters

EXAMPLE

<aside class="success">
Example success!
</aside>

This endpoint retrieves a specific benchmark.

### HTTP Request

`GET /api/compliance/benchmarks/{id}`

### Query Parameters

EXAMPLE

<aside class="success">
Example success!
</aside>

## Business Objective

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
    response, err := http.Get("https://console.redhat.com/api/compliance/business_objectives/")

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

x = requests.get('https://console.redhat.com/api/compliance/business_objectives/:id')
```

This endpoint lists all business_objectives.

### HTTP Request

`GET /api/compliance/business_objectives/`

### Query Parameters

EXAMPLE

<aside class="success">
Example success!
</aside>

This endpoint retrieves a specific business_objective.

### HTTP Request

`GET /api/compliance/benchmarks/{id}`

### Query Parameters

EXAMPLE

<aside class="success">
Example success!
</aside>