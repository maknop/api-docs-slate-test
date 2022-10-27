# Advisor

## account_setting

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
    response, err := http.Get("https://console.redhat.com/api/insights/v1/account_setting/")

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

x = requests.get('https://console.redhat.com/api/insights/v1/account_setting/')
```

This endpoint lists all benchmarks.

### HTTP Request

`GET /api/insights/v1/account_setting/`

### Query Parameters

[
  {
    "show_satellite_hosts": true
  }
]

<aside class="success">
Example success!
</aside>
