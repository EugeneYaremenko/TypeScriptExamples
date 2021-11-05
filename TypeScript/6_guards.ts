function sttrip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }

  return x.trim();
}

class MyResponse {
  header = "response header";
  result = "responce result";
}

class MyError {
  header = "error header";
  message = "error message";
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  }

  return {
    info: res.header + res.message,
  };
}

// ============================================

type AlertType = "seccess" | "danger" | "warning";

function setAlertType(type: AlertType) {
  // ...
}

setAlertType("seccess");
setAlertType("warning");

// setAlertType("default"); -- err
